---
author: Mark Dumay
title: Image
date: 2023-04-17
description: Use the image shortcode to display a responsive image with a specific aspect ratio.
layout: docs
---

## Overview

Use the `image` shortcode to display a responsive image with a specific aspect ratio. The source link can refer to either an image available in the `/assets/img` folder of your site or a public web location. The shortcode renders the image as a so-called [image set]({{< param "links.mozilla_image" >}}) to optimize the image for different screen sizes and resolutions. Behind the scenes, Hugo renders the images in `WebP` format and stores them in a local folder (`resources` or `public`). The images are processed using the quality setting specified in the `[imaging]` section of the main [config file]({{< param "links.hugo_imaging" >}}) (defaults to 75). Supported image types are `.png`, `.jpeg`, `.gif`, `.tiff`, `.bmp`, and `.webp`. A fallback image of type `.jpeg` is provided for older browsers.

{{< alert >}}
The shortcode supports vector images too (identified by their extension `.svg`). However, these images are not processed but rather used as is.
{{< /alert >}}

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument  | Required | Description |
|-----------|----------|-------------|
| src       | Yes | Required url of the image, e.g. "img/responsive.png". Images with multiple color modes are expected to have a basename that ends with either `-dark` or `-light`. |
| ratio     | No  | Optional aspect ratio of the image, either "1x1", "4x3", "16x9", or "21x9". If set, the image is resized and cropped to match the ratio. Vector images are resized instead of cropped to fit within the given dimension. |
| class     | No  | Optional class attribute of the inner `img` element, e.g. "rounded". |
| title     | No  | Optional alternate text of the image. |
| caption   | No  | Optional figure caption. |
| mode      | No  | Optional flag indicating if the image should support color modes. If set, the shortcode searches for images that having a matching color-mode suffix such as `light` or `dark`.|
{{< /table >}}

## Example

As an example, the following shortcode displays an image with its original aspect ratio. The image is adjusted for the active color mode. The shortcode processes two images behind the scenes, being `img/responsive-light.png` and `img/responsive-dark.png`. Only the image that matches the current color mode is shown.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="img/responsive.png" mode="true" caption="Image caption" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
