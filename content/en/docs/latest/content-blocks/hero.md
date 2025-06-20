---
_schema: default
title: Hero
description: >-
  Shows a hero banner on the top of the page. The section supports a background
  image with an overlay to improve contrast. The hero includes a headline and
  optional breadcrumb for site navigation.
icon: fas h
---

> [!IMPORTANT]
> Content blocks are a new feature that is still in [beta](https://github.com/gethinode/hinode/issues/1430#issuecomment-2988697852). The implementation is subject to change. The documentation on this website is still being worked on.

## Overview

The `hero` content block renders a page hero, typically at the top of the page. Set `cover` to true to display a full-page hero.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: hero
  heading:
    title: Title
    align: start
    content: Hero content
    width: 8
  background:
    backdrop: /assets/img/nat-9l98kFByiao-unsplash.jpg
  breadcrumb: true
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The content block supports the following arguments:

{{< args bookshop-hero >}}

## Examples

Change the style of your hero with the available arguments.

### Illustrated Hero

Apply an `illustration` and set `orientation` to `horizontal` to create an illustrated, horizontal hero.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: hero
  heading:
    title: Title
    align: start
    content: Hero content
    width: 8
  background:
    backdrop: /assets/img/nat-9l98kFByiao-unsplash.jpg
  order: last
  illustration:
    image: /img/logo-mono.svg
    mode: true
  orientation: horizontal
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

### Full-Screen Hero

Set `cover` to `true` to add a full-screen hero. A typical use case is to apply such a full-screen element to the top of a landing page.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: hero
  heading:
    title: Title
    align: start
    content: Hero content
    width: 8
  background:
    backdrop: /assets/img/nat-9l98kFByiao-unsplash.jpg
  align: center
  order: last
  illustration:
    image: /img/logo-mono.svg
    mode: true
  orientation: horizontal
  cover: true
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->
