---
author: Mark Dumay
title: Responsive
date: 2023-02-05
description: Support different devices and screen sizes using an adaptive approach.
weight: 1
icon: fas expand
layout: minimal
---

<div data-bs-theme="light">
light
</div>

<div data-bs-theme="dark">
dark
</div>

{{< button collapse="collapse-1" >}}
    Trigger panel
{{< /button >}}

{{< collapse id="collapse-1" class="p-3 border rounded" >}}
{{< image src="img/responsive_dark.png" class="pb-4" >}}
{{< /collapse >}}

{{< image src="img/responsive_light.png" class="pb-4" >}}



Hinode takes a mobile-first approach to ensure the site adapts to different devices and screen sizes. It is powered by [Bootstrap 5]({{< param "links.bootstrap" >}}), a powerful and popular frontend toolkit for web development.

{{< button relref="layout" >}}
    See the layout options
{{< /button >}}
