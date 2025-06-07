---
title: Typography
description: Use a mix of Markdown and HTML syntax to style your content.
date: 2024-12-13
layout: docs
---

Hinode uses a mix of basic Markdown syntax enriched with Bootstrap styling for the typography. The following paragraphs illustrate the most common applications. Refer to the Hugo documentation to review the extended description of supported {{< link hugo_content >}}content formats{{< /link >}}. It also contains links to external resource about Markdown.

## Headings

Use the native Markdown character `#` to generate headings for your content. The following input represents six levels of section headings. They are generated as HTML `<h1>`—`<h6>` elements. `<h1>` is the highest section level while `<h6>` is the lowest.

<!-- markdownlint-disable MD025 -->
{{< example lang="markdown" >}}

# H1. Heading

## H2. Heading

### H3. Heading

#### H4. Heading

##### H5. Heading

###### H6. Heading

{{< /example >}}
<!-- markdownlint-enable MD025 -->

Alternatively, you can use `.h1` through `.h6` classes, for when you want to match the font styling of a heading but cannot use the associated HTML element. For example, using a `.h2` class will exclude the section heading from the generated [table of contents]({{% ref "navigation#table-of-contents" %}}).

{{< example >}}
H1
{.h1}

H2
{.h2}

H3
{.h3}

H4
{.h4}

H5
{.h5}

H6
{.h6}
{{< /example >}}

## Display headings

Display a larger, slightly more opinionated heading style by adding the `.display` class.

{{< example >}}
Display 1
{.display-1}

Display 2
{.display-2}

Display 3
{.display-3}

Display 4
{.display-4}

Display 5
{.display-5}

Display 6
{.display-6}
{{< /example >}}

## Lead

Make a paragraph stand out by adding the `.lead` class.

{{< example >}}
This is a lead paragraph. It stands out from regular paragraphs.
{.lead}
{{< /example >}}

## Inline text elements

You can use native Markdown to apply basic styling. Use HTML elements for additional formatting options.

### Native Markdown

Use native Markdown apply basic styling to your text.

<!-- markdownlint-disable MD036 MD049 -->
{{< example lang="markdown" >}}
**This is bold text**

_This text is italicized_

~~This was mistaken text~~

**This text is _extremely_ important**

***All this text is important***
{{< /example >}}
<!-- markdownlint-enable MD036 MD049 -->

### Extended Styling

{{< release version="v0.19.0" >}}

Use shortcodes and classes for additional styling options. The following example illustrates highlighting, fine print, subscript, and superscript.

<!-- markdownlint-disable MD037 -->
{{< example >}}
You can use the mark shortcode to {{</* mark >}}highlight{{< /mark */>}} text.

This line of text is meant to be treated as fine print.
{.small}

H{{</* sub 2 */>}}O is a liquid.

2{{</* sup 10 */>}} is 1024.

This is an {{</* ins >}}underlined text{{< /ins */>}}.

