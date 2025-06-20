---
author: Mark Dumay
title: Card
date: 2024-08-14
description: Use the card shortcode to display a card that links to a content page.
layout: docs
icon: fa address-card
tags: component
---

## Overview

> [!IMPORTANT]
> Cards support inner content since release {{< release version="v0.18.6" short="true" link-type="link" >}}. As a result, references to the card shortcode must be closed or self-closed.

Use the `card` shortcode to display a card that links to a content page. When using a rich layout, the card includes a thumbnail (or icon) and a header. As an example, the following shortcode displays a horizontal card that links to the [editing]({{% ref "editing" %}}) guide. It includes a custom header and footer. You can use the {{< link "card-group" >}}card-group shortcode{{< /link >}} to align multiple cards and to position them in a grid.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="/guides/editing" header-style="publication" footer-style="tags" orientation="horizontal" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args "card" "shortcode" >}}

## Examples

Change the style of your card with class attributes and shortcode arguments.

### Colored cards

Use the `color` argument to set the background color of the card. As an example, the following shortcodes display a plain card for each available color. The cards are embedded in a grid. The final two cards with the color `body` and `body-tertiary` are [color-mode aware]({{% relref "color-modes" %}}).

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card-group cols="4" gutter="3" header-style="none" orientation="none" */>}}
    {{</* card color="primary" path="/docs/components/button/" /*/>}}
    {{</* card color="secondary" path="/docs/components/button/" /*/>}}
    {{</* card color="success" path="/docs/components/button/" /*/>}}
    {{</* card color="danger" path="/docs/components/button/" /*/>}}
    {{</* card color="warning" path="/docs/components/button/" /*/>}}
    {{</* card color="info" path="/docs/components/button/" /*/>}}
    {{</* card color="light" path="/docs/components/button/" /*/>}}
    {{</* card color="dark" path="/docs/components/button/" /*/>}}
    {{</* card color="white" path="/docs/components/button/" /*/>}}
    {{</* card color="black" path="/docs/components/button/" /*/>}}
    {{</* card color="body" path="/docs/components/button/" /*/>}}
    {{</* card color="body-tertiary" path="/docs/components/button/" /*/>}}
{{</* /card-group */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom header

Use the `header` argument to customize the contents of the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card-group cols="4" gutter="3" orientation="none" */>}}
    {{</* card path="/guides/editing" header-style="full"  /*/>}}
    {{</* card path="/guides/editing" header-style="publication" /*/>}}
    {{</* card path="/guides/editing" header-style="tags" /*/>}}
    {{</* card path="/guides/editing" header-style="none" /*/>}}
{{</* /card-group */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom footer

Use the `footer-style` argument to customize the contents of the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card-group cols="4" gutter="3" header-style="none" */>}}
    {{</* card path="/guides/editing" footer-style="full" orientation="none" /*/>}}
    {{</* card path="/guides/editing" footer-style="publication" orientation="none" /*/>}}
    {{</* card path="/guides/editing" footer-style="tags" orientation="none" /*/>}}
    {{</* card path="/guides/editing" footer-style="none" orientation="none" /*/>}}
{{</* /card-group */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Image placement

Use the `orientation` argument to customize the placement of the card's thumbnail or icon.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="/guides/editing" header-style="none" footer-style="none" orientation="stacked" class="col-sm-12 col-lg-6 mx-auto mb-3" /*/>}}
{{</* card path="/docs/components/button/" header-style="none" footer-style="none" orientation="stacked" padding="3" class="col-sm-12 col-lg-6 mx-auto mb-3" /*/>}}
{{</* card path="/guides/editing" header-style="publication" footer-style="tags" orientation="horizontal" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{</* card path="/docs/components/button/" header-style="publication" footer-style="tags" orientation="horizontal" padding="3" class="col-sm-12 col-lg-8 mx-auto" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Inline content

Use `title`, `thumbnail`, `icon`, and inner content to define the card's content inline.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card header-style="none" footer-style="none" padding="3" class="col-sm-12 col-lg-8 mx-auto mb-3" title="Title" icon="fa address-card" */>}}
    This is the `body` of the card. It supports Markdown.
{{</* /card */>}}

{{</* card header-style="none" footer-style="none" padding="3" class="col-sm-12 col-lg-8 mx-auto" title="Title" thumbnail="img/watch.jpg" */>}}
    This is the `body` of the card. It supports Markdown too.
{{</* /card */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Custom styling

Use the `class` argument to customize the styling of the card. The following example applies the style `card-shrink` to apply an animation effect when hovering over the card.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* card path="/docs/components/button/" header-style="none" footer-style="none" padding="3" class="col-sm-12 col-lg-8 mx-auto card-shrink" /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The style is defined in the `theme.scss` file, which is transpiled into the [site's stylesheet]({{% relref "styles" %}}).

{{< docs name="styling" file="./assets/scss/theme/theme.scss" >}}
