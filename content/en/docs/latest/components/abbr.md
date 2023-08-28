---
author: Mark Dumay
title: Abbr
date: 2023-08-28
description: Use the abbr shortcode to show the long form of an abbrevitation.
layout: docs
icon: fas question
tags: component
---

## Overview

{{< release version="v0.19.0-alpha" >}}

Use the abbr shortcode to show the long form of an abbrevitation on hover. The abbreviation data is retrieved from a central data file. By default, the shortcode uses "data/abbr.yaml" with translation support.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* abbr html */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports a single unnamed argument, which maps to the `key` argument. When using naming parameters, the following arguments are supported:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| key         | Yes      | Required case-insensitive key of the abbreviation. In shorthand notation, this is the first (and only) matched argument. Non-alphanumeric keys must be quoted. |
| data        | No       | Optional filename of the abbrevation input. It defaults to "abbr.yaml" with translation support. You can omit the file extension.  The file should reside in the "data" folder. The data supports language extensions. For example, "abbr.en.yaml" refers to the English translation of the abbrevation data. The filename "abbr.yaml" is used when no suitable translation is found. |
{{< /table >}}

## Data format

Define a file in the `data` folder that contains the abbrevation data. The format excpects the following attributes:

{{< table >}}
| Attribute | Required | Description |
|-----------|----------|-------------|
| id        | Yes      | Required key of the abbeviation. Store the key in lower case to ensure it can be matched. |
| long      | Yes      | Required long form of the abbreviation. |
{{< /table >}}

The following snippet defines three entries in `yml` format.

```yml
- id: css
  long: "Cascading Style Sheets"

- id: html
  long: "HyperText Markup Language"

- id: svg
  long: "Scalable Vector Graphics"
```
