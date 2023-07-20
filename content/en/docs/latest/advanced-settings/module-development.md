---
title: Module development
description: Develop your own Hugo modules compatible with Hinode.
date: 2023-07-20
layout: docs
---

{{< release version="v0.16.0" >}}

Hinode fully supports [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. By default, Hinode includes core building blocks for [Bootstrap]({{< param "links.bootstrap" >}}), [FlexSearch]({{< param "links.flexsearch" >}}), and [Font Awesome]({{< param "links.fontawesome" >}}). The following paragraphs describe the coding conventions of Hinode modules, illustrate how to automate your build and release process, and give an overview of common issues and resolutions.

{{< alert color="info" >}}
A [template repository for Hugo modules that are compatible with Hinode]({{< param "links.repository_mod_template" >}}) is maintained on GitHub. The repository provides a starting point for developing your own modules.
{{< /alert >}}

## Conventions

Hinode uses several conventions for the modules it maintains. You are encouraged to use the same conventions, especially when contributing your own module for sharing.

### Module names

The GitHub repositories of modules maintained by Hinode start with the `mod-` prefix. Although this is no strict requirement, you are encouraged to follow the same convention when contributing your own modules.

### Styles

Modules should define a single entrypoint for their stylesheets in `assets/scss/{MODULE}`, replacing `{MODULE}` with the name of the module **without** the `mod-` prefix. Even if the module uses plain <abbr title="Cascading Stylesheet">CSS</abbr> files, the entrypoint should have the `.scss` extension to ensure the file is transpiled correctly. The additional source files should be mounted into `assets/scss/modules/{MODULE}/`.

### Scripts

JavaScripts should be mounted in `assets/js/modules/{MODULE}/`. Hinode bundles these files into a single script if the module is a [core module]({{< relref "../configuration/modules" >}}). Be aware that the script files within the module are processed alphabetically, should you have any interdependencies in your scripts.

## Automation

Hinode modules use GitHub actions to keep dependencies up-to-date and to publish new releases automatically. Review the following sections how to configure dependency upgrades, how to automate Pull Requests merges, and how to publish new releases after each succesful merge.

### Dependency upgrades

You can configure [dependabot]({{< param "links.dependabot" >}}) or set up a custom GitHub action to automatically upgrade your dependencies. The applicable approach depends wether you use npm packages or Hugo modules as your module source. Review the next two section how to configure automated dependency upgrades.

#### npm package upgrades

[Dependabot]({{< param "links.dependabot" >}}) automatically keeps the dependencies and npm packages used in your repository updated to the latest version. The Hinode module template includes a basic configuration that is enabled by default. It checks for any version updates on a daily basis. The configuration is defined in `.github/dependabot.yml` and includes a commit-message that is used for [release automation]({{< relref "#release-automation" >}}).

```yml
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: daily
    commit-message:
      prefix: fix
      include: scope
```

#### Hugo module upgrades

At this moment, [Dependabot]({{< param "links.dependabot" >}}) has no support for Hugo modules yet (see [feature request `#6860`]({{< param "links.dependabot_issue_6860" >}})). The Hinode module template provides a custom workflow in `.github/workflows/update.yml` to check for available Hugo module upgrades on a daily interval. It creates a Pull Request (PR) from a feature branch when it has found any upgrades. The workflow uses the [create-pull-request action from Peter Evans]({{< param "links.create_pr" >}}) to ensure the PR includes commit messages that trigger the [semantic-release bot]({{< relref "#release-automation" >}}) (using the `fix` prefix).

```yml
name: Update Hugo Dependencies
on:
  workflow_dispatch:
# TODO: uncomment
#   schedule:
#     - cron: '0 3 * * *' # run daily at 03:00 AM
```

The workflow requires elevated privileges to your module repository. Create a fine-grained Personal Access Token (PAT) first. Set up the token in the `Developer settings` of your **Account** settings on GitHub. The token requires access to your module repository with the following permissions:

- Read and Write access to code and pull requests

When done, head over `action secret` in the `security` section of the repository configuration. Create a new `Repository token` with the name `HUGO_MOD_PR` in your **repository** configuration and paste the PAT as content.

### Automated merges

GitHub's auto-merge feature automatically merges proposed Pull Requests (PRs) when all conditions have been met. This feature is especially helpful to merge dependency upgrades prepared by dependabot (see the [dependency upgrades]({{< relref "#dependency-upgrades" >}}) section for more details). You are strongly encouraged to set up branch protection first, to prevent PRs from breaking your builds.

#### Automated testing

The Hinode module template provides a basic workflow to test the build. Uncomment the following lines in `.github/workflows/test.yml` to enable automated testing upon each PR or push submitted to the `main` branch. The workflow calls the `test` script defined in the repository's npm `package.json`. By default, it tests on the latest versions of macOS, Windows, and Ubuntu for the latest stable releases of Node.js (currently `v18` and `v20`).

```yml
name: Test
on:
  workflow_dispatch:
  # TODO: uncomment
  # push:
  #   tags:
  #     - v*
  #   branches: [ main ]
  # pull_request:
  #   branches: [ main ]

[...]
```

#### Branch protection

Head over to `Branches` section within `Code and automation` of your repository configuration on GitHub. Create a new rule for your main branch. Hinode uses the following settings for the modules it maintains:

<ul class="fa-ul">
    <li><span class="fa-li">{{< fas circle-check >}}</span>Require a pull request before merging</li>
    <li><span class="fa-li">{{< fas circle-check >}}</span>Require status checks to pass before merging</li>
    <ul class="fa-ul">
        <li><span class="fa-li">{{< fas circle-check >}}</span>Require branches to be up to date before merging</li>
    </ul>
</ul>

Specify the test you defined previously as required status check. When using Hinode's default test, you would see six different checks (three platforms with two Node versions each). 

{{< alert >}}
GitHub only displays selectable status checks when they have had an initial run, so be sure to run the test first. Also, the status checks are not automatically updated when the test script changes. You will need to manually update the status checks as required.
{{< /alert >}}

#### Automated merging

Set `Allow auto-merge` to enabled in the `general` section of your repository configuration. Next, click the button `Enable auto-merge` on any PR to actually enable the feature.

### Release automation

The Hinode module template provides a basic workflow to automate releases. Uncomment the following lines in `.github/workflows/release.yml` to enable automated releases upon each merge to the `main` branch.

```yml
name: Release
on:
  workflow_dispatch:
  # TODO: uncomment
  # push:
  #   branches:
  #     - main
```

The workflow uses the [semantic-release bot]({{< param "links.semantic-release" >}}) to automate the creation and publication of releases upon each merge to the main branch. The bot updates the repository content, such as new distribution files added by the `postinstall` npm script. It also scans all commit messages and determines the type of release. Finally, it publishes a new release with auto-generated release notes.

Hinode uses the [Angular Commit Message conventions]({{< param "links.angular_commit" >}}). In brief, add the following prefixes to your commit messages to determine the type of release:

 - `feat!:` A breaking change (creates a new major release)
 - `feat:` A new feature (creates a new minor release)
 - `fix:` A bug fix (creates a new patch release, also triggered by [dependabot upgrades]({{< relref "#npm-package-upgrades" >}}))
 - `chore:` Changes to the build process or auxiliary tools and libraries such as documentation generation (does not trigger a new release)

The workflow requires two secrets within your repository. Add them as `action secret` in the `security` section of the repository configuration.

 - `SEMANTIC_RELEASE_GIT`
  
    The bot requires elevated privileges to your module repository. Create a fine-grained Personal Access Token (PAT) first. Set up the token in the `Developer settings` of your **Account** settings on GitHub. The token requires access to your module repository with the following permissions:

    - Read access to actions, commit statuses, metadata, and pull requests
    - Read and Write access to code and issues

    When done, create a new `Repository token` with the name `SEMANTIC_RELEASE_GIT` in your **repository** configuration and paste the PAT as content.

 - `NPM_TOKEN`

    The bot uses npm to automatically update the version defined in `package.json` and `package-lock.json`. You will need to publish your module to npm first. You can use `npm publish` from the command line to authenticate yourself with the npm server and to create a new package if needed. On npm, go to the `Access tokens` menu below the avatar of your personal account.
    
    Click on the button `Generate New Token` and select `Granular Access Token`. Assign read and write permissions to the module package and click on `Generate token`. Next, create create a new `Repository token` with the name `NPM_TOKEN` in your **repository** configuration on GitHub and paste the npm token as content.

## Troubleshooting

Hugo modules have several constraints to work properly. The below overview provides some common challenges and how to overcome them.

{{< accordion class="accordion-theme accordion-flush" >}}
  {{< accordion-item header="The required distibution files are unavailable" >}}
    Hugo modules use the latest available release on GitHub, or the most recent HEAD of the default branch otherwise. However, not all repositories maintain their distribution files as part of version control or their GitHub release assets. One such example is the [Leaflet library]({{< param "links.leaflet" >}}). The repository does not include the compiled JavaScript, but only its source files. As a workaround, the [Leaflet module]({{< param "links.repository_mod_leaflet" >}}) downloads the npm package instead and copies the required files in a `postinstall` script.
  {{< /accordion-item >}}
  {{< accordion-item header="The available releases do not adhere to semantic versioning" >}}
    Hugo requires repositories to use a consistent semantic versioning pattern when tagging their releases. In case a repository has changed its pattern, Hugo will not detect the latest version correctly. One such example is the [Font Awesome library]({{< param "links.fontawesome" >}}). It changed its release pattern from `v4.x.y` to `Release 5.x.y` (notice the drop of the `v` prefix). As a result, Hugo only downloads the old `v4.x.y` release. A workaround is to create a fork for version 6.x only and to use this as a source instead. This requires periodic synchronization of the fork though. Another approach is to use the npm release of Font Awesome instead and to mount the required files. This is the approach taken by the [Font Awesome module]({{< param "links.repository_mod_fontawesome" >}}).
  {{< /accordion-item >}}
  {{< accordion-item header="The Hugo modules are not updated by dependabot" >}}
    [Dependabot]({{< param "links.dependabot" >}}) automatically keeps the dependencies and packages used in your repository updated to the latest version. However, the current version does not recognize Hugo modules. Set up a custom workflow instead, such as described in [Hugo module upgrades]({{< relref "#hugo-module-upgrades" >}}).
  {{< /accordion-item >}}
  {{< accordion-item header="The local installation of Hugo modules fails" >}}
    Hugo provides a configuration option to replace a remote module with a local folder to simplify development and testing. For example, the [FlexSearch module]({{< param "links.repository_mod_flexsearch" >}}) uses a module replacement in the file `exampleSite/hugo.toml`. The replacement tells Hugo to use the module code of the parent folder, instead of downloading the remote release assets. However, if the module `mod-flexsearch` uses other Hugo modules itself (so-called transitive dependencies), Hugo will throw an error `Error: failed to load modules`. Vendor your modules with `hugo mod vendor` to fix this issue.
    
```toml
[module]
    replacements = 'github.com/gethinode/mod-flexsearch -> ../..'
```
  {{< /accordion-item >}}
{{< /accordion >}}
