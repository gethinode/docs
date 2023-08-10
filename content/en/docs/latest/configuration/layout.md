---
title: Layout
description: Hinode uses a grid-based, responsive design for the home page, single pages and list pages.
date: 2023-08-04
layout: docs
---

Hinode uses Bootstrap's {{< link bs_grid >}}grid system{{< /link >}} and {{< link bs_breakpoints >}}breakpoints{{< /link >}} to create a responsive layout across devices or viewport sizes. All pages follow the same base layout, which includes headers and footers. The next paragraphs explain the layout styles in more detail.

## Base layout

The base layout defines a page skeleton of which all other pages are derived. It consists of four major sections, being a header, body, social footer, and bottom footer. It also loads sytlesheets, scripts, and generates the metadata. The header includes the [main navigation]({{< ref "navigation#main-navigation" >}}) and can be optionally fixed to the top. The width of the base layout is maximized to 1320 pixels (see the `container-xxl` setting of the {{< link bs_container >}}Bootstrap containers{{< /link >}}). The height is set to a least 100% of the viewport, to ensure the footer is always aligned to the bottom on the page.

### Example

The following diagram illustrates the conceptual base design:

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Header .col-12 <i>(optionally fixed)</i></div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p class="mb-5">Body .col-12 .flex-fill</p>
                <i>vertically expands to fill viewport</i>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Social .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Footer .col-12</div>
        </div>
    </div>
</div>

### Configuration

Hinode uses several settings from Hugo's {{< link hugo_config >}}main configuration{{< /link >}}. Several extensions are defined in the {{< link hugo_config_dir >}}custom site parameters{{< /link >}} and {{< link hugo_lang_config >}}language-specific configuration{{< /link >}}.

#### Main configuration

The base layout uses the {{< link hugo_config >}}main configuration{{< /link >}} of Hugo. The settings below are actively used by Hinode:

