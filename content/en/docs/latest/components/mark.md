---
author: Mark Dumay
title: Mark
date: 2023-09-02
description: Use the mark shortcode to highlight text.
layout: docs
icon: fas highlighter
tags: component
---

## Overview

{{< release version="v0.19.0" >}}

Use the `mark` shortcode to highlight text. The inner content is used as input.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
Use the mark shortcode to {{</* mark >}}highlight{{< /mark */>}} specific text.
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| color       | No  | Optional theme color of the highlight, either "primary", "secondary", "success", "danger",  "warning", "info", "light", "dark", "white" or "black". By default, the highlight uses the color of the HTML mark function (usually yellow). |
| class       | No  | Optional class attribute of the mark element. |
{{< /table >}}

## Examples

Specify a theme color to define the background color of the highlighted text. As an example, the following shortcodes display a highlight for each theme color.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}

- Use the mark shortcode to {{</* mark color="primary" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="secondary" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="success" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="danger" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="warning" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="info" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="light" >}}highlight{{< /mark */>}} specific text.
- Use the mark shortcode to {{</* mark color="dark" >}}highlight{{< /mark */>}} specific text.

{{< /example >}}
<!-- markdownlint-enable MD037 -->
