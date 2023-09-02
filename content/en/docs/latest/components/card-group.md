---
author: Mark Dumay
title: Card Group
date: 2023-09-01
description: Use the card-group shortcode to display a group of cards.
layout: docs
icon: fas grip
tags: component
---

## Overview

{{< release version="v0.18.6" >}}

Use the `card-group` shortcode to display a group of cards. Add inner `<card>` elements for each [card]({{< ref "card" >}} "card"). As an example, the following shortcode displays a group of three cards.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card-group padding="3" gutter="3" */>}}
    {{</* card title="Bootstrap framework" icon="fab bootstrap" */>}}
        Build fast, responsive sites with Bootstrap 5. Easily customize your site with the
        source Sass files.
    {{</* /card */>}}
    {{</* card title="Full text search" icon="fas magnifying-glass" */>}}
        Search your site with FlexSearch, a full-text search library with zero dependencies.
    {{</* /card */>}}
    {{</* card title="Development tools" icon="fas code" */>}}
        Use Node Package Manager to automate the build process and to keep track of
        dependencies.
    {{</* /card */>}}
{{</* /card-group */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Argument   | Required | Description |
|------------|----------|-------------|
| cols       | No   | Number of columns for the grid, must be a value between "1" and "5", or set to "auto" (new in {{</* release version="v0.19.0-alpha" short="true" size="sm" inline="true" */>}}). Defaults to "3". When using auto-layout, columns are horizontally stacked using {{</* link bs_grid >}}Bootstrap's grid system{{< /link */>}}. Set the column width on the class of each invidual card as desired. |
| title      | No   | Optional title of the card group. |
| separator  | No   | Optional flag to indicate a horizontal line should be added between items on small screens. |
| gutter     | No   | {{</* release version="v0.19.0-alpha" short="true" size="sm" inline="true" */>}} Gutter between columns in a group, either "0", "1", "2", "3" (default), "4", or "5". |
| responsive | No   | Optional flag if the number of columns should be responsive, defaults to "true". |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

In addition, the following arguments are passed to the individual cards.

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| class       | No       | Optional class attribute of the card element, e.g. “w-50”.
| color       | No       | Optional theme color of the card, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", or "body". By default, no color is specified.
| padding     | No       | Optional padding of the content, either "0", "1", "2", "3" (default), "4", "5", or "auto".
| header      | No       | Optional header components of the card, displayed in small caps. Supported values are "full" (default), "publication", "tags", and "none".
| footer      | No       | Optional footer components of the card, displayed in small caps. Supported values are "full", "publication", "tags", and "none" (default).
| orientation | No       | Optional placecement of the thumbnail, either "stacked" (default), "horizontal", or "none".
{{< /table >}}

## Examples

See the [card shortcode documentation]({{< ref "card" >}} "card") for additional styling options.