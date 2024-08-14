---
author: Mark Dumay
title: File
date: 2024-08-14
description: The file shortcode prints the full content of any given file with syntax highlighting.
layout: docs
icon: fa file-lines
tags: component
---

## Overview

{{< release version="v0.16.0" >}}

The `file` shortcode prints and highlights the full content of a given input file. It recognizes the {{< link hugo_chroma >}}languages supported by Hugo's highlight function{{< /link >}}.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* file path="./config/_default/languages.toml" id="file-collapse-1" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

> [!IMPORTANT]
> The definition of the default `id` field fails when embedding (multiple) `file` shortcodes in an [example]({{< relref "example" >}}). Provide an explicit, unique `id` to prevent cross-interference.

The shortcode supports the following arguments:

{{< args structure="file" group="shortcode" >}}

## Examples

Change the style and language of your file preview with shortcode arguments.

### Default file preview

Use the `path` argument to print the content of a specific file. By default, the shortcode uses the site's `basePath` (see [page layout]({{< relref "layout#configuration-3" >}}) for more information).

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* file path="config/_default/languages.toml" id="file-collapse-2" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Provide a path that starts with `./` to use the path of the repository as base path instead.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* file path="./config/_default/languages.toml" id="file-collapse-3" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### Collapsed file preview

Set `show` to `false` to hide the file content on page load. The content is revealed when clicking the tab control.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* file show="false"  path="./config/_default/languages.toml" id="file-collapse-4" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

### File preview with filename only

Set `full` to `false` to show the filename only.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* file full="false" path="./config/_default/languages.toml" id="file-collapse-5" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
