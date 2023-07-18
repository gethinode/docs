---
title: Modules
description: Customize and extend Hinode with Hugo modules.
date: 2023-07-18
layout: docs
---

{{< release version="v0.16.0" >}}

Hinode fully supports [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. By default, Hinode includes core building blocks for [Bootstrap]({{< param "links.bootstrap" >}}), [FlexSearch]({{< param "links.flexsearch" >}}), and [Font Awesome]({{< param "links.fontawesome" >}}). The following paragraphs explain how to customize the module configuration.

<!-- TODO: work in progress -->

## Importing modules

Adjust the `module` section in your site's configuration file `config/_default/hugo.toml` to import the required modules. Visit the Hugo documentation to [review all available configuration settings]({{< param "links.hugo_module_config" >}}).

<!-- TODO: link to config file -->

```toml
[module]
  [[module.imports]]
    path = "github.com/gethinode/mod-bootstrap"
  [[module.imports]]
    path = "github.com/gethinode/mod-flexsearch"
  [[module.imports]]
    path = "github.com/gethinode/mod-fontawesome"
  [[module.imports]]
    path = "github.com/gethinode/mod-leaflet"
```

## Configuring modules

You can choose to either fully integrate compatible modules or to include them on a page-by-page basis. For example, you might only want to display an interactive map on a few pages. In this case, you could chose to include the `leaflet` module on a opt-in basis. This ensures the page size is minimized. On the other hand, as `bootstrap` is used on every single page, it makes sense to include it as a core module.

For code modules, Hinode bundles the provided [stylesheet files]({{< relref "styles" >}}) and [JavaScript files]({{< relref "scripts" >}}) into the main stylesheet and main script file. For optional modules, Hinode parepares seperate stylesheet files and JavaScript files for each individual module. The configuration order of the core modules is important: the first module is processed before the next modules. 

{{< alert color="info" >}}
Hugo uses two different algorithms to merge the filesystems, depending on the file type:

 - For i18n and data files, Hugo merges deeply using the translation ID and data key inside the files.
 - For static, layouts (templates), and archetypes files, these are merged on file level. So the left-most file will be chosen.
{{< /alert>}}

Adjust the `modules` section in your site's parameter configuration file `config/_default/params.toml` to configure the various modules. Modules can include files for each of the following folders: `archetypes`, `assets`, `content`, `data`, `i18n`, `layouts`, `static`. Modules can also have their own configuration files. Each module needs to be imported as well ([see the previous paragraph]({{< relref "#configuring-modules" >}})).

The following table provides an overview of the available settings. Omit the `mod-` prefix of the module's name.

{{< table >}}
| Setting     | Default       | Description |
|-------------|---------------|-------------|
| core        | ["bootstrap", "flexsearch", "fontawesome"] | Core modules to be fully integrated with the Hinode site, including stylesheets and Javascript bundles. The modules are processed in order of priority, with the first module taking precedence. |
| optional    | ["leaflet"]   | Optional modules to be included by Hinode. Enable each module in the frontmatter of a page. |
| excludeSCSS | ["bootstrap"] | Core modules to exclude from the stylesheet processing pipeline. Include the required source files in the main `app.scss` instead to have more finegrained control. |
{{< /table >}}

<!-- TODO: link to config file -->

Hinode uses the following module configuration by default:

```toml
[modules]
    core = ["bootstrap", "flexsearch", "fontawesome"]
    optional = ["leaflet"]
    excludeSCSS = ["bootstrap"]
```

## Enabling optional modules

You can enable an optional module for a specific page by setting the following value in the page's frontmatter:

```yml
---
modules: ["leaflet"]
---
```
