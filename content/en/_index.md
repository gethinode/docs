---
author: Mark Dumay
title: A Hugo Theme
description: Hinode is a clean documentation and blog theme for your Hugo site based on Bootstrap 5.
content_blocks:
  - _bookshop_name: hero
    heading:
      title: Build a static website. Fast and flexible.
      align: start
      content: >-
        Powered by [Hugo](https://gohugo.io), the world’s fastest framework for building websites, Hinode is fast and flexible. Hinode lets you create a blog, documentation site, or landing page that scales with your needs.
      width: 6
    align: end
    order: last
    illustration:
      image: /img/logo_icon.svg
      # image: /img/logo_var.svg#logo
      width: 6
    links:
      - title: Getting Started
        url: docs/getting-started/introduction/
        icon: fas book-open
        outline: true
      - title: Live Demo
        url: https://demo.gethinode.com
        icon: fas display
        outline: true
    orientation: horizontal
    cover: true
  
  - _bookshop_name: articles
    heading:
      title: Flexible & ready-to-use
      content: >-
        Hinode provides many ready-to-use [content blocks](/docs/content-blocks) and [components](/docs/components) to quickly develop your site. With native support for [Hugo modules](https://gohugo.io/hugo-modules/), you can easily extend your site to your liking.
      align: center
      width: 8
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
    justify: center

  - _bookshop_name: video-message
    heading:
      title: Developer-friendly and secure
      content: >-
        By separating content from presentation, your Hinode site is easily managed and versioned. Hinode provides a modern build system that is flexible and robust.
      align: center
      width: 8
    background:
      color: body-tertiary
    orientation: horizontal
    video:
      provider: youtube
      media-id: "w7Ft2ymGmfc"
      autoplay: false
    messages:
      - title: Structured
        icon: fas sitemap
        content: >-
          Hinode uses a structured approach to [organize and present content](https://gohugo.io/content-management/organization/). This increases usability and [Lighthouse scores](https://pagespeed.web.dev/report?url=https%3A%2F%2Fdemo.gethinode.com%2F).
      - title: Automated
        icon: fas robot
        content: >-
          Hinodes fully supports [npm](https://www.npmjs.com/) and [GitHub actions](https://github.com/features/actions) to ensure your deployed site is always up-to-date.
      - title: Secure
        icon: fas check
        content: >-
          As a static site, Hinode is secure by design. In addition, Hinode uses strict security policies by default. This results in an [A+ security score](https://observatory.mozilla.org/analyze/demo.gethinode.com).
    justify: center

  - _bookshop_name: cards
    heading:
      title: Powered by open source
      content: >-
        Hinode builds upon several open-source packages, such as Hugo, Bootstrap, and Bookshop. Want to make Hinode even better? Hinode is [open to contributions](/docs/getting-started/contribute/).
      align: center
      width: 8
    orientation: stacked
    elements:
      - title: Hugo
        icon: fab markdown
        content: >-
          [Hugo](https://gohugo.io) is a static website generator written in the Go language. It is optimized for speed, ease of use, and configurability. 
      - title: Bootstrap
        icon: fab bootstrap
        content: >-
          [Bootstrap](https://getbootstrap.com) is a popular, open-source web development framework. Is uses a mobile-first approach to create responsive websites.
      - title: Bookshop
        icon: fas book-open
        content: >-
          [Bookshop](https://github.com/CloudCannon/bookshop) is a component development workflow for static websites. It embeds the configuration of content blocks within the page's frontmatter.
    justify: center
---

