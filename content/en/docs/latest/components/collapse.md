---
author: Mark Dumay
title: Collapse
date: 2024-08-14
description: Use the collapse shortcode to reveal or hide a panel.
layout: docs
icon: fa eye-slash
tags: component
---

## Overview

Use the `collapse` shortcode to reveal or hide a panel. The panel can contain both HTML code and plain text. Link a button to the panel by assigning it's ID to the `collapse` attribute. As an example, the following shortcode displays a button that, when clicked, triggers a panel to appear or disappear.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button collapse="collapse-1" */>}}
    Trigger panel
{{</* /button */>}}

{{</* collapse id="collapse-1" class="p-3 border rounded" */>}}
    Some placeholder content for the collapse component. This panel is *hidden by default* but
    revealed when the user activates the relevant trigger.
{{</* /collapse */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

> [!IMPORTANT]
> The definition of the default `id` field fails when embedding (multiple) `collapse` shortcodes in an [example]({{% relref "example" %}}). Provide an explicit, unique `id` to prevent cross-interference.

The shortcode supports the following arguments:

{{< args structure="collapse" group="shortcode" >}}

## Remarks

The [nav shortcode]({{% relref "navs-and-tabs" %}}) uses multiple collapse panels under the hood to provide access to a group of tab panes.
