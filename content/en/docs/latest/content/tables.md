---
title: Tables
description: Enhance out-of-the-box Markdown tables with Bootstrap styling.
date: 2025-01-16
layout: docs
modules: ["simple-datatables"]
---

> [!NOTE]
> Since Hinode {{< release version="v0.26.7" short="true" link-type="link" >}} you no longer need to include the `.table` attribute with your Markdown table. Hinode uses a render hook to ensure the Markdown table uses Bootstrap's styling automatically. You can still use the `table` shortcode as equivalent - which also adds support for data tables.

Hugo supports Markdown tables natively. Hinode enhances these tables with optional styling features provided by Bootstrap. The following paragraphs illustrate how to use basic tables, how to accent them, how to adjust the borders, and how to make the table more compact.

## Basic tables

Hugo supports tables out-of-the-box with extended Markdown. Use an optional shortcode as wrapper to align the table cells.

### Default alignment

Hugo supports tables out-of-the-box by using the `|` and `-` characters.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| Italics   | Bold     | Code   |
| --------- | -------- | ------ |
| _italics_ | **bold** | `code` |
{{< /example >}}
<!-- markdownlint-enable MD058 -->

### Aligned cells and headers

You can align header and cell data to the left, center, or right of a column using the `:` character.

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
| #  | Item        | Left aligned | Center aligned |   Right aligned|
| -- | ----------- |:-------------|:--------------:| --------------:|
| 1. | First item  | some text    | more text      | even more text |
| 2. | Second item | some text    | more text      | even more text |
| 3. | Third item  | some text    | more text      | even more text |
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->

## Accented tables

Add optional class attributes to style the table using Bootstrap.

### Striped rows

Use `.table-striped` to add zebra-striping to any table row.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-striped}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

### Striped columns

Use `.table-striped-columns` to add zebra-striping to any table column.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        | Description            |
| -- | ----------- | ---------------------- |
| 1. | First item  | This is the first row  |
| 2. | Second item | This is the second row |
| 3. | Third item  | This is the third row  |
{.table-striped-columns}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

### Hoverable rows

Add `.table-hover` to enable a hover state on the table rows.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-hover}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

### Colored tables

Add `table-<theme>` to apply [theme colors]({{% ref "colors" %}}) to your table. You can mix them with other classes, such as `.table-striped`.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-success .table-striped}
{{< /example>}}
<!-- markdownlint-enable MD058 -->

## Table borders

Adjust the borders of a table to match your style preferences.

### Bordered tables

Add `.table-bordered` for borders on all sides of the table and cells. Add an optional `border-<theme>` class to apply [theme colors]({{% ref "colors" %}}) to the table borders.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-bordered .border-primary}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

### Tables without borders

Add `.table-borderless` for a table without borders.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-borderless}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

## Small tables

Add `.table-sm` to make any table more compact by cutting all cell padding in half.

<!-- markdownlint-disable MD058 -->
{{< example lang="markdown" >}}
| #  | Item        |
| -- | ----------- |
| 1. | First item  |
| 2. | Second item |
| 3. | Third item  |
{.table-sm}
{{< /example >}}
<!-- markdownlint-enable MD058 -->

## Responsive tables

{{< release version="v0.8.0" >}}

> [!IMPORTANT]
> The prefix `table-responsive-` has been dropped to denote a responsive size in release {{< release version="v0.22.0" short="true" link-type="link" >}}. Instead, use `{sm|md|lg|xl|xxl}` to create responsive tables up to a particular breakpoint.

Embed the markdown table within the {{< link "docs/components/table" />}} shortcode to make the table responsive. Responsive tables scroll horizontally to improve the layout on smaller screens.

### Always responsive

By default, the `table` shortcode is responsive for all viewports.

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
{{</* table */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->

Use `none` to disable this behavior.

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
{{</* table none */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->

### Breakpoint specific

Use `{sm|md|lg|xl|xxl}` to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
{{</* table sm */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}

{{</* table md */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}

{{</* table lg */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}

{{</* table xl */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}

{{</* table xxl */>}}
| #  | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading | Heading |
|----|---------|---------|---------|---------|---------|---------|---------|---------|---------|
| 1. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 2. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
| 3. | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    | cell    |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->

### Wrapped columns

{{< release version="v0.28.0" >}}

You can wrap the last column to a new row to improve readability on smaller devices. Add the argument `wrap=true` to enable this behavior. The following example illustrates how this works. Adjust your viewport to see the wrapping behavior using the current [breakpoint](/docs/configuration/layout/#extended-configuration).

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
{{</* table wrap=true */>}}
| #  | Col 1 | Col 2 | Description                                                                                                                   |
|----|-------|-------|-------------------------------------------------------------------------------------------------------------------------------|
| 1. | cell  | cell  | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae eros eu nunc consequat interdum.                           |
| 2. | cell  | cell  | Nulla pretium viverra nisl, id luctus justo placerat vel. Cras elit dui, efficitur sed lobortis vitae, ullamcorper ac libero. |
| 3. | cell  | cell  | Nam blandit, nunc eget gravida dictum, orci nibh placerat ex, malesuada sagittis ligula massa quis urna.                      |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->

## Data tables

{{< release version="v0.24.13" >}}

Include the module `simple-datatables` to add advanced controls to your table. Features include in-line pagination, search, and sorting. {{< link "../configuration/modules" >}}Enable the module{{< /link >}} in the frontmatter of your content page:

```yml
---
modules: ["simple-datatables"]
---
```

As an example, the following shortcode displays a responsive table that is `searchable`, is `sortable`, and enables paging (`paginate`) with a page size (`pagination`) of 5.

<!-- markdownlint-disable MD037 MD058 -->
{{< example lang="markdown" >}}
{{</* table sortable="true" paginate="true" searchable="true" pagination=5 */>}}
| #   | Heading |
|-----|---------|
| 1.  | Item 1  |
| 2.  | Item 2  |
| 3.  | Item 3  |
| 4.  | Item 4  |
| 5.  | Item 5  |
| 6.  | Item 6  |
| 7.  | Item 7  |
| 8.  | Item 8  |
| 9.  | Item 9  |
| 10. | Item 10 |
| 11. | Item 11 |
| 12. | Item 12 |
| 13. | Item 13 |
| 14. | Item 14 |
| 15. | Item 15 |
| 16. | Item 16 |
| 17. | Item 17 |
| 18. | Item 18 |
| 19. | Item 19 |
| 20. | Item 20 |
| 21. | Item 21 |
| 22. | Item 22 |
| 23. | Item 23 |
| 24. | Item 24 |
| 25. | Item 25 |
| 26. | Item 26 |
| 27. | Item 27 |
| 28. | Item 28 |
| 29. | Item 29 |
| 30. | Item 30 |
{{</* /table */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 MD058 -->
