---
author: Mark Dumay
title: Secure
date: 2023-04-24
description: Use predefined server settings to ensure your site is secure by default.
weight: 5
# icon: fas lock
thumbnail: /img/observatory-light.png
tilted: true
layout: minimal
---

As a static site, Hinode is secure by design. Unlike dynamic sites, Hinode does not use databases or application servers to serve its content. This greatly reduces the risk associated with hosting public sites. In addition, Hinode uses strict security policies by default. This results in an A+ score from [Mozilla Observatory]({{< param "links.observatory" >}}).

{{< button relref="server" >}}
    Check the content security policy
{{< /button >}}
