---
author: Mark Dumay
title: Navbar
date: 2024-08-14
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

{{< args structure="navbar" group="shortcode" >}}

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

> [!IMPORTANT]
> To improve color-mode compatibility, the colors `dark` and `light` are no longer supported since {{< release version="v0.14.1" short="true" type="link" >}}. Use the adaptive colors `body` and `body-tertiary` instead, or apply a static `white` or `black` color. The background colors `white` and `black` use `data-bs-theme` to fix the text color. This setting requires [dark mode]({{% relref "layout#extended-configuration" %}}) to be enabled.

Set the `color` argument to define the background color with a matching title color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* navbar id="navbar-color-1" path="credits" color="primary" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-2" path="credits" color="secondary" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-3" path="credits" color="success" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-4" path="credits" color="danger" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-5" path="credits" color="warning" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-6" path="credits" color="info" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-7" path="credits" color="white" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-8" path="credits" color="black" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-9" path="credits" color="body" size="sm" search="false" menus="sample" mode="false" */>}}
{.mb-3}

{{</* navbar id="navbar-color-10" path="credits" color="body-tertiary" size="sm" search="false" menus="sample" mode="false" */>}}
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

> [!IMPORTANT]
> The mode switcher requires [dark mode]({{% relref "layout#extended-configuration" %}}) to be enabled.

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

See the [navigation documentation]({{% relref "navigation" %}}) for additional configuration options.
