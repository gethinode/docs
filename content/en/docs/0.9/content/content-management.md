---
title: Content management
description: A structured approach to organize and present content.
date: 2023-02-06
group: content
layout: docs
status: draft
---

Hinode uses a structured approach to [organize and present content]({{< param "links.hugo_structure" >}}). This results in user-friendly URLs, which are also easy to crawl by search engines. The following paragraphs describe how to organize the content and how to define alternative paths.

## Organization of content

Hinode recognizes two basic types of pages:

- **List pages** provide an overview of single pages within the same section
- **Single pages** provide content for a specific page

All content resides in the `content` folder of the repository. The content for [multilanguage sites]({{< relref "languages" >}}) uses seperate subfolders for each language directly below the `content` folder. Usually a list page is defined by having an `_index.md` within its folder. A notable exception is the home page, which is defined in the `content` root folder. The next diagram illustrates a typical initial setup for a Hinode website that supports the English language.

```text
.
└── content
    └── en                        // <- [Language]
        └── _index.md             // <- [Home page]   https://example.com/en
        └── about.md              // <- [Single page] https://example.com/en/about
        └── blog
        |   ├── _index.md         // <- [List page]   https://example.com/en/posts/
        |   ├── first-post.md     // <- [Single page] https://example.com/en/posts/first-post/
        └── projects
            ├── _index.md         // <- [List page]   https://example.com/en/projects/
            └── first-project.md  // <- [Single page] https://example.com/en/projects/first-project/
```

## Defining alternative paths

You can adjust the path or provide an alias of a page in its [frontmatter]({{< relref "layout#default-layout" >}}). For example, the following aliases ensure the [introduction ]({{< relref "introduction" >}}) of the Hinode docs is available on four alternative paths:

```yml
---
title: Introduction
aliases:
  - "/docs/0.9/getting-started/"
  - "/docs/getting-started/"
  - "/getting-started/"
  - "/docs/"
layout: docs
---
```

Similarly, you can link multiple translations of a page and still provide a language-specific path. See the [languages configuration]({{< relref "languages#content-translation" >}}) for more details.
