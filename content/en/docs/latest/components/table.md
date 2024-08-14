---
author: Mark Dumay
title: Table
date: 2024-08-14
description: Use the table shortcode to make your Markdown table responsive.
layout: docs
icon: fas table
tags: component
---

## Overview

{{< release version="v0.8.0" >}}

> [!IMPORTANT]
> Bootstrap styling attributes require an explicit class argument as of release {{< release version="v0.22.0" short="true" type="link" >}}. For example, use the following argument to accentuate a table with table-striped: `class="table-striped"`.

Use the table shortcode to make your markdown table responsive. Responsive tables scroll horizontally to improve the layout on smaller screens. The following example illustrates how this works.

<!-- markdownlint-disable MD037 -->
{{< example lang="markdown" >}}
{{</* table */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
| 2. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
| 3. | cell    | cel     | cel     | cel     | cel     | cel     | cel     | cel     | cel     |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args structure="table" group="shortcode" >}}

## Remarks

See the [tables documentation]({{< relref "../content/tables" >}}) in the content section for additional styling options.
