---
author: Mark Dumay
title: Timeline
date: 2023-07-04
description: Use the timeline shortcode to show tems ordered on a vertical timelime.
layout: docs
icon: fas timeline fa-rotate-90
tags: component
---

## Overview

{{< release version="v0.15.3" >}}

Use the timeline shortcode to show tems ordered on a vertical timelime.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* timeline data="timeline-example" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| data        | Yes      | Required filename of the timeline input. See [data format]({{< relref "#data-format" >}}) for the file requirements. You can omit the file extension. The file should reside in the `data` folder. |
{{< /table >}}

## Data format

Define a file in the `data` folder that contains the timeline data. The format supports the following attributes:

{{< table >}}
| Attribute | Required | Description |
|-----------|----------|-------------|
| title     | Yes | Required title of the timeline element. |
| icon      | Yes | Required class and name of a Font Awesome icon to include. The icons use the [icon shorthand notation]({{< relref "../content/icons" >}}). |
| color     | No  | Optional [theme color]({{< relref "colors" >}}) of the timeline element, defaults to `primary`. |
| date      | No  | Optional date of the timeline element, placed below the title. |
| badge     | No  | Optional label of a [pill badge]({{< relref "badge#pill-badges" >}}) placed next to the title. |
| url       | No  | Optional url of the timeline element, added as link to the title when set. The url is joined with the `release` attribute of the [documentation configuration]({{< relref "documentation#basic-configuration" >}}), unless the url is abolute (e.g. starts with `http`). |
| content   | No  | Optional content of the timeline element, supports markdown. |
{{< /table >}}

The following snippet defines a single timeline element in `yml` format.

```yml
- title: Product launch
  icon: fas rocket
  color: primary
  date: 2023-07-03
  badge: v0.15.3
  url: https://github.com/gethinode/hinode/releases/tag/v0.15.3
  content:
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
```
