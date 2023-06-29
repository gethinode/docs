---
author: Mark Dumay
title: Badge
date: 2023-05-21
description: Use the badge class attribute to enrich headings.
layout: docs
icon: fas envelope-circle-check
tags: component
---

## Overview

Badges can be added to headings and buttons. The badge for a button is part of a [custom shortcode]({{< ref "button" >}} "custom shortcode"). The example below illustrates the HTML code for a heading.

{{< example >}}
<h4>Example heading of size four <span class="badge bg-secondary">New</span></h4>
{{< /example >}}

## Arguments

The badge requires no arguments.

## Examples

Use HTML code to display a badge for a heading. See the Bootstrap [documentation]({{< param "links.bs_badge_heading" >}}) for more information.

### Heading badges

Badges scale to match the size of the immediate parent element by using relative font sizing and em units.

{{< example >}}
<h1>Example heading of size one <span class="badge bg-secondary">New</span></h1>
<h2>Example heading of size two <span class="badge bg-secondary">New</span></h2>
<h3>Example heading of size three <span class="badge bg-secondary">New</span></h3>
<h4>Example heading of size four <span class="badge bg-secondary">New</span></h4>
<h5>Example heading of size five <span class="badge bg-secondary">New</span></h5>
<h6>Example heading of size six <span class="badge bg-secondary">New</span></h6>
{{< /example >}}

### Colored badges

Set a background-color with contrasting foreground color with [Bootstrap's `.text-bg-{color}` helpers]({{< param "links.bs_color_helpers" >}}).

{{< example >}}
<span class="badge text-bg-primary">Primary</span>
<span class="badge text-bg-secondary">Secondary</span>
<span class="badge text-bg-success">Success</span>
<span class="badge text-bg-danger">Danger</span>
<span class="badge text-bg-warning">Warning</span>
<span class="badge text-bg-info">Info</span>
<span class="badge text-bg-light">Light</span>
<span class="badge text-bg-dark">Dark</span>
{{< /example >}}

### Pill badges

Use the `.rounded-pill` utility class to make badges more rounded with a larger `border-radius`.

{{< example >}}
<span class="badge rounded-pill text-bg-primary">Primary</span>
<span class="badge rounded-pill text-bg-secondary">Secondary</span>
<span class="badge rounded-pill text-bg-success">Success</span>
<span class="badge rounded-pill text-bg-danger">Danger</span>
<span class="badge rounded-pill text-bg-warning">Warning</span>
<span class="badge rounded-pill text-bg-info">Info</span>
<span class="badge rounded-pill text-bg-light">Light</span>
<span class="badge rounded-pill text-bg-dark">Dark</span>
{{< /example >}}
