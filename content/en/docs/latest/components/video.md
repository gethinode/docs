---
author: Mark Dumay
title: Video
date: 2024-08-28
aliases:
  - "youtube"
  - "vimeo"
description: Use the video shortcode to embed a responsive video on your site.
layout: docs
icon: fab youtube
tags: component
modules: ["vimeo"]
---

## Overview

> [!IMPORTANT]
> Hinode uses a strict Content Security Policy by default. Be sure your server configuration safe lists your video provider in the `frame-src` configuration, or your video will not show. You can modify the safe list in the {{< link "docs/advanced-settings/server-headers" />}}.

Use the `video` shortcode to embed a responsive video on your site. The shortcode currently supports three providers, being {{< link cloudinary>}}Cloudinary{{< /link >}}, {{< link vimeo>}}Vimeo{{< /link >}}, and {{< link youtube>}}YouTube{{< /link >}}. The last two providers also support shorthand notation. As an example, the following shortcode displays a Hugo quickstart guide:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* youtube w7Ft2ymGmfc */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args "video" >}}

## Configuration

Hinode supports {{< link cloudinary>}}Cloudinary{{< /link >}}, {{< link vimeo>}}Vimeo{{< /link >}}, and {{< link youtube>}}YouTube{{< /link >}} as video provider. You can configure these providers in your site parameters. Hinode uses the following configuration by default:

{{< docs name="videos" file="config/_default/params.toml" >}}

## Examples

Embed a responsive video by specifying the hosting provider.

### Video

As an example, the following shortcode displays an Elephants video hosted by Cloudinary. Cloudinary requires both an account name and a public ID of the video. You can provide the account name as shortcode argument, or {{< link "#configuration" >}}configure a default account name{{< /link >}} in the site's parameters.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* video provider="cloudinary" account="demo" media-id="elephants" autoplay=true */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Vimeo

> [!IMPORTANT]
> Since Hinode {{< release version="v0.27.3" short="true" link-type="link" >}} you need to explicitly add `vimeo` to your page's {{< link "docs/configuration/modules/#enabling-optional-modules" >}}optional modules{{</ link>}} to ensure compliance with the Content Security Policies. When setting {{< link hugo_vimeo_privacy >}}enableDNT{{< /link >}} to true, the Vimeo player will be blocked from tracking any session data, including all cookies and stats.

As an example, the following shortcode displays a Vimeo video. By setting `autotitle` to `true`, Hinode captures the video's title as defined by Vimeo and assigns this to the title of the video frame.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* vimeo media-id="55073825" autoplay=true autotitle=true */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### YouTube

> [!NOTE]
> In {{< link hugo_youtube_privacy >}}privacy-enhanced mode{{< /link >}}, YouTube will not store information about visitors on your website unless the user plays the embedded video.

As an example, the following shortcode displays a Hugo quickstart guide hosted by YouTube.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* youtube media-id="w7Ft2ymGmfc" autoplay=true autotitle=true */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
