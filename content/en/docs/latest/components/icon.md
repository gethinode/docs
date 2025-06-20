---
author: Mark Dumay
title: Icon
date: 2024-08-14
description: Use the icon shortcode to add a Font Awesome icon with ease.
layout: docs
icon: fa font-awesome
tags: component
---

## Overview

{{< release version="v0.8.0" >}}

Use the `icon` shortcode to quickly add a Font Awesome icon to your content. You can also use `fa` for regular icons, `fab` for brand icons, and `fas` for solid icons. As an example, the following shortcodes show a square check, a brand logo, a circle check, and a custom icon.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* icon fa square-check */>}}
{{</* fa square-check */>}}
{{</* fab linkedin */>}}
{{</* fas circle-check */>}}
{{</* icon custom activity */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

> [!IMPORTANT]
> When using [inline vector icons]({{% relref "../configuration/modules#configuring-modules" %}}), be sure to use the main name of the icon. The shortcode **does not recognize the aliases** of the icons and will throw an error or warning. For example, use `{{</* fas house */>}}` instead of `{{</* fas home */>}}` to add a house icon.

The shortcode supports both unnamed arguments and named arguments. When using unnamed arguments, all attributes are mapped to the `class` argument, separated by spaces.

<!-- markdownlint-disable MD037 MD058 -->
| Argument  | Required | Description |
|-----------|----------|-------------|
| class     | Yes | Family, name, and styling of the icon to display. The shortcode expects the following format and order: `{family} {name} {style attributes}`. The shortcode supports the default families of the free version of Font Awesome, including shorthand notation: "fa-solid" ("fas"), "fa-regular" ("fa"), "fa-brands" ("fab"). You can omit the `fa-` prefix of the icon name. Alternatively, you can reference a custom family and icon stored in `assets/svgs/{family}/{icon}.svg`. |
| style     | No | Optional custom style of the icon, e.g. `--fa-animation-duration: 2s;`. Hinode disables inline styles by default, review the [Content Security Policy]({{% relref "server-headers" %}}) for more details. |
| spacing   | No | {{< release version="v0.21.0" short="true" button-size="sm" inline="true" >}} Optional flag to add a trailing whitespace character to optimize inline rendering, defaults to "true". |
<!-- markdownlint-enable MD037 MD058 -->

{{< args structure="icon" group="shortcode" >}}

## Remarks

See the [icons documentation]({{% relref "../content/icons" %}}) in the content section for additional styling options.
