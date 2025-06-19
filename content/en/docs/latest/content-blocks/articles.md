---
_schema: default
title: Articles
description: Use the articles content block to show a group of article cards.
icon: fas grip
---

> [!IMPORTANT]
> Content blocks are a new feature that is still in [beta](https://github.com/gethinode/hinode/issues/1430#issuecomment-2988697852). The implementation is subject to change. The documentation on this website is still being worked on.

## Overview

The `articles` content block renders a group of article cards.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

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

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The content block supports the following arguments:

{{< args bookshop-articles >}}
