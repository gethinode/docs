---
title: Creating versioned documentation
description: Guide on how to create versioned documentation using folders and branch deployments.
date: 2023-06-25
tags: ["guide", "versioning"]
weight: 40
thumbnail: img/books.jpg
photoCredits: <a href="https://unsplash.com/@chrislawton">Chris Lawton</a>
photoSource: <a href="https://unsplash.com/photos/9T346Ij4kGk">Unsplash</a>
---

## Introduction

Providing up-to-date and accurate documentation is an important element of most software products. Hinode supports [sidebar navigation]({{< relref "navigation#sidebar-navigation" >}}) to help your users find the relevant content. However, as your software evolves, you might need to support different versions too. This guides illustrates how you can use Hinode to maintain versioned documentation. 

The next paragraphs explain two main strategies. The first strategy is to maintain seperate content folders in your repository. The second strategy uses so-called multi-branch deployments to publish a specific repository branch. You will need a [Netlify account]({{< relref "hosting-and-deployment#host-on-netlify" >}}) to be able to test the multi-branch deployment.

{{< alert color="info" >}}
A full working example of this guide is available on [GitHub]({{< param "links.repository_versioning" >}}).
{{< /alert >}}

## Step 1 - Preparing the basic content

In the first step, we will create a basic documentation site using the Hinode template. The site will be in English only, and introduce a main section called `Docs`.

### Creating a new site

We will now create a new site using the Hinode template. Follow the **first step** of the guide on how to [set up a new site using the Hinode template]({{< relref "editing#step-1---initializing-the-project" >}}). Give the repository a recognizable name, such as `version-demo`.

### Discarding localization

For the purpose of this guide we will support the English language only. Be sure to create a new branch first, so you can test any changes before publishing them. The remainder of this guide uses the `develop` branch for development and the `main` branch for production.

- Remove the folder `content/nl` and its nested content
- Remove the entire `[nl]` section in `config/_default/languages.toml`
- Remove the file `menus.nl.toml` section in `config/_default/menus`
- Set the value `defaultContentLanguageInSubdir` to `false` in `config/_default/config.toml`

Start a local server to test the site is working as expected. Navigate in your browser to the local address (`http://localhost:1313/` by default) to visually inspect the site.

{{< command user="user" host="localhost" prompt="version-demo $" >}}
npm run start
(out)
(out)Environment: "development"
(out)Serving pages from memory
(out)Web Server is available at http://localhost:1313/ (bind address 0.0.0.0)
(out)Press Ctrl+C to stop
{{< /command >}}

### Adding documentation

Create a new folder `docs` within `content/en` to create a new section. We will create three subfolders within the `docs` section, one for each documentation version:

- `content/en/docs/0.1`
- `content/en/docs/0.2`
- `content/en/docs/latest`

We will now create a simple `about` page for each version. Create a file `about.md` within each version folder. Add the following frontmatter to each file, replacing `{version}` with `0.1`, `0.2`, and `latest`.

```yml
---
title: About (v{version})
description: About my product
date: "2023-06-21"
layout: docs
aliases:
  - "/docs/{version}/"
  - "/docs/" # only add this alias in `content/en/docs/latest/about.md``
---
```

The aliases instruct Hinode to redirect each `docs/{version}` entry to the correct page. The `docs` path redirects to the `latest` about page.

### Supporting redirection

Hugo recognizes the `/docs/` page as a list page by default. To properly map this entry to the latest about page (defined as alias in the previous paragraph), we will need to explicitly instruct Hugo not to generate a list page. Create a new file `_index.md` within `content/en/docs` with the following content to do so:

```yaml
---
title: Docs
redirect: "/docs/"
_build:
  list: false
  render: false
---
```

## Step 2 - Configuring versioned navigation

As a next step, we will enable navigation for the `Docs` section. We will add an entry in the main navigation bar and enable versioned sidebar navigation. Finally, we will add a dropdown menu to the main navigation to enable switching of versions.

### Enabling navigation

First we will add a main menu entry for the (latest) docs content. Add the following content to `config/_default/menus/menus.en.toml`:

```toml
[[main]]
  name = "Docs"
  url = "/docs/"
  weight = 40
```

Now create a file `docs.yml` in the `data` folder to enable sidebar navigation:

```yml
- title: About
```

{{< alert color="info" >}}
You can copy the `docs.yml` file to `docs-0.1.yml` and `docs-0.2.yml` to create versioned sidebar navigation. Hinode uses `data/docs.yml` as default sidebar navigation data when no versioned file is available.
{{< /alert >}}

Finally, we will tell Hinode where to find the versioned docs pages. Hinode uses the permalink of the current page to extract the version label, if any. This label is used to generate the correct links for the main navigation and sidebar navigation. Add the following value to `config/_default/params.toml`:

```toml
[docs]
  contentPath = "/docs/"
```

### Configuring the version switcher

We will now configure a drop-down menu in the main navigation to enable switching of the current version. We will add an entry for each release, identified by the labels `v0.1`, `v0.2`, and `latest`. The argument `url` matches the release with the correct content folder. 

To improve the layout of the menu, we can tag a specific release as `latest`. We can also group releases by adding a label without an url. The menu is rendered in the order as configured. Add the following content to `config/_default/params.toml`:

```toml
[[docs.releases]]
  label = "Current release"

[[docs.releases]]
  label = "latest"
  url = "/docs/latest/"
  latest = true

[[docs.releases]]
  label = "Previous releases"

[[docs.releases]]
  label = "v0.2"
  url = "/docs/0.2/"

[[docs.releases]]
  label = "v0.1"
  url = "/docs/0.1/"
