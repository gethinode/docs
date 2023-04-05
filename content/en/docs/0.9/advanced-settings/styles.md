---
title: Styles
description: Use extensible Sass files to generate the stylesheets for your website.
date: 2023-03-15
layout: docs
---

<!-- TODO: include dartsass -->

Hinode uses Sass files to take advantage of variables, maps, and functions to generate the cascading style sheets of the website. By utilizing [npm]({{< ref "overview" >}}), Bootstrap's source Sass file are automatically ingested and kept up to date.

## Build pipeline

{{< alert >}}
Currently Hinode relies on the libsass transpiler, which is [deprecated in favor of Dart Sass]({{< param "links.hugo_sass" >}}). Hinode will switch to the new transpilier once a cross-platform solution is available.
{{< /alert >}}

Hinodes uses npm and mounted folders to create a flexibile virtual file system that is automatically kept up to date. Review the [overview]({{< ref "overview" >}}) for a detailed explanation. The build pipeline of the stylesheet consists of six steps.

1. Initialize the Sass variables

   Hugo [v0.109.0]({{< param "links.hugo_release_v0_109_0" >}}) introduced a convenient way to [initialize Sass variables from your templates]({{< param "links.hugo_vars" >}}). Hinode initializes several variables in the file `layouts/partials/head/stylesheet.html`. For example, the primary theme color is available as `$primary`.

2. Define the Sass entrypoint

   The main entrypoint for the Sass files is defined in `assets/scss/app.scss`. It supports Hugo templating. For example, the snippet below conditionally imports font face definitions when using a local font path.

   ```go-html-template
   {{ if (not (hasPrefix (lower site.Params.style.themeFontPath) "http")) }}
      @import "theme/fonts.scss";
   {{ end }}
   ```

3. Import the source Sass files

   The application entrypoint imports the various source Sass files defined in `assets/scss`, which are combined with the Sass files of [Bootstrap]({{< param "links.bootstrap" >}}) and [Font Awesome (Free)]({{< param "links.fontawesome" >}}). The vendor paths are relative to the `node_modules` folder, which are installed by [npm]({{< ref "commands" >}}).

4. Override and expand the Sass configuration

   The import order of the source files defines which variables and functions to use. In Sass, the first definition of a variable or function takes precedence. For example, to override the setting for the variable `$primary`, is needs to be defined prior to Bootstrap's definition in `_variables.scss`.

5. Transpile the Sass files

   The partial `partials/head/stylesheet.html` reads the application entrypoint, configures the `node_modules` folder as import path, and transpiles the stylesheet into a single file `main.css`. In production mode, the output is minified and linked to with a [fingerprint]({{< param "links.hugo_fingerprint" >}}).

6. Link to the stylesheet in the base layout

   Hinode's base layout `layouts/_default/baseof.html` imports the generated stylesheet in the header section of the webpage via the partial `layouts/partials/head/head.html`.

## Example

The below Sass file defines a skeleton configuration for the main entrypoint. The full configuration is defined in `assets/scss/app.scss`.

```scss
// 1) Define template variables (linking to Hugo config)
@import "hugo:vars";

// 2) Include default variable overrides
@import "common/variables.scss";

// 3) Import Bootstrap configuration
@import "bootstrap/scss/variables";

// 4) Import Bootstrap layout & components
@import "bootstrap/scss/root";

// 5) Import Font Awesome
@import "@fortawesome/fontawesome-free/scss/fontawesome";

// 6) Import Hinode theme styles
@import "components/blockquote.scss";

// 7) Import custom theme fonts and styles
@import "theme/fonts.scss";
@import "theme/theme.scss";
```
