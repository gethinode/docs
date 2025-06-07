---
title: Modules
description: Customize and extend Hinode with Hugo modules.
date: 2025-01-20
layout: docs
---

{{< release version="v0.16.0" >}}

Hinode supports {{< link hugo_modules >}}Hugo modules{{< /link >}} to provide a flexible and extensible modular framework. By default, Hinode includes core building blocks for {{< link bootstrap >}}Bootstrap{{< /link >}}, {{< link flexsearch >}}FlexSearch{{< /link >}}, and {{< link fontawesome >}}Font Awesome{{< /link >}}. The following paragraphs explain how to customize the module configuration.

## Importing modules

By default, the Hinode template imports Hinode as module itself. In this approach, the modules that Hinode includes are imported as transitive modules. Adjust the `module` section in your site's configuration file `config/_default/hugo.toml` to import or adjust the required modules. Visit the Hugo documentation to {{< link hugo_module_config >}}review all available configuration settings{{< /link >}}. You can {{< link hugo_module_config_import >}}disable individual modules{{< /link >}} by setting `disable` to `true`.

```toml
  [[module.imports]]
    path = "github.com/gethinode/hinode"
```

The main repository of Hinode imports the following modules by default.

{{< docs name="modules" file="config/_default/hugo.toml" >}}

## Configuring modules

> [!NOTE]
Hinode uses the default configuration defined in each referenced module since release {{< release version="v0.24.0" short="true" type="link" >}}. You can override these settings in your site parameters.

You can choose to either fully integrate compatible modules or to include them on a page-by-page basis. For example, you might only want to display an interactive map on a few pages. In this case, you could choose to include the `leaflet` module on an opt-in basis. This ensures the page size is minimized. On the other hand, as `bootstrap` is used on every single page, it makes sense to include it as a core module.

For core modules, Hinode bundles the provided [stylesheet files]({{% relref "styles" %}}) and [JavaScript files]({{% relref "scripts" %}}) into the main stylesheet and core script bundles. For optional modules, Hinode prepares separate stylesheet files and JavaScript files for each individual module. The configuration order of the core modules is important: **the first module is processed before the next modules**.

> [!NOTE]
> Hugo uses two different algorithms to merge the filesystems, depending on the file type:
>
> - For `i18n` and `data` files, Hugo merges deeply using the translation ID and data key inside the files.
> - For `static`, `layouts` (templates), and `archetypes` files, these are merged on file level, so the left-most file will be chosen.

Adjust the `modules` section in your site's parameter configuration file `config/_default/params.toml` to configure the various modules. Modules can include files for each of the following folders: `archetypes`, `assets`, `content`, `data`, `i18n`, `layouts`, `static`. Modules can also have their own configuration files. Each module needs to be imported as well ([see the previous paragraph]({{% relref "#configuring-modules" %}})).

{{< release version="v0.24.0" >}}

The following table provides an overview of the available settings for each module. Omit the `mod-` prefix of the module's name.

<!-- markdownlint-disable MD037 MD058 -->
{{< table wrap=true >}}
| Setting         | Default       | Description |
|-----------------|---------------|-------------|
| `integration`     | optional      | Module integration, either `core` or `optional`. Core modules are fully integrated with the Hinode site, including stylesheets and Javascript bundles. The modules are processed in order of priority, with the first module taking precedence. Optional modules are only included on those pages that reference the module in the frontmatter. Hinode includes the following core modules by default: ["bootstrap", "flexsearch", "fontawesome"]. |
| `excludeSCSS`     | false | Excludes the module from the stylesheet processing pipeline. Use this setting to get more control of when and where to include the module's stylesheet. For example, the Bootstrap stylesheet is imported by the main stylesheet after initializing the theme variables, but before the custom component styles. |
| `disableTemplate` | false         | Excludes all scripts files from processing as Hugo template. The scripts are bundled as-is instead. This only applies to optional modules. |
| `localize`        | false         | {{</* release version="v0.25.0" short="true" size="sm" inline="true" */>}} Triggers the creation of a language-specific bundle file. The language code is appended as suffix to the base name. For example, the English version of `js/main.bundle.js` becomes `js/main.bundle.en.js`. |
| `category`        | other         | {{</* release version="v0.27.0" short="true" size="sm" inline="true" */>}} Assigns the module's scripts to a category used for cookie consent. Available values are `necessary`, `functional`, `analytics`, `performance`, `advertisement`, and `other`. See {{</* link "cookie-consent" /*/>}} for more details. |
| `local`          | false         | {{</* release version="v0.27.0" short="true" size="sm" inline="true" */>}} Includes an external URL in local mode too. By default, external scripts are only included in the built site. |
| `url`             |               | {{</* release version="0.27.0" short="true" size="sm" inline="true" */>}} Optional url for an external link. If set, the link is included in the page header or page body, pending `integration` type. See the {{</* link "/docs/advanced-settings/scripts" >}}scripts documentation{{< /link */>}} for more information. |
{{< /table >}}

