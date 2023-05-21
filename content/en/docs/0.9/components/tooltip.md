---
author: Mark Dumay
title: Tooltip
date: 2023-05-21
description: Use the toast shortcode to display a dismissable message in the bottom-right corner of the screen.
layout: docs
icon: fa message
tags: component
---

## Overview

Use the `tooltip` shortcode to display a tooltip for a hyperlink. Refer to the [button]({{< ref "#button" >}} "button") on how to display a tooltip for a button instead. The inner content is used as hyperlink text. As an example, the following shortcode displays a tooltip for a colored hyperlink.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* tooltip color="info" title="Tooltip" href="#!" */>}}
    Tooltip demonstration
{{</* /tooltip */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->


## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| color       | No   | Optional theme color of the element, either "primary" (default), "secondary", "success", "danger",  "warning", "info", "light", or "dark". |
| title       | Yes  | Title to display in the tooltip. |
| href        | Yes  | Address for the button or hyperlink. |
| placement   | No   | How to position the tooltip: "top" (default), "bottom", "left", or "right". |
{{< /table >}}

## Examples

Change the style of your tooltip with shortcode arguments.

### Colored tooltip

Set `color` to adjust the color of the text element to which the tooltip is applied. As an example, the following shortcodes display a tooltip for each available color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* tooltip color="primary" title="Tooltip" href="#!" */>}}Primary{{</* /tooltip */>}}&bull;
{{</* tooltip color="secondary" title="Tooltip" href="#!" */>}}Secondary{{</* /tooltip */>}}&bull;
{{</* tooltip color="success" title="Tooltip" href="#!" */>}}Success{{</* /tooltip */>}}&bull;
{{</* tooltip color="danger" title="Tooltip" href="#!" */>}}Danger{{</* /tooltip */>}}&bull;
{{</* tooltip color="warning" title="Tooltip" href="#!" */>}}Warning{{</* /tooltip */>}}&bull;
{{</* tooltip color="info" title="Tooltip" href="#!" */>}}Info{{</* /tooltip */>}}&bull;
{{</* tooltip color="light" title="Tooltip" href="#!" */>}}Light{{</* /tooltip */>}}&bull;
{{</* tooltip color="dark" title="Tooltip" href="#!" */>}}Dark{{</* /tooltip */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Placement

Set `placement` to adjust the placement of the tooltip.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* tooltip title="Tooltip" href="#!" placement="top" */>}}Top{{</* /tooltip */>}}&bull;
{{</* tooltip title="Tooltip" href="#!" placement="bottom" */>}}Bottom{{</* /tooltip */>}}&bull;
{{</* tooltip title="Tooltip" href="#!" placement="left" */>}}Left{{</* /tooltip */>}}&bull;
{{</* tooltip title="Tooltip" href="#!" placement="right" */>}}Right{{</* /tooltip */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
