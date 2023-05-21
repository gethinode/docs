---
author: Mark Dumay
title: Button
date: 2023-05-21
description: Use the button shortcode to display a button with a hyperlink.
layout: docs
icon: fa hand-pointer
tags: component
---

## Overview

Use the `button` shortcode to display a button with a hyperlink. The inner content is used as button title. The button supports an optional badge and tooltip. As an example, the following shortcode displays a tooltip for a dark button with a badge.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="dark" tooltip="Click on the inbox to view your unread messages" href="#!" badge="99+" */>}}
    Inbox
{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| href        | No       | Optional address for the button or hyperlink. Automatically assigned when using collapse. |
| relref      | No       | Optional name of the page to link to. Replaces `href` with a relative link if set. |
| state       | No       | Optional state of the button, either "enabled" (default), "disabled", "active", or "inactive". |
| size        | No       | Optional size of the button, either "sm", "md" (default), or "lg". |
| color       | No       | Optional theme color of the element, either "primary" (default), "secondary", "success", "danger",  "warning", "info", "light", "dark", "white" or "black". |
| badge       | No       | Optional positioned badge to display on top of the button. |
| outline     | No       | Optional flag indicating the button should be outlined, either "false" (default) or "true". |
| aria-label  | No       | Optional label for the badge. |
| tooltip     | No       |  Optional text to display in a tooltip. Cannot be used together with collapse. Ignored for active/inactive buttons. |
| collapse    | No       | Optional panel to collapse. Cannot be used together with tooltip. Ignored for active/inactive buttons. |
| placement   | No       | How to position the tooltip: "top" (default), "bottom", "left", or "right". |
{{< /table >}}

## Example

### Statefull buttons

Set the `state` argument to change the appearance and behavior of the button.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" state="enabled" */>}}Enabled{{</* /button */>}}
{{</* button color="primary" href="#!" state="disabled" */>}}Disabled{{</* /button */>}}
{{</* button color="primary" href="#!" state="active" */>}}Active{{</* /button */>}}
{{</* button color="primary" href="#!" state="inactive" */>}}Inactive{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Sized buttons

Set the `size` argument to resize the button.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" */>}}sm{{</* /button */>}}
{{</* button color="primary" href="#!" size="md" */>}}md{{</* /button */>}}
{{</* button color="primary" href="#!" size="lg" */>}}lg{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Colored buttons

Set the `color` argument to define the background color with a matching title color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" */>}}primary{{</* /button */>}}
{{</* button color="secondary" href="#!" size="sm" */>}}secondary{{</* /button */>}}
{{</* button color="success" href="#!" size="sm" */>}}success{{</* /button */>}}
{{</* button color="danger" href="#!" size="sm" */>}}danger{{</* /button */>}}
{{</* button color="warning" href="#!" size="sm" */>}}warning{{</* /button */>}}
{{</* button color="info" href="#!" size="sm" */>}}info{{</* /button */>}}
{{</* button color="light" href="#!" size="sm" */>}}light{{</* /button */>}}
{{</* button color="dark" href="#!" size="sm" */>}}dark{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Buttons with a badge

Set the `badge` argument to add a badge to the top right of the button.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="secondary" href="#!" badge="99+" */>}}
    Inbox
{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Outlined buttons

Set the `outline` argument to `true` to adjust the style of the button.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="primary" href="#!" size="sm" outline="true" */>}}primary{{</* /button */>}}
{{</* button color="secondary" href="#!" size="sm" outline="true" */>}}secondary{{</* /button */>}}
{{</* button color="success" href="#!" size="sm" outline="true" */>}}success{{</* /button */>}}
{{</* button color="danger" href="#!" size="sm" outline="true" */>}}danger{{</* /button */>}}
{{</* button color="warning" href="#!" size="sm" outline="true" */>}}warning{{</* /button */>}}
{{</* button color="info" href="#!" size="sm" outline="true" */>}}info{{</* /button */>}}
{{</* button color="light" href="#!" size="sm" outline="true" */>}}light{{</* /button */>}}
{{</* button color="dark" href="#!" size="sm" outline="true" */>}}dark{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Buttons with a tooltip

Set the `tooltip` argument in conjunction with `placement` to show a tooltip when hovering over the button.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button color="dark" tooltip="Click on the inbox to view your unread messages" href="#!" placement="top" */>}}
    Inbox
{{</* /button */>}}

{{</* button color="dark" tooltip="Click on the inbox to view your unread messages" href="#!" placement="bottom" */>}}
    Inbox
{{</* /button */>}}

{{</* button color="dark" tooltip="Click on the inbox to view your unread messages" href="#!" placement="left" */>}}
    Inbox
{{</* /button */>}}

{{</* button color="dark" tooltip="Click on the inbox to view your unread messages" href="#!" placement="right" */>}}
    Inbox
{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->

### Buttons with a collapsible panel

Reveal or hide a collapsible panel by linking the panel's `id` to the button with the argument `collapse`.

{{< example lang="hugo" >}}
<div class="collapse pb-3" id="collapseExample">
    <div class="card card-body">
        Some placeholder content for the collapse component. This panel is hidden by default
        but revealed when the user activates the relevant trigger.
    </div>
</div>

<!-- markdownlint-disable MD037 -->
{{</* button color="dark" collapse="collapseExample" */>}}
    Collapse
{{</* /button */>}}
{{< /example>}}
<!-- markdownlint-enable MD037 -->