{{< table >}}
| Setting       | Default | Description |
|---------------|---------|-------------|
| title         | -       | Title of the website, joined with the separator and title of the current page. |
| copyright     | -       | Copyright notice added to the page footer. |
| paginate      | 9       | Maximum number of elements to display on a [list page](#list-pages) before pagination. |
| enableGitInfo | -       | Enables git information, which is used by [documentation pages]({{< relref "content-management#documentation-layout" >}}). |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/hugo.toml`.

{{< docs name="main" file="config/_default/hugo.toml" >}}

#### Extended configuration

{{ alert tye="info" }}
Hinode is fully open source. By default, the theme adds a link to Hinode in the page's footer. You can disable it by setting `endorse` to `false`, but we would appreciate it if you leave it enabled.
{{ /alert }}

Hinode uses the following extended settings in the `main` section of the `site parameters`:

{{< table >}}
| Setting            | Default           | Description |
|--------------------|-------------------|-------------|
| separator          | "-"               | Seperator to join the website title and page title. |
| description        | -                 | Short description of the website that is added to the page metadata. |
| enableDarkMode     | true              | Enables switcher for [light mode and dark mode]({{< relref "color-modes" >}}). |
| modes              | ["light", "dark"] | Supported color modes, used as identifier for color-mode aware images. |
| endorse            | true              | If set, adds a link to `gethinode.com` in the page's footer. |
| footerBelowFold    | false             | If set, pushes the footer including social links to below the page fold. |
| canonifyAssetsURLs | false             | If set, makes permalinks to site assets (favicons, images, scripts, and stylesheets) absolute instead of relative. |
| externalLinks.cue  | false             | If set, adds a visual cue `{{</* fas up-right-from-square fa-2xs */>}}` as suffix to [managed external links]({{< relref "links-and-cross-references#managed-links" >}}). |
| externalLinks.tab  | false             | If set, opens [managed external links]({{< relref "links-and-cross-references#managed-links" >}}) in a new browser tab using the HTML attributes `target="_blank" rel= "noopener noreferrer"`. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="main" file="config/_default/params.toml" >}}

#### Message configuration

{{< release version="v0.14.4" >}}

You can show informative messages using the [toast shortcode]({{< relref "toast" >}}). By default, toast messages are displayed in the bottom right of the viewport. Hinode vertically stacks multiple toast messages automatically. Adjust the configuration by adjusting `messages` in the `site parameters`. The following arguments are supported:

{{< table >}}
| Setting         | Default        | Description |
|-----------------|----------------|-------------|
| placement       | "bottom-right" | Optional position of the toast messages relative to the viewport: "top-left", "top-center","top-right", "middle-left", "middle-center", "middle-right", "bottom-left", "bottom-center", or "bottom-right" (default). |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="messages" file="config/_default/params.toml" >}}

#### Social sharing configuration

{{< release version="v0.14.3" >}}

Hinode can optionally add buttons to share a post via available social media. Use the following extended settings in the `sharing` section of the `site parameters` to configure these buttons:

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Setting         | Default       | Description |
|-----------------|---------------|-------------|
| enabled         | false         | Define if social sharing should be enabled for all single pages. You can override this setting by adding `enabled` to the individual page's frontmatter.
| sort            | "weight"      | Sorting key to be used, either "name" or "weight". You can also reference a custom key defined in the provider configuration. |
| reverse         | false         | Flag to indicate if the sorting of the social sharing buttons should be reversed, defaults to false. |
| webshare        | false         | Flag to indicate if native sharing provided by the Operating System should be enabled (via the web share API). If set and {{</* link caniuse_webshare >}}supported by the browser{{< /link */>}}, an additional button is added. |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

Add each available provider to `[[sharing.providers]]`. The providers support the following arguments:

{{< table >}}
| Setting   | Default | Description |
|-----------|---------|-------------|
| name      | -       | Name of the provider, added as assistive title to improve accessibility. |
| url       | -       | Parameterized URL of the social media provider. The `url` supports the parameters `{url}` and `{title}`. The `{url}` is replaced with the page's permalink, and `{title}` with the page's title. |
| icon      | -       | Shorthand notation of the [Font Awesome icon]({{< relref "../content/icons" >}}) to be used as button, e.g. `fab linkedin`. |
| weight    | -       | Weight of the social sharing button, to be used as sorting key. |
| clipboard | false   | If set, the defined url is copied to the clipboard instead of being opened. A [toast message]({{< relref "toast" >}}) is shown to inform the user. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="sharing" file="config/_default/params.toml" >}}

#### Language-specific configuration

Hinode supports {{< link hugo_lang_config >}}multilingual content{{< /link >}}. The following parameters are used in the site's footer, header, and meta data. Refer to the [languages]({{< ref "languages" >}}) section to review the various configuration options to enable multilingual content.

{{< table >}}
| Section | Setting       | Default | Description |
|---------|---------------|---------|-------------|
| head    | tagline       | -       | Tagline used on the site's title for the home page. |
| feature | link          | -       | {{</* release version="v0.18.0-alpha" short="true" state="deprecated" size="sm" inline="true" */>}} Modify `content/{LANG}/_index.md` directly (`{LANG}` is optional, pending on your [language settings]({{</* relref "languages" */>}})). |
| feature | caption       | "About" | {{</* release version="v0.18.0-alpha" short="true" state="deprecated" size="sm" inline="true" */>}} See `feature.link`. |
| social  | title         | -       | Title displayed in the site's social footer. |
| social  | caption       | -       | Caption displayed in the site's social footer. |
| footer  | license       | -       | License displayed on the site's footer. |
| footer  | socialTitle   | -       | {{</* release version="v0.18.0-alpha" short="true" state="deprecated" size="sm" inline="true" */>}} Use `social.title` instead. |
| footer  | socialCaption | -       | {{</* release version="v0.18.0-alpha" short="true" state="deprecated" size="sm" inline="true" */>}} Use `social.caption` instead. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/languages.toml` for the English language.

{{< docs name="lang-param" file="config/_default/languages.toml" >}}

## Home page

The home page introduces a feature section and several [configurable sections]({{< relref "#page-sections" >}}). The default home page of Hinode displays the three most recent blog posts and projects, each rendered as cards in a seperate section. A button that links to the related list page is added below each group. The feature section can optionally cover the entire viewscreen.

### Example

The following diagram illustrates the conceptual layout of the home page:

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Header .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Feature .col-12</p>
                <i>optionally spans viewport</i>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Section 1 .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Section 2 .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Section ... .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Social .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Footer .col-12</div>
        </div>
    </div>
</div>

### Configuration

The configuration of the home page is set in the `home` section of the `site parameters`. The folllowing settings are supported:

{{< table >}}
| Setting      | Default           | Description |
|--------------|-------------------|-------------|
| sections     | All root sections | Sections to include on the home page, e.g. `["blog", "projects"]` - defaults to {{</* link hugo_sections >}}all root sections.{{< /link */>}} |
| featurePhoto | -                 | {{</* release version="v0.18.0-alpha" short="true" state="deprecated" size="sm" inline="true" */>}} Use `thumbnail` of the homepage (e.g. `content/_index.md`) instead. |
| fullCover    | false             | Flag to indicate if the feature element should cover the entire front page. |
| style        | -                 | Optional class attributes to add to the main `<div>` element of the base page. Applies to the homepage only. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`. The `sections` are commented out, meaning all root sections are enabled by default.

{{< docs name="home" file="config/_default/params.toml" >}}

## List pages

List pages define one [configurable section]({{< relref "#page-sections" >}}) for the available content within the page bundle. By default, list pages display the most recent nine items as card group. If the section contains more items, a paginator is added below the card group. Adjust the setting `paginate` in the [main configuration](#configuration) as needed.

### Example

The following diagram illustrates the conceptual layout of a list page:

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Header .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Section .col-12</p>
                <i>optional paginator</i>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Social .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Footer .col-12</div>
        </div>
    </div>
</div>

### Configuration

The list page uses the [configuration of a single section]({{< relref "#configuration-4" >}}).

## Single pages

Single pages follow the base layout but introduce two columns next to the body content. The left column shows a [sidebar navigation]({{< ref "navigation#sidebar-navigation" >}}) if applicable and is left empty otherwise. The right column shows a [table of contents]({{< ref "navigation#table-of-contents" >}}) for the current page if applicable. On smaller viewscreens, the sidebar navigation folds into an offcanvas element, whilst the table of contents is hidden. On medium-sized screens the sidebar navigation takes precedence over the table of contents. The following diagram illustrates the base layout.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3 mb-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Header .col-12</div>
        </div>
        <div class="col-12">
            <div class="row">
                <div class="col-3">
                    <div class="bg-primary bg-opacity-10 rounded-3">
                        <p>Sidebar</p>
                        <i>sticky</i>
                    </div>
                </div>
                <div class="col-6">
                    <div class="bg-primary bg-opacity-10 rounded-3">
                        <p>Body .col-8 .flex-fill</p>
                        <i>expands to fill viewport</i>
                    </div>
                </div>
                <div class="col-3">
                    <div class="bg-primary bg-opacity-10 rounded-3">
                        <p>TOC</p>
                        <i>sticky</i>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Social .col-12</div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-secondary bg-opacity-10 rounded-3">Footer .col-12</div>
        </div>
    </div>
</div>

Single pages support three optional layout types, which can be configured in the page's frontmatter. The next paragraphs describe each layout type in more detail. These layout types apply to the body section of the base layout.

### Default layout

By default, single pages, such as a blog page, include multiple elements, such as a rich header, thumbnail, body, and footer. The following diagram illustrates the default layout of a single page.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p><b>Page header</b></p>
                <p>Metadata</p>
                <p>Tags</p>
                <p>Description</p>
                {{< fas image >}} Thumbnail
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                Page content
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Page footer</p>
                Navigation links
            </div>
        </div>
    </div>
</div>

### Documentation layout

Documentation pages use a more straightforward, simplified layout compared to the default layout. Configure the following setting to the page's frontmatter to apply the documentation layout:

```yml
---
layout: docs
---
```

The following diagram illustrates the documentation layout of a single page.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p><b>Page header</b></p>
                Description
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                Page content
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Page footer</p>
                Git metadata
            </div>
        </div>
    </div>
</div>

### Minimal layout

Pages with a minimal layout are similar to documentation pages, but do not include a footer at all. Configure the following setting to the page's frontmatter to apply the minimal layout:

```yml
---
layout: minimal
---
```

The following diagram illustrates the minimal layout of a single page.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p><b>Page header</b></p>
                Description
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                Page content
            </div>
        </div>
    </div>
</div>

### Configuration

Please refer to the [content management section]({{< relref "content-management#single-pages" >}}) to review the elements available in the page's frontmatter. The configuration of the documentation pages is set in the `docs` section of the site parameters. The folllowing settings are supported:

{{< table >}}
| Setting      | Default | Description |
|--------------|---------|-------------|
| version      | -       | Default version to use in documentation links. |
| basePath     | -       | Base path to use for file references. |
| github       | -       | Repository URL for the docs site, overrides `schema/github` in  `config/_default/params.toml`. |
| release      | -       | Release url for the docs site, e.g. `https://github.com/gethinode/hinode/releases/tag/`. This setting is used by the [release shortcode]({{< relref "release" >}}).
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="version" file="./config/_default/params.toml" >}}

