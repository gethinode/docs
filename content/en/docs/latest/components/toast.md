---
author: Mark Dumay
title: Toast
date: 2023-09-02
description: Use the toast shortcode to display a dismissable message in the bottom-right corner of the screen.
layout: docs
icon: fas circle-info
tags: component
---

## Overview

{{< alert >}}
**New in v0.14.3** - To support multiple toast messages on the same page, each toast message is now explicitly linked to a button using the parameter `id`. Hinode wraps the individual toast messages in a container to stack them automatically.
{{< /alert >}}

Use the `toast` shortcode to display a dismissable message in the bottom-right corner of the screen. Give the toast a unique `id` and assign this value to the `toast` argument of a button. As an example, the following shortcode displays two buttons that, when clicked, trigger a toast message. The messages are stacked when both buttons are clicked in a short timeframe.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button toast="toast-example-1" */>}}
    Show toast 1
{{</* /button */>}}

{{</* button toast="toast-example-2" */>}}
    Show toast 2
{{</* /button */>}}

{{</* toast id="toast-example-1" header="First title" */>}}
    This is the first toast message.
{{</* /toast */>}}

{{</* toast id="toast-example-2" header="Second title" */>}}
    This is the second toast message.
{{</* /toast */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| id          | No       | Optional id of the toast message, defaults to `toast-message-n` with sequence n. |
| header      | No       | Optional header of the toast message. Uses the site title by default. |
| class       | No       | Optional class attribute of the toast element. |
{{< /table >}}

## Configuration

See the message section of the layout configuration to [modify the placement of the toast messages]({{< relref "layout#message-configuration" >}}).
