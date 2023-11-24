---
title: Content management
description: Use Markdown and templates to define the content for your website.
date: 2023-11-22
layout: docs
---

Hinode uses Markdown and templates to define the content for your website. Hugo is used to generate the final static website. The next paragraph provides an overview of Markdown and the key elements added by Hinode. Three different document layouts are introduced next.

## Overview

Markdown is a simple and easy-to-use markup language. It uses formatting elements in plaintext documents to format documents. Using Markdown is different than using a {{< abbr WYSIWYG >}}editor. Such editors apply the formatting styles as you go. Instead, Markdown shows the formatting codes next to the content. Although this may require getting used to, the advantage is that you have full control over your document. The {{< link markdown_guide >}}Markdown guide{{< /link >}} provides a comprehensive overview of the Markdown format. Hugo supports additional content formats next to Markdown. See Hugo's documentation for a full overview of {{< link hugo_content >}}supported content formats{{< /link >}}.

<!-- TODO: insert VS Code screenshot -->

### Front matter

Hinode uses so-called front matter to capture the metadata of a document. The front matter usually includes the document title, the creation date, and a summary description. By convention, the front matter is defined at the top of the document. Hugo supports {{< link hugo_frontmatter >}}four types of front matter formats{{< /link >}}. Hinode uses the {{< abbr YAML >}} format by default, denoted by `---` as the opening and closing tags. The folllowing example shows the front matter of the page you are currently reading.

```yml
---
title: Content management
description: Use Markdown and templates to define the content for your website.
date: 2023-02-19
---
```

Hinode supports the following additional front matter parameters.

<!-- markdownlint-disable MD037 -->
{{< alert type="info" >}}
When using a local file, the page's thumbnail should be available as a global site asset. You cannot use an image from a {{</* link hugo_page_resources >}}page resource{{< /link */>}}, as the thumbnail is being referenced on other pages too. External images are downloaded automatically and further processed locally.
{{< /alert >}}
<!-- markdownlint-enable MD037 -->

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Argument            | Description |
|---------------------|-------------|
| icon                | Shorthand notation for an [icon]({{< relref "icon" >}}) to be used on a [card]({{< relref "card" >}}). |
| photoCredits        | {{</* release version="v0.18.0" state="deprecated" inline="true" size="sm" */>}} Use `thumbnail.author` instead. |
| photoSource         | {{</* release version="v0.18.0" state="deprecated" inline="true" size="sm" */>}} Use `thumbnail.origin` instead. |
| searchExclude       | {{</* release version="0.21.8" inline="true" size="sm" */>}} If to true, the current page is excluded from the search index. |
| thumbnail           | URL or local path of the thumbnail image, shorthand notation for `thumbnail.url`. When using shorthand notation, the additional thumbnail metadata is unavailable (and will throw an error when specified). |
| thumbnail.url       | URL or local path of the thumbnail image. When set, be sure to clear the shorthand `thumbnail` value. |
| thumbnail.author    | Name of the thumbnail author, added as caption to the thumbnail on single pages. |
| thumbnail.authorURL | URL of the thumbnail author, added as caption link to the thumbnail on single pages. |
| thumbnail.origin    | Name of the thumbnail origin, e.g. Unsplash or Pexels. |
| thumbnail.originURL | URL of the thumbnail origin, added as caption link to the thumbnail on single pages. |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

### Mixed content

<!-- markdownlint-disable MD037 -->
{{< alert type="danger" >}}
**v0.19.0** - Hinode disables HTML support by default since release v0.19.0.

---

Mixing Markdown with HTML is considered unsafe. If you trust the input, you can enable this setting in the {{</* link hugo_goldmark >}}Goldmark configuration{{< /link */>}}, the default Markdown processor of Hugo. If you disable HTML, you can optionally set `purgeHTMLComments` in `params.debugging` to prevent HTML comments from generating a warning by Goldmark.
{{< /alert >}}
<!-- markdownlint-enable MD037 -->

As explained in the [overview]({{< relref "#overview" >}}), Hinode uses Markdown to format the content of a document. However, you can mix this content with {{< abbr HTML >}} as needed. The final output is rendered to HTML.

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

<!-- markdownlint-disable MD037 -->
- **Title** - the title of the page as set in the page's frontmatter.
- **Metadata** - the date of the page, the modification date (if applicable), the read time, and the amount of words on the page.
- **Tags** - links to any tags defined in the page's frontmatter.
- **Description** - the description as defined in the page's frontmatter, or as summarized by Hugo if omitted in the frontmatter.
- **Thumbnail** - a thumbnail image with figure caption that links to the photo credits (if defined in the frontmatter).
- **Download** - {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} a link to a local file that represents a downloadable version of the current article.
- **Navigation links** - links on the bottom of the page that link to the previous and next page within the current section.
<!-- markdownlint-enable MD037 -->

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
download: /media/article.en.pdf
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
