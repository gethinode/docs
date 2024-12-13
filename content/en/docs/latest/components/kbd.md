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

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
{{</* kbd "CTRL-C" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="kbd" group="shortcode" >}}

## Examples

Set a background color with contrasting foreground color with the `color` argument.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
{{</* kbd title="primary" color="primary" */>}}
{{</* kbd title="secondary" color="secondary" */>}}
{{</* kbd title="success" color="success" */>}}
{{</* kbd title="danger" color="danger" */>}}
{{</* kbd title="warning" color="warning" */>}}
{{</* kbd title="info" color="info" */>}}
{{</* kbd title="light" color="light" */>}}
{{</* kbd title="dark" color="dark" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
