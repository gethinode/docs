---
title: Private modules and packages
description: Configure tokens to access private Hugo modules and npm packages, both locally and as part of CI/CD.
date: 2025-01-31
layout: docs
---

> [!WARNING]
> The information on this page is preliminary and subject to change. Please [raise an issue](https://github.com/gethinode/hinode/issues) when the provided information is unclear or incorrect.

## Local development

Use a combination of environment variables and credential management to safely configure your tokens. The authentication is slightly different for private Hugo modules and npm packages.

### Hugo modules

Hinode provides several themes and modules as a private Hugo module. You will need a `fine-grained personal access token` with **read access** to the `contents` and `metadata` of those private Hugo modules. The following two sections explain two available options on how to configure access to private Hugo modules.

#### Using GitHub credential manager (preferred)

[GitHub provides a CLI](https://cli.github.com/) to enable authentication to private and public repositories. When using the command `gh auth`, the CLI tool opens a new browser window, where you can authenticate yourself with GitHub. The login procedure supports both login/password and tokens. By default, this procedure supports one account per domain only. Run the following command to instruct git to use the full HTTP path of the repository instead.

<!-- markdownlint-disable MD037 -->
{{< nav tab-type="tabs" id="tabs-hugo-1" >}}
  {{< nav-item title="macOS/Linux" show="true" >}}
{{</* command */>}}
git config --global credential.useHttpPath true
{{</* /command */>}}
  {{< /nav-item >}}
  {{< nav-item title="Windows" >}}
{{</* command prompt="PS >" shell="powershell" */>}}
git config --global credential.useHttpPath true
{{</* /command */>}}
  {{< /nav-item >}}
{{< /nav >}}
{.mb-4}
<!-- markdownlint-enable MD037 -->

From now on, git will trigger a authentication request when accessing a new repository. The GitHub CLI will store this information in the credential manager provided by your Operating System.

#### Using Git configuration (alternative)

As an alternative, you can also use a git configuration that links a Personal Access Token to a specific domain using the `insteadOf` directive. For example, you can use the following command to configure a token to access the private module `github.com/gethinode/mod-bookshop`. Replace `<PAT>` with the actual token value. The value for `<ACCOUNT>` can be anything (but is mandatory). Git stores the token as plain text in `~/.gitconfig`, which is less secure than the preferred approach.

<!-- markdownlint-disable MD033 MD037 -->
{{< nav tab-type="tabs" id="tabs-hugo-2" >}}
  {{< nav-item title="macOS/Linux" show="true" >}}
{{</* command */>}}
git config --global \
url."https://<ACCOUNT>:<PAT>@github.com/gethinode/mod-bookshop".insteadOf \
"https://github.com/gethinode/mod-bookshop"
{{</* /command */>}}
  {{< /nav-item >}}
  {{< nav-item title="Windows" >}}
{{</* command prompt="PS >" shell="powershell" */>}}
git config --global \
url."https://<ACCOUNT>:<PAT>@github.com/gethinode/mod-bookshop".insteadOf \
"https://github.com/gethinode/mod-bookshop"
{{</* /command */>}}
  {{< /nav-item >}}
{{< /nav >}}
{.mb-4}
<!-- markdownlint-enable MD033 MD037 -->

To update an existing token, you need to manually remove the existing entry in `~/.gitconfig` and rerun the `git config` command. Alternatively, you can update the existing token in the `~/.gitconfig` file yourself.

### npm packages

Hinode publishes several utilities as npm packages on `npm.pkg.github.com`. The GitHub package registry requires authentication for both public and private packages. We will use a personal access token (classic) with `read:packages` privileges to access them. By using a credential manager and command substitution, we avoid storing the sensitive information in-memory or as plain text in a file.

Follow the instructions for your operating system below.

<!-- markdownlint-disable MD037 -->
{{< nav tab-type="tabs" id="tabs-npm-1" >}}
  {{< nav-item title="macOS" show="true" >}}

> [!NOTE]
> macOS supports multiple shells, including bash and Z shell (zsh). Adjust the commands pending your preferred shell. You can check your current shell with `echo $SHELL`.

Add the npm token to your keychain with the following command, providing your token (twice) when prompted for the password:

{{</* command */>}}
security add-generic-password -a "$USER" -s 'NPM_TOKEN' -w
{{</* /command */>}}

Export the token as environment variable by adding the following line to `~/.bashrc` or `~/.zshrc`:

{{</* command */>}}
export NPM_TOKEN=$(security find-generic-password -s 'NPM_TOKEN' -w)
{{</* /command */>}}

Open a new `bash` or `zsh` terminal to load the environment variable.

  {{< /nav-item >}}
  {{< nav-item title="Linux" >}}

> [!NOTE]
> The following commands have been tested with Ubuntu and `bash`. You may need to change the package manager or commands when using a different Linux distribution or shell.

Install **secret-tool** to safely store your npm token:

{{</* command */>}}
sudo apt-get install libsecret-tools
{{</* /command */>}}

Store the npm token with the following command, providing your token when prompted for the password:

{{</* command */>}}
secret-tool store --label="Hinode npm token" provider npm profile hinode key-pair secret
{{</* /command */>}}

Export the token as environment variable by adding the following line to `~/.bashrc`:

{{</* command */>}}
export NPM_TOKEN=$(secret-tool lookup provider npm profile hinode key-pair secret)
{{</* /command */>}}

Open a new `bash` terminal to load the environment variable.

  {{< /nav-item >}}
{{</ nav >}}
{.mb-4}
<!-- markdownlint-enable MD037 -->

We will now use a npm configuration file to set up the authentication token. Create a new file `.npmrc` in the root folder of your local repository with the following content:

```bash
@gethinode:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_TOKEN}
```

npm will expand the variable `${NPM_TOKEN}`, which has been defined as environment variable using command substitution in the previous step.

## CI/CD workflows

You can use repository secrets to safely store the tokens in a GitHub Action. By using variable substitution, you can inject the tokens into the configuration files for Hugo modules and npm packages.

### Hugo modules

> [!CAUTION]
> Avoid using the `.netrc` file for local development, as this intervenes with your current git authentication. Use the method described in [local development](#local-development) instead.

Generate a `.netrc` file for the current user of the GitHub runner to configure access to a private Hugo module. Configure `HUGO_TOKEN` as repository secret. Then use the following step prior to the Hugo build step to generate (or overwrite) the `~/.npmrc` file. Go, the underlying module framework used by Hugo, will use this token for all private modules hosted on `github.com`.

```yaml
# Generate a .netrc file with the substituted HUGO_TOKEN secret for the current user
- name: Use GitHub token
    run: echo "machine github.com login ci password ${{ secrets.HUGO_TOKEN }}" > ~/.netrc

- name: Build main site
    run: npm run build
```

### npm packages

You can use an `.npmrc` file with the authentication token to configure the access to a private npm package. Configure `NPM_TOKEN` as repository secret. Then use the following step prior to the npm installation step to generate (or overwrite) the `.npmrc` file. npm will use this token for all packages owned by the `@gethinode` organization, hosted on the GitHub package registry `npm.pkg.github.com`.

```yaml
- name: Update .npmrc
    run: |
    echo "@gethinode:registry=https://npm.pkg.github.com/" > .npmrc
    echo "//npm.pkg.github.com/:_authToken=${{ secrets.NPM_TOKEN }}" >> .npmrc

- name: Perform clean install of npm
    run: npm i
    shell: bash
```

### Example GitHub action

The following example action builds a Hinode website that uses both private npm packages and Hugo modules. Deploy this action to your `.github` folder as usual.

```yaml
name: Build
on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - name: Check out repository
      uses: actions/checkout@v4

    - name: Set up Node.js
      uses: actions/setup-node@v4
      with:
        node-version: lts/*
        cache: 'npm'
        cache-dependency-path: '**/package-lock.json'

    # Generate a local .npmrc file with the substituted NPM_TOKEN secret
    - name: Update .npmrc
      run: |
        echo "@gethinode:registry=https://npm.pkg.github.com/" > .npmrc
        echo "//npm.pkg.github.com/:_authToken=${{ secrets.NPM_TOKEN }}" >> .npmrc

    - name: Perform clean install of npm
      run: npm i
      shell: bash

    # Generate a .netrc file with the substituted HUGO_TOKEN secret for the current user
    - name: Use GitHub token
      run: echo "machine github.com login ci password ${{ secrets.HUGO_TOKEN }}" > ~/.netrc

    - name: Build main site
      run: npm run build
```
