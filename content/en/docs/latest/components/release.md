---
author: Mark Dumay
title: Release
date: 2023-08-04
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

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| version     | Yes      | Required version string, expects {{</* link semver >}}semver notation{{< /link */>}} with a "v" prefix. |
| state       | No       | Optional state, either "new" (default) or "deprecated". |
| short       | No       | Optional flag to indicate the release button should use short notation. |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

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
