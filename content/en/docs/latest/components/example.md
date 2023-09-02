---
author: Mark Dumay
title: Example
date: 2023-09-02
description: The example shortcode displays a code example and renders a preview of the same input.
layout: docs
icon: fa lightbulb
tags: component
---

## Overview

{{< release version="v0.8.0" >}}

The `example` shortcode displays a code example and renders a preview of the same input. The shortcode accepts the {{< link hugo_chroma >}}languages supported by Hugo's highlight function{{< /link >}}.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* command */>}}
export MY_VAR=123
{{</* /command */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument     | Required | Description |
|--------------|----------|-------------|
| id           | No | Optional identifier of the element's container. |
| lang         | No | Language used to display the code. Use "hugo" to process Hugo (escaped) shortcodes, default value is "html". |
| show_markup  | No | If the markup should be output in the HTML, defaults to "true". |
| show_preview | No | If the preview should be output in the HTML, defaults to "true". |
| class        | No | Optional class attributes of the element's container. |
{{< /table >}}

## Examples

Change the style and language of your code snippet with shortcode arguments.

### Hugo code example

Set the `lang` argument to `hugo` to render a Hugo code example. Be sure to escape the input with `/*` and `*/` delimiters to avoid rendering issues.

#### Preview

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo">}}
{{</* command */>}}
export MY_VAR=123
{{</* /command */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

#### Input

```go-html-template
{{</* example lang="hugo" */>}}
    {{</*/* command */*/>}}
    export MY_VAR=123
    {{</*/* /command */*/>}}
{{</* /example */>}}
```

### Hidden markup

Set `show_markup` to `false` to hide the code input and to display the preview only.

#### Preview

{{< example lang="hugo" show_markup=false >}}
This is a lead paragraph. It stands out from regular paragraphs.
{.lead}
{{< /example >}}

#### Input

```go-html-template
{{</* example show_markup=false */>}}
This is a lead paragraph. It stands out from regular paragraphs.
{.lead}
{{</* /example */>}}
```

### Hidden preview

Set `show_preview` to `false` to hide the output and to display the code input only.

#### Preview

{{< example lang="hugo" show_preview=false >}}
This is a lead paragraph. It stands out from regular paragraphs.
{.lead}
{{< /example >}}

#### Input

```go-html-template
{{</* example show_preview=false */>}}
This is a lead paragraph. It stands out from regular paragraphs.
{.lead}
{{</* /example */>}}
```
