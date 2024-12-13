---
author: Mark Dumay
title: Badge
date: 2023-12-29
description: Use the badge shortcode to enrich headings.
layout: docs
icon: fas envelope-circle-check
tags: component
---

## Overview

{{< release version="v0.19.0" >}}

Badges can be added to headings and buttons. The badge for a button is part of a [custom shortcode]({{% ref "button" %}} "custom shortcode"). The example below illustrates the shortcode for a heading.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
Example heading of size four {{</* badge title="New" */>}}
{.h4}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="badge" group="shortcode" >}}

## Examples

Use the badge shortcode to display a badge for a heading. See the Bootstrap {{< link bs_badge_heading >}}documentation{{< /link >}} for more information.

### Heading badges

Badges scale to match the size of the immediate parent element by using relative font sizing and em units. Use Hugo's {{< link hugo_goldmark >}}curly brackets syntax{{< /link >}} to apply a heading class.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
Heading 1 {{</* badge title="New" */>}}
{.h1}

Heading 2 {{</* badge title="New" */>}}
{.h2}

Heading 3 {{</* badge title="New" */>}}
{.h3}

Heading 4 {{</* badge title="New" */>}}
{.h4}

Heading 5 {{</* badge title="New" */>}}
{.h5}

Heading 6 {{</* badge title="New" */>}}
{.h6}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Colored badges

Set a background color with contrasting foreground color with the `color` argument.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
{{</* badge title="primary" color="primary" */>}}
{{</* badge title="secondary" color="secondary" */>}}
{{</* badge title="success" color="success" */>}}
{{</* badge title="danger" color="danger" */>}}
{{</* badge title="warning" color="warning" */>}}
{{</* badge title="info" color="info" */>}}
{{</* badge title="light" color="light" */>}}
{{</* badge title="dark" color="dark" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example >}}
{{</* badge title="primary" color="primary" class="rounded-pill" */>}}
{{</* badge title="secondary" color="secondary" class="rounded-pill" */>}}
{{</* badge title="success" color="success" class="rounded-pill" */>}}
{{</* badge title="danger" color="danger" class="rounded-pill" */>}}
{{</* badge title="warning" color="warning" class="rounded-pill" */>}}
{{</* badge title="info" color="info" class="rounded-pill" */>}}
{{</* badge title="light" color="light" class="rounded-pill" */>}}
{{</* badge title="dark" color="dark" class="rounded-pill" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
