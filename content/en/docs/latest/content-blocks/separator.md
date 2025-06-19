---
_schema: default
title: Separator
description: >-
  Adds a horizontal section separator. The separator spans the entire page from
  edge to edge on smaller devices. On larger screens, the line is bound by the
  maximum container width that contains the section.
icon: fas divide
---

> [!IMPORTANT]
> Content blocks are a new feature that is still in [beta](https://github.com/gethinode/hinode/issues/1430#issuecomment-2988697852). The implementation is subject to change. The documentation on this website is still being worked on.

## Overview

The `separator` content block renders a horizontal line to separate sections. The separator spans the entire page from edge to edge on smaller devices. On larger screens, the line is bound by the maximum container width that contains the section.

<!-- markdownlint-disable MD037 -->
{{< example-bookshop lang="bookshop" >}}

```yml
- _bookshop_name: separator
```

{{< /example-bookshop >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The content block supports the following arguments:

{{< args bookshop-separator >}}
