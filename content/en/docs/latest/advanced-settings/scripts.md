---
title: Scripts
description: Bundle local and external JavaScript files by intent and rendering impact.
date: 2023-10-21
layout: docs
---

> [!IMPORTANT]
> Hinode release {{< release version="v0.27.0" short="true" type="link" >}} has overhauled the build pipeline of scripts and modules. The bundled files now support categorization by intent.

Hinodes bundles JavaScript files to optimize the page loading speed. By utilizing [Hugo modules]({{% ref "overview" %}}), referenced JavaScript files are automatically ingested and version controlled. Since release {{< release version="v0.27.0" short="true" type="link" >}}, Hinode also supports the grouping of scripts by their intent. Review the next sections to familiarize yourself with the build system.

## Types of integrations

Hinodes recognizes three types of integrations for JavaScript files. You can mount these files directly into Hugo's virtual file system, or use modules instead.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< accordion class="accordion-theme accordion-flush" >}}
   {{< accordion-item header="Critical" >}}
      Critical scripts are loaded immediately as part of the page header. The included scripts are considered vital for the initial page to render correctly and are blocking. For example, Hinode includes a script to toggle the site's [color mode]({{% relref "color-modes" %}}). It should be loaded before the page is being displayed to reduce screen flickering.
   {{< /accordion-item >}}
   {{< accordion-item header="Core" >}}
      Core scripts offer functionality that is used throughout the entire site. An example is the {{</* link bootstrap >}}Bootstrap{{< /link */>}} framework, which includes various scripts to provide interactive {{</* abbr UI */>}} elements. Core scripts are lazily loaded as part of the page's body to improve the initial page loading.
  {{< /accordion-item >}}
  {{< accordion-item header="Optional" >}}
      Optional scripts are only included on the pages that require them. An example is the {{</* link leaflet >}}Leaflet{{< /link */>}} module, that renders an interactive map. Optional scripts are lazily loaded similarly to core scripts, unless specified otherwise.
  {{< /accordion-item >}}
{{< /accordion >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Available script categories

In addition to their integration type, you can also bundle scripts by their intent category. You can use this intent category in combination with a {{< link "docs/configuration/cookie-consent" >}}cookie consent manager{{< /link >}} to dynamically load scripts in compliance with privacy regulations. Hinodes supports the following categories. Refer to the {{< link "docs/configuration/cookie-consent#available-categories" >}}cookie consent categories{{< /link >}} for more details.

- necessary
- functional
- analytics
- performance
- advertisement
- other

## Naming conventions

Hinode uses the following naming conventions for each type of script:

| Integration | Basename | Description |
|-----------------|-----------------------------------|-------------|
| **critical** | `critical.bundle` | Critical scripts are bundled by intent category. The target bundle's filename uses `critical.bundle` as basename and the category name as suffix. When the category is `other`, the suffix is omitted. Localized modules trigger a language code extension. |
| **core** | `core.bundle` | Core scripts are bundled similarly as critical scripts. The target bundle's filename uses `core.bundle` as basename. |
| **optional** | `<module name>` | Scripts that are part of an optional module are bundled by their module name and optional category. Similar to core scripts, optional scripts bundles can also receive a language code extension. |

## Integration approaches

Hinodes supports three types of integration approaches. The next paragraphs describe the available approaches in detail.

### JavaScript files

The main Hinode repository includes several scripts maintained within the `assets/js` folder. You can add (or mount) your own scripts to this folder to include them in the build pipeline. Hinode supports the following directories relative to the `assets` mount point:

| Category        | Match (glob pattern)              | Target bundle |
|-----------------|-----------------------------------|-------------|
| `other`         | `js/critical/*.js`                | `/js/critical.bundle.js` |
| `functional`    | `js/critical/functional/**.js`    | `/js/critical.bundle-functional.js` |
| `analytics`     | `js/critical/analytics/**.js`     | `/js/critical.bundle-analytics.js` |
| `performance`   | `js/critical/performance/**.js`   | `/js/critical.bundle-performance.js` |
| `advertisement` | `js/critical/advertisement/**.js` | `/js/critical.bundle-advertisement.js` |
| `core`          | `{js/*.js,js/vendor/**.js}`       | `/js/core.bundle.js` |

### Scripts embedded within a module

> [!NOTE]
> Review the {{< link "module-development" >}}module development guidelines{{< /link >}} to see the detailed mounting requirements for the scripts embedded in a module.

Hinodes uses {{< link "docs/configuration/modules/" >}}modules{{< /link >}} to include features and functionality as needed. This reduces overhead and improves performance. Each module provides a default integration configuration. You can override these settings in your site's parameters. The following example illustrates the default configuration of the {{< link google_analytics >}}Google Analytics{{< /link >}} module. Refer to the {{< link "docs/configuration/modules/#configuring-modules" >}}module configuration {{< /link >}} to see the available settings and values.

```toml
[params.modules.GoogleAnalytics]
  integration = "core"
  state = "async"
  category = "analytics"
```

### External scripts

> [!CAUTION]
> In general, you are encouraged to embed external scripts within a module. This ensures the scripts are bundled together and are version controlled. Only use external links when absolute necessary.

You can also reference an external script by including its url in the module configuration. These external scripts are not bundled but included as reference instead. The module for {{< link cookieyes >}}CookieYes{{< /link >}} uses the following configuration to ensure the cookie script is always loaded first:

```toml
[params.modules.cookieyes]
    integration = "critical"
    url = "https://cdn-cookieyes.com/client_data/{ID redacted}/script.js"
```

## Rendering example

The following example illustrates the files as used by the {{< link "hinode_demo_components" >}}components page on the demo site{{< /link >}}. The integrity hashes have been omitted for clarity.

1. The page implements cookie consent management by {{< link cookieyes >}}CookieYes{{< /link >}} as critical module using an external url.
2. Next, two critical script bundles are included. These scripts use the match patterns `js/critical/functional/**.js` and `js/critical/*.js` respectively.
3. In this example, no core external URLs are used, however, they would be added first in the final part of the page body.
4. Instead, two core bundles are included. The file `js/core.bundle-analytics.en.min.js` uses the script defined in the {{< link google_analytics >}}Google Analytics{{< /link >}} module. The other core file uses a mix of core modules (such as {{< link bootstrap >}}Bootstrap{{< /link >}}, {{< link flexsearch >}}FlexSearch{{< /link >}}, and {{< link fontawesome >}}Font Awesome{{< /link >}}) and scripts defined in the `assets/js` folder (without nesting).
5. Lastly, the page loads {{< link leaflet >}}Leaflet{{< /link >}}, {{< link lottie >}}Lottie{{< /link >}}, and {{< link simple_datatables >}}Simple Datatables{{< /link >}} as optional modules.

```html {hl_lines=[4,7,16,18,22]}
<!doctype html>
<html lang=en class=no-js>
  <head>
    1) External, critical URLs are referenced first
    <script src="https://cdn-cookieyes.com/client_data/{ID redacted}/script.js"></script>

    2) Critical bundle files are included next
    <script src="/js/critical.bundle-functional.js" data-category="functional"></script>
    <script src="/js/critical.bundle.js"></script>
    [...]
  </head>

  <body>
    [...]

    3) External, core URLs are referenced here (N/A in this example)

    4) Core bundle files are referenced near the body closing tag
    <script src=/js/core.bundle-analytics.en.min.js data-category="analytics" async></script>
    <script src=/js/core.bundle.en.min.js async></script>

    5) Optional module file are referenced last
    <script src=/js/leaflet.min.js></script>
    <script src=/js/lottie.min.js></script>
    <script src=/js/simple-datatables.js async></script>
  </body>
</html>
```
