---
author: Mark Dumay
title: Persona
date: 2023-12-28
description: Use the persona shortcode to display a custom card.
layout: docs
icon: fas address-card
tags: component
---

## Overview

Use the persona shortcode to display a custom card. As an example, the following shortcode displays a persona card with a primary color.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* persona thumbnail="/img/creator-1x1.jpg" title="Creators" color="primary" */>}}
  As a content creator you value your independence. You like to take control of your
  online and offline presence. You want to focus on growing your audience, without
  limitations.

  Hinode gives you the tools to publish your blog in the way that you want. You have
  full ownership and control of your content. That is why content creators choose
  Hinode.
{{</* /persona */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

The shortcode supports the following arguments:

{{< args structure="persona" >}}
