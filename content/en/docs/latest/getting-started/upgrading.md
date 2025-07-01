---
title: Upgrading to Hinode v1
description: Upgrade your existing Hinode site to take advantage of content blocks introduced in v1.
date: 2025-06-23
layout: docs
---

{{< release version="v1.0.0" >}}

> [!NOTE]
> Upgrading to the modules introduced in Hinode v0.16? Check out [this page](upgrading-modules) instead.

Hinode v{{< release version="v1.0.0" short="true" link-type="link" >}} introduced a new approach to reusable page elements. It now also support the revised template system introduced by [Hugo v0.146.0](https://github.com/gohugoio/hugo/releases/tag/v0.146.0). This release of Hinode is a breaking change with all `0.x` releases. Review the core changes below on how to upgrade your existing site to the latest Hinode version. Please use [GitHub discussions](https://github.com/gethinode/hinode/discussions/1431) when encountering any challenges, or use the [issue tracker](https://github.com/gethinode/hinode/issues) for bug reports.

## Content Blocks

Hinode now supports reusable page elements called content blocks, such as a hero, about panel, or an FAQ. Hinode includes several ready-to-use content blocks. These content blocks replace the previous [page sections](/docs/configuration/layout/#page-sections). For example, the following content block renders a list of three article cards:

```yml
- _bookshop_name: articles
  heading:
    title: Guides
    align: start
  input:
    section: guides
    reverse: true
    sort: title
  hide-empty: false
  header-style: none
  more:
    title: More Guides
  padding: 0
  max: 3
  class: border-0 card-zoom card-body-margin
```

You will have to manually replace any obsolete page section with either an [articles content block](/docs/content-blocks/articles/) (when referring to a site section) or a [cards content block](/docs/content-blocks/cards/) (when using direct input).

## Structured Arguments

All partials, shortcodes, and utility functions now use a standardized approach to validate and initialize passed arguments. This greatly simplifies argument handling and ensures arguments are consistent across components. The argument names have been standardized too. They are centrally maintained within the [mod-utils](https://github.com/gethinode/mod-utils) module. As a result, several existing arguments have been deprecated. Hinode will log any deprecation warnings to the command line.

## Revised Template System

> [!IMPORTANT]
> Hinode is now fully compatible with the refreshed template system of [Hugo v0.146.0](https://github.com/gohugoio/hugo/releases/tag/v0.146.0). Although the Hugo team has made significant effort to make this template system backwards compatible, some compatibility issues are to be expected. Hinode has bumped all modules with a new major version to signal a breaking change.

Pages now use a simplified template for rendering. The core templates (`baseof.html`, `list.html`, and `single.html`) have been moved to the core `layouts` folder. The templates themselves have been refactored to simplify maintenance and customization. Partials now reside in `layouts/_partials` folder. Similarly, shortcode now use the `layouts/_shortcodes` folder. Move your custom templates, partials, and shortcodes to the correct folder to ensure Hinode renders them correctly.

Inline partials require special attention. When invoking an inline partial, the partial name should **not** include the prefix `partials` or `_partials`. For example, the `card.html` partial contains the following inline partial to render a card body:

```go-template
{{- define "_partials/inline/card-body.html" -}}
{{/* Partial code */}}
{{- end -}}
```

The following code to invoke this inline partial no longer works and results in an error:

```go-template
{{- partial "_partials/inline/card-body.html" -}}
```

Instead, drop the `_partials` prefix from the partial name:

```go-template
{{- partial "inline/card-body.html" -}}
```
