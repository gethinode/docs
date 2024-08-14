---
title: Digital Asset Managers
description: Configure Digital Asset Managers to delegate the transformation of images
date: 2024-08-14
layout: docs
modules: katex
---

{{< release version="v0.24.0 " >}}

Hinodes uses Hugo’s {{< link "../content/images-and-figures" >}}image processing{{< /link>}} to preprocess images on the server side. Hugo uses caching to reduce the build time. Despite the caching techniques, the image processing can take significant time, especially on larger sites. An alternative approach is to use a dedicated Digital Asset Manager. Most managers offer an API to transform images on the fly. The following paragraphs explain how to enable these Digital Asset Managers.

## Configuring a DAM

Hinode supports {{< link cloudinary>}}Cloudinary{{< /link >}}, {{< link imagekit>}}ImageKit.io{{< /link >}}, and {{< link imgix>}}Imgix{{< /link >}} as Digital Asset Manager (DAM). You can configure these managers in your site parameters. Link a DAM to a specific URL by providing a regular expression that matches the domain name of the URL. For example, the `host = cloudinary` matches the image `https://res.cloudinary.com/demo/image/upload/dog.webp` to {{< link cloudinary>}}Cloudinary{{< /link >}}. When no match is found, Hinode uses Hugo's image processing instead. Hinode uses the following configuration by default:

{{< docs name="images" file="config/_default/params.toml" >}}

## Content Security Policy

Hinode has enabled access for Cloudinary, ImageKit.io, and Imgix by default. The following settings are set in `config/_default/server.toml`. Similar settings are defined in the `netlify.toml` file provided in the repository’s root when deploying to {{< link netlify >}}Netlify{{< /link >}}. Revise the Content Security Policy as needed.

```yaml
img-src:    https://*.imgix.net https://*.imagekit.io https://*.cloudinary.com
```

## Supported providers

You can include DAM-enabled images and figures using the regular {{< link "../components/image" />}} shortcode. Simply include the image's URL in the `src` attribute. The next paragraphs demonstrate the various available Digital Asset Managers.

### Cloudinary

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="https://res.cloudinary.com/demo/image/upload/dog.webp"
    ratio="1x1" caption="Cloudinary image" wrapper="col-6 mx-auto" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### ImageKit.io

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="https://ik.imagekit.io/demo/default-image.jpg"
    ratio="1x1" caption="ImageKit.io image" wrapper="col-6 mx-auto" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Imgix

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="https://assets.imgix.net/examples/bluehat.jpg"
    ratio="1x1" caption="imgix image" wrapper="col-6 mx-auto" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Rewriting origin URLs

You can rewrite the URL of the image when using a different origin server. Currently, this feature is supported by the adapter for ImageKit.io. For example, when using Azure Blob Storage as origin, your input URL may look like the following:

```math
\texttt{https://}

\rlap{$
    \underbrace{
        \vphantom{g}
        \phantom{\texttt{account.blob.core.windows.net}}
    }_{\text{origin host}}
$}

\texttt{account.blob.core.windows.net/}

\rlap{$
    \underbrace{
        \vphantom{g}
        \phantom{\texttt{container}}
    }_{\text{container}}
$}

\texttt{container/}

\rlap{$
    \underbrace{
        \phantom{\texttt{dir/filename.jpg}}
    }_{\text{path to asset}}
$}

\texttt{dir/filename.jpg}
```

Adjust your CDN configuration in the site's parameters to include the hostname, account, and container of your origin server. Next, set `rewrite = true` to trigger the adapter to rewrite your origin URL:

```toml
[images]
    [images.imagekit]
        host = "imagekit|windows"
        account = "account"
        container = "container"
        rewrite = true
```

The resulting URL will look like this (notice the container name has been dropped from the URL):

```math
\texttt{https://}

\rlap{$
    \underbrace{
        \phantom{\texttt{ik.imagekit.io}}
    }_{\text{target host}}
$}

\texttt{ik.imagekit.io/}

\rlap{$
    \underbrace{
        \vphantom{g}
        \phantom{\texttt{account}}
    }_{\text{account}}
$}

\texttt{account/}

\rlap{$
    \underbrace{
        \phantom{\texttt{dir/filename.jpg}}
    }_{\text{path to asset}}
$}

\texttt{dir/filename.jpg}
```

## Adding a custom DAM

> [!TIP]
> Configuring an additional Digital Asset Manager? Please consider to contribute your adapter to the open-source community of Hinode. Review the {{< link "../getting-started/contribute/">}}contributing guidelines{{< /link >}} to find out more.

You can configure additional Digital Asset Managers by adding a adapter to the folder `layouts/partials/assets/adapters/`. For example, the adapter for {{< link cloudinary>}}Cloudinary{{< /link >}} is available in `cloudinary.html`. Hinode supports basic image transformations such as adjusting the dimensions and cropping. Hinode passes the following arguments to each recognized adapter:

{{< args structure="image-adapter" group="partial" >}}
