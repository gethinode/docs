---
title: Links and cross-references
description: Generate internal links and external links using a combination of Markdown and Hugo shortcodes.
date: 2024-02-19
layout: docs
---

<!-- TODO: expand -->

## Internal links

Hugo provides the shortcode `ref` to link to another page within the site. The shortcode returns an absolute path. You can provide the document path as input. If you omit the leading `/`, the page is first resolved relative to the current page, then to the remainder of the site. Review {{< link hugo_links >}}Hugo's documentation{{< /link >}} for more examples and advanced options.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
[Tables]({{</*ref "tables" */>}})

[About]({{</*ref "credits" */>}})
{{< /example >}}
<!-- markdownlint-enable MD037 -->

Similar to the `ref` shortcode, Hugo provides the shortcode `relref` to return a path relative to the current page.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
[Tables]({{</*relref "tables" */>}})

[About]({{</*relref "credits" */>}})
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Cross-references

When using Markdown document types, Hugo generates element IDs for every heading on a page. Spaces are replaced with `-`. For example:

```markdown
## An example reference
```

produces the following HTML:

```html
<h2 id="an-example-reference">An example reference</h2>
```

You can add a cross-reference to the section heading by specifying the generated ID as input for the `ref` and `relref` shortcodes, preceded by a `#`.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
[Reference]({{</* ref "#reference" */>}})

[Reference]({{</* relref "#reference" */>}})
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## External links

Hugo supports basic Markdown to create links to external websites. The following sections explain the various options.

### Basic links

Hugo supports basic Markdown to create links to external websites. To create a link, enclose the link text in brackets (e.g., `[Duck Duck Go]`) and then follow it immediately with the URL in parentheses (e.g., `(https://duckduckgo.com)`).

{{< example lang="markdown" >}}
My favorite search engine is [Duck Duck Go](https://duckduckgo.com).
{{< /example >}}

### URLs and email addresses

To quickly turn a URL or email address into a link, enclose it in angle brackets.

{{< example lang="markdown" >}}
<https://www.markdownguide.org>

<fake@example.com>
{{< /example >}}

### Reference-style links

Instead of using parentheses, you can use brackets to link to a predefined address. The following example uses a named reference to link to the website of Font Awesome.

{{< example lang="markdown" >}}
[Font Awesome][fontawesome]

[fontawesome]: https://fontawesome.com
{{< /example >}}

### Managed links

Hinode uses `config/_default/params.toml` to manage links to external addresses in a single place. You can [use the link shortcode generate a managed link]({{< relref "link" >}}). The following snippet of `config/_default/params.toml` defines the link address for `fontawesome`:

```toml
[links]
    fontawesome = "https://fontawesome.com"
```

You can then use the following statement to generate the link.

<!-- markdownlint-disable MD037 -->
{{< example lang="markdown" >}}
{{</* link fontawesome /*/>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

You can [configure the behavior of managed links]({{< relref "layout#extended-configuration" >}}) in the `/config/_default/params.toml` file in the `main.externalLinks` section.
