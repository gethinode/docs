---
title: Colors
description: Use Bootstrap's color system to easily adjust your website's colors.
date: 2023-04-23
layout: docs
---

## Theme colors

Hinode uses Bootstrap's color system. You can adjust them in the `/config/_default/params.toml` file in the `style` section.

{{< docs name="theme-colors" file="config/_default/params.toml" >}}

In addition, the background colors `black` and `white` are available too. Below is an overview of the rendered colors.

<div class="row">
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-primary rounded-3 border">primary</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-secondary rounded-3 border">secondary</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-success rounded-3 border">success</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-danger rounded-3 border">danger</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-warning rounded-3 border">warning</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-info rounded-3 border">info</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-light rounded-3 border">light</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-dark rounded-3 border">dark</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-white rounded-3 border">white</div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-black text-white rounded-3 border">black</div>
    </div>
</div>

## Adaptive colors

Several components support background colors that are [color-mode aware]({{< relref "color-modes" >}}). These colors respond to changes when the active theme is adjusted, such as by changing from a light theme to a dark theme. You can apply this color by adding `bg-body` or `bg-body-tertiary` to the class of an HTML element.

{{< example >}}
    <div class="row">
        <div class="col-md-4">
            <div class="p-3 mb-3 bg-body text-bg-white rounded-3 border">body</div>
        </div>
        <div class="col-md-4">
            <div class="p-3 mb-3 bg-body-tertiary text-bg-white rounded-3 border">body-tertiary</div>
        </div>
    </div>
{{< /example>}}

## Colored contrasting links

Hinode defines additional classes to render links that contrast with their background. Simply add `link-bg-<color>` to the class of an `<a>` anchor element. The next example adds a link constrasting with the background color `bg-success`.

{{< example >}}
<div class="col-md-2">
    <div class="p-3 mb-3 bg-success rounded-3 text-center"><a class="link-bg-success" href="#!">Success</a></div>
</div>
{{< /example>}}

Below grid illustrates the contrasting colors for each background.

<div class="row">
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-primary rounded-3 border"><a class="link-bg-primary" href="#!">primary</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-secondary rounded-3 border"><a class="link-bg-secondary" href="#!">secondary</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-success rounded-3 border"><a class="link-bg-success" href="#!">success</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-danger rounded-3 border"><a class="link-bg-danger" href="#!">danger</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-warning rounded-3 border"><a class="link-bg-warning" href="#!">warning</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-info rounded-3 border"><a class="link-bg-info" href="#!">info</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-light rounded-3 border"><a class="link-bg-light" href="#!">light</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 text-bg-dark rounded-3 border"><a class="link-bg-dark" href="#!">dark</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-white rounded-3 border"><a class="link-bg-white" href="#!">white</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-black text-white rounded-3 border"><a class="link-bg-black" href="#!">black</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-body text-bg-white rounded-3 border"><a class="link-bg-body" href="#!">body</a></div>
    </div>
    <div class="col-md-4">
        <div class="p-3 mb-3 bg-body-tertiary text-bg-white rounded-3 border"><a class="link-bg-body-tertiary" href="#!">body-tertiary</a></div>
    </div>
</div>

## Generating helper

The SCSS generator for the colored links is defined in `assets/scss/helpers/_colored-links.scss`.

{{< docs name="colored-links" file="assets/scss/helpers/_colored-links.scss" >}}
