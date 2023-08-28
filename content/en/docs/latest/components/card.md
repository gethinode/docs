---
author: Mark Dumay
title: Card
date: 2023-08-24
description: Use the card shortcode to display a card that links to a content page.
layout: docs
icon: fa address-card
tags: component
---

## Overview

{{< alert >}}
<strong>New in v0.18.6 -</strong> The card now supports inner content too. As a result, references to the card shortcode must be closed of self-closed.
{{< /alert >}}

Use the `card` shortcode to display a card that links to a content page. When using a rich layout, the card includes a thumbnail (or icon) and a header. As an example, the following shortcode displays a horizontal card that links to the [editing]({{< ref "credits" >}}) guide. It includes a custom header and footer. You can use the {{< link "card-group" >}}card-group shortcode{{< /link >}} to align multiple cards and to position them in a grid.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="editing" header="publication" footer="tags" orientation="horizontal" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| path        | No  | Path of the page that the card reference to. If omitted, specify the title, icon, thumbnail, and body (inner content) as needed. |
| title       | No  | Optional title of the card, replaces the title of the referenced page (if any). |
| class       | No  | Optional class attribute of the card element, e.g. “w-50”. |
| color       | No  | Optional theme color of the card, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black", "body", or "body-tertiary". By default, no color is specified. |
| padding     | No  | Optional padding of the content, either "0", "1", "2", "3", "4", "5", or "auto" (default). |
| header      | No  | Optional header components of the card, displayed in small caps. Supported values are "full" (default), "publication", "tags", and "none". |
| footer      | No  | Optional footer components of the card, displayed in small caps. Supported values are "full", "publication", "tags", and "none" (default). |
| orientation | No  | Optional placecement of the thumbnail, either "stacked" (default), "horizontal", or "none". |
| thumbnail   | No  | Optional thumbnail image url, displayed on top or the left of the card. |
| icon        | No  | Optional Font Awesome icon, displayed on top or the left of the card. |
{{< /table >}}

## Examples

Change the style of your card with class attributes and shortcode arguments. Use the

### Colored cards

Use the `color` argument to set the background color of the card. As an example, the following shortcodes display a plain card for each available color. The cards are embedded in a grid. The final two cards with the color `body` and `body-tertiary` are [color-mode aware]({{< relref "color-modes" >}}).

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
<div class="container-fluid p-4 px-xxl-0">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-2 g-lg-3">
        <div class="col">{{</* card color="primary" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="secondary" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="success" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="danger" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="warning" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="info" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="light" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="dark" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="white" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="black" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="body" path="button" header="none" orientation="none" /*/>}}</div>
        <div class="col">{{</* card color="body-tertiary" path="button" header="none" orientation="none" /*/>}}</div>
    </div>
</div>
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom header

Use the `header` argument to customize the contents of the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
<div class="container-fluid p-4 px-xxl-0">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-2 g-lg-3">
        <div class="col">{{</* card path="editing" header="full" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="publication" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="tags" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="none" orientation="none" /*/>}}</div>
    </div>
</div>
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom footer

Use the `footer` argument to customize the contents of the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
<div class="container-fluid p-4 px-xxl-0">
    <div class="row row-cols-2 row-cols-sm-3 row-cols-lg-4 g-2 g-lg-3">
        <div class="col">{{</* card path="editing" header="none" footer="full" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="none" footer="publication" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="none" footer="tags" orientation="none" /*/>}}</div>
        <div class="col">{{</* card path="editing" header="none" footer="none" orientation="none" /*/>}}</div>
    </div>
</div>
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Image placement

Use the `orientation` argument to customize the placement of the card's thumbnail or icon.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="editing" header="none" footer="none" orientation="stacked" class="col-sm-12 col-lg-6 mx-auto mb-3" /*/>}}
{{</* card path="button" header="none" footer="none" orientation="stacked" padding="3" class="col-sm-12 col-lg-6 mx-auto mb-3" /*/>}}
{{</* card path="editing" header="publication" footer="tags" orientation="horizontal" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{</* card path="button" header="publication" footer="tags" orientation="horizontal" padding="3" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Inline content

Use `title`, `thumbnail`, `icon`, and inner content to define the card's content inline.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto mb-3" title="Title" icon="fa address-card" */>}}
    This is the `body` of the card. It supports Markdown.
{{</* /card */>}}

{{</* card header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto" title="Title" thumbnail="img/watch.jpg" */>}}
    This is the `body` of the card. It supports Markdown too.
{{</* /card */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom styling

Use the `class` argument to customize the styling of the card. The folllowing example applies the style `card-shrink` to apply an animation effect when hovering over the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="button" header="none" footer="none" padding="3" class="col-sm-12 col-lg-8 mx-auto card-shrink" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The style is defined in the `theme.scss` file, which is transpiled into the [site's stylesheet]({{< relref "styles" >}}).

{{< docs name="styling" file="./assets/scss/theme/theme.scss" >}}
