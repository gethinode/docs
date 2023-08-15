---
title: Scripts
description: Automatically bundle local and external JavaScript files into a single file.
date: 2023-08-03
layout: docs
---

Hinode bundles local JavaScript files and JavaScript files defined in a core module into a single file. By utilizing [Hugo modules]({{< ref "overview" >}}), external JavaScript files are automatically ingested and kept up to date.

## Build pipeline

Hinodes uses Hugo modules and mounted folders to create a flexible virtual file system that is automatically kept up to date. Review the [overview]({{< ref "overview" >}}) for a detailed explanation. The build pipeline of the JavaScript files consists of four steps.

1. **Mount the JavaScript files maintained within the core modules**

   Make JavaScripts defined in core modules available by mounting them into a seperate `assets/js/modules/{MODULE NAME}/` folder for each module. Adjust the mount points in `config/_default/hugo.toml` as needed.

2. **Add the local JavaScript files**

   Add the local JavaScript files to the `assets/js` folder with a recognizable filename.

3. **Bundle the JavaScript files**

   The partial `partials/footer/scripts.html` bundles all files that end with `.js` recursively into a single file called `js/main.bundle.js`. The files are processed in the order of the configured core modules and are sorted alphabetically within each module. JavaScript files defined in the current repository are added last, sorted alphabetically too. In production mode, the bundled output is minified and linked to with a {{< link hugo_fingerprint >}}fingerprint{{< /link >}}.

4. **Link to the JavaScript in the base layout**

   Hinode's base layout `layouts/_default/baseof.html` imports the bundled JavaScript file in the footer. The file is cached to improve performance.

## Critical files

Hinode considers all files placed in the `assets/js/critical` folder as critical during page load. These files are bundled into the file `js/critical.bundle.js` and are included at the top of the page (right below the opening `<body>` tag). This ensures the browser processes these critical resources before rendering the initial site. By default, Hinode defines the JavaScript to toggle the site's [color mode]({{< relref "color-modes" >}}) as a critical resource to reduce screen flickering. The snippet below illustrates the page skeleton to include critical scripts as defined in `layouts/_default/baseof.html`.

```go-html-template
[...]

<!doctype html>
<html lang="{{ .Site.Language.Lang }}" class="no-js">
    <head>
        {{ block "head" . }}{{ end -}}
    </head>

    <body>
        {{- if site.Params.main.enableDarkMode -}}
            {{- partial "footer/scripts.html" (dict 
               "filename" "js/critical.bundle.js" 
               "match" "js/critical/**.js" 
               "page" .) 
            -}}
        {{- end -}}

        [...]
    </body>
</html>
```

## Optional module files

Hinode bundles the JavaScript files that are part of an optional module into a single file for each module. The input files are expected to be mounted to `assets/js/modules/{MODULE NAME}/`. The base layout `layouts/_default/baseof.html` includes these optional bundle files in order of their configuration. By default, the scripts are loaded after the main bundle,  right above the closing `</body>` tag.
