---
author: Mark Dumay
title: Mark
date: 2023-12-29
description: Use the mark shortcode to highlight text.
layout: docs
icon: fas highlighter
tags: component
---

## Overview

{{< release version="v0.19.0" >}}

Use the `mark` shortcode to highlight text. The inner content is used as input.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
Use the mark shortcode to {{</* mark >}}highlight{{< /mark */>}} specific text.
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="mark" group="shortcode" >}}

## Examples

Specify a theme color to define the background color of the highlighted text. As an example, the following shortcodes display a highlight for each theme color.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
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
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