{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Emoji

Use shortcodes to insert Emoji into your content. You can use this {{< link markdown_emoji >}}list of emoji{{< /link >}} shortcodes as a reference, although the results may vary across browsers and devices. The following example inserts an inline smiley.

  {{< mark color="light" class="d-none-dark" >}}That is so funny! \:smiley\:{{< /mark >}}
  {{< mark color="dark" class="d-none-light" >}}That is so funny! \:smiley\:{{< /mark >}}

The result looks like this:

{{< example show_markup=false >}}
That is so funny! :smiley:
{{< /example >}}

## Abbreviations

Use the {{< link "docs/components/abbr" >}}abbr shortcode{{< /link>}} for abbreviations and acronyms to show the expanded version on hover. Abbreviations have a default underline and gain a help cursor to provide additional context on hover and to users of assistive technologies.

<!-- markdownlint-disable MD037 -->
{{< example >}}
{{</* abbr HTML */>}}
{{< /example >}}
<!-- markdownlint-disable MD037 -->

## Blockquotes

> [!NOTE]
> Since release {{< release version="v0.25.2" short="true" type="link" >}}, blockquotes no longer require an additional styling directive. You can drop the now obsolete `{.blockquote}` from your input.

The blockquote element represents content that is quoted from another source, optionally with a citation which must be within a `footer` or `cite` element, and optionally with in-line changes such as annotations and abbreviations. Use the `>` Markdown character to generate a blockquote.

### Blockquote without attribution

The following Markdown generates a blockquote without attribution.

{{< example lang="markdown" >}}
> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **Note** that you can use _Markdown syntax_ within a blockquote.
{{< /example >}}

### Blockquote with attribution

The following Markdown generates a blockquote with attribution. The citation itself is added to the bottom of the page.

{{< example lang="markdown" >}}
> Don't communicate by sharing memory, share memory by communicating.
>
> — _Rob Pike[^1]_

[^1]: The above quote is excerpted from Rob Pike's [talk](https://www.youtube.com/watch?v=PAAkCSZUG1c) during Gopherfest, November 18, 2015.
{{< /example >}}

### GitHub-style alerts

{{< release version="v0.25.5" >}}

You can add an alert designator to a blockquote to generate a GitHub-style alert.

<!-- markdownlint-disable MD028 -->
{{< example lang="markdown" >}}
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
{{< /example >}}
<!-- markdownlint-enable MD028 -->

## Code Blocks

Use a single backtick `` ` `` character to denote an inline code element. Use triple backticks `` ``` `` to denote the start and end of a code block. Add the language to the opening backticks to specify the syntax. Hugo uses Chroma highlighting to style the syntax of {{< link hugo_chroma >}}supported languages{{< /link >}}. The following example defines an `HTML` code block.

{{< example lang="markdown" >}}

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Example HTML5 Document</title>
  </head>
  <body>
    <p>Test</p>
  </body>
</html>
```

{{< /example >}}

## List Types

Use native Markdown to define ordered lists, unordered lists, and nested lists.

### Ordered List

The following Markdown defines an ordered list of three items. The sequence is automatically determined, so simply add `1.` at the start of each element. The [linting rules]({{% ref "contribute#markdown" %}}) will raise an error if you add the sequence numbering yourself.

{{< example lang="markdown" >}}

1. First item
1. Second item
1. Third item

{{< /example >}}

### Unordered List

Use the `-` character to denote an unordered list.

{{< example lang="markdown" >}}

- List item
- Another item
- And another item

{{< /example >}}

### Nested list

Use indentation and the `-` character to denote a nested list.

{{< example lang="markdown" >}}

- Fruit
  - Apple
  - Orange
  - Banana
- Dairy
  - Milk
  - Cheese

{{< /example >}}

### Task list

Use the `-` character followed by either `[x]` or `[ ]` to indicate a (completed) task.

{{< example lang="markdown" >}}

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

{{< /example >}}

## Mathematical formulas

{{< release version="v0.16.0" >}}

Use {{< link katex >}}KaTeX{{< /link >}} to add mathematical formulas to your content pages. You can use server-side math rendering since Hinode release {{< release version="v0.26.0" short="true" type="link" >}}. Add the following configuration to your site configuration (e.g. `hugo.toml`) to configure the required passthrough delimiters:

```toml
[markup.goldmark]
    [markup.goldmark.extensions.passthrough]
        enable = true
    [markup.goldmark.extensions.passthrough.delimiters]
        block = [['\[', '\]'], ['$$', '$$']]
        inline = [['\(', '\)'], ['$', '$']]
```

Alternatively, you can use the {{< link repository_mod_katex >}}mod-katex module{{< /link >}} to include a client-side script and custom style. Be sure to include `katex` in your [module configuration]({{% relref "../configuration/modules#configuring-modules" %}}) and [page frontmatter]({{% relref "../configuration/modules#enabling-optional-modules" %}}) as needed.

The following example displays an inline and block element formula using the configured delimiters `$` and `$$`.

{{< example lang="markdown" >}}
This is an inline $-b \pm \sqrt{b^2 - 4ac} \over 2a$ formula

This is not an inline formula:

$$x = a_0 + \frac{1}{a_1 + \frac{1}{a_2 + \frac{1}{a_3 + a_4}}}$$
$$\forall x \in X, \quad \exists y \leq \epsilon$$
{{< /example >}}

You can also include a codeblock of type `math` to render an inline element wrapped in a codeblock. In this case you should omit any delimiters.

{{< example lang="markdown" >}}

```math
-b \pm \sqrt{b^2 - 4ac} \over 2a
```

{{< /example >}}
