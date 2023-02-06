---
author: Mark Dumay
title: Fast
date: 2023-02-05
description: Use configurable templates to generate content that can deployed virtually everywhere.
weight: 2
icon: fas gauge-simple-high
layout: minimal
---

Hinode uses [Hugo]({{< param "links.hugo" >}}), a popular open-source generator, to generate a static website. Static websites do not require a database and application server to display web pages. Instead, they use templates to generate static <abbr title="HyperText Markup Language">HTML</abbr> pages for provided content. The content is often prepared in Markdown or HTML. See Hugo's documentation for a full overview of supported [content formats]({{< param "links.hugo_content" >}}). The resulting website can be [deployed]({{< relref "hosting-and-deployment">}}) virtually anywhere. Unless you require specific dynamic functionality, static websites are a great choice for many applications, including blogs, documentation sites, and landing pages.

{{< button relref="hosting-and-deployment" >}}
    See the deployment options
{{< /button >}}
