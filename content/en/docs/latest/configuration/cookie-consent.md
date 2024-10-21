---
title: Cookie consent
description: Configure cookie consent to comply with regulatory requirements.
date: 2024-10-21
layout: docs
---

{{< release version="v0.27.0" >}}

> [!IMPORTANT]
> The materials on this website are purely informative and represent a personal view; they do not constitute legal or other professional advice. Consult your professional adviser for legal or other advice.

Regulations such as GDPR (in the EU and UK) and CCPA/CPRA (California) require consent from users about the use of cookies. Without prior consent, the website should refrain from storing or accessing any cookies, unless they are absolutely essential. Site owners should also be able to share proof of the consents (consent logging) on request of the authorities. Lastly, certain countries put restrictions on where to geographically store the consent logs.

Since release {{< release version="v0.27.0" short="true" type="link" >}} Hinode provides support to simplify the integration with cookie consent managers. Cookie consent management itself is not offered by Hinode, but should be relatively easy to implement by integrating with a third-party solution using the pointers in this section. Review the next paragraphs to familiarize yourself with the available options and configurations.

## Categorizing scripts

> [!IMPORTANT]
> The available categories and their descriptions are used for illustrative purposes only. It is the responsibility of the site administrator to assign scripts to the correct category.

Modern websites typically use a combination of local storage, session storage, and cookies to collect and store data. Although the various laws and regulations are commonly referred to as cookie law, the legislation is applicable to all kinds of technologies that enable data collection and processing. In practice, we should look into the scripts that interact with these data storages. Assigning a Hinode script (or a script bundle) to a specific category informs users about their intent. Hinodes supports the following categorization of scripts and their intent:

<!-- markdownlint-disable MD037 -->
{{< accordion class="accordion-theme accordion-flush" >}}
  {{< accordion-item header="necessary" >}}
    Necessary cookies are linked to the site's essential features, which include secure log-in and customizable consent settings. There is no personally identifying information stored by these cookies.
  {{< /accordion-item >}}
  {{< accordion-item header="functional" >}}
    Functional cookies facilitate the performance of specific tasks, such as gathering user comments, disseminating the website's content on social media, and enabling additional third-party capabilities. Hinode uses functional cookies to store the user's preferred language and theme.
  {{< /accordion-item >}}
  {{< accordion-item header="analytics" >}}
    Cookies with analytical functions are employed to comprehend how users engage with the website. These cookies aid in the provision of data on metrics like number of visitors, bounce rate, source of traffic, etc. Hinode provides a module to integrate with {{</* link google_analytics >}}Google Analytics{{< /link */>}} out of the box.
  {{< /accordion-item >}}
  {{< accordion-item header="performance" >}}
    In order to provide users with a better user experience, performance cookies are employed to comprehend and evaluate the website's important performance indicators.
  {{< /accordion-item >}}
  {{< accordion-item header="advertisement" >}}
    Advertisement cookies are used to track the success of ad campaigns and show users personalized advertisements depending on the pages they have previously viewed.
  {{< /accordion-item >}}
  {{< accordion-item header="other" >}}
    Unassigned scripts are categorized as `other` by default. Any cookies used by these scripts should be reviewed and assigned to a specific category by the site administrator. Hinode also assigns scripts to this category that do not necessarily interact with cookies at all.
  {{< /accordion-item >}}
{{< /accordion >}}
<!-- markdownlint-enable MD037 -->

## Assigning scripts to a category

Hinodes uses {{< link modules >}}modules{{< /link >}} to include features and functionality as needed. This reduces overhead and improves performance. By assigning a module to an available category, all of the scripts contained within that module are linked to the specified intent. The following example shows the default configuration of the {{< link google_analytics >}}Google Analytics{{< /link >}} module. You can override these settings in your site's parameters.

```toml
[params.modules.GoogleAnalytics]
  integration = "core"
  state = "async"
  category = "analytics"
```

You can also assign regular scripts and external scripts to an intent category. See the {{< link "docs/advanced-settings/scripts" >}}script integration approaches{{< /link >}} for more details.

## Using a template to include scripts

Hinode includes a partial template to render the script references. It is invoked for each generated script bundle (see the {{< link "#understanding-the-naming-conventions" >}}scripts documentation{{< /link >}} for more details). You can use the template to customize the script references. The following variables are available within the template as such:

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

Hinode uses several scripts to access and store the user's preferences, including the selected theme and language. Instead of assigning an entire script or script bundle to a category, you can also use predefined APIs. These APIs will give you fine-grained control on when to invoke a cookie consent check. Use the `get*` and `set*` functions to interact with the local storage and session storage respectively. The `hasConsent()` function is a placeholder that should be hooked to your cookie consent manager of choice.

The available functions are defined in `/assets/js/critical/_cookie.js`:

{{< file path="./_vendor/github.com/gethinode/hinode/assets/js/critical/_cookie.js" full="false" >}}

Pending your cookie consent configuration, the API functions may not be available at all times. The following code illustrates how to test for the availability of the `getLocalStorage()` function:

```js
if (typeof getLocalStorage === "function") {
  [...]
}
```

## Predefined integrations

> [!IMPORTANT]
> You cannot test the CookieYes integration locally, as CookieYes actively validates the domain name of the host. However, you can set up a staging environment when on a paid plan. See the {{< link cookieyes_staging >}}Staging Mode documentation{{< /link >}} for more details.

Hinode provides a reference implementation to integrate with {{< link "cookieyes" >}}CookieYes{{< /link >}}. CookieYes offers various plans, including a free plan for blogs and personal websites. Once signed up, capture the link to your CookieYes banner script. See the installation code in the advanced settings of your CookieYes account. The code is available by clicking the button next to the cookie banner status. The link has the following pattern:

```math {class="mb-4"}
\texttt{https://cdn-cookieyes.com/client\_data/}

\rlap{$
    \underbrace{
        \phantom{\texttt{installation code}}
    }_{\text{replace this}}
$}

\texttt{installation code/script.js}
```

Include the banner script in your site's parameters, replacing the `{installation code}` with the actual value:

```toml
[modules.cookieyes]
    url = "https://cdn-cookieyes.com/client_data/{installation code}/script.js"
```

Next, include the `mod-cookieyes` in your module configuration. Please ensure `mod-cookieyes` is imported before the `hinode` module to ensure the correct script template is initialized. The following snippet illustrates an example configuration for `hugo.toml`.

```toml
[module]
  [[module.imports]]
    path = "github.com/gethinode/mod-cookieyes/v2"
  [[module.imports]]
    path = "github.com/gethinode/hinode"
```

CookieYes requires several directives to be added to your Content Security Policy. See the {{< link cookieyes_csp >}}policy requirements{{< /link >}} as provided by CookieYes for more details. The directives should be added to your {{< link "docs/advanced-settings/server-headers/" >}}server headers{{< /link >}}.
