---
author: Mark Dumay
title: Spinner
date: 2023-08-03
description: Use the spinner shortcode to indicate the loading state of a component or page.
layout: docs
icon: fas spinner
tags: component
---

## Overview

{{< alert type="info" >}}
The animation effect of this component is dependent on the `prefers-reduced-motion` media query. See the reduced motion section of {{</* link bs_reduced_motion >}}Bootstrap's accessibility documentation{{< /link */>}}.
{{< /alert >}}

Use the `spinner` shortcode to indicate the loading state of a component or page. The inner content is used as alternative description. As an example, the following shortcode displays a centered spinner.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* spinner color="info" class="text-center" */>}}
Loading...
{{</* /spinner */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| color       | No  | Optional theme color of the spinner, either "primary" (default), "secondary", "success", "danger", "warning", "info", "light", "dark", "white" or "black". |
| grow        | No  | Optional flag to indicate the spinner is growing instead of rotating, defaults to false. |
| class       | No  | Optional class attribute of the spinner wrapping element, e.g. “text-center”. |
{{< /table >}}

## Examples

Change the style of your spinner with shortcode arguments.

### Colored spinner

Set the `color` argument to apply a theme color to the spinner. The following shortcodes display a centered spinner for each available color.

<!-- markdownlint-disable MD037 -->
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
<!-- markdownlint-enable MD037 -->

### Growing spinner

Set `grow` to `true` to show a growing spinner.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* spinner grow="true" color="info" class="text-center" */>}}
Loading...
{{</* /spinner */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->
