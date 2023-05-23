---
author: Mark Dumay
title: Navbar
date: 2023-05-23
description: Use the navbar shortcode to display a navigation header with a toggler.
layout: docs
icon: fas bars
tags: component
---

## Overview

Use the `navbar` shortcode to display a navigation header with a toggler. The menu items are derived from the site's configuration, which defaults to the menus defined under `main`. Nested items are supported at one-level depth. The navigation bar includes a search area and a language switcher if applicable. The items in the navigation header are accentuated if the current page or any of its descendants is active. As an example, the following shortcode displays a navigation header with a body color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-overview" path="credits" color="body" size="md" search="false" menus="sample" title="Brand" mode="false" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument  | Required | Description |
|-----------|----------|-------------|
| path      | Yes | Required path of the active page. |
| menus     | No  | Optional name of the menu configuration, defaults to "main". |
| size      | No  | Optional breakpoint of the navbar toggler, either "xs", "sm", "md" (default), "lg", or "xl". |
| color     | No  | Optional background color of the navbar, either "primary", "secondary", "success", "danger", "warning", "info", "white", "black", "body", or "body-tertiary". Set the color to "body" or "body-tertiary" for the navbar to respond to [color mode]({{< param "links.bs_color" >}}) changes (e.g. switching between dark and light). The navigation bar is transparent when no color is set, but is set to the body color when scrolling to enhance the contrast. |
| mode      | No  | Optional flag to include a color mode switcher, default is "true" (if [dark mode]({{< relref "layout#extended-configuration">}}) is enabled). |
| search    | No  | Optional flag to include a search input, defaults to the parameter "search" set in the "navigation" section of the [site's parameter configuration]({{< relref "navigation" >}}). |
| logo      | No  | Optional address of the logo image, defaults to the parameter "logo" set in the "navigation" section of the [site's parameter configuration]({{< relref "navigation" >}}). |
| title     | No  | Optional brand title, displayed when the logo is not set. Defaults to the site's title. |
{{< /table >}}

## Examples

Change the style of your navbar with shortcode arguments.

### Brand text and logo

Set the argument `logo` to an image to add a brand logo to the left of the navbar. The logo moves to the center on smaller screens, pending on the `size` setting.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-logo" logo="/img/logo_icon.svg" path="credits" color="body" size="md" search="false" menus="sample" mode="false" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Set the argument `title` to add a brand text to the left of the navbar. The text moves to the center on smaller screens, pending on the `size` setting.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-title" title="Brand" path="credits" color="body" size="md" search="false" menus="sample" mode="false" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Colored navbar

{{< alert >}}
<strong>New in v0.14.1 -</strong> To improve color-mode compatibility, the colors `dark` and `light` are no longer supported. Use the adaptive colors `body` and `body-tertiary` instead, or apply a static `white` or `black` color.

---

<strong>New in v0.14.1 -</strong> The background colors `white` and `black` use `data-bs-theme` to fix the text color. This setting requires [dark mode]({{< relref "layout#extended-configuration">}}) to be enabled.
{{< /alert >}}

Set the `color` argument to define the background color with a matching title color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
<div class="mb-3">{{</* navbar id="navbar-color-1" path="credits" color="primary" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-2" path="credits" color="secondary" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-3" path="credits" color="success" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-4" path="credits" color="danger" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-5" path="credits" color="warning" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-6" path="credits" color="info" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-7" path="credits" color="white" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-8" path="credits" color="black" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-9" path="credits" color="body" size="sm" search="false" menus="sample" mode="false" */>}}</div>
<div class="mb-3">{{</* navbar id="navbar-color-10" path="credits" color="body-tertiary" size="sm" search="false" menus="sample" mode="false" */>}}</div>
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Search input

Set the argument `search` to `true` to enable search input.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-search-1" search="true" path="credits" color="body" size="md" menus="sample" mode="false" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Set the argument `search` to `false` to disable search input.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-search-2" search="false" path="credits" color="body" size="md" menus="sample" mode="false" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Mode switcher

{{< alert >}}
This setting requires [dark mode]({{< relref "layout#extended-configuration">}}) to be enabled.
{{< /alert >}}

Set the argument `mode` to `true` to enable the mode switcher.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-mode-1" mode="true" search="false" path="credits" color="body" size="md" menus="sample" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Set the argument `mode` to `false` to disable the mode switcher.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-mode-2" mode="false" search="false" path="credits" color="body" size="md" menus="sample" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Remarks

See the [navigation documentation]({{< relref "navigation" >}}) for additional configuration options.
