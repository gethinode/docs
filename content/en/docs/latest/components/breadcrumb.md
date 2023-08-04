---
author: Mark Dumay
title: Breadcrumb
date: 2023-08-03
description: Use the breadcrumb shortcode to display the current page’s location within the site's navigational hierarchy.
layout: docs
icon: fas bread-slice
tags: component
---

## Overview

Use the `breadcrumb` shortcode to display the current page’s location within the site's navigational hierarchy. As an example, the following shortcode displays a breadcrumb for the current page.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* breadcrumb path="breadcrumb" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| path        | No       | Optional path of the page, defaults to current page.
{{< /table >}}

## Frontmatter configuration

{{< release version="v0.14.1" >}}

Hugo has the option to {{< link hugo_build >}}exclude certain pages from publishing{{< /link >}} using the build options in the page's frontmatter. These pages do not have a permalink, but are still part of the breadcrumb. You can set the optional paramater `redirect` to an alternative path if needed.

The following example is taken from the `content/en/docs/_index.md` page, which is the list page of the `docs` section in the {{< link repository_docs >}}Hinode docs repository{{< /link >}}. The docs section itself is redirected to the page `docs/getting-started/introduction/` using an alias in the frontmatter of the introduction page. The `redirect` parameter in the `_index.md` page instructs the breadcrumb to create a redirect to that same alias.

```yaml
---
title: Docs
redirect: "/docs/"
_build:
  list: false
  render: false
---
```

## Customization

The file `assets/scss/components/_breadcrumb.scss` defines the styling of the _breadcrumb. It adds spacing to avoid the breadcrumb is hidden by the (fixed) [main navigation]({{< relref "navigation#main-navigation" >}}):

{{< docs name="breadcrumb" file="assets/scss/components/_breadcrumb.scss" >}}
