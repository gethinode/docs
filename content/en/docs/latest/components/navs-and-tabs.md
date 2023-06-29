---
author: Mark Dumay
title: Navs and tabs
date: 2023-04-18
description: Use the nav shortcode to show a group of multiple tab panes.
layout: docs
icon: fa folder
tags: component
---

## Overview

{{< release version="v0.11.8" >}}

Use the `nav` shortcode to show a group of multiple tab panes. Add `nav-item` inner elements for each tab pane.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav id="links-1" fade="true" */>}}
  {{</* nav-item header="Nav Item #1" show="true" */>}}
    This is the first item's nav body. It supports HTML content. The item is shown by adding the value
    <code>show</code> to the <code>class</code> argument.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #2" */>}}
    This is the second item's nav body.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| id          | No       | Optional identifier of the tab group, uses a generated sequence if not specified. |
| type        | No       | Optional type of the tab group, either "tabs", "pills", or "underline". Uses links by default. |
| vertical    | No       | Optional flag to show vertical tabs instead of horizontal tabs (default). |
| fade        | No       | Optional flag to make tab panes fade in. |
| class       | No       | Optional class attribute of the tab group, e.g. “nav-fill”. |
{{< /table >}}

Add an inner `nav-item` element for each item of the tab group. The `nav-item` element supports the following arguments:

{{< table >}}
| Argument  | Required | Description |
|-----------|----------|-------------|
| header    | Yes | Required header of the tab pane. |
| class     | No  | Optional class attribute of the inner tab pane. |
| show      | No  | Optional flag to indicate an item should be shown as expanded (only one can be shown at a time). |
| disabled  | No  | Optional flag to indicate an item should be in a disabled state. |
{{< /table >}}

## Examples

Change the style of your nav with class attributes and arguments.

### Horizontal alignment

By default, navs are left-aligned, but you can easily change them to center or right aligned.

Centered with `.justify-content-center`:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav class="justify-content-center" */>}}
  {{</* nav-item header="Nav Item #1" show="true" /*/>}}
  {{</* nav-item header="Nav Item #2" /*/>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Right-aligned with `.justify-content-end`:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav class="justify-content-end" */>}}
  {{</* nav-item header="Nav Item #1" show="true" /*/>}}
  {{</* nav-item header="Nav Item #2" /*/>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Vertical

Stack your navigation by setting `vertical` to `true`.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav vertical="true" */>}}
  {{</* nav-item header="Nav Item #1" show="true" /*/>}}
  {{</* nav-item header="Nav Item #2" /*/>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Tabs

Takes the basic nav from above and generates a tabbed interface by setting `type` to `tabs`. The inner content of each `nav-item` is rendered within a linked tab pane. The content supports embedded HTML.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav type="tabs" id="tabs-1" */>}}
  {{</* nav-item header="Nav Item #1" show="true" */>}}
    This is the first item's nav body. It supports HTML content. The item is shown by adding the value
    <code>show</code> to the <code>class</code> argument.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #2" */>}}
    This is the second item's nav body. It too supports HTML content.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Pills

Take that same HTML, but using `pills` instead:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav type="pills" id="pills-1" */>}}
  {{</* nav-item header="Nav Item #1" show="true" */>}}
    This is the first item's nav body. It supports HTML content. The item is shown by adding the value
    <code>show</code> to the <code>class</code> argument.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #2" */>}}
    This is the second item's nav body. It too supports HTML content.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Underline

Take that same HTML, but using `underline` instead:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav type="underline" id="underline-1" */>}}
  {{</* nav-item header="Nav Item #1" show="true" */>}}
    This is the first item's nav body. It supports HTML content. The item is shown by adding the value
    <code>show</code> to the <code>class</code> argument.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #2" */>}}
    This is the second item's nav body. It too supports HTML content.
  {{</* /nav-item */>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Fill and justify

To proportionately fill all available space with your `.nav-items`, use `.nav-fill`. Notice that all horizontal space is occupied, but not every nav item has the same width.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav type="pills" class="nav-fill" */>}}
  {{</* nav-item header="Nav Item #1" show="true" /*/>}}
  {{</* nav-item header="Much longer nav item #2" /*/>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

For equal-width elements, use `.nav-justified`. All horizontal space will be occupied by nav links, but unlike the `.nav-fill` above, every nav item will be the same width.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* nav type="pills" class="nav-justified" */>}}
  {{</* nav-item header="Nav Item #1" show="true" /*/>}}
  {{</* nav-item header="Much longer nav item #2" /*/>}}
  {{</* nav-item header="Nav Item #3" disabled="true" /*/>}}
{{</* /nav */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
