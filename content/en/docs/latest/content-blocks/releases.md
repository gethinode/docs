---
_schema: default
title: Releases
description: Use the releases content block to display a timeline with release information.
icon: fas timeline fa-rotate-90
---

> [!IMPORTANT]
> Content blocks are a new feature that is still in [beta](https://github.com/gethinode/hinode/issues/1430#issuecomment-2988697852). The implementation is subject to change. The documentation on this website is still being worked on.

## Overview

The `releases` content block displays a timeline with release information.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: releases
  heading:
    preheading: Preheading
    title: Heading
    content: Content
    align: start
    width: 8
  background:
    color: primary
    subtle: true
  data: timeline-example
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The content block supports the following arguments:

{{< args bookshop-releases >}}
