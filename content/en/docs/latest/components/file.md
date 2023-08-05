---
author: Mark Dumay
title: File
date: 2023-08-05
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

{{< alert type="danger" >}}
The definition of the default `id` field fails when embedding (multiple) `file` shortcodes in an [example]({{< relref "example" >}}). Provide an explicit, unique `id` to prevent cross-interference.
{{< /alert >}}

The shortcode supports the following arguments:

{{< table >}}
| Argument  | Required | Description |
|-----------|----------|-------------|
| path      | Yes      | Path of the input file. The path is relative to the `basePath` defined in the `docs` section of the site's parameters (see [page layout]({{< relref "layout#configuration-3" >}})). If the file starts with `./`, the path of the repository is used as base path instead. |
| lang      | No       | Language to be used by the syntax highlighter. When no language is specified, the shortcode derives the language from the input file's extension. |
| show      | No       | If unset, shows the panel with the code snippet in collapsed state. By default, the panel is expanded. |
| full      | No       | If unset, shows the filename only. By default, the full relative path is shown. |
| id        | No       | Optional id of the collapse panel, defaults to "file-collapse-n" with a sequential number n starting at 1. |
| class     | No       | Optional class argument of the tab control. |
{{< /table >}}

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

Set `show` to `false` to hide the file content on page load. The content is reveiled when clicking the tab control.

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
