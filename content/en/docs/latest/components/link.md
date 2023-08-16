---
author: Mark Dumay
title: Link
date: 2023-08-16
description: Use the link shortcode to add a managed link to your page content.
layout: docs
icon: fas link
tags: component
---

## Overview

{{< alert >}}
<strong>New in v0.18.3 -</strong> The link shortcode now uses the current page context to identify references to a local page. It now also supports page anchors identified by `#`.
{{< /alert >}}

{{< release version="v0.16.8" >}}

Since Hinode `v0.16.8` you can add a managed link to your page content using a configurable shortcode. Managed links refer to an external URL that is centrally maintained in the site's parameters. The shortcode also supports internal links that refer to a regular page.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* link mozilla_image /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports a single unnamed parameter, or various named parameters. The unnamed parameter is recognized as a url if it starts with `http`, else it is treated as either a named link or **relative** internal reference (in that order). Any inner text is rendered as the link title, otherwise it uses the host name (for external links), link title (for internal links), or anchor name (for any local references containing a `#`). The shortcode supports the following named arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| name        | No       | Optional name of the link maintained in the "links" section of the site's parameters. If omitted, the "url" argument should be provided instead. |
| url         | No       | Optional url of the link, including the scheme ("http" or "https"). If omitted, the "name" argument should be provided instead. |
| cue         | No       | Optional flag to indicate if an external link should show a visual cue, defaults to setting "main.externalLinks.cue" in the site's parameters. |
| tab         | No       | Optional flag to indicate if an external link should open in a new tab, defaults to setting "main.externalLinks.tab" in the site's parameters. |
| case        | No       | Optional flag to indicate if the retrieved title (e.g. no inner text is provided) of an internal link should use its original case, defaults to true. If false, the title is set to lower case. |
| class       | No       | Optional class attribute of the anchor element. |
{{< /table >}}

## Site configuration

You can [configure the behavior of managed links]({{< relref "layout#extended-configuration" >}}) in the `/config/_default/params.toml` file in the `main.externalLinks` section. Manage the named links in the `links` section of the same file:

```toml
[links]
    mozilla_image = "https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images"
```

## Examples

Use either named links or common url's to generate a managed link. If a link name cannot be found, Hinode tries to find the reference relative to the current page instead. The reference may include a cross-reference `#`, although the reference itself is not validated.

Use the `cue` and `tab` arguments to override the default behavior of displaying and opening external links. Omit the link's content to generate a reference to the host (for external links) or the target page's title (for internal links). Lastly, set `case` to false to set the obtained page title to lower case.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}

- {{</* link mozilla_image >}}Named link with default settings{{< /link */>}}
- {{</* link name=mozilla_image cue=false tab=false >}}Named link opening in current tab w/o icon{{< /link */>}}
- {{</* link name=mozilla_image cue=true tab=true >}}Named link opening in new tab with icon{{< /link */>}}
- {{</* link mozilla_image /*/>}}
- {{</* link "https://developer.mozilla.org" >}}External link{{< /link */>}}
- {{</* link "../getting-started/introduction" >}}Internal link with title{{< /link */>}}
- {{</* link "../about/license" /*/>}}
- {{</* link url="../about/license" case=false /*/>}}
- {{</* link "#arguments" /*/>}}
- {{</* link "image#examples" /*/>}}

{{< /example >}}
<!-- markdownlint-enable MD037 -->
