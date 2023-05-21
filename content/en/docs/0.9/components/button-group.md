---
author: Mark Dumay
title: Button Group
date: 2023-05-21
description: Use the button-group shortcode to display a group of buttons.
layout: docs
icon: fas ellipsis
tags: component
---

## Overview

Use the `button-group` shortcode to display a group of buttons. Add inner `<button>` elements for each [button]({{< ref "button" >}} "button"). As an example, the following shortcode displays a group of three buttons.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* button-group aria-label="Basic example" */>}}
  {{</* button color="primary" href="#!" */>}}Left{{</* /button */>}}
  {{</* button color="primary" href="#!" */>}}Middle{{</* /button */>}}
  {{</* button color="primary" href="#!" */>}}Right{{</* /button */>}}
{{</* /button-group */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| aria-label  | No   | Optional assistive label for the button group. |
{{< /table >}}

## Examples

See the [button shortcode documentation]({{< ref "button" >}} "button") for additional styling options.
