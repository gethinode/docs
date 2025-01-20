---
title: Layout
description: Hinode uses a grid-based, responsive design for the home page, single pages and list pages.
date: 2025-01-20
layout: docs
---

Hinode uses Bootstrap's {{< link bs_grid >}}grid system{{< /link >}} and {{< link bs_breakpoints >}}breakpoints{{< /link >}} to create a responsive layout across devices or viewport sizes. All pages follow the same base layout, which includes headers and footers. The next paragraphs explain the layout styles in more detail.

## Base layout

The base layout defines a page skeleton of which all other pages are derived. It consists of four major sections, being a header, body, social footer, and bottom footer. It also loads sytlesheets, scripts, and generates the metadata. The header includes the [main navigation]({{% ref "navigation#main-navigation" %}}) and can be optionally fixed to the top. The width of the base layout is maximized to 1320 pixels (see the `container-xxl` setting of the {{< link bs_container >}}Bootstrap containers{{< /link >}}). The height is set to a least 100% of the viewport, to ensure the footer is always aligned to the bottom on the page.

### Example

The following diagram illustrates the conceptual base design:

{{< card-group color="info" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}Header .col-12 *(optionally fixed)*{{< /card >}}
    {{< card >}}
Body .col-12 .flex-fill

*vertically expands to fill viewport*
    {{< /card >}}
    {{< card >}}Social .col-12{{< /card >}}
    {{< card >}}Footer .col-12{{< /card >}}
{{< /card-group >}}

### Configuration

Hinode uses several settings from Hugo's {{< link hugo_config >}}main configuration{{< /link >}}. Several extensions are defined in the {{< link hugo_config_dir >}}custom site parameters{{< /link >}} and {{< link hugo_lang_config >}}language-specific configuration{{< /link >}}.

#### Main configuration

The base layout uses the {{< link hugo_config >}}main configuration{{< /link >}} of Hugo. The settings below are actively used by Hinode:

{{< table wrap=true >}}
| Setting        | Default | Description |
|----------------|---------|-------------|
| `title`         | -       | Title of the website, joined with the separator and title of the current page. |
| `copyright`     | -       | Copyright notice added to the page footer. |
| `enableGitInfo` | -       | Enables git information, which is used by [documentation pages]({{% relref "content-management#documentation-layout" %}}). |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/hugo.toml`.

{{< docs name="main" file="config/_default/hugo.toml" >}}

#### Extended configuration

> [!IMPORTANT]
> The `--minify` flag of `hugo` purges HTML whitespace by default. Unfortunately, this also removes the spacing behind the visual cue of external links. When setting `externalLinks.cue` to `true`, be sure to add the following configuration to your main configuration to suppress the removal of whitespace:
>
> ```toml
> [minify]
>   [minify.tdewolff.html]
>     keepWhitespace = true
> ```

Hinode uses the following extended settings in the `main` section of the `site parameters`:

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Setting            | Default           | Description |
|--------------------|-------------------|-------------|
| `separator`          | "-"               | Separator to join the website title and page title. |
| `description`        | -                 | Short description of the website that is added to the page metadata. |
| `enableDarkMode`     | true              | Enables switcher for [light mode and dark mode]({{% relref "color-modes" %}}). |
| `modes`              | ["light", "dark"] | Supported color modes, used as identifier for color-mode aware images. |
| `endorse`            | true              | By default, the theme adds a link to Hinode in the page's footer. You can disable it by setting `endorse` to `false`, but we would appreciate it if you leave it enabled. |
| `enableLanguageSelectionStorage` | false | If set, stores the last selected language in the site's local storage. Pages are automatically redirected to the related page translation, if available. |
| `footerBelowFold`    | false             | If set, pushes the footer including social links to below the page fold. |
| `loading`            | "eager"           | {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} Sets the default loading behavior of images below the page fold. Supported values are either "eager" (default) or "lazy". In practice, Hinode can only determine if an image is below the page fold when `fullCover` is set to true and the current page is a list page or the homepage. The [image shortcode documentation]({{% relref "image" %}}) provides more details.|
| `canonifyAssetsURLs` | false             | If set, makes permalinks to site assets (favicons, images, scripts, and stylesheets) absolute instead of relative. |
| `breakpoint`         | "md"              | {{</* release version="v0.21.7" short="true" size="sm" inline="true" */>}} Breakpoint for single pages and list pages to start showing the sidebar navigation and table of content panel. Card groups use the same breakpoint to decide how many columns to display in the current viewport. |
| `titleCase`          | false             | {{</* release version="v0.29.0" short="true" size="sm" inline="true" */>}} If set, applies title case to headers and other select elements. Configure the title style in the [site configuration](https://gohugo.io/getting-started/configuration/#configure-title-case). |
| `internalLinks.validate`  | true         | If set, validates if internal links reference a valid page. |
| `internalLinks.pretty`  | false          | {{</* release version="v0.27.19" short="true" size="sm" inline="true" */>}} If set, adds a trailing slash to rendered links. |
| `externalLinks.cue`  | false             | If set, adds a visual cue `{{</* icon class="fas up-right-from-square fa-2xs" spacing=false */>}}` as suffix to [managed external links]({{% relref "links-and-cross-references#managed-links" %}}). |
| `externalLinks.tab`  | false             | If set, opens [managed external links]({{% relref "links-and-cross-references#managed-links" %}}) in a new browser tab using the HTML attributes `target="_blank" rel= "noopener noreferrer"`. |
| `build.transpiler`   | "libsass"         | {{</* release version="v0.20.0" short="true" size="sm" inline="true" */>}} Defines the Sass transpiler to be used, either "libsass" (default) or "dartsass". The Dart Sass transpiler requires {{</* link hugo_sass >}}installation of a separate binary on your machine{{< /link */>}}. This includes any production servers used for {{</* abbr "CI/CD" */>}} automation and deployment.|
| `build.silenceDeprecations`   | false         | {{</* release version="v0.27.9" short="true" size="sm" inline="true" */>}} Silences any deprecation warnings raised by the Dart Sass transpiler. |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="main" file="config/_default/params.toml" >}}

#### Message configuration

{{< release version="v0.14.4" >}}

You can show informative messages using the [toast shortcode]({{% relref "toast" %}}). By default, toast messages are displayed in the bottom right of the viewport. Hinode vertically stacks multiple toast messages automatically. Adjust the configuration by adjusting `messages` in the `site parameters`. The following arguments are supported:

{{< table wrap=true >}}
| Setting         | Default        | Description |
|-----------------|----------------|-------------|
| `placement`       | "bottom-right" | Optional position of the toast messages relative to the viewport: "top-left", "top-center","top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", or "bottom-right" (default). |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="messages" file="config/_default/params.toml" >}}

#### Social sharing configuration

{{< release version="v0.14.3" >}}

Hinode can optionally add buttons to share a post via available social media. Use the following extended settings in the `sharing` section of the `site parameters` to configure these buttons:

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Setting         | Default       | Description |
|-----------------|---------------|-------------|
| `enabled`         | false         | Define if social sharing should be enabled for all single pages. You can override this setting by adding `sharing: false` to the individual page's frontmatter.
| `sort`            | "weight"      | Sorting key to be used, either `name` or `weight`. You can also reference a custom key defined in the provider configuration. |
| `reverse`         | false         | Flag to indicate if the sorting of the social sharing buttons should be reversed, defaults to false. |
| `webshare`        | false         | Flag to indicate if native sharing provided by the Operating System should be enabled (via the web share API). If set and {{</* link caniuse_webshare >}}supported by the browser{{< /link */>}}, an additional button is added. |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

Add each available provider to `[[sharing.providers]]`. The providers support the following arguments:

{{< table wrap=true >}}
| Setting   | Default | Description |
|-----------|---------|-------------|
| `name`      | -       | Name of the provider, added as assistive title to improve accessibility. |
| `url`       | -       | Parameterized URL of the social media provider. The `url` supports the parameters `{url}` and `{title}`. The `{url}` is replaced with the page's permalink, and `{title}` with the page's title. |
| `icon`      | -       | Shorthand notation of the [Font Awesome icon]({{% relref "../content/icons" %}}) to be used as button, e.g. `fab linkedin`. |
| `weight`    | -       | Weight of the social sharing button, to be used as sorting key. |
| `clipboard` | false   | If set, the defined url is copied to the clipboard instead of being opened. A [toast message]({{% relref "toast" %}}) is shown to inform the user. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="sharing" file="config/_default/params.toml" >}}

#### Language-specific configuration

Hinode supports {{< link hugo_lang_config >}}multilingual content{{< /link >}}. The following parameters are used in the site's footer, header, and meta data. Refer to the [languages]({{% ref "languages" %}}) section to review the various configuration options to enable multilingual content.

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Section | Setting       | Default | Description |
|---------|---------------|---------|-------------|
| `head`    | `tagline`       | -       | Tagline used on the site's title for the home page. |
| `feature` | `link`          | -       | {{</* release version="v0.18.0" short="true" state="deprecated" size="sm" inline="true" */>}} Modify `content/{LANG}/_index.md` directly (`{LANG}` is optional, pending on your [language settings]({{% relref "languages" %}})). |
| `feature` | `caption`       | "About" | {{</* release version="v0.18.0" short="true" state="deprecated" size="sm" inline="true" */>}} See `feature.link`. |
| `social`  | `title`         | -       | Title displayed in the site's social footer. |
| `social`  | `caption`       | -       | Caption displayed in the site's social footer. |
| `footer`  | `license`       | -       | License displayed on the site's footer. |
| `footer`  | `socialTitle`   | -       | {{</* release version="v0.18.0" short="true" state="deprecated" size="sm" inline="true" */>}} Use `social.title` instead. |
| `footer`  | `socialCaption` | -       | {{</* release version="v0.18.0" short="true" state="deprecated" size="sm" inline="true" */>}} Use `social.caption` instead. |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

The below configuration shows the default configuration set in `config/_default/languages.toml` for the English language.

{{< docs name="lang-param" file="config/_default/languages.toml" >}}

## Home page

The home page introduces a feature section and several [configurable sections]({{% relref "#page-sections" %}}). The default home page of Hinode displays the three most recent blog posts and projects, each rendered as cards in a separate section. A button that links to the related list page is added below each group. The feature section can optionally cover the entire viewscreen.

### Example

The following diagram illustrates the conceptual layout of the home page:

{{< card-group color="body-tertiary" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}Header .col-12{{< /card >}}
    {{< card color="info" >}}
Feature .col-12 .flex-fill

*vertically expands to fill viewport*
    {{< /card >}}
    {{< card color="info" >}}Section 1 .col-12{{< /card >}}
    {{< card color="info" >}}Section 2 .col-12{{< /card >}}
    {{< card color="info" >}}Section ... .col-12{{< /card >}}
    {{< card >}}Social .col-12{{< /card >}}
    {{< card >}}Footer .col-12{{< /card >}}
{{< /card-group >}}

### Configuration

The configuration of the home page is set in the `home` section of the `site parameters`. The following settings are supported:

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Setting             | Default           | Description |
|---------------------|-------------------|-------------|
| `sections`            | All root sections | Sections to include on the home page, e.g. `["blog", "projects"]` - defaults to {{</* link hugo_sections >}}all root sections.{{< /link */>}} |
| `featurePhoto`        | -                 | {{</* release version="v0.18.0" short="true" state="deprecated" size="sm" inline="true" */>}} Use `thumbnail` of the homepage (e.g. `content/_index.md`) instead. |
| `fullCover`           | false             | Flag to indicate if the feature element should cover the entire front page. |
| `style`               | -                 | Optional class attributes to add to the main `<div>` element of the base page. Applies to the homepage only.        |
| `feature.orientation` | "stacked"         | {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} Orientation of the featured section, either "stacked" (default) or "horizontal". |
| `feature.color`       | -                 | {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} Optional background color of the featured section, used in conjunction with `style.themeOpacity` in the site's parameters. |
| `feature.width`       | 6                 | {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} Optional column width of the main featured section, supported values are 1 - 12. |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

The below configuration shows the default configuration set in `config/_default/params.toml`. The `sections` are commented out, meaning all root sections are enabled by default.

{{< docs name="home" file="config/_default/params.toml" >}}

## List pages

> [!NOTE]
> List pages support {{< link hugo_content_view >}}content view templates{{< /link >}} since release {{< release version="v0.21.0" short="true" type="link" >}}. Set the `type` in the page's frontmatter.

List pages define one [configurable section]({{% relref "#page-sections" %}}) for the available content within the page bundle. By default, list pages display the most recent nine items as card group. If the section contains more items, a paginator is added below the card group. Adjust the setting `pagerSize` in the {{< link hugo_pagination >}}main configuration{{< /link >}} as needed.

### Example

The following diagram illustrates the conceptual layout of a list page:

{{< card-group color="body-tertiary" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}Header .col-12{{< /card >}}
    {{< card color="info" >}}
Section .col-12

*optional paginator*
    {{< /card >}}
    {{< card >}}Social .col-12{{< /card >}}
    {{< card >}}Footer .col-12{{< /card >}}
{{< /card-group >}}

### Configuration

The list page uses the [configuration of a single section]({{% relref "#configuration-4" %}}).

## Single pages

> [!IMPORTANT]
> Single pages support {{< link hugo_content_view >}}content view templates{{< /link >}} since release {{< release version="v0.21.0" short="true" type="link" >}}. Set the `type` in the page's frontmatter. The `type` parameter replaces the previous `layout` parameter.

Single pages follow the base layout but introduce two columns next to the body content. The left column shows a [sidebar navigation]({{% ref "navigation#sidebar-navigation" %}}) if applicable and is left empty otherwise. The right column shows a [table of contents]({{% ref "navigation#table-of-contents" %}}) for the current page if applicable. On smaller viewscreens, the sidebar navigation folds into an offcanvas element, whilst the table of contents is hidden. On medium-sized screens the sidebar navigation takes precedence over the table of contents. The following diagram illustrates the base layout (note: this may best be viewed on a larger screen).

{{< card-group color="body-tertiary" cols="auto" padding="3" class="text-center bg-opacity-10 text-body d-fluid" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card class="col-12" >}}Header .col-12{{< /card >}}
    {{< card color="info" class="col-12 col-lg-2 flex-grow-1 d-none d-lg-block" >}}
Sidebar

*sticky*
    {{< /card >}}
    {{< card color="info" class="col-12 col-lg-6 mx-lg-4" >}}
Body .col-8 .flex-fill

*expands to fill viewport*
    {{< /card >}}
    {{< card color="info" class="col-12 col-lg-2 flex-grow-1 d-none d-lg-block" >}}
TOC

*sticky*
    {{< /card >}}
    {{< card class="col-12" >}}Social .col-12{{< /card >}}
    {{< card class="col-12" >}}Footer .col-12{{< /card >}}
{{< /card-group >}}

Single pages support three optional layout types, which can be configured in the page's frontmatter. The next paragraphs describe each layout type in more detail. These layout types apply to the body section of the base layout.

### Default layout

By default, single pages, such as a blog page, include multiple elements, such as a rich header, thumbnail, body, and footer. The following diagram illustrates the default layout of a single page.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< card-group color="info" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}
**Page header**

Metadata

Tags

Description

{{</* fas image */>}} Thumbnail
    {{< /card >}}
    {{< card >}}**Page content**{{< /card >}}
    {{< card >}}
**Page footer**

Navigation links
    {{< /card >}}
{{< /card-group >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Documentation layout

Documentation pages use a more straightforward, simplified layout compared to the default layout. Configure the following setting to the page's frontmatter to apply the documentation layout:

```yml
---
type: docs
---
```

The following diagram illustrates the documentation layout of a single page.

{{< card-group color="info" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}
**Page header**

Description
    {{< /card >}}
    {{< card >}}**Page content**{{< /card >}}
    {{< card >}}
**Page footer**

Git metadata
    {{< /card >}}
{{< /card-group >}}

### Minimal layout

Pages with a minimal layout are similar to documentation pages, but do not include a footer at all. Configure the following setting to the page's frontmatter to apply the minimal layout:

```yml
---
type: minimal
---
```

The following diagram illustrates the minimal layout of a single page.

{{< card-group color="info" cols="1" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}
**Page header**

Description
    {{< /card >}}
    {{< card >}}**Page content**{{< /card >}}
{{< /card-group >}}

### Configuration

Please refer to the [content management section]({{% relref "content-management#single-pages" %}}) to review the elements available in the page's frontmatter. You can also set the default behavior by page type in the `pages` section of the site parameters. For example, the following configuration hides the modification date of all news articles, unless overridden in the page's frontmatter.

```toml
[pages]
    [pages.news]
        metadata = "original"
```

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Setting      | Default              | Description |
|--------------|----------------------|-------------|
| `metadata`     | "full"               | {{</* release version="v0.21.2" short="true" size="sm" inline="true" */>}} Defines the metadata to include in the header of a single page type. Supported values are "full" (default), "original", and "none". In the default configuration, the header includes metadata elements for the original publication date, modification date (if applicable), reading time, and word count. When set to `original`, the modification date is always omitted. Set `metadata` to `none` to suppress all metadata elements. |
| `sharing`         | true              | {{</* release version="v0.21.2" short="true" size="sm" inline="true" */>}} Optional flag to indicate if a single page should include sharing options (when the {{</* link "#social-sharing-configuration" >}}social sharing configuration{{< /link */>}} is enabled). |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

The configuration of the **documentation pages** is set in the `docs` section of the site parameters. The following settings are supported:

{{< table wrap=true >}}
| Setting      | Default | Description |
|--------------|---------|-------------|
| `version`      | -       | Default version to use in documentation links. |
| `basePath`     | -       | Base path to use for file references. |
| `github`       | -       | Repository URL for the docs site, overrides `schema/github` in  `config/_default/params.toml`. |
| `release`      | -       | Release url for the docs site, e.g. `https://github.com/gethinode/hinode/releases/tag/`. This setting is used by the [release shortcode]({{% relref "release" %}}).
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="version" file="./config/_default/params.toml" >}}

