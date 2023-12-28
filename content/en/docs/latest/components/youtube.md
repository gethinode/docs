---
author: Mark Dumay
title: YouTube
date: 2023-12-28
description: Use the youtube shortcode to embed a responsive video on your site.
layout: docs
icon: fab youtube
tags: component
---

## Overview

Use the `youtube` shortcode to embed a responsive video on your site. Only the ID of the video is required. In {{< link hugo_youtube_privacy >}}privacy-enhanced mode{{< /link >}}, YouTube will not store information about visitors on your website unless the user plays the embedded video. As an example, the following shortcode displays a Hugo quickstart guide:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* youtube w7Ft2ymGmfc */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args "youtube" >}}
