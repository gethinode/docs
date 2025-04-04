---
title: Partial development
description: Develop custom partials and shortcodes following Hinode's coding conventions.
date: 2024-01-03
layout: docs
---

Hinode supports more than 30 shortcodes. Many of these shortcodes wrap an predefined Bootstrap component, such as the {{< link "docs/components/button" />}} or {{< link "docs/components/tooltip" />}}. Custom shortcodes include a {{< link "docs/components/command-prompt" />}}, {{< link "docs/components/image" />}}, and {{< link "docs/components/timeline" />}}. Some of these components are maintained in a separate module, such as the {{< link "docs/components/animation" />}} or {{< link "docs/components/map" />}}. Hinode follows several conventions to standardize and streamline the development of shortcodes and partials. You are encouraged to use the same conventions, especially when contributing your own code for sharing.

## Shared partials

Hugo supports two kinds of reusable components, being partials and shortcodes. A shortcode can be referenced from within content files, such as Markdown. Partials can be referenced by layout files, other partials, and shortcodes too. You cannot reference a shortcode from a partial though. To enable reuse, Hinode has shifted the bulk of the implementation of many of its shortcodes to separate partials. These partials are maintained in the `layouts/partials/assets` folder. The related shortcode then simply references the partial.

As an example, consider the implementation of the {{< link "docs/components/breadcrumb" />}}. Hinode adds a breadcrumb to all pages (except the homepage) if enabled in the {{< link "docs/configuration/navigation#basic-configuration" >}}site parameters{{< /link >}}. The implementation is available in `layouts/partials/assets/breadcrumb.html`. The same component is also exposed as a shortcode, so it can be called from within a content page. The shortcode file `layouts/shortcodes/breadcrumb.html` includes the following statement to invoke the partial. The `page` argument passes the current page context to the underlying partial:

```go-template
{{ partial "assets/breadcrumb.html" (dict "page" .page) }}
```

## Nested shortcodes

Several shortcodes, such as the {{< link "docs/components/accordion" />}} and {{< link "docs/components/carousel" />}}, support the nesting of elements. For example, you can group multiple cards to align their heights. To enhance security, {{< link "docs/content/content-management#mixed-content" >}}Hinode does not process raw HTML content by default{{< /link >}}. However, the parent shortcode `card-group` does need to further process the HTML output generated by the individual cards. To facilitate this, Hinode uses {{< link "hugo_scratch" >}}scratch variables{{< /link >}} to pass trusted output from a child to its parent. These scratch variables are not accessible from within the content page, thus shielding them from any unwanted input.

Take a look at the `card` shortcode. It generates HTML content by invoking the underlying partial. If a parent is available (such as a `card-group` shortcode), it redirects or appends the partial output to the scratch variable `inner`. When no parent is available, the partial output is written to the default output stream instead. The partial output is trusted (note: the actual content processed as input by the `card` partial is **not trusted**) with the `safeHTML` pipeline instruction.

```go-template
{{ $output := partial "assets/card.html" (dict [...]) }}
{{ with .Parent }}
    {{ $current := .Scratch.Get "inner" }}
    {{ if $current }}
        {{ .Scratch.Set "inner" (print $current $output) }}
    {{ else }}
        {{ .Scratch.Set "inner" $output }}
    {{ end }}
{{ else }}
    {{ print $output | safeHTML }}
{{ end }}
```

Next, the parent `card-group` shortcode reads the scratch variable `inner` and passes this as an argument to the `card-group` partial. Each of the child `card` shortcodes should have processed the inner content. If any content remains, the `card-group` shortcode raises a warning and skips this input for further processing.

```go-template
{{ $inner := .Scratch.Get "inner" }}
{{ $input := trim .Inner " \r\n" }}
{{ if $input }}
    {{ $input = replace $input "\n" "\n  " }}
    {{ warnf "Unexpected inner content: %s\r\n      %s" .Position $input }}
{{ end }}

{{ partial "assets/card-group.html" (dict "page" .Page "cards" $inner [...]) }}
```

## Argument validation

{{< release version="0.22.0" >}}

Most shortcodes support multiple arguments to configure their behavior and to refine their appearance. These shortcodes share many of these arguments with an underlying partial. Hinode uses a standardized approach to validate these arguments. All arguments are formally defined in a separate data structure file. Hinode uses the {{< abbr YAML >}} format by default, although several formats are supported. The partial `utilities/IsInvalidArgs.html` (provided by the {{< link "repository_mod_utils" >}}mod-utils module{{< /link >}}) then uses this specification to validate all arguments. Refer to the documentation to review the {{< link "docs/components/args#data-format" >}}supported data format{{< /link >}}.

Let's consider the following example. The {{< link "docs/components/toast" />}} shortcode displays a dismissable message in the bottom-right corner of the screen. We can trigger it by assigning its unique identifier to a button.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* button toast="toast-example-1" */>}}Show toast{{</* /button */>}}

{{</* toast id="toast-example-1" header="First title" */>}}This is a toast message{{</* /toast */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

The toast shortcode displays the message `This is a toast message` provided as inner input. Additionally, it supports the following arguments:

{{< args structure="toast" group="shortcode" >}}

The toast shortcode invokes the underlying partial to render the actual HTML output. The partial supports similar arguments, but expects the inner content to be passed as argument `message` instead. The following file formalizes these specifications:

{{< file path="./_vendor/github.com/gethinode/hinode/data/structures/toast.yml" full="false" >}}

The shortcode uses the following code to validate its arguments, excluding the `message` argument that belongs to the `partial` group. When an error occurs, the shortcode logs an error message with a reference to the context `.Position`.

```go-template
{{ if partial "utilities/IsInvalidArgs.html" (dict "structure" "toast" "args" .Params "group" "shortcode") }}
    {{ errorf "Invalid arguments: %s" .Position -}}
    {{ $error = true }}
{{ end }}
```

The underlying partial uses a similar call. Notable differences are the validated arguments (`.` instead of `.Params`) and the `group` (`partial` instead of `shortcode`). Partials are not aware of their context, so a generic error is logged instead.

```go-template
{{ if partial "utilities/IsInvalidArgs.html" (dict "structure" "toast" "args" . "group" "partial") }}
    {{- errorf "partial [assets/toast.html] - Invalid arguments" -}}
    {{ $error = true }}
{{ end }}
```
