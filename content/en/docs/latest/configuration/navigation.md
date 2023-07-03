---
title: Navigation
description: Help the user navigate your website using configurable navigation elements.
date: 2023-05-21
layout: docs
---

Hinode supports several types of navigation that utilize Bootstrap elements. The main navigation is positioned on the top of the screen and includes a search input element. An optional secondary navigation is available as sidebar. Next to these navigation items, pages may optionally include a breadcrumb to indicate the current page's location within the site's navigational hierarchy. Finally, pages may also include a table of contents element that is linked to the scroll position of the current page.

## Basic configuration

The basic configuration of the navigation elements is set in the `navigation` section of the site parameters. The folllowing settings are supported:

{{< table >}}
| Setting    | Default | Description |
|------------|---------|-------------|
| anchor     | -       | Flag indicating to display anchor links on hovering a heading. |
| logo       | -       | Address of the brand logo image, e.g. "/img/logo_embedded.svg". The vector image file is expected to be present in your local `static/img` folder. |
| color      | -       | [Theme color]({{< ref "colors" >}}) of the navigation bar. Set the style to set the correct contrast of the menu items. The navigation bar is transparent when no color is set, but is set to the body color when scrolling to enhance the contrast. |
| style      | "light" | Style of the navigation bar, either "light" or "dark". It changes the colors of the menu items accordingly. |
| fixed      | false   | Flag indicating to keep the navigation bar fixed at the top of the screen. |
| offset     | "3em"   | Applies an [offset to main elements]({{< param "links.bs_navbar_placement" >}}) when `fixed` is set to true. |
| search     | true    | Flag indicating to include a search input. |
| breadcrumb | false   | Flag indicating to add breadcrumb navigation to the top of any single page. List pages are excluded. |
| toc        | true    | Flag indicating to enable table of contents globally. Individual pages can override this setting in the frontmatter using the value `includeToc`. |
| sidebar    | true    | Flag indicating to enable sidebar navigation globally. If set, a sidebar is displayed when applicable. |
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="navigation" file="config/_default/params.toml" >}}

## Main navigation

The main navigation uses [Hugo's menu system]({{< param "links.hugo_menus" >}}) to generate a responsive navigation bar at the top of the page. The navigation bar uses a breakpoint to add a toggler for smaller screens. A language switcher is added automatically if your site supports multiple languages. The language switcher links to the currently translated page if available.

### Menus

The navigation bar uses [Hugo's menu system]({{< param "links.hugo_menus" >}}) to generate the menu items. The navigation supports nesting at one level deep. Hinode supports an additional parameter called `alias`. If set, the active menu item is linked to the specific menu entry instead of being derived from the target URL. The following example defines an example menu configuration called `sample` (the main configuration is called `main`).

{{< docs name="sample-navigation" file="./config/_default/menus/menus.en.toml" >}}

### Example

The example below illustrates the navigation bar based on the sample configuration defined in the previous paragraph. The `About` and `About (no alias)` menu entries illustrate the behavior of the `alias` parameter. The `GitHub` menu entry shows an icon to indicate it is an external link and opens in a new window.

{{< navbar color="body-tertiary" size="sm" search="false" menus="alias" title="Sample" >}}

### Versioning

The main navigation supports versioning too. When configured, a drop-down menu containing the available versions is automatically added. See the [documentation configuration]({{< relref "documentation" >}}) for more details.

### Customization

Hinode includes a navigation bar at the top of the screen by default. You can modify the configuration in the `layouts/_default/baseof.html` file. The navigation bar is also available as [shortcode]({{< ref "navbar" >}}).

## Sidebar navigation

Hinode supports optional sidebar navigation. It is intended to be used as companion to the main navigation and is typically used in content-heavy sections, such as documentation pages. On smaller screens, the sidebar is replaced with an [offcanvas element]({{< param "links.bs_offcanvas" >}}). In this case, the main navigation receives an additional toggler on the left of the screen.

### Menus

Inspired by Bootstrap's documentation site, Hinode uses a separate configuration file for the sidebar menus. A sidebar can be configured for each main section of the site. For example, the sidebar menu of the `docs` section is defined in `data/docs.yml`. The sidebar menu supports group items and single page items. The below example defines a group section called `Getting started` with three siblings. A single page `About` is added next.

```yml
- title: Getting started
  pages:
    - title: Introduction
    - title: Commands
    - title: Contribute
- title: About
```

Menu items can be nested within each other. The below example defines three content pages at the relative path `A/B/C`. The navigation path should be similar to the slug of the individual pages.

```yml
- title: A
  pages:
    - title: B
      pages:
        - title: C
          pages:
            - title: First
            - title: Second
            - title: Third
```

### Versioning

{{< release version="v0.15.0" >}}

{{< alert color="info" >}}
Release v0.15.0 of Hinode automatically detects the version of the current context. The configuration of the `version` attribute is no longer needed.
{{< /alert >}}

You can create versioned files for your menu data by adding a version suffix to the data file. For example, `data/docs-1.0.yml` contains the menu data for the `docs` menu of version `1.0`. Hinode uses `data/docs.yml` as default sidebar navigation data when no versioned file is available. See the [documentation configuration]({{< relref "documentation" >}}) for additional options.

### Customization

The file `assets/scss/components/_sidebar.scss` contains the styling of the sidebar. It refers to a button `$btn-toggle` that is defined in `assets/scss/common/_icons.scss`. It also defines the spacing to be added to the page's main content section when using a fixed navigation bar:

{{< docs name="sidebar" file="assets/scss/components/_sidebar.scss" >}}

## Breadcrumb

Hinode supports optional breadcrumb navigation. The breadcrumb indicates the current page's location within the site's navigational hierarchy. It is automatically populated by Hugo. Enable the breadcrumb in the [basic navigation configuration](#basic-configuration). If enabled, all single pages will add breadcrumb navigation to the top of the page.

### Example

When enabled, the breadcrumb looks like this:

{{< breadcrumb >}}

### Customization

The breadcrumb is also available as [shortcode]({{< ref "breadcrumb" >}}).

## Table of contents

Single pages can optionally show an [table of contents]({{< param "links.hugo_toc" >}}) on the right of the screen. The table of contents is automatically popuplated based on the headings within the page content (two levels deep). The table of contents is hidden if it has less than two items. On smaller screens, a drop-down menu is added to the top of the page. Enable the table of contents in the [basic navigation configuration](#basic-configuration). If enabled, all single pages will show the element, unless disabled in the page's frontmatter.

### Customization

The file `assets/scss/components/_toc.scss` defines the styling of the table of contents element. It adds spacing to align the element to the sidebar, amongst other styling:

{{< docs name="toc" file="assets/scss/components/_toc.scss" >}}