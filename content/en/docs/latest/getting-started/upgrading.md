---
title: Upgrading
description: Upgrade your existing Hinode site to take advantage of Hugo modules introduced in v0.16.
date: 2023-08-04
layout: docs
---

{{< release version="v0.16.0" >}}

Hinode v0.16 introduced support for {{< link hugo_modules >}}Hugo modules{{< /link >}} to provide a flexible and extensible modular framework. The prior versions of Hinode relied on {{< link npm >}}npm{{< /link >}} to track and update dependencies. Although npm is still supported, it is no longer a prerequisite to use Hinode. The following paragraphs highlight the key changes required to make your existing site compatible with Hugo modules. When done making your revisions, visit the [installation instructions for Hugo or npm]({{< relref "introduction" >}}) to build, serve, or publish your updated site.

## Meeting the new prerequisites

Hugo uses Go under the hood to manage and install modules. The **Go binary** should be installed on your local machine. If you use automation, be sure that Go is available on your build server too. You can {{< link golang_download >}}download Go from the official website{{< /link >}}. The getting started section in the Hinode documentation captures the [revised requirements of Hinode]({{< relref "introduction#prerequisites" >}}).

## Initializing the module system

Use the `hugo mod init` command to create a `go.mod` file in the root of the project folder. Specify a unique URL - such as the repository path on GitHub - for Hugo to keep track of its version and dependencies. The following command is an example:

{{< command >}}
hugo mod init github.com/gethinode/example
(out)go: creating new go.mod: module github.com/gethinode/example
(out)go: to add module requirements and sums:
(out)       go mod tidy
{{< /command >}}

Add the following lines to your main configuration file (e.g. `config/_default/hugo.toml`) to import Hinode as module:

```toml
  [[module.imports]]
    path = "github.com/gethinode/hinode"
```

You can remove the now obsolete mounts highlighted in yellow from the same configuration file:

```toml {linenos=table,hl_lines=["6-34"]}
[module]
  [module.hugoVersion]
    extended = true
    min = "0.81.0"
    max = ""
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/archetypes"
    target = "archetypes"
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/assets"
    target = "assets"
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/i18n"
    target = "i18n"
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/layouts"
    target = "layouts"
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/static"
    target = "static"
  [[module.mounts]]
    source = "node_modules/@gethinode/hinode/static/fonts"
    target = "static/fonts"
  [[module.mounts]]
    source = "node_modules/bootstrap/dist/js"
    target = "assets/js/vendor/bootstrap"
    includeFiles = "*.bundle.js"
  [[module.mounts]]
    source = "node_modules/flexsearch/dist"
    target = "assets/js/vendor/flexsearch"
    includeFiles = "*.bundle.js"
  [[module.mounts]]
    source = "node_modules/@fortawesome/fontawesome-free/webfonts"
    target = "static/fonts"
  [[module.mounts]]
    source = "archetypes"
    target = "archetypes"
  [[module.mounts]]
    source = "assets"
    target = "assets"
  [[module.mounts]]
    source = "i18n"
    target = "i18n"
  [[module.mounts]]
    source = "layouts"
    target = "layouts"
  [[module.mounts]]
    source = "static"
    target = "static"
  [[module.mounts]]
    source = "static/fonts"
    target = "static/fonts"
```

## Adjusting the site parameters

Hinodes supports core modules and optional modules. Core modules are fully integrated with the Hinode site, including stylesheets and Javascript bundles. On the other hand, optional modules are included on a page-by-page basis. Add the following configuration to your site's parameters. The full documentation is available in the [module configuration]({{< relref "docs/configuration/modules#configuring-modules" >}}).

```toml
[modules]
    core = ["bootstrap", "flexsearch", "fontawesome"]
    optional = ["leaflet", "katex"]
    excludeSCSS = ["bootstrap"]
    disableTemplate = ["katex"]
```

## Preventing version tracking of vendored files

Add the following line to your `.gitignore` file to prevent git from version tracking your vendored files:

```text
/_vendor
```

## Updating the npm configuration

Update the `package.json` file in your repository root if you plan to continue to use npm.

### Updating the npm scripts

Update the npm scripts to include the installation of Hugo modules. You can replace the existing scripts with the following new and adjusted scripts in your `package.json` file:

```json
  "scripts": {
    "prestart":          "npm run -s mod:vendor",
    "start":             "hugo server --bind=0.0.0.0 --disableFastRender",
    "start:prod":        "hugo server --bind=0.0.0.0 --disableFastRender --printI18nWarnings -e production",
    "prebuild":          "npm run clean:public && npm run -s mod:vendor",
    "build":             "hugo --gc --minify",
    "build:cache":       "npm run -s prebuild && hugo --gc --minify -e ci",
    "build:debug":       "npm run -s mod:update && hugo -e debug --debug",
    "build:preview":     "npm run build -D -F",
    "clean:public":      "rimraf public",
    "clean:install":     "rimraf package-lock.json node_modules",
    "lint":              "npm run -s lint:markdown",
    "lint:scripts":      "eslint assets/js",
    "lint:styles":       "stylelint \"assets/scss/**/*.{css,sass,scss,sss,less}\"",
    "lint:markdown":     "markdownlint-cli2 \"*.md\" \"content/**/*.md\"",
    "lint:markdown-fix": "markdownlint-cli2-fix \"*.md\" \"content/**/*.md\"",
    "mod:clean":         "hugo mod clean",
    "mod:update":        "rimraf _vendor && hugo mod get -u ./... && hugo mod get -u && npm run -s mod:vendor && npm run -s mod:tidy",
    "mod:tidy":          "hugo mod tidy",
    "mod:vendor":        "rimraf _vendor && hugo mod vendor",
    "test":              "npm run -s lint",
    "env":               "hugo env",
    "precheck":          "npm version",
    "check":             "hugo version",
    "upgrade":           "npx npm-check-updates -u && npm run -s mod:update"
  },
```

### Updating the npm dependencies

Several existing development packages are no longer needed, as they are replaced by Hugo modules. Delete the npm packages highlighted in yellow from the `package.json` file (the versions in your file may vary):

```json {linenos=table,hl_lines=[2,4,6,12]}
  "devDependencies": {
    "@fortawesome/fontawesome-free": "^6.4.0",
    "@fullhuman/postcss-purgecss": "^5.0.0",
    "@gethinode/hinode": "^0.15.0",
    "autoprefixer": "^10.4.14",
    "bootstrap": "^5.3.0",
    "eslint": "^8.43.0",
    "eslint-config-standard": "^17.1.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-n": "^16.0.1",
    "eslint-plugin-promise": "^6.1.1",
    "flexsearch": "^0.7.31",
    "hugo-bin": "^0.110.1",
    "markdownlint-cli2": "^0.8.1",
    "postcss-cli": "^10.1.0",
    "purgecss-whitelister": "^2.4.0",
    "shx": "^0.3.4",
    "stylelint": "^15.9.0",
    "stylelint-config-standard-scss": "^9.0.0"
  },
```

When done, run `npm i` to update the installation of your npm packages.
