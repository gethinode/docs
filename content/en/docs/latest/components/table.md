---
author: Mark Dumay
title: Table
date: 2024-07-13
description: Use the table shortcode to make your Markdown table responsive.
layout: docs
icon: fas table
tags: component
---

## Overview

{{< release version="v0.8.0" >}}

<!-- markdownlint-disable MD036 MD037 -->
{{< alert >}}
**New in v0.24.13**

- Tables now support advanced controls such as paging, search, and sorting. These controls require the module `simple-datatables`. See the {{</* link "../content/tables#data-tables" >}}data tables configuration{{< /link */>}} for more details.

**New in v0.22.0**

- The prefix `table-responsive-` has been dropped to denote a responsive size. Instead, use `{sm|md|lg|xl|xxl}` to create responsive tables up to a particular breakpoint.
- Bootstrap styling attributes now require an explicit class argument. For example, use the following argument to accentuate a table with table-striped: `class="table-striped"`.

{{< /alert >}}
<!-- markdownlint-enable MD036 MD037 -->

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
