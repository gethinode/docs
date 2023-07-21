---
title: Modules
description: Customize and extend Hinode with Hugo modules.
date: 2023-07-21
layout: docs
---

{{< release version="v0.16.0-beta" >}}

Hinode fully supports [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. By default, Hinode includes core building blocks for [Bootstrap]({{< param "links.bootstrap" >}}), [FlexSearch]({{< param "links.flexsearch" >}}), and [Font Awesome]({{< param "links.fontawesome" >}}). The following paragraphs explain how to customize the module configuration.

## Importing modules

By default, the Hinode template imports Hinode as module itself. In this approach, the modules that Hinode includes are imported as transitive modules. Adjust the `module` section in your site's configuration file `config/_default/hugo.toml` to import or adjust the required modules. Visit the Hugo documentation to [review all available configuration settings]({{< param "links.hugo_module_config" >}}). You can [disable individual modules]({{< param "links.hugo_module_config_import" >}}) by setting `disable` to `true`.

```toml
  [[module.imports]]
    path = "github.com/gethinode/hinode"
```

The main repository of Hinode imports the following modules by default.

{{< docs name="modules" file="config/_default/hugo.toml" >}}

## Configuring modules

You can choose to either fully integrate compatible modules or to include them on a page-by-page basis. For example, you might only want to display an interactive map on a few pages. In this case, you could choose to include the `leaflet` module on an opt-in basis. This ensures the page size is minimized. On the other hand, as `bootstrap` is used on every single page, it makes sense to include it as a core module.

For core modules, Hinode bundles the provided [stylesheet files]({{< relref "styles" >}}) and [JavaScript files]({{< relref "scripts" >}}) into the main stylesheet and main script file. For optional modules, Hinode parepares seperate stylesheet files and JavaScript files for each individual module. The configuration order of the core modules is important: **the first module is processed before the next modules**.

{{< alert color="info" >}}
Hugo uses two different algorithms to merge the filesystems, depending on the file type:

- For i18n and data files, Hugo merges deeply using the translation ID and data key inside the files.
- For static, layouts (templates), and archetypes files, these are merged on file level. So the left-most file will be chosen.
{{< /alert>}}

Adjust the `modules` section in your site's parameter configuration file `config/_default/params.toml` to configure the various modules. Modules can include files for each of the following folders: `archetypes`, `assets`, `content`, `data`, `i18n`, `layouts`, `static`. Modules can also have their own configuration files. Each module needs to be imported as well ([see the previous paragraph]({{< relref "#configuring-modules" >}})).

The following table provides an overview of the available settings. Omit the `mod-` prefix of the module's name.

{{< table >}}
| Setting         | Default       | Description |
|-----------------|---------------|-------------|
| core            | ["bootstrap", "flexsearch", "fontawesome"] | Core modules to be fully integrated with the Hinode site, including stylesheets and Javascript bundles. The modules are processed in order of priority, with the first module taking precedence. |
| optional        | ["leaflet"]   | Optional modules to be included by Hinode. Enable each module in the frontmatter of a page. |
| excludeSCSS     | ["bootstrap"] | Disables [processing as Hugo templates]({{< param "links.hugo_resource_from_template">}}) of JavaScript files. |
| disableTemplate | ["katex"]     | Scripts file within optional modules to exclude from processing as Hugo template. The scripts are bundled as-is instead. |
{{< /table >}}

Hinode uses the following module configuration by default:

{{< docs name="modules" file="config/_default/params.toml" >}}

## Enabling optional modules

You can enable an optional module for a specific page by setting the following value in the page's frontmatter:

```yml
---
modules: ["leaflet"]
---
```
