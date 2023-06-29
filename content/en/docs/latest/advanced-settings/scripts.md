---
title: Scripts
description: Automatically bundle local and external JavaScript files into a single file.
date: 2023-04-08
layout: docs
---

Hinode bundles local and external JavaScript into a single file. By utilizing [npm]({{< ref "overview" >}}), external JavaScript files are automatically ingested and kept up to date.

## Build pipeline

Hinodes uses npm and mounted folders to create a flexibile virtual file system that is automatically kept up to date. Review the [overview]({{< ref "overview" >}}) for a detailed explanation. The build pipeline of the JavaScript files consists of four steps.

1. **Add the local JavaScript files**

   Add the local JavaScript files to the `assets/js` folder with a recognizable filename.

2. **Mount the JavaScript files maintained within a node package**

   Make JavaScripts defined in node packages available by mounting them into the `assets/js/vendor` folder. Define the mount points in `config/_default/hugo.toml`.

3. **Bundle the JavaScript files**

   The partial `partials/footer/scripts.html` bundles all files that end with `.js` recursively into a single file called `js/main.bundle.js`. In production mode, the output is minified and linked to with a [fingerprint]({{< param "links.hugo_fingerprint" >}}).

4. **Link to the JavaScript in the base layout**

   Hinode's base layout `layouts/_default/baseof.html` imports the bundled JavaScript file in the footer. The file is cached to improve performance.

## Critical files

Hinode considers all files placed in the `assets/js/critical` folder as critical during page load. These files are bundled into the file `js/critical.bundle.js` and are included at the top of the page (right below the `<body>` tag). This ensures the browser processes these critical resources before rendering the initial site. By default, Hinode defines the JavaScript to toggle the site's [color mode]({{< relref "color-modes" >}}) as a critical resource to reduce screen flickering. The snippet below illustrates the page skeleton to include critical scripts as defined in `layouts/_default/baseof.html`.

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

## Example

Mount the external JavaScript files to Hugo's virtual file system within the file `config/_default/hugo.toml`. The current configuration imports the relevant files of [Bootstrap]({{< param "links.bootstrap" >}}) and [FlexSearch]({{< param "links.flexsearch" >}}).

{{< docs name="javascript" file="config/_default/hugo.toml" >}}
