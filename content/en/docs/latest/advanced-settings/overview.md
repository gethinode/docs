---
title: Overview
description: Configure and customize Hinode to your liking using modules, npm, and mounted folders.
date: 2023-08-14
aliases:
  - "/docs/advanced-settings/"
  - "/advanced-settings/"
layout: docs
---

As a theme for Hugo, Hinode is highly configurable and customizable. Hinode utilizes {{< link hugo_modules >}}Hugo modules{{< /link >}} to provide a flexible and extensible modular framework. In addition, Hinode supports {{< link npm >}}npm{{< /link >}} to automate several tasks related to development and deployment. The below paragraphs explain the key concepts.

## Hugo modules

Hinode fully supports {{< link hugo_modules >}}Hugo modules{{< /link >}} to provide a flexible and extensible modular framework. These modules provide one or more of the seven component types defined in Hugo: `static`, `content`, `layouts`, `data`, `assets`, `i18n`, and `archetypes`. Powered by Go modules, Hugo verifies if a module is up-to-date and downloads the latest release if needed. This approach is compatible with any repository hosted on GitHub and is not exclusive to Hugo modules only.

> [!NOTE]
> Hugo has several requirements for the modules to work correctly in all scenarios. Review the [module development troubleshooting section]({{% relref "module-development#troubleshooting" %}}) to familiarize yourself with them.

Hinode uses Hugo modules to provide a flexible and extensible modular framework. Modules can be fully integrated into the main site or be included on a page-by-page basis. Core modules are fully integrated with the site's stylesheet and bundled JavaScript files. The stylesheet and scripts of optional modules are loaded on a specific page only to minimize overhead. Refer to the [modules]({{% relref "../configuration/modules" %}}) section for more details.

## Mounted folders

Hugo supports the {{< link hugo_mounts >}}mounting of folders{{< /link >}} since version 0.56.0. Hinode takes advantage of this feature to create a virtual file system, combining assets from multiple sources. Many of the predefined Hinode modules use mounted folders to expose relevant content and to standardize the folder structure. Take a look at the configuration of {{< link repository_mod_bootstrap >}}Hinode's Bootstrap module{{< /link >}}. The configuration uses the repository `github.com/twbs/bootstrap` as module source and exposes the SCSS files and bundled JavaScript file. These files are combined with the module's own files defined in the `assets` folder.

> [!IMPORTANT]
> When you add a mount, the default mount for the concerned target root is ignored: be sure to explicitly add it.

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

Hinode supports npm packages in addition to Hugo modules. These packages provide scripts to automate several tasks related to testing and deployment. Several Hinode modules use npm behind the scenes to tacke some of the constraints of Hugo modules (see [module development]({{% relref "module-development" %}}) for more details). Both the {{< link repository >}}main theme{{< /link >}} and {{< link repository_template >}}template{{< /link >}} packages of Hinode are defined in the file `package.json` in the repository root. The extract below defines the key elements of the package configuration. The `name` is a unique identifier to identify the {{< link package_npm >}}package on npm{{< /link >}}. The `version` tag uses {{< link semver >}}semantic versioning{{< /link >}}, consisting of a `MAJOR` version, `MINOR` version, and `PATCH` version.

The other two sections of interest are `devDependencies` and `otherDependencies`. As an Hugo theme, Hinode does not require any packages in production. However, Hinode defines several scripts that simplify or automate several tasks, such as linting, testing, and purging of stylesheets. The Hugo binary is installed as version-controlled dependency too. This ensures the build process is transparent and traceable, which simplifies debugging. Please refer to the [commands]({{% relref "commands" %}}) section to review the various npm commands available.

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
