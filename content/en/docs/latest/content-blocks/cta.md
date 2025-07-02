---
_schema: default
title: CTA
description: Use the CTA content block to display an action link with an optional contact.
icon: fas address-card
---

## Overview

The `cta` content block renders a call to action section. You can include an optional contact or provide your own content. By default, the `cta` uses a generic title and message. Set the `heading` attribute to override these values.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: cta
  contact: Betty White
  caption-url: #!
  background:
    color: primary
    subtle: true
  order: first
  links:
    - title: Get in touch
      url: '#!'
      icon: fas chevron-right
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The content block supports the following arguments:

{{< args bookshop-cta >}}

## Data format

> [!TIP]
> Make the background of the contact's image transparent to improve rendering in dark mode and light mode.

Define a file in the `data` folder that contains the contacts data. The format supports the following attributes:

| Attribute | Required | Description |
|-----------|----------|-------------|
| name      | Yes | Full name of the contact, e.g. `Betty White`. |
| preferred | No  | Preferred name of the contact, e.g. `Betty`. |
| image     | No  | Path or url of the image, e.g. `img/betty.png`. |
| function  | No  | Function title of the contact. |
| linkedin  | No  | URL of the contact's LinkedIn profile. |
| keywords  | No  | Keywords to associate with the contact. |
| biography | No  | Biography of the contact. |

The following snippet defines a single contact in `yml` format.

```yml
- name: Betty White
  preferred: Betty
  image: /img/jake-nackos-IF9TK5Uy-KI-unsplash.png
  function: UX Expert
  linkedin: https://www.linkedin.com
  keywords:
    - experience
  biography: >-
    Duis rutrum, justo eleifend sagittis facilisis, leo orci hendrerit elit, ac
    tristique nisl justo non neque.
```

## Examples

Change the style of your call to action block with the available arguments.

### Auto-populated

Set the `contact` name to auto-populate the `cta` fields using the available contact data.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: cta
  contact: Betty White
  caption-url: /docs/content-blocks/cta/
  background:
    color: primary
    subtle: true
  order: first
  links:
    - title: Get in touch
      url: '#!'
      icon: fas chevron-right
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

### Custom content

Define the `heading` and `illustration` attributes to create a custom CTA.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: cta
  heading:
    title: Join our webinar
    content: Join our webinar to discover how Hugo can help you create fast and secure websites.
    width: 8
  illustration:
    image: /img/nat-9l98kFByiao-unsplash.jpg
    ratio: 1x1
  background:
    color: primary
    subtle: true
  order: first
  links:
    - title: Register
      url: '#!'
      icon: fas chevron-right
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->