## Page sections

Both the home page and the list page use one or more page sections to display a sorted list of items. The lists can contain either [regular pages  or page snippets]({{% relref "content-organization" %}}). The next paragraphs describe the three available layout types.

### Card layout

The card layout displays a group of cards in a grid. The default setting is to show nine items at a time. You can adjust these settings in the [page section configuration]({{% relref "#configuration-4" %}}), including the style of the cards themselves. Refer to the [card shortcode documentation]({{% relref "card" %}}) to review the available card styles. The next diagram illustrates a typical card layout.

{{< card-group color="info" cols="3" padding="3" gutter="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}Item 1{{< /card >}}
    {{< card >}}Item 2{{< /card >}}
    {{< card >}}Item 3{{< /card >}}
    {{< card >}}Item 4{{< /card >}}
    {{< card >}}Item 5{{< /card >}}
    {{< card >}}Item 6{{< /card >}}
    {{< card >}}Item 7{{< /card >}}
    {{< card >}}Item 8{{< /card >}}
    {{< card >}}Item 9{{< /card >}}
{{< /card-group >}}

### List layout

The list layout shows the page bundle's items as a vertical list. The thumbnail alternates between being left-aligned and right-aligned for each row. Remove the `description` from the page's frontmatter to display the full content instead of the description. The content of the item is displayed next to the thumbnail.

{{% comment %}}<!-- markdownlint-disable MD037 -->{{% /comment %}}
{{< card-group color="info" cols="2" padding="3" gutter="3" responsive=false class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card >}}{{</* fas image */>}}{{< /card >}}
    {{< card >}}Item 1{{< /card >}}
    {{< card >}}Item 2{{< /card >}}
    {{< card >}}{{</* fas image */>}}{{< /card >}}
    {{< card >}}{{</* fas image */>}}{{< /card >}}
    {{< card >}}Item 3{{< /card >}}
{{< /card-group >}}
{{% comment %}}<!-- markdownlint-enable MD037 -->{{% /comment %}}

### Nav layout

The nav layout shows a nav element where each tab pane represents a single item of the page bundle. Remove the `description` from the page's frontmatter to display the full content instead of the description. The tab pane shows the content of the selected item.

{{< card-group color="info" cols="auto" padding="3" class="text-center bg-opacity-10 text-body" wrapper="border rounded-3 my-4 p-4" >}}
    {{< card class="col-7" >}}**Item 1** | Item 2 | Item 3{{< /card >}}
    {{< card class="col-12" >}}Content .col-12{{< /card >}}
{{< /card-group >}}

### Configuration

The configuration of each section is set in the `sections` setting of the `site parameters`. The entire configuration is fully optional and uses default settings if omitted. The following settings are supported per section:

{{% comment %}}<!-- markdownlint-disable MD037 MD058 -->{{% /comment %}}
{{< table wrap=true >}}
| Setting      | Default              | Description |
|--------------|----------------------|-------------|
| `title`        | ""                   | Title of the section on the home page. It overrides the title of the page bundle. On list pages, the title defined in the page bundle's frontmatter is used instead. When using a multi-lingual site, make sure to properly translate this setting. |
| `reference`    | "More {{section}}"   | {{</* release version="v0.18.0" short="true" size="sm" inline="true" */>}} Caption of the button that links to the section's associated list page (if applicable). By default, the title is set to "More {{section}}", where `{{section}}` is the section title in plural. When using a multi-lingual site, make sure to properly translate this setting. |
| `layout`       | "card"               | Layout of the section, either "card" (default), "list", or "nav". |
| `sort`         | "date"               | Sorting key to be used, based on a frontmatter parameter. Examples are "date" (default), "lastmod", "weight", or "title". You can also use custom parameters, as long as they are defined in the page's frontmatter. |
| `reverse`      | true                 | Flag to indicate the sorting of the section content should be reversed, defaults to true. |
| `nested`       | true                 | Flag to indicate the content should be listed recursively for the entire {{</* link hugo_sections >}}section{{< /link */>}}. You can override this setting for individual branch bundles by adding `nested` to the page's frontmatter. |
| `background`   | -                    | Theme color of the section background, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black", "body", or "body-tertiary". By default, no color is specified. The background expands across the entire viewport (thus is not constrained to the page's maximum width of 1320 pixels). |
| `color`        | -                    | Theme color of the section elements, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black", "body", or "body-tertiary". By default, no color is specified. |
| `style`        | "border-0 card-zoom" | Optional styling attributes added to selection elements, e.g. "border-0" to remove the borders. |
| `wrap`         | false                | {{</* release version="v0.21.0" short="true" size="sm" inline="true" */>}} Optional flag to enable word wrapping of tab titles, defaults to false. |
{{< /table >}}
{{% comment %}}<!-- markdownlint-enable MD037 MD058 -->{{% /comment %}}

The `card` layout supports the following additional arguments:

{{< table wrap=true >}}
| Setting      | Default      | Description |
|--------------|--------------|-------------|
| `cols`         | 3            | Number of columns to display in the card group, should be a value between 1 and 5. The default value is 3. |
| `padding`     | "auto"       | Padding of the content, either "0", "1", "2", "3", "4", "5", or "auto" (default). |
| `header`       | "full"       | Header components of the card, displayed in small caps. Supported values are "full" (default), "publication", "tags", and "none". |
| `footer`       | "none"       | Footer components of the card, displayed in small caps. Supported values are "full", "publication", "tags", and "none" (default). |
| `orientation`  | "stacked"    | Placement of the thumbnail, either "stacked" (default), "horizontal", or "none". |
| `homepage`     | 3            | Maximum number of items to display on the home page (if defined in the [configuration](#configuration-1)), defaults to 3. |
| `separator`    | false        | Flag to indicate a horizontal line should be added between items on small screens. |
{{< /table >}}

The `nav` layout supports the following additional arguments:

{{< table wrap=true >}}
| Setting      | Default      | Description |
|--------------|--------------|-------------|
| `type`         | "pills"      | Optional type of the tab group, either "tabs", "pills" (default), or "underline". |
| `vertical`     | "false"      | Optional flag to show vertical tabs instead of horizontal tabs (default). |
| `class`        | ""           | Optional class attribute of the tab group, e.g. “nav-fill”. |
| `pane`         | "none"       | Optional style of the panes, either "none" (default) or "persona". |
| `width`        | 100          | Optional responsive width of the tab group, either 50 or 100 (default). |
{{< /table >}}

The below configuration shows an example configuration of the [guides available on this site]({{% relref "guides" %}}). The configuration is set in `config/_default/params.toml`.

{{< docs name="sections" file="./config/_default/params.toml" >}}
