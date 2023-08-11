---
title: Styles
description: Use extensible Sass files to generate the stylesheets for your website.
date: 2023-08-04
layout: docs
---

<!-- TODO: include dartsass -->

Hinode uses Sass files to take advantage of variables, maps, and functions to generate the cascading style sheets of the website. By utilizing [Hugo modules]({{< ref "overview" >}}), Bootstrap's source Sass file are automatically ingested and kept up to date.

## Build pipeline

<!-- markdownlint-disable MD037 -->
{{< alert type="info" >}}
Currently Hinode relies on the libsass transpiler, which is {{</* link hugo_sass >}}deprecated in favor of Dart Sass{{< /link */>}}. Hinode will switch to the new transpilier once a cross-platform solution is available.
{{< /alert >}}
<!-- markdownlint-enable MD037 -->

Hinodes uses Hugo modules and mounted folders to create a flexible virtual file system that is automatically kept up to date. Review the [overview]({{< ref "overview" >}}) for a detailed explanation. The build pipeline of the stylesheet consists of six steps.

1. **Initialize the Sass variables**

   Hugo {{< link hugo_release_v0_109_0 >}}v0.109.0{{< /link >}} introduced a convenient way to {{< link hugo_vars >}}initialize Sass variables from your templates{{< /link >}}. Hinode initializes several variables in the file `layouts/partials/head/stylesheet.html`. For example, the primary theme color is available as `$primary`.

2. **Define the Sass entrypoint**

   The main entrypoint for the Sass files is defined in `assets/scss/app.scss`. It supports Hugo templating. For example, the snippet below conditionally imports font face definitions when using a local font path.

   ```go-html-template
   {{ if (not (hasPrefix (lower site.Params.style.themeFontPath) "http")) }}
      @import "theme/fonts.scss";
   {{ end }}
   ```

3. **Import the Sass files of core modules**

   Hinode automatically adds the content of each core module's Sass entrypoint to a virtual copy of the `assets/scss/app.scss` file, unless they are referenced in the [excludeSCSS setting]({{< relref "../configuration/modules#configuring-modules" >}}). Hinode expects a file `assets/scss/{MODULE NAME}.scss` for each core module. The referenced files are usually placed in `assets/scss/modules/{MODULE NAME}/`.

4. **Override and expand the Sass configuration**

   The import order of the source files defines which variables and functions to use. In Sass, the first definition of a variable or function takes precedence. For example, to override the setting for the variable `$primary`, is needs to be defined prior to Bootstrap's definition in `_variables.scss`.

5. **Transpile the Sass files**

   The partial `partials/head/stylesheet.html` reads the application entrypoint, configures the `node_modules` folder as import path, and transpiles the stylesheet into a single file `main.css`. In production mode, the output is minified and linked to with a {{< link hugo_fingerprint >}}fingerprint{{< /link >}}.

6. **Link to the stylesheet in the base layout**

   Hinode's base layout `layouts/_default/baseof.html` imports the generated stylesheet in the header section of the webpage via the partial `layouts/partials/head/head.html`.

## Example

The below Sass file defines a skeleton configuration for the main entrypoint. The full configuration is defined in `assets/scss/app.scss`.

```scss
// 1) Define template variables (linking to Hugo config)
@import "hugo:vars";

// 2) Include default variable overrides
@import "common/variables.scss";

// 3) Import Bootstrap configuration (mounted by core Bootstrap module)
@import "bootstrap.scss";

// 4) Import Hinode theme styles
@import "components/blockquote.scss";

// 5) Import custom theme fonts and styles
@import "theme/fonts.scss";
@import "theme/theme.scss";

// 6) Import Bootstrap utilities API (mounted by core Bootstrap module)
@import "modules/bootstrap/utilities/api";

// 7) Import additional modules
// Process stylesheet entrypoints for each configured module (w/o excludeSCSS)
```

## Optional module files

Hinode processes the Sass files that are part of an optional module one at a time. The entrypoint of each module is expected to be found in `assets/scss/{MODULE NAME}.scss`. The transpiled output is included on a page-by-page basis.
