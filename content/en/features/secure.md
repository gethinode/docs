---
author: Mark Dumay
title: Secure
date: 2023-02-06
description: Use predefined server settings to ensure your site is secure by default.
weight: 5
icon: fas lock
layout: minimal
---

{{< image src="img/observatory-light.png" class="mb-4 col-sm-12 col-lg-8 mx-auto border d-none-dark" >}}

{{< image src="img/observatory-dark.png" class="mb-4 col-sm-12 col-lg-8 mx-auto border d-none-light" >}}

As a static site, Hinode is secure by design. Unlike dynamic sites, Hinode does not use databases or application servers to serve its content. This greatly reduces the risk associated with hosting public sites. In addition, Hinode uses rather strict security policies by default. This results in an A+ score from [Mozilla Observatory]({{< param "links.observatory" >}}).

{{< button relref="layout" >}}
    Check the content security policy
{{< /button >}}
