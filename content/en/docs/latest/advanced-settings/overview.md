---
title: Overview
description: Configure and customize Hinode to your liking using modules, npm, and mounted folders.
date: 2023-07-19
aliases:
  - "/docs/advanced-settings/"
  - "/advanced-settings/"
layout: docs
---

As a theme for Hugo, Hinode is highly configurable and customizable. Hinode utilizes [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. In addition, Hinode supports [npm]({{< param "links.npm" >}}) to automate several tasks related to development and deployment. The below paragraphs explain the key concepts.

## Hugo modules

Hinode fully supports [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. These modules provide one or more of the seven component types defined in Hugo: `static`, `content`, `layouts`, `data`, `assets`, `i18n`, and `archetypes`. Powered by Go modules, Hugo verifies if a module is up-to-date and downloads the latest release if needed. This approach is compatible with any repository hosted on GitHub and is not exclusive to Hugo modules only.

{{< alert color="info" >}}
Hugo does have some requirements for the modules to work correctly in all scenarios. Review the [module development troubleshooting section]({{< relref "module-development#troubleshooting" >}}) to familiarize yourself with them.
{{< /alert >}}

Hinode uses Hugo modules to provide a flexible and extensible modular framework. Modules can be fully integrated into the main site or be included on a page-by-page basis. Core modules are fully integrated with the site's stylesheet and bundled JavaScript files. The stylesheet and scripts of optional modules are loaded on a specific page only to minimize overhead. Refer to the [modules]({{< relref "../configuration/modules" >}}) section for more details.

## Mounted folders

Hugo supports the [mounting of folders]({{< param "links.hugo_mounts" >}}) since version 0.56.0. Hinode takes advantage of this feature to create a virtual file system, combining assets from multiple sources. Many of the predefined Hinode modules use mounted folders to expose relevant content and to standardize the folder structure. Take a look at the configuration of [Hinode's Bootstrap module]({{< param "links.repository_mod_bootstrap" >}}). The configuration uses the repository `github.com/twbs/bootstrap` as module source and exposes the SCSS files and bundled JavaScript file. These files are combined with the module's own files defined in the `assets` folder.

{{< alert color="primary" >}}
    When you add a mount, the default mount for the concerned target root is ignored: be sure to explicitly add it.
{{< /alert >}}

```toml
[module]
  [[module.mounts]]
    source = 'assets'
    target = 'assets'
  [[module.imports]]
    path = "github.com/twbs/bootstrap"
  [[module.imports.mounts]]
    source = "dist/js"
    target = "assets/js/modules/bootstrap"
    includeFiles = "*.bundle.js"
  [[module.imports.mounts]]
    source = "scss"
    target = "assets/scss/modules/bootstrap"
```

## npm packages

Hinode supports npm packages in addition to Hugo modules. These packages provide scripts to automate several tasks related to testing and deployment. Several Hinode modules use npm behind the scenes to tacke some of the constraints of Hugo modules (see [module development]({{< relref "module-development" >}}) for more details). Both the [main theme]({{< param "links.repository" >}}) and [template]({{< param "links.repository_template" >}}) packages of Hinode are defined in the file `package.json` in the repository root. The extract below defines the key elements of the package configuration. The `name` is a unique identifier to identify the [package on npm]({{< param "links.package_npm" >}}). The `version` tag uses [semantic versioning]({{< param "links.semver" >}}), consisting of a `MAJOR` version, `MINOR` version, and `PATCH` version.

The other two sections of interest are `devDependencies` and `otherDependencies`. As an Hugo theme, Hinode does not require any packages in production. However, Hinode defines several scripts that simplify or automate several tasks, such as linting, testing, and purging of stylesheets. The Hugo binary is installed as version-controlled dependency too. This ensures the build process is transparent and traceable, which simplifies debugging. Please refer to the [commands]({{< relref "commands" >}}) section to review the various npm commands available.

```yml
{
    "name": "@gethinode/hinode",
    "version": "0.16.0",
    "scripts": {
        [...]
        "lint:markdown": "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    },
    [...]
    "devDependencies": {
        [...]
        "hugo-bin": "^0.111.0",
        "markdownlint-cli2": "^0.8.1",
    },
    "hugo-bin": {
        "buildTags": "extended"
    }
}
```
