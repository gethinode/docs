---
author: Mark Dumay
title: Sup
date: 2023-12-30
description: Use the sup shortcode to display text in superscript.
layout: docs
icon: fas superscript
tags: component
---

## Overview

{{< release version="v0.19.0" >}}

As an example, the following shortcode displays superscript text.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
2{{</* sup 10 */>}} is 1024.
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="sup" group="shortcode" >}}