<!-- markdownlint-disable MD037 MD058 -->

For example, Bootstrap uses the following configuration in its module configuration:

```toml
[params.modules.bootstrap]
  integration = "core"
  excludeSCSS = true
```

## Configuring module-specific extensions

Several modules support additional, module-specific configurations. Review them in the next paragraphs.

### Clarity

> [!WARNING]
> This module assumes you have properly configured a Cookie Consent Manager. The Clarity script is assigned to the category `analytics`. Cookie consent is automatically given when this script is loaded. Do not load this script without explicit consent from the user. See the [Hinode docs](docs/configuration/cookie-consent/) for more details.

This module supports the following parameters (see the section `params.modules` in `config.toml`):

{{< table wrap=true >}}
| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| `clarity.id`              |         | Tracking code of Microsoft Clarity (see {{</* link clarity_code >}}installation instructions{{< /link */>}})
| `clarity.force`           | false   | Trigger to force include the analytics scripts, bypassing other settings. Use this setting for debugging and testing only. |
{{< /table >}}

### CookieYes

{{< release version="v0.27.0" >}}

The `cookieyes` module requires the following settings:

{{< table wrap=true >}}
| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| `cookieyes.local`         | false   | Trigger to force include the CookieYes scripts, bypassing other settings. Use this setting for debugging and testing only. |
| `cookieyes.url`           |         | Link to your personalized CookieYes script. See the installation code in the advanced settings of your CookieYes account. The code is available by clicking the button next to the cookie banner status. The link has the following pattern: `https://cdn-cookieyes.com/client_data/{installation code}/script.js`. |
{{< /table  >}}

### Font Awesome

{{< release version="v0.17.0" >}}

The `fontawesome` module supports the following additional settings:

<!-- markdownlint-disable MD037 MD058 -->
{{< table wrap=true >}}
| Setting                 | Default | Description |
|-------------------------|---------|-------------|
| `fontawesome.embed`       | true    | {{</* release version="v0.26.3" short="true" size="sm" inline="true" */>}} If set, generates a symbol map with embedded vector images. Only works in conjunction with `inline`. Include the symbol map with the partial `assets/symbols.html` (requires the current page context). |
| `fontawesome.inline`      | true    | If set, uses inline vector images instead of web fonts. Both methods support Font Awesome styling and animation. However, when using vector images you cannot use aliases. Instead, use the default name of the icon. |
| `fontawesome.debug`       | true    | If set, prints the original code `<i class="[...]" style=[...]></i>` as comments next to the inline vector image. |
| `fontawesome.skipMissing` | false   | If set, displays a warning when an icon cannot be found. The missing icon is replaced with a dummy. By default, Hinode exits with an error when an icon is missing. |
{{< /table >}}
<!-- markdownlint-enable MD037 MD058 -->

### Google Analytics

{{< release version="v0.27.0" >}}

> [!NOTE]
> By convention, Hinode uses kebab case as naming convention for module names. However, the module name in the site parameters is renamed to `GoogleAnalytics` to align with Hugo's privacy settings.

Set you `G-tag` in your site configuration (usually `hugo.toml`) in the following section:

```toml
[services]
  [services.googleAnalytics]
    ID = "G-xxxxxxxxxx"
```

You can modify the privacy configuration in the following section:

```toml
[privacy]
  [privacy.googleAnalytics]
    disable = false
    respectDoNotTrack = false
```

The `google-analytics` module supports the following additional settings:

<!-- markdownlint-disable MD058 -->
{{< table wrap=true >}}
| Setting                   | Default | Description |
|---------------------------|---------|-------------|
| `GoogleAnalytics.force`   | false   | Trigger to force include the analytics scripts, bypassing other settings. Use this setting for debugging and testing only. |
{{< /table >}}
<!-- markdownlint-enable MD058 -->

### Utils

{{< release version="v0.22.5" >}}

The `utils` module supports the following additional settings:

<!-- markdownlint-disable MD058 -->
{{< table wrap=true >}}
| Setting           | Default | Description |
|-------------------|---------|-------------|
| `utils.filter`    | `[^0-9A-Za-zŽžÀ-ÿ ;.,\/'’"]` | Defines the regular expression for characters to remove from page descriptions. These page descriptions are used to define card content and metadata for search indexes. Adjust the filter to define which characters to support. You may need to adjust these settings to support specific diacritical letters. |
| `utils.raw`       | false | Flag to indicate page descriptions should be returned as-is. In this setting, the filter is ignored. |
{{< /table >}}
<!-- markdownlint-enable MD058 -->

## Enabling optional modules

You can enable an optional module for a specific page by setting the following value in the page's frontmatter:

```yml
---
modules: ["leaflet"]
---
```
