---
title: Content management
description: Use Markdown and templates to define the content for your website.
date: 2023-08-14
layout: docs
---

Hinode uses Markdown and templates to define the content for your website. Hugo is used to generate the final static website. The next paragraph provides an overview of Markdown and the key elements added by Hinode. Three different document layouts are introduced next.

## Overview

Markdown is a simple and easy-to-use markup language. It uses formatting elements in plaintext documents to format documents. Using Markdown is different than using a <abbr title="What you see is what you get">WYSIWYG</abbr> editor. Such editors apply the formatting styles as you go. Instead, Markdown shows the formatting codes next to the content. Although this may require getting used to, the advantage is that you have full control over your document. The {{< link markdown_guide >}}Markdown guide{{< /link >}} provides a comprehensive overview of the Markdown format. Hugo supports additional content formats next to Markdown. See Hugo's documentation for a full overview of {{< link hugo_content >}}supported content formats{{< /link >}}.

<!-- TODO: insert VS Code screenshot -->

### Front matter

Hinode uses so-called front matter to capture the metadata of a document. The front matter usually includes the document title, the creation date, and a summary description. By convention, the front matter is defined at the top of the document. Hugo supports {{< link hugo_frontmatter >}}four types of front matter formats{{< /link >}}. Hinode uses the <abbr title="Yet Another Markup Language">YAML</abbr> format by default, denoted by `---` as the opening and closing tags. The folllowing example shows the front matter of the page you are currently reading.

```yml
---
title: Content management
description: Use Markdown and templates to define the content for your website.
date: 2023-02-19
---
```

Hinode supports the following additional front matter parameters.

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Argument            | Description |
|---------------------|-------------|
| icon                | Shorthand notation for an [icon]({{< relref "icon" >}}) to be used on a [card]({{< relref "card" >}}). |
| photoCredits        | {{</* release version="v0.18.0" state="deprecated" inline="true" size="sm" */>}} Use `thumbnail.author` instead. |
| photoSource         | {{</* release version="v0.18.0" state="deprecated" inline="true" size="sm" */>}} Use `thumbnail.origin` instead. |
| thumbnail           | URL or local path of the thumbnail image, shorthand notation for `thumbnail.url`. When using shorthand notation, the additional thumbnail metadata is unavailable (and will throw an error when specified). |
| thumbnail.url       | URL or local path of the thumbnail image. When set, be sure to clear the shorthand `thumbnail` value. |
| thumbnail.author    | Name of the thumbnail author, added as caption to the thumbnail on single pages. |
| thumbnail.authorURL | URL of the thumbnail author, added as caption link to the thumbnail on single pages. |
| thumbnail.origin    | Name of the thumbnail origin, e.g. Unsplash or Pexels. |
| thumbnail.originURL | URL of the thumbnail origin, added as caption link to the thumbnail on single pages. |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

### Mixed content

As explained in the [overview]({{< relref "#overview" >}}), Hinode uses Markdown to format the content of a document. However, you can mix this content with <abbr title="HyperText Markup Language">HTML</abbr> as needed. The final output is rendered to HTML. The following example mixes Markdown formatting with HTML to show the explanation of an abbreviation on hover.

{{< example lang="markdown" >}}
You can mix **Markdown content** with <abbr title="HyperText Markup Language">HTML</abbr> as needed.
{{< /example >}}

The following sections describe the available formatting in more detail:

- [Typography]({{< relref "typography" >}})
- [Links and cross-references]({{< relref "links-and-cross-references" >}})
- [Images and figures]({{< relref "images-and-figures" >}})
- [Tables]({{< relref "tables" >}})
- [Icons]({{< relref "icons" >}})

### Templates

Hinode uses several templates to prescribe the final output in HTML. Each template can be overridden with a specific {{< link hugo_lookup_order >}}lookup order{{< /link >}}. In the core, Hinode uses the following templates defined in `layouts/_default`:

```html
└── layouts
    ├── _default
    │   ├── baseof.html  // defines the base layout, including the HTML header and body
    │   ├── list.html    // defines the layout for a list page
    │   └── single.html  // defines the layout for a single page
    └── index.html       // defines the layout for the homepage
```

The [layout section]({{< relref "layout" >}}) provides more details about the available templates.

### Shortcodes

Shortcodes are an addition provided by Hugo to simplify the inclusion of common elements, such as images, buttons, and tooltips. The shortcode calls an template that can contain extensive HTML content. This approach separates raw HTML from your plain Markdown content and promotes reuse. Shortcodes can be defined in two ways:

- `{{</* shortcodename parameters */>}}`: a shortcode without inner text.
- `{{</* shortcodename parameters */>}}Inner content{{</* /shortcodename */>}}`: a shortcode with inner text.

Hugo provides more details about the {{< link hugo_shortcodes >}}usage of shortcodes{{< /link >}}. Hinode provides several shortcodes that wrap common Bootstrap elements. Explore the `components` section in the docs navigation for an overview of the available shortcodes. As an example, the following shortcode displays an image with rounded corners and a 21x9 aspect ratio:

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* image src="img/flowers.jpg" ratio="21x9" caption="Figure caption" class="rounded" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Single pages

Single pages define the content for a specific page, such as the [introduction page]({{< relref "introduction" >}}). Hinodes supports three types of single pages, which can be configured in the front matter. The next paragraphs describe each layout type in more detail. Refer to the [layout section]({{< relref "layout" >}}) to see additional configuration options.

### Default layout

By default, single pages, such as a blog page, include the following elements in the body:

- **Title** - the title of the page as set in the page's frontmatter.
- **Metadata** - the date of the page, the modification date (if applicable), the read time, and the amount of words on the page.
- **Tags** - links to any tags defined in the page's frontmatter.
- **Description** - the description as defined in the page's frontmatter, or as summarized by Hugo if omitted in the frontmatter.
- **Thumbnail** - a thumbnail image with figure caption that links to the photo credits (if defined in the frontmatter).
- **Navigation links** - links on the bottom of the page that link to the previoud and next page within the current section.

The below example illustrates the parameters used in the page's frontmatter:

```yaml
---
author: Mark Dumay
title: Another project
date: 2021-07-15
description: Another project.
tags: ["javascript", "golang"]
thumbnail: 
    url: img/coffee.jpg
    author: Karl Fredrickson
    authorURL: https://unsplash.com/@kfred
    origin: Unsplash
    originURL: https://unsplash.com/photos/TYIzeCiZ_60
---
```

### Documentation layout

Documentation pages use a more straightforward, simplified layout compared to the default layout. They include the following elements in their body:

- **Title** - the title of the page as set in the page's frontmatter.
- **Description** - the description as defined in the page's frontmatter, or as summarized by Hugo if omitted in the frontmatter.
- **Metadata** - a revision date and link to the latest git commit on the bottom of the page. Enable `enableGitInfo` in the [main configuration]({{< relref "layout#main-configuration" >}}) for the git commit message to work.

Be sure to select the `docs` layout in the page's frontmatter to enable the documentation layout:

```yml
---
layout: docs
---
```

### Minimal layout

Pages with a minimal layout are similar to documentation pages, but do not include a footer at all:

- **Title** - the title of the page as set in the page's frontmatter.
- **Description** - the description as defined in the page's frontmatter, or as summarized by Hugo if omitted in the frontmatter.

Be sure to select the `minimal` layout in the page's frontmatter to enable the documentation layout:

```yml
---
layout: minimal
---
```
