---
title: Server headers
description: Configure the server headers to refine the content security policy.
date: 2024-10-09
layout: docs
aliases:
  - "/docs/server/"
---

{{< release version="v0.27.0-beta3" >}}

Hinode uses strict security policies to ensure the site is {{< link observatory >}}secure by default{{< /link >}}. If you want to include external resources, such as images and videos, you will need to explicitly add these sources to the server headers. If omitted, the browser will refuse to load these resources, resulting in broken links or missing elements. Review the next sections to learn how to configure your policies correctly.

## Defining a custom output format

> [!TIP]
> The {{< link hugo_server >}}server header configuration used by Hugo{{< /link >}} is similar to the configuration supported by Netlify. We can therefore reuse the same template code to configure both environments. This simplifies development and testing, and ensures the local development environment and production environment are comparable.

Since {{< release version="v0.27.0-beta3" short="true" type="link" >}}, Hinode includes {{< link "hinode_csp" >}} a module to generate the server headers automatically{{< /link >}}. It uses a feature from Hugo that enables the definition of a {{< link "hugo_custom_output" >}}custom output format{{< /link >}}. The main Hinode repository defines two custom output formats. The first one generates the server headers for a local web server provided by Hugo. The second output format defines a similar configuration for the deployment to Netlify.

Add the following configuration to your main configuration (usually `hugo.toml`). The setting `root = true` ensures the output files are placed in the root of the build folder. Otherwise, Hugo would create a separate output for each one of the defined site languages.

{{< docs name="headers" file="config/_default/hugo.toml" >}}

Next we will link the two output formats `server` and `netlify` to the home page. By default, Hinode also generates an `RSS` and `REDIR` file for the site. See the the chapter about {{< link "server-side-redirection" >}}server-side redirection{{< /link >}} for more information.

{{< docs name="outputs" file="config/_default/hugo.toml" >}}

## Generating the server headers

By default, Hinode includes {{< link "hinode_csp" >}} a module to generate the server headers automatically{{< /link >}}. The module includes two files in the `layouts` folder that hook the two custom outfut formats to the main index page (which is the site's homepage). The two files are named `layouts/index.netlify.toml` and `layouts/index.server.toml`.

Each file calls a custom partial called `assets/server-headers.html`, which is defined in the {{< link "hinode_csp" >}} CSP module{{< /link >}}. Hinode mounts the required files automatically. The partial requires one parameter called `header`, which links the partial to a configuration that we will define in the next paragraph.

```go-template
{{ partial "assets/server-headers.html" (dict "header" (path.BaseName .RelPermalink)) }}
```

## Configuring the default server headers

By default, Hinode generates the server headers using a default policy. Click on the tab below to review the default settings.

{{< file path="./_vendor/github.com/gethinode/hinode/data/server.toml" full="false" >}}

You can merge the generated file with another input file. The supported formats are `JSON`, `TOML`, `YAML`, and `XML`. For example, you could include additional settings for the deployment to Netlify. Include the settings in your `data` folder and add the relative path to the `source` parameter of your header configuration. For example, the following configuration merges the file `data/netlify.toml` with the Netlify server headers. Add the configuration to your site's parameters (e.g. `hugo.toml`).

```toml
[params.headers]
  [params.headers.netlify]
    source = "netlify.toml"
```

## Merging module policies

Hinode merges the Content Security Policies of each configured module. You can define the policies as regular key-value pairs, using arrays for the directives and domains. The {{< link csp >}}Content Security Policy Quick Reference Guide{{< /link >}} provides an overview of available directives and settings. Hinode includes the following policies by default.

```toml
[params.modules.hinode.csp]
    style-src = ["www.youtube.com"]
    font-src = ["fonts.gstatic.com"]
    frame-src = [
        "player.cloudinary.com",
        "player.vimeo.com",
        "www.youtube-nocookie.com",
        "www.youtube.com"
    ]
    img-src = [
        "data:",
        "*.imgix.net",
        "*.imagekit.io",
        "*.cloudinary.com",
        "i.vimeocdn.com",
        "i.ytimg.com"
    ]
```

You can define additional policies for each included module to improve the maintainability of your site configuration.  For example, the module Google Analytics adds the following directives:

```toml
[params.modules.GoogleAnalytics.csp]
  script-src = [
      "*.google-analytics.com",
      "*.googletagmanager.com"
  ]
  connect-src = [
      "*.google-analytics.com",
      "*.analytics.google.com",
      "*.googletagmanager.com"
  ]
  img-src = [
      "*.google-analytics.com",
      "*.googletagmanager.com"
  ]
```

## Deploying the generated server headers

When building your Hinode site, Hugo will now automatically generate two additional output files that include the latest server headers. To test them locally, we need to ensure the Hugo servers picks up the right configuration. We will use an npm script to automate this task.

First, we will define a new hugo build command `build:headers` as npm script. It uses a new feature introduced in Hugo v0.124.0 to use {{< link hugo_segments >}}build segmentation{{< /link >}}. This reduces the build time. Add the following configuration to your site configuration:

{{< docs name="segments" file="config/_default/hugo.toml" >}}

As we cannot mount files into the `config` folder or base foloder, we need to copy the generated files ourselves. The following script uses the package `cpy-cli` to copy the generated files cross platform.

```json
  "scripts": {
    "build:headers": "hugo --renderSegments headers -d prebuild && cpy prebuild/netlify.toml ./ --flat && cpy prebuild/server.toml config/_default/ --flat",
  },
  "devDependencies": {
    "cpy-cli": "^5.0.0",
  },
```

Test the npm script on your local machine to validate it is working correctly.

{{< command >}}
npm run build:headers
(out)Start building sites ...
(out)hugo v0.134.3
(out)
(out)WARN  Generating server headers: /netlify.toml
(out)WARN  Generating server headers: /server.toml
(out)
(out)                   | EN   
(out)-------------------+------
(out)  Pages            |   2  
(out)  Paginator pages  |   0  
(out)  Non-page files   |   0  
(out)  Static files     | 114  
(out)  Processed images |   0  
(out)  Aliases          |   0  
(out)  Cleaned          |   0  
(out)
(out)Total in 281 ms
{{< /command >}}
