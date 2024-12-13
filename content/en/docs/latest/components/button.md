---
author: Mark Dumay
title: Button
date: 2023-12-29
description: Use the button shortcode to display a button with a hyperlink.
layout: docs
icon: fa hand-pointer
tags: component
---

## Overview

Use the `button` shortcode to display a button with a hyperlink. The inner content is used as button title. The button supports an optional badge and tooltip. As an example, the following shortcode displays a tooltip for a dark button with a badge.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" badge="99+" */>}}
    Inbox
{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="button" group="shortcode" >}}

## Examples

### Stateful buttons

Set the `state` argument to change the appearance and behavior of the button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" state="enabled" */>}}Enabled{{</* /button */>}}
{{</* button color="primary" href="#!" state="disabled" */>}}Disabled{{</* /button */>}}
{{</* button color="primary" href="#!" state="active" */>}}Active{{</* /button */>}}
{{</* button color="primary" href="#!" state="inactive" */>}}Inactive{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Sized buttons

Set the `size` argument to resize the button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" */>}}sm{{</* /button */>}}
{{</* button color="primary" href="#!" size="md" */>}}md{{</* /button */>}}
{{</* button color="primary" href="#!" size="lg" */>}}lg{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Colored buttons

Set the `color` argument to define the background color with a matching title color.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" */>}}primary{{</* /button */>}}
{{</* button color="secondary" href="#!" size="sm" */>}}secondary{{</* /button */>}}
{{</* button color="success" href="#!" size="sm" */>}}success{{</* /button */>}}
{{</* button color="danger" href="#!" size="sm" */>}}danger{{</* /button */>}}
{{</* button color="warning" href="#!" size="sm" */>}}warning{{</* /button */>}}
{{</* button color="info" href="#!" size="sm" */>}}info{{</* /button */>}}
{{</* button color="light" href="#!" size="sm" */>}}light{{</* /button */>}}
{{</* button color="dark" href="#!" size="sm" */>}}dark{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Buttons with a badge

Set the `badge` argument to add a badge to the top right of the button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="secondary" href="#!" badge="99+" */>}}
    Inbox
{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Buttons with an icon

Set the `icon` argument to add an icon to the button. Use `order` to determine the position of the icon relative to the title. Omit the title to show an icon only.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button icon="fab linkedin" cue=false order="first" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false order="last" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" href="https://linkedin.com" /*/>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

Use `justify` to adjust the layout of the icon and button title.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="start" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="end" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="center" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="between" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="around" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}

{{</* button icon="fab linkedin" cue=false class="col-12 col-sm-8 col-md-4 offset-sm-2 offset-md-4" justify="evenly" href="https://linkedin.com" >}}LinkedIn{{< /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Outlined buttons

Set the `outline` argument to `true` to adjust the style of the button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" outline="true" */>}}primary{{</* /button */>}}

{{</* button color="secondary" href="#!" size="sm" outline="true" */>}}secondary{{</* /button */>}}

{{</* button color="success" href="#!" size="sm" outline="true" */>}}success{{</* /button */>}}

{{</* button color="danger" href="#!" size="sm" outline="true" */>}}danger{{</* /button */>}}

{{</* button color="warning" href="#!" size="sm" outline="true" */>}}warning{{</* /button */>}}

{{</* button color="info" href="#!" size="sm" outline="true" */>}}info{{</* /button */>}}

{{</* button color="light" href="#!" size="sm" outline="true" */>}}light{{</* /button */>}}

{{</* button color="dark" href="#!" size="sm" outline="true" */>}}dark{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Buttons with a tooltip

Set the `tooltip` argument in conjunction with `placement` to show a tooltip when hovering over the button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" placement="top" */>}}
    top
{{</* /button */>}}

{{</* button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" placement="bottom" */>}}
    bottom
{{</* /button */>}}

{{</* button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" placement="left" */>}}
    left
{{</* /button */>}}

{{</* button color="secondary" tooltip="Click on the inbox to view your unread messages" href="#!" placement="right" */>}}
    right
{{</* /button */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Buttons with a collapsible panel

Reveal or hide a collapsible panel by linking the panel's `id` to the button with the argument `collapse`.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button color="secondary" collapse="collapse-1" */>}}
    Collapse
{{</* /button */>}}

{{</* collapse id="collapse-1" class="p-3 border rounded" */>}}
    Some placeholder content for the collapse component. This panel is *hidden by default* but
    revealed when the user activates the relevant trigger.
{{</* /collapse */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
