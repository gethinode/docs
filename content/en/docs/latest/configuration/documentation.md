---
title: Documentation
description: Configure versioned documentation
date: 2023-07-03
layout: docs
---

Hinodes supports the configuration of documentation pages. You can either maintain a single content directory, or add versioned documentation.

## Basic configuration

The configuration of the documentation pages is set in the `docs` section of the site parameters. The following settings are supported:

{{< table >}}
| Setting      | Default | Description |
|--------------|---------|-------------|
| version      | -       | Default version to use in documentation links, only applicable when no other versions have been defined (see [next paragraph]({{% relref "documentation#versioned-documentation" %}})). |
| basePath     | -       | Base path to use for file references. |
| github       | -       | Repository URL for the docs site, overrides `schema/github` in `config/_default/params.toml`. |
| release      | -       | Release url for the docs site, e.g. `https://github.com/gethinode/hinode/releases/tag/`. This setting is used by the [release shortcode]({{% relref "release" %}}) and [timeline shortcode]({{% relref "timeline" %}}).
{{< /table >}}

The below configuration shows the default configuration set in `config/_default/params.toml`.

{{< docs name="version" file="./config/_default/params.toml" >}}

## Versioned documentation

Use the following extended settings in the `docs` section of the `site parameters` to enable versioned documentation:

{{< table >}}
| Setting         | Default | Description |
|-----------------|---------|-------------|
| contentPath     | -       | Defines the path (usually a section) relative to the `content` folder that maintains the documentation. Each release is expected to be stored in a separate folder within this folder. For example, the documentation with version `1.0` is expected to be maintained in `content/en/docs/1.0`   (when using English as default language). |
| overview        | -       | If set, adds a version overview link to the version switcher in the main navigation, for example `/docs/versions/`. |
| latest          | -       | Defines the latest available version, used by `checkVersion` to validate if a version is current. |
| checkVersion    | false   | If set, adds an alert to inform your users that they are not looking at the latest version of the available documentation. Specify the latest available version in latest. The alert links to the `latestURL`. |
| latestURL       | -       | Link used by `checkVersion` when a newer version has been detected, e.g. `https://version-demo.gethinode.com/docs/`. |
{{< /table >}}

Add each available version to `[[docs.releases]]`. The releases support the following arguments:

{{< table >}}
| Setting   | Default | Description |
|-----------|---------|-------------|
| label     | -       | Name of the release version, e.g. `v1.0`. When `url` is empty, the label is used for grouping instead. |
| url       | -       | Local URL of the release, e.g. `/docs/1.0/`. |
| latest    | false   | If set, adds the suffix `latest` to the label in the version switcher. |
| redirect  | -       | If set, generates a server-side rewrite rule. You will need to [configure server-side redirection]({{% relref "server-side-redirection" %}}) too. |
{{< /table >}}
