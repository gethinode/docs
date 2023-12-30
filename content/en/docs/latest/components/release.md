---
author: Mark Dumay
title: Release
date: 2023-12-30
description: Use the release shortcode to indicate the availability of a specific feature in a tagged release.
layout: docs
icon: fas code-pull-request
tags: component
---

## Overview

{{< release version="v0.14.1" >}}

Since Hinode `v0.14.1` you can indicate the availability of a specific feature. The `release` shortcode renders a button that links to the specific release. Use the state to indicate if the feature is new or deprecated.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* release version="v0.14.1" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< args structure="release" group="shortcode" >}}

## Site configuration

Ensure the `release` parameter is set in the [site's configuration]({{< relref "layout#configuration-3">}}).

## Examples

Change the style of your release button using the available arguments.

### New feature

Indicate a new feature by using default values for the optional arguments.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* release version="v0.14.1" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Deprecated feature

Indicate a deprecated feature by setting `state` to `deprecated`.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* release version="v0.14.1" state="deprecated" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Short feature

Shorten the button title by setting `short` to `true`.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* release version="v0.14.1" short="true" */>}}
{{</* release version="v0.14.1" short="true" state="deprecated" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
