---
author: Mark Dumay
title: Spinner
date: 2023-08-14
description: Use the spinner shortcode to indicate the loading state of a component or page.
layout: docs
icon: fas spinner
tags: component
---

## Overview

> [!IMPORTANT]
> The animation effect of this component depends on the `prefers-reduced-motion` media query. See the reduced motion section of {{< link bs_reduced_motion >}}Bootstrap's accessibility documentation{{< /link >}}.

Use the `spinner` shortcode to indicate the loading state of a component or page. The inner content is used as alternative description. As an example, the following shortcode displays a centered spinner.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* spinner color="info" class="text-center" */>}}
Loading...
{{</* /spinner */>}}
{{< /example>}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="spinner" group="shortcode" >}}

## Examples

Change the style of your spinner with shortcode arguments.

### Colored spinner

Set the `color` argument to apply a theme color to the spinner. The following shortcodes display a centered spinner for each available color.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* spinner color="primary" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="secondary" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="success" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="danger" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="warning" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="info" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="light" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="dark" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="white" */>}}Loading...{{</* /spinner */>}}
{{</* spinner color="black" */>}}Loading...{{</* /spinner */>}}
{{< /example>}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Growing spinner

Set `grow` to `true` to show a growing spinner.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* spinner grow="true" color="info" class="text-center" */>}}
Loading...
{{</* /spinner */>}}
{{< /example>}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
