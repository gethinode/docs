---
title: Customizing the appearance of your site
description: Guide on how to use custom layouts to change the appearance of the homepage, single pages, and list pages.
date: 2024-08-20
tags: ["guide", "customization"]
weight: 60
thumbnail: 
    url: img/sketching.jpg
    author: Firmbee.com
    authorURL: https://unsplash.com/@firmbee
    origin: Unsplash
    originURL: https://unsplash.com/photos/person-writing-on-white-paper-gcsNOsPEXfs
---

> [!IMPORTANT]
> The page rendering is being revised. The documentation on this page is still to be updated. Visit this [GitHub issue](https://github.com/gethinode/hinode/issues/1430#issuecomment-2988697852) for more information.

## Introduction

Hinode is a Hugo theme focused on blogs and documentation sites. Using the flexibility of Hugo's templates, you can adapt the layout to your needs and liking. In this guide, we will first customize the homepage using the predefined configuration options. Next, we will replace the grid layout with a custom layout that displays a simple list of articles. Finally, we will customize the header of the single page layout by adding an author name.

> [!NOTE]
> A full-working example of this guide is available on {{< link repository_versioning >}}GitHub{{< /link >}}. Visit {{< link hinode_customization_demo />}} for a live demo.

## Step 1 - Preparing the basic content

In the first step, we will create a basic documentation site using the Hinode template. The site will be in English only, with a main section called `Blog`.

### Creating a new site

We will now create a new site using the Hinode template. Follow the **first step** of the guide on how to [set up a new site using the Hinode template]({{% relref "editing#step-1---initializing-the-project" %}}). Give the repository a recognizable name, such as `customization-demo`.

### Starting a local server

For the purpose of this guide we will support the English language only. Be sure to create a new branch first, so you can test any changes before publishing them. The remainder of this guide uses the `develop` branch for development and the `main` branch for production. Start a local server to test the site is working as expected. Navigate in your browser to the local address (`http://localhost:1313/` by default) to visually inspect the site.

{{< command user="user" host="localhost" prompt="demo $" >}}
npm run start
(out)
(out)Environment: "development"
(out)Serving pages from memory
(out)Web Server is available at http://localhost:1313/ (bind address 0.0.0.0)
(out)Press Ctrl+C to stop
{{< /command >}}

### Adding sample content

Create a new folder `blog` within `content` to create a new section. We will now copy a few sample posts from Hinode's example site. Navigate to the folder `exampleSite/content/en/blog` in the main {{< link repository >}}Hinode repository{{< /link >}}. Copy the following posts (drop the `en` subfolder in the target):

| Source (Hinode repository) | Target (`demo`) |
| -------|--------|
| `exampleSite/content/en/blog/_index.md` | `content/blog/_index.md` |
| `exampleSite/content/en/blog/first-post.md` | `content/blog/first-post.md` |
| `exampleSite/content/en/blog/second-post.md` | `content/blog/second-post.md` |
| `exampleSite/content/en/blog/third-post.md` | `content/blog/third-post.md` |
| `exampleSite/content/en/blog/fourth-post.md` | `content/blog/fourth-post.md` |

### Inspecting the default site

Inspect the site in your local browser, restarting the site with `npm run start` as necessary. Your site should look similar to the following screenshot:

{{< image src="img/default-site.png" mode=true wrapper="col-md-6 mx-auto" caption="Default website" >}}

By default, Hinode displays all sections in the root `content` folder on the home page. It will select the most recent three posts and display them as cards. We will change change this layout in the next paragraph.

## Step 2 - Changing the homepage layout

We will now adjust the style of the blog section on the homepage. First, we will explicitly configure the `blog` section. Hugo supports multiple {{< link hugo_config_overview >}}configuration formats{{< /link >}}, such as `JSON`, `toml`, and `yaml`. You can store the configuration directly in the repository root or in a configuration directory. Further more, you can split the configuration by environment, configuration key, and language. The Hinode template defines a predefined configuration that is split by environment and configuration key.

Open the file `config/_default/params.toml`, which is the default configuration of the site parameters for all environments. Go to the `[home]` element and specify the following configuration:

```toml {lineNos=inline lineNoStart=28}
[home]
    sections = ["blog"]
    fullCover = false
    centerHeadline = false
    style = ""
```

We have now instructed Hinode to display the content within `content/blog` on the homepage only (besides the navigation, featured section, and footer). Navigate to `[sections]` elements and add the following settings:

```toml {lineNos=inline lineNoStart=88}
[sections]
    [sections.blog]
        title = "Recent blog posts"
        sort = "date"
        reverse = false
        nested = true
        cols = 4
        color = ""
        padding = "0"
        header = "full"
        footer = "none"
        orientation = "stacked"
        style = "border-0 card-zoom"
        homepage = 4
        separator = true
```

We have now set the section title, included the first four posts sorted by publication date, and configured four columns. On smaller screens, Hinode will automatically adjust the amount of columns. The homepage should now look similar to the following screenshot:

{{< image src="img/adjusted-homepage-light.png" mode=true wrapper="col-md-6 mx-auto" caption="Adjusted homepage" >}}

You can further expand the amount of sections on the homepage by adding entries to `sections = ["blog"]`. Define their configuration in the `[sections]` element.

## Step 3 - Adding a custom list component

Hinode supports {{< link "/docs/configuration/layout#page-sections" >}}three types of page sections{{< /link >}} by default, being a `card` layout, `list` layout, and `nav` layout. We will now add a custom page section called `custom-list`. This custom section will display the publication date and title of the associated articles in a simple table.

### Adding a new list component type

First we will create a new partial template called `custom-list` that renders the custom table. Partial templates allow us to define smaller, context-aware components that we can invoke from list and page templates. We can also pass arguments such as the current page and the section title.

Hinode uses several {{< link "docs/advanced-settings/partial-development/" >}}conventions for partial development{{< /link >}}. You are encouraged to follow these conventions as well. The most important validation is to formally define and validate any partial arguments. Our list component will support three arguments, being `page`, `list`, and `class`. We can borrow their definitions from the file `/data/structures/list.yml` in the Hinode repository. Copy the following definitions to the file `/data/structures/custom-list.yml`.

```yml
comment: >-
  Displays the publication date and title of the associated articles in a simple
  table.
arguments:
  page:
    type:
      - '*hugolib.pageState'
      - '*hugolib.pageForShortcode'
    optional: false
    comment: Required context of the current page.
    group: partial
  list:
    type:
      - 'page.Pages'
      - 'resource.Resources'
    optional: false
    comment: Required array of pages.
    group: partial
  class:
    type: string
    optional: true
    comment: Class attribute of the list element, e.g. “w-50”.
```

> [!TIP]
> You can identify the type of an (internal) Hugo variable by printing its value type with `%T`. For example, the command `warnf "Page type: %T" .Page` would print the value `*hugolib.pageState` for the current `.Page` context (when invoked from a regular page template).

Create a new file in `layouts/_partials/assets/custom-list.html`. We will now use Hinode's utility partial `utilities/IsInvalidArgs.html` to validate any arguments passed to our partial. Using this convention, we can validate all variables are of the expected type and value. The utility also confirms all mandatory arguments are available. Copy the following code to your new partial file:

```go-template {lineNos=inline}
{{ $error := false }}

{{/* Validate arguments */}}
{{ if partial "utilities/IsInvalidArgs.html" (dict "structure" "custom-list" "args" . "group" "partial") }}
  {{- errorf "partial [assets/list.html] - Invalid arguments" -}}
  {{ $error = true }}
{{ end }}
```

### Generating the HTML element

With the arguments defined and validated we can now construct the HTML element that generates our table. The following code creates a responsive grid of two columns. The first column display the publication date of the article and the second column displays the article's title and author. By using the `range` function we can iterate over the available articles.

Copy the following code to your partial template in `layouts/_partials/assets/custom-list.html`. The code is quite minimalistic. You could further enhance it by adding {{< link hugo_i18n >}}internationalization support{{< /link >}} and pagination. Both features are beyond the scope of this guide.

```go-template {lineNos=inline lineNoStart=9}
{{/* Initialize arguments */}}
{{- $list := .list -}}
{{- $class := .class -}}

{{/* Main code */}}
{{ if not $error }}
  {{- range $index, $item := $list -}}
    <div class="container-fluid p-0">
      <div class="row">
        <div class="col-3 col-md-2">
          {{ partial "utilities/date.html" (dict "date" $item.Date "format" "short") -}}
        </div>
        <div class="col-9 col-md-10">
          <a href="{{ $item.RelPermalink }}">{{ $item.Title }}</a> by {{ $item.Params.author }}
        </div>
      </div>
    </div>
  {{ end -}}
{{ end }}
```

### Modifying the section list component

As a final step we will update the controller that invokes the available list partials. The `layouts/_partials/assets/section-list.html` initializes the configuration as defined in {{< link "#step-2---changing-the-homepage-layout" >}}step 2 of this guide{{< /link >}}. Copy the file from the base Hinode repository to your local repository. Line `120` of the partial defines the recognized layout types. We will add the `custom-list` to this definition:

```go-template {lineNos=inline lineNoStart=120 hl_Lines=1}
{{- $supportedLayouts := slice "card" "custom-list" "list" "nav" -}}
{{- if not (in $supportedLayouts $layout) -}}
  {{- errorf "partial [assets/section-list.html] - Invalid value for param 'layout': %s" $layout -}}
{{- end -}}
```

Line `136-141` define the base arguments available to our custom template. You will recognize them from the argument definitions we added to the file `/data/structures/custom-list.yml` earlier.

```go-template {lineNos=inline lineNoStart=136}
{{- $params := (dict 
    "page" $page
    "list" $list
    "class" $style
    )
-}}
```

Insert the following code on line `177` to invoke our custom partial with the three defined arguments:

```go-template {lineNos=inline lineNoStart=177}
{{- else if eq $layout "custom-list" -}}
    {{- $partial = "assets/custom-list.html" -}}
```

### Validating the custom list component

Now is a good time to validate the custom list component. Set the `layout` type to our newly created `custom-list` component in `params.toml`:

```toml
[sections]
    [sections.blog]
        layout = "custom-list"
```

Save your work and review the site in your local browser. Your site should look similar to the following screenshot:

{{< image src="img/custom-list.png" mode=true wrapper="col-md-6 mx-auto" caption="Custom homepage" >}}

## Step 4 - Overriding the single page rendering

In the last step of this guide we will customize the single page template that renders a blog post. After a brief review of the available templates, we will define a custom single page template for our blog posts.

### Understanding the template lookup order

Hugo supports a comprehensive set of templates to generate the final site. For our purpose, we will focus on the core templates required to render an index page or a single page.

#### The base template

The base template in `layouts/_default/baseof.html` defines the outer shell of all generated HTML pages. A basic template would consist of the document type, a header, and a page body. The block `main` is a placeholder that is used by additional templates. The below template is an example provided by the Hugo team.

```go-template
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>{{ .Site.Title }}{{ end }}
  </head>
  <body>
    {{/* Code that all your templates share, like a header */}}
    {{ block "main" . }}
      {{/* The part of the page that begins to differ between templates */}}
    {{ end }}
  </body>
</html>
```

#### The section template

Hugo invokes the section template for directories that contain a list of pages. By definition, the section should include an `_index.md` file. Our `blog` section is a good example. It includes four sample pages and an index file. Typically, section templates iterate over the collection of available pages and provide an overview with pagination support. We have defined a custom iterator in step 3 of the guide. By convention, Hinode uses the name `list.html` for all section templates.

#### The single page template

Hugo invokes a single page template for pages such as the four individual blog posts. By convention, Hinode uses the filename `single.html` for all single page templates. The base template for a single page defines the various responsive page placeholders, such as a sidebar, main content placeholder, and a table of contents placeholder. The main content is split into a header, body, and footer. Refer to the {{< link "docs/configuration/layout/#single-pages" >}}single page layout{{< /link >}} for more details.

Review the following template for the main content placeholder of a single page. The template is defined in `layouts/_default/single/main.html` and contains the following content:

```go-template
{{- $breakpoint := $.Scratch.Get "breakpoint" -}}
{{ if .Site.Params.navigation.breadcrumb }}
  {{ partial "assets/breadcrumb.html" (dict "page" .) }}
{{ end -}}

{{ .Render "single/header" }}

{{- if and .Site.Params.navigation.toc .Params.includeToc | default true -}}
    <div class="d-{{ $breakpoint.current }}-none pb-5">
      {{ partial "assets/toc-dropdown.html" (dict "page" .) }}
    </div>
{{- end -}}
{{ .Render "single/body" }}

{{ .Render "single/footer" }}
```

### Adjusting the single page header

The single page template defined in the previous paragraph invokes `single/header`, `single/body`, and `single/footer` to render the main elements of a single page. The amount of templates and inheritance might appear complex and overwhelming at first sight. However, as we will find out next, this actually allows us to keep the templates {{< abbr DRY >}}. In other words, it helps us to prevent rework whilst staying flexible.

As mentioned earlier, all page templates are maintained in `layouts/_default` folder. Hugo has a flexible lookup order, meaning that we can replace selective elements only. When we add a `type` to the frontmatter of a page, Hugo will test if there is a template available for that specific type. It will use the template(s) in the `layouts/_default` folder as fallback. This mechanism allows us to customize the appearance of selected pages based on their type.

Add the following configuration to the frontmatter of `content/blog/first-post.md`:

```toml
---
type: custom
---
```

Next, copy the following code to `layouts/custom/single/header.html` to include the page author in the (single) page header. Hugo will match the template folder name `custom` with the frontmatter type:

```go-template {hl_Lines=2}
{{ with .Title }}<p class="display-4 mt-5">{{ . }}</p>{{ end }}
{{ with .Params.author }}<div class="border-bottom">By {{ . }}</div>{{ end }}
{{ partial "assets/sharing.html" (dict "page" .) }}
<p class="lead mb-5">{{ .Description }}</p>
```

You can verify this behavior by looking at the other blog posts. You will notice these pages render without an author name.

{{< image src="img/custom-page.png" mode=true wrapper="col-md-6 mx-auto" caption="Custom homepage" >}}

## Conclusion

In this guide we have customized the appearance of a Hinode site. We have adjusted the configuration of the homepage, added a new list view, and modified the appearance of single pages based on their type. The {{< link "docs/configuration/layout/" >}}layout documentation {{< /link >}} provides more context about the available options.