```

Check if your site is working correctly. You may need to restart your local server for the aliases to work properly. Additionally, you might have to clear your browser cache too.

### Deploying the current branch

We will now deploy and publish the main branch with Netlify. For the deployment to be successful, you will need to specify the `baseURL` in `config/_default/config.toml`. The template config defines a default value that you will need to replace. You can use a domain that you own, or use a domain provided by Netlify (such as `{sitename}.netlify.app/`). If you do not know the sitename or domain name yet, you can go ahead with the deployment and come back to this step later.

```toml
baseURL = "https://template.gethinode.com/" # replace this
```

Head over to your repository on Github and submit a Pull Request (PR) to update your main branch. When successful, login to your Netlify account and create a new site. You can follow the [deployment guidelines]({{< relref "hosting-and-deployment#host-on-netlify" >}}) for a more detailed explanation. Once done, validate that you have a working site in production.

<!-- TODO: add screenshot -->

## Step 3 - Using multi-branch deployments

The approach with various version folders in the same repository might be adequate for smaller documentation sites. This guide uses a single content page for each version to illustrate the concept. In reality, complex documentation sites might have thousands of pages and many folders. Ideally, we would use Git to track versioned changes with tags and releases. Fortunately, we can use multi-branch deployments to achieve this goal. The support and configuration of multi-branch deployments various across hosting providers. The remainder of this guide uses Netlify as provider.

### Creating a new branch

Create a new branch called `v0.9` that is derived from your current branch (be sure to commit the current branch first). For demonstration purposes, we will now label the latest branch as `0.9`. In this step, we will expose the `latest` folder as the specific version `0.9`. Ofcourse, we could simply rename the physical folder and be done with it. However, we would loose the ability to easily track changes to our documentation in the Git repository. Renaming a folder implies that the old folder and content are removed, and a new folder is created. Instead, we will use Hugo's mounting feature to rename and expose the folder on the fly.

{{< alert >}}
Mounting a `content` folder overrides the language-specific settings. In our configuration we have set `defaultContentLanguage` to `en` and `defaultContentLanguageInSubdir` to `false`. We will need to manually add this to our mounts to achieve the same behavior.
{{< /alert >}}

Add the following mount to `config/_default/config.toml` to map the `latest` folder to `0.9`. We will keep the remaining content within the `docs` folder as is.

```toml
  [[module.mounts]]
    source = "content/en/docs/latest"
    target = "content/docs/0.9"
    lang = 'en'
  [[module.mounts]]
    source = "content/en"
    target = "content"
    lang = 'en'
    excludeFiles = 'docs/latest/*'
```

Next we will update the title and alias in the frontmatter of `content/en/docs/latest/about.md`:

```yml
title: About (0.9)
aliases:
  - "/docs/0.9/"
  - "/docs/"
```

And finally, we will update the `label` and `url` for the release in `params.toml`:

```toml
[[docs.releases]]
    label = "0.9"
    url = "/docs/1.0/"
    latest = true
```

### Configure the multi-branch deployment

We will deploy the `v0.9` branch on a separate subdomain with a so-called multi-branch deployment. By default, Netlify publishes the `main` branch only, along with any previews. We can instruct Netlify to deploy an additional branch, such as `v0.9`. Netlify uses the branch name followed by two hyphens and your internal Netlify subdomain. We will use this pattern as our baseURL in `config/_default/config.toml`.

Update the baseURL of `config.toml` in your `v0.9` branch, replacing `{branch}` and `{sitename}` with the correct values. Commit the changes to your branch when done.

```toml
baseURL = "https://{branch}--{sitename}.netlify.app/"
```

Head over to your Netlify configuration and navigate to the section `Site settings / Build & deploy / Continous deployment`. Next, scroll to the section `Branches and deploy contexts` and click the button `Edit settings`. Select the option `Let me add individual branches` for `Branch deploys:`. In the text field, enter `v0.9` as branch name. When done, click `Save`.

{{< alert >}}
By default, any changes submitted to the `v0.9` branch are processed and released to production immediately. Set up branch protection rules and automated testing (similar to the `main` branch) as needed.
{{< /alert >}}

Test if the branch is deployed sucessfully by navigating to `https://{branch}--{sitename}.netlify.app/`. The default `netlify.toml` file in the repository root has enabled `netlify.app` in the Content Security Policy by default. [Review and adjust the server headers]({{< relref "server" >}}) as needed.

<!-- TODO Add screenshots -->
<!-- Submit a PR -->

### Using server-side redirection

Hugo supports [client-side redirection using aliases]({{< param "links.hugo_alias" >}}). We have defined these aliases in our about pages. In this approach, the browser receives an instruction to redirect to a new URL when visiting the initial page. We can instruct the server to redirect the URL instead, thus safing an additional roundtrip.

Hinode has defined a template in `layouts/index.redir` to automatically generate server-side redirection rules for Netlify. When you add the status code `200` to such a rule, the [redirection becomes a rewrite]({{< param "links.netlify_rewrite" >}}). In a **rewrite**, the URL in the visitor's address bar remains the same, while the content is fetched from a different location behind the scenes. We will use this mechanism to fetch the content from the branch site.

Go back to your `develop` branch

Add the below code to your **production** configuration in `config/production/config.toml`. The setting `disableAliases` disables all client-side redirection rules. Instead, the `REDIR` output generates all redirection rules for the server, including rewrites.

```toml
disableAliases = true

[outputFormats.REDIR]
mediaType = "text/netlify"
baseName = "_redirects"
isPlainText = true
notAlternative = true

[mediaTypes."text/netlify"]
delimiter = ""

[outputs]
home = ["HTML", "RSS", "REDIR"]
```

## Step 4 - Updating the main site


## Conclusion

