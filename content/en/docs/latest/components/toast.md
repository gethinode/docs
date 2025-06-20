---
author: Mark Dumay
title: Toast
date: 2024-08-14
description: Use the toast shortcode to display a dismissable message in the bottom-right corner of the screen.
layout: docs
icon: fas circle-info
tags: component
---

## Overview

> [!IMPORTANT]
> To support multiple toast messages on the same page, each toast message is explicitly linked to a button using the parameter `id` since release {{< release version="v0.14.3" short="true" link-type="link" >}}. Hinode wraps the individual toast messages in a container to stack them automatically.

Use the `toast` shortcode to display a dismissable message in the bottom-right corner of the screen. Give the toast a unique `id` and assign this value to the `toast` argument of a button. As an example, the following shortcode displays two buttons that, when clicked, trigger a toast message. The messages are stacked when both buttons are clicked in a short timeframe.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button toast-id="toast-example-1" */>}}
    Show toast 1
{{</* /button */>}}

{{</* button toast-id="toast-example-2" */>}}
    Show toast 2
{{</* /button */>}}

{{</* toast id="toast-example-1" title="First title" */>}}
    This is the first toast message.
{{</* /toast */>}}

{{</* toast id="toast-example-2" title="Second title" */>}}
    This is the second toast message.
{{</* /toast */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

{{< args structure="toast" group="shortcode" >}}

## Configuration

See the message section of the layout configuration to [modify the placement of the toast messages]({{% relref "layout#message-configuration" %}}).
