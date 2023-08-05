---
author: Mark Dumay
title: Link
date: 2023-08-05
description: Use the link shortcode to add a managed link to your page content.
layout: docs
icon: fas link
tags: component
---

## Overview

{{< release version="v0.16.8" >}}

Since Hinode `v0.16.8` you can add a managed link to your page content using a configurable shortcode. Managed links refer to an external URL that is centrally maintained in the site's parameters. The shortcode also supports internal links that refer to a regular page.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* link mozilla_image /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports a single unnamed parameter, or various named parameters. The unnamed parameter is recognized as a named link if it does not contain any "/", otherwise it is treated as a url. Any inner text is rendered as the link title, otherwise it uses the host name (for external links) or page name (for internal links). The shortcode supports the following named arguments:

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

Use either named links or common url's to generate a managed link. Any unnamed link is recognized as internal reference to page when it contains at least one `/` character. Use the `cue` and `tab` arguments to override the default behavior of displaying and opening external links. Omit the link's content to generate a reference to the host (for external links) or the target page's title (for internal links). Lastly, set `case` to false to set the obtained page title to lower case.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}

- {{</* link mozilla_image >}}Named link with default settings{{< /link */>}}
- {{</* link name=mozilla_image cue=false tab=false >}}Named link opening in current tab w/o icon{{< /link */>}}
- {{</* link name=mozilla_image cue=true tab=true >}}Named link opening in new tab with icon{{< /link */>}}
- {{</* link mozilla_image /*/>}}
- {{</* link "https://developer.mozilla.org" >}}External link{{< /link */>}}
- {{</* link "/getting-started" >}}Internal link with title{{< /link */>}}
- {{</* link "/license" /*/>}}
- {{</* link url="/license" case=false /*/>}}

{{< /example >}}
<!-- markdownlint-enable MD037 -->
