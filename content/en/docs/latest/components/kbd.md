---
author: Mark Dumay
title: Kbd
date: 2023-12-29
description: Use the kbd shortcode to show a keyboard input element.
layout: docs
icon: fa keyboard
tags: component
---

## Overview

{{< release version="v0.19.0" >}}

Use the `kbd` shortcode to show a keyboard input element. As an example, the following shortcodes shows a simple `CTRL-C` command.

<!-- markdownlint-disable MD037 -->
{{< example >}}
{{</* kbd "CTRL-C" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args structure="kbd" group="shortcode" >}}

## Examples

Set a background color with contrasting foreground color with the `color` argument.

<!-- markdownlint-disable MD037 -->
{{< example >}}
{{</* kbd text="primary" color="primary" */>}}
{{</* kbd text="secondary" color="secondary" */>}}
{{</* kbd text="success" color="success" */>}}
{{</* kbd text="danger" color="danger" */>}}
{{</* kbd text="warning" color="warning" */>}}
{{</* kbd text="info" color="info" */>}}
{{</* kbd text="light" color="light" */>}}
{{</* kbd text="dark" color="dark" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
