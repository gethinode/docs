---
title: Images and figures
description: Use the image shortcode to display a responsive image with optional caption.
date: 2024-08-16
layout: docs
---

> [!IMPORTANT]
> Hinode uses render hooks since release {{< release version="v0.26.0" short="true" type="link" >}} to parse markdown images. Be sure to set {{< link "hugo_parser_image" >}}parser.wrapStandAloneImageWithinParagraph{{< /link >}} to `false` to correctly render images and figures.

Hinode uses Hugo's {{< link hugo_image >}}image processing{{< /link >}} to preprocess responsive images on the server side. By taking advantage of so-called {{< link mozilla_image >}}image sets{{< /link >}}, the client's browser can decide which image to download whilst reducing the download size. You also utilize external image processors, see {{< link "/docs/configuration/digital-asset-managers" />}} for more details.

## Images

As an example, the following shortcode displays an image with rounded corners and a 21x9 aspect ratio. The [image shortcode documentation]({{% relref "image" %}}) provides more details.

> [!IMPORTANT]
> Be sure to store your local images in the `assets` folder to take advantage of the image processing features. Images stored in the `static` folder are not processed.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="img/flowers.jpg" ratio="21x9" class="rounded" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

You can also reference remote images by specifying an URL. Hinode downloads the image to the server and stores the processed images in the local `resources` folder (during debugging) or `public` folder (during build).

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="https://picsum.photos/id/56/2880/1920" ratio="1x1" class="rounded" wrapper="mx-auto w-25" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

You can also use native Markdown to include an image since release {{< release version="v0.26.0" short="true" type="link" >}}.

{{< example lang="hugo" >}}
![Flowers](/img/flowers.jpg)
{class="rounded col-6 col-md-3" ratio="4x3" portrait=true wrapper="text-center"}
{{< /example >}}

## Figures

Similar to the [images support]({{% relref "#images" %}}), you can add a caption to display below the image. Add the argument `caption` to include a figure caption.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="img/coffee.jpg" ratio="21x9" caption="Figure caption" class="rounded" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

You can also use native Markdown to include a figure since release {{< release version="v0.26.0" short="true" type="link" >}}.

{{< example lang="hugo" >}}
![Flowers](/img/flowers.jpg "Figure caption")
{class="rounded col-6 col-md-3" ratio="4x3" portrait=true wrapper="text-center"}
{{< /example >}}