## Page sections

Both the home page and the list page use one or more page sections to display a sorted list of items. The lists can contain either [regular pages  or page snippets]({{< relref "content-organization" >}}). The next paragraphs describe the three available layout types.

### Card layout

The card layout displays a group of cards in a grid. The default setting is to show nine items at a time. You can adjust these settings in the [page section configuration]({{< relref "#configurtion-4" >}}), including the style of the cards themselves. Refer to the [card shortcode documentation]({{< relref "card" >}}) to review the available card styles. The next diagram illustrates a typical card layout.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 1</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 2</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 3</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 4</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 5</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 6</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 7</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 8</div>
        </div>
        <div class="col-4">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">Item 9</div>
        </div>
    </div>
</div>

### List layout

The list layout shows the page bundle's items as a vertical list. The thumbnail alternates between being left-aligned and right-aligned for each row. Remove the `description` from the page's frontmatter to display the full content instead of the description. The content of the item is displayed next to the thumbnail.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Item 1</p>
                <div class="row">
                    <div class="col-6">
                        <div class="p-3 border rounded-3 text-secondary">{{< fas image >}}</div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border rounded-3">Content .col-6</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Item 2</p>
                <div class="row">
                    <div class="col-6">
                        <div class="p-3 border rounded-3">Content .col-6</div>
                    </div>
                    <div class="col-6">
                        <div class="p-3 border rounded-3 text-secondary">{{< fas image >}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Nav layout

The nav layout shows a nav element where each tab pane represents a single item of the page bundle. Remove the `description` from the page's frontmatter to display the full content instead of the description. The tab pane shows the content of the selected item.

<div class="container-fluid text-center bg-light border rounded-3 bg-opacity-10 p-3">
    <div class="row g-3">
        <div class="col-12">
            <div class="p-3 bg-primary bg-opacity-10 rounded-3">
                <p>Item 1 | Item 2 | Item 3</p>
                <div class="row">
                    <div class="col-12">
                        <div class="p-3 border rounded-3">Content .col-12</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

### Configuration

The configuration of each section is set in the `sections` setting of the `site parameters`. The entire configuration is fully optional and uses default settings if omitted. The folllowing settings are supported per section:

<!-- markdownlint-disable MD037 -->
{{< table >}}
| Setting      | Default              | Description |
|--------------|----------------------|-------------|
| title        | ""                   | Title of the section on the home page. It overrides the title of the page bundle. On list pages, the title defined in the page bundle's frontmatter is used instead. When using a multi-lingual site, make sure to properly translate this setting. |
| reference    | "More {{section}}"    | Caption of the button that links to the section's associated list page (if applicable). By default, the title is set to "More {{section}}", where `{{section}}` is the section title in plural. When using a multi-lingual site, make sure to properly translate this setting. |
| layout       | "card"               | Layout of the section, either "card" (default), "list", or "nav". |
| sort         | "date"               | Sorting key to be used, based on a frontmatter parameter. Examples are "date" (default), "lastmod", "weight", or "title". You can also use custom parameters, as long as they are defined in the page's frontmatter. |
| reverse      | true                 | Flag to indicate the sorting of the section content should be reversed, defaults to true. |
| nested       | true                 | Flag to indicate the content should be listed recursively for the entire {{</* link hugo_sections >}}section{{< /link */>}}. You can override this setting for individual branch bundles by adding `nested` to the page's frontmatter. |
| background   | -                    | Theme color of the section background, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black", "body", or "body-tertiary". By default, no color is specified. The background expands across the entire viewport (thus is not constrained to the page's maximum width of 1320 pixels). |
| color        | -                    | Theme color of the section elements, either "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "white", "black", "body", or "body-tertiary". By default, no color is specified. |
| style        | "border-0 card-zoom" | Optional styling attributes added to selection elements, e.g. "border-0" to remove the borders. |
{{< /table >}}
<!-- markdownlint-enable MD037 -->

The `card` layout supports the following additional arguments:

{{< table >}}
| Setting      | Default      | Description |
|--------------|--------------|-------------|
| cols         | 3            | Number of columns to display in the card group, should be a value betweeen 1 and 5. The default value is 3. |
| padding      | "auto"       | Padding of the content, either "0", "1", "2", "3", "4", "5", or "auto" (default). |
| header       | "full"       | Header components of the card, displayed in small caps. Supported values are "full" (default), "publication", "tags", and "none". |
| footer       | "none"       | Footer components of the card, displayed in small caps. Supported values are "full", "publication", "tags", and "none" (default). |
| orientation  | "stacked"    | Placecement of the thumbnail, either "stacked" (default), "horizontal", or "none". |
| homepage     | 3            | Maximum number of items to display on the home page (if defined in the [configuration](#configuration-1)), defaults to 3. |
| separator    | false        | Flag to indicate a horizontal line should be added between items on small screens. |
{{< /table >}}

The `nav` layout supports the following additional arguments:

{{< table >}}
| Setting      | Default      | Description |
|--------------|--------------|-------------|
| type         | "pills"      | Optional type of the tab group, either "tabs", "pills" (default), or "underline". |
| vertical     | "false"      | Optional flag to show vertical tabs instead of horizontal tabs (default). |
| class        | ""           | Optional class attribute of the tab group, e.g. “nav-fill”. |
| pane         | "none"       | Optional style of the panes, either "none" (default) or "persona". |
| width        | 100          | Optional responsive width of the tab group, either 50 or 100 (default). |
{{< /table >}}

The below configuration shows an example configuration of the [guides available on this site]({{< relref "guides" >}}). The configuration is set in `config/_default/params.toml`.

{{< docs name="sections" file="./config/_default/params.toml" >}}
