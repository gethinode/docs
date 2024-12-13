---
author: Mark Dumay
title: Docs
date: 2024-08-14
description: The docs shortcode captures a code snippet from a supported input file.
layout: docs
icon: fas bookmark
tags: component
---

## Overview

{{< release version="v0.8.0" >}}

The `docs` shortcode captures a code snippet from a `toml` or `scss` input file. It scans for named markers in a local file. The snippet between the two markers is then rendered using syntax highlighting.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* docs name="main" file="config/_default/hugo.toml" id="docs-collapse-1" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

## Arguments

> [!IMPORTANT]
> The definition of the default `id` field fails when embedding (multiple) `docs` shortcodes in an [example]({{% relref "example" %}}). Provide an explicit, unique `id` to prevent cross-interference.

The shortcode supports the following arguments:

{{< args structure="docs" group="shortcode" >}}

## Input files

The `docs` shortcode supports `.toml` and `.scss` file formats. Use a marker to denote the start and end of a code snippet:

- For `.toml` files, use `# toml-docs-start` and `# toml-docs-end` followed by the snippet name
- For `.scss` files, use `// scss-docs-start` and `// scss-docs-end` followed by the snippet name

Click on one the tabs to see a full example of an input file.

{{% comment %}}<!-- markdownlint-disable MD031 -->{{% /comment %}}
{{< nav type="tabs" id="tabs-1" >}}
  {{< nav-item header="toml" show="true" >}}
```toml
# toml-docs-start main
title = "Hinode"
copyright = "Copyright © 2024 Mark Dumay."
enableGitInfo = true
# toml-docs-end main
```
  {{< /nav-item >}}
  {{< nav-item header="scss" >}}
```scss
// scss-docs-start breadcrumb
.breadcrumb {
    padding-top: 0.3 * $navbar-offset;
}
// scss-docs-end breadcrumb
```
  {{< /nav-item >}}
{{< /nav >}}
{{% comment %}}<!-- markdownlint-enable MD031 -->{{% /comment %}}

## Examples

Change the style and language of your code snippet with shortcode arguments.

### Default code snipppet

Use the `name` and `file` arguments to refer to a code snippet of a file. By default, the shortcode uses the site's `basePath` (see [page layout]({{% relref "layout#configuration-3" %}}) for more information).

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* docs name="main" file="config/_default/hugo.toml" id="docs-collapse-2" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

Provide a path that starts with `./` to use the path of the repository as base path instead.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* docs name="styling" file="./assets/scss/theme/theme.scss" id="docs-collapse-3" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Collapsed code snipppet

Set `show` to `false` to hide the code snippet on page load. The code is revealed when clicking the tab control.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* docs name="styling" show="false" file="./assets/scss/theme/theme.scss" id="docs-collapse-4" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Code snipppet with filename only

Set `full` to `false` to show the filename only.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< example lang="hugo" >}}
{{</* docs name="styling" full="false" file="./assets/scss/theme/theme.scss" id="docs-collapse-5" */>}}
{{< /example >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}
