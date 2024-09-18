---
title: Cookie consent (alpha release)
description: Configure cookie consent to comply with regulatory requirements.
date: 2024-09-18
layout: docs
---

> [!IMPORTANT]
> The materials on this website are purely informative and represent a personal view; they do not constitute legal or other professional advice. Consult your professional adviser for legal or other advice.

{{< release version="v0.27.0-alpha8" >}}

> [!CAUTION]
> The support for cookie consent is still in alpha-stage of development by the Hinode team. As a result, the implementation is subject to change.

Regulations such as GDPR (in the EU and UK) and CCPA/CPRA (California) require consent from users about the use of cookies. Without prior consent, the website should refrain from storing or accessing any cookies, unless they are absolutely essential. Site owners should also be able to share proof of the consents (consent logging) on request of the authorities. Lastly, certain countries put restrictions on where to physically store the consent logs.

Since release {{< release version="v0.27.0-alpha8" short="true" type="link" >}} Hinode provides support to simplify the integration with cookie consent managers. Cookie consent management itself is not offered by Hinode, but should be relatively easy to implement by integrating with a third-party solution. Review the next paragraphs to familiarize yourself with the available options and configurations.

## Categorizing scripts

Although the laws and regulations specifically mention cookies, strictly speaking, it are the scripts that actually create and interact with cookies. Assigning a Hinode script (or a script bundle) to a specific category informs users about their intent

### Available categories

> [!IMPORTANT]
> The available categories and their descriptions are used for illustrative purposes only. It is the responsibility of the site administrator to assign scripts to the correct category.

Hinodes supports the following categorization of cookies:

- **necessary** - Necessary cookies are linked to the site's essential features, which include secure log-in and customizable consent settings. There is no personally identifying information stored by these cookies.
- **functional** - Functional cookies facilitate the performance of specific tasks, such as gathering user comments, disseminating the website's content on social media, and enabling additional third-party capabilities. Hinode uses functional cookies to store the user's preferred language and theme.
- **analytics** - Cookies with analytical functions are employed to comprehend how users engage with the website. These cookies aid in the provision of data on metrics like number of visitors, bounce rate, source of traffic, etc. Hinode provides a module to integrate with Google Analytics out of the box.
- **performance** - In order to provide users with a better user experience, performance cookies are employed to comprehend and evaluate the website's important performance indicators.
- **advertisement** - Advertisement cookies are used to track the success of ad campaigns and show users personalized advertisements depending on the pages they have previously viewed.
- **other** - Unassigned cookies are categorized as `other` by default. Any cookies used by these scripts should be reviewed and assigned to a specific category by the site administrator.

### Assigning categories to Hinode modules

Hinodes uses {{< link modules >}}modules{{< /link >}} to include features and functionality as needed. This reduces overhead and improves performance. By assigning a module to an available category, all of the scripts contained within that module are linked to the specified intent. The following example shows the default configuration of the Google Analytics module. You can override these settings in your site's parameters.

```toml
[params.modules.GoogleAnalytics]
  integration = "core"
  state = "async"
  category = "analytics"
```

### Understanding the naming conventions

You can include modules on all pages or include them on specific pages only. For example, {{< link bootstrap >}}Bootstrap{{< /link >}} is a module that is required by all pages. On the other hand, the {{< link leaflet >}}Leaflet{{< /link >}} module is only required when displaying an interactive map. The module's scripts are often loaded lazily to improve the site performance. They are included at the bottom of the rendered HTML page. Hinode also includes several scripts that impact the user's experience. These scripts initialize the preferred theme and language and are critical for the initial rendering. As such, these critical scripts are included in the page's header.

Hinode uses the following naming conventions for each type of script:

- **critical** - Scripts that reside in site's `assets/js/critical` folder are bundled into a single file called `/js/critical.bundle.min.js`.
- **core** - Core modules are bundled by category. The filename uses the category name as suffix. When the category is `other`, the suffix is omitted. Localized modules (such as FlexSearch) trigger a language code extension.
- **optional** - Optional modules are bundled by their module name and optional category. Similar to core modules, optional modules can also receive a language code extension.

The following example illustrates the files as used by the {{< link "hinode_demo_components" >}}components page on the demo site{{< /link >}}. This page loads {{< link leaflet >}}Leaflet{{< /link >}}, {{< link lottie >}}Lottie{{< /link >}}, and {{< link simple_datatables >}}Simple Datatables{{< /link >}} as optional modules. It inludes {{< link google_analytics >}}Google Analytics{{< /link >}} as core module assigned to the `analytics` category. The integrity hashes have been omitted for clarity.

```html
<!doctype html>
<html lang=en class=no-js>
  <head>
    <script src=/js/critical.bundle.min.js></script>
  </head>

  <body>
    [...]
    <script src=/js/core.bundle-analytics.en.min.js data-category=analytics async></script>
    <script src=/js/core.bundle.en.min.js async></script>
    <script src=/js/leaflet.min.js></script>
    <script src=/js/lottie.min.js></script>
    <script src=/js/simple-datatables.js async></script>
  </body>
</html>
```

## Using a template to include scripts

Hinode includes a partial template to render the script references. It is invoked for each generated script bundle (see the {{< link "#understanding-the-naming-conventions" >}}previous section{{< /link >}}). You can use the template to customize the script references. The following variables are available within the template as such:

{{< args structure="script" >}}

Hinode includes a basic script template in `layouts/partials/templates/script.html`. It includes the following code:

{{< file path="./_vendor/github.com/gethinode/hinode/layouts/partials/templates/script.html" full="false" >}}

You can modify this template to your needs. For example, {{< link "cookieyes_script_code" >}}CookieYes supports a custom attribute{{< /link >}} called `data-cookieyes` to categorize the referenced script. You could modify the template to include this custom attribute:

```html {hl_lines=[4]}
[...]

<script src="{{ $args.link }}"
    {{- with $category }} data-cookieyes="cookieyes-{{ . }}"{{ end -}}
    {{- with $args.integrity }}integrity="{{ . }}" crossorigin="anonymous"{{ end }}
    {{- with $args.state }} {{ . | safeHTMLAttr }}{{ end -}}>
</script>
```

## Using API calls

> [!NOTE]
> This code is being implemented and will be released soon.
