---
author: Mark Dumay
title: Nav
date: 2023-04-17
description: Use the nav shortcode to show a group of multiple tab panes.
layout: docs
---

## Overview

Use the `nav` shortcode to show a group of multiple tab panes. Add `nav-item` inner elements for each tab pane.

## Arguments

The shortcode supports the following arguments:

| Argument    | Required | Description |
|-------------|----------|-------------|
| type        | No       | Optional type of the tab group, either "tabs", "pills", or "underline". |
| vertical    | No       | Optional flag to show vertical tabs instead of horizontal tabs (default). |
| class       | No       | Optional class attribute of the tab group, e.g. “nav-fill”. |
{.table}

Add an inner `nav-item` element for each item of the tab gruop. The `nav-item` element supports the following arguments:

| Argument  | Required | Description |
|-----------|----------|-------------|
| header      | Yes | Required header of the tab pane. |
| class       | No  | Optional class attribute of the inner tab pane. |
| show        | No  | Optional flag to indicate an item should be shown as expanded (only one can be shown at a time). |
{.table}

## Example

As an example, the following shortcode displays an tab group with three panes, of which the first element is shown.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
  {{</* nav type="pills" vertical="true" */>}}
    {{</* nav-item header="Nav Item #1" show="true" */>}}
      This is the first item's nav body. It supports HTML content. The item is shown by adding the value
      <code>show</code> to the <code>class</code> argument.
    {{</* /nav-item */>}}
    {{</* nav-item header="Nav Item #2" */>}}
      This is the second item's nav body. It too supports HTML content.
    {{</* /nav-item */>}}
    {{</* nav-item header="Nav Item #3" */>}}
      This is the third item's nav body.
    {{</* /nav-item */>}}
  {{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
