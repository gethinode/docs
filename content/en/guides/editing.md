---
author: Mark Dumay
title: Creating your first site with Hinode
date: 2023-03-28
description: Guide on how to set up your site with version control and automated testing using GitHub and VSCode.
# tags: ["vscode"]
weight: 10
thumbnail: img/launch.jpg
photoCredits: <a href="https://unsplash.com/@spacex">SpaceX</a>
photoSource: <a href="https://unsplash.com/photos/TV2gg2kZD1o">Unsplash</a>
---

## Introduction

{{< alert color="secondary" >}}
The commands and code examples within this guide are written with macOS in mind. The commands should be transferrable to Windows and Linux too.
{{< /alert >}}

Hinode uses [Hugo]({{< param "links.hugo" >}}), a popular open-source generator, to generate a static website. Static websites do not require a database and can be [hosted virtually anywhere]({{< relref "hosting-and-deployment">}}). In this guide, we will set up a new site using a template from GitHub. We will then edit our Markdown content with Visual Studio Code (VSCode). Lastly, we will submit our changes to the main branch using automated testing.

This guide requires a GitHub account to host the demo repository. Next, Git, Node.js and npm are required for local development and testing. The guide also uses VSCode to edit the content. Click on each of the following links to sign up and install the required software as necessary. The software packages should be compatible with Windows, macOS, and most Linux distributions.

 - [Set up an account with GitHub]({{< param "links.github_signup" >}})
 - [Download and install the Git binary]({{< param "links.git_download" >}})
 - [Download and install Node.js]({{< param "links.nodejs" >}}) (it includes npm)
 - [Download and install VSCode]({{< param "links.vscode_download" >}})

## Step 1 - Initializing the project

As first step we will create a new repository on GitHub using a template. We will then connect our local machine to the remote repository and install the required dependencies. Lastly, we will run a local development server to test the newly created site.

### Creating a new Git repository

Hinode comes in two flavors: a [child theme]({{< param "links.repository_child" >}}) and a [main theme]({{< param "links.repository" >}}). The child theme uses [npm]({{< param "links.npm" >}}) to link to the latest available version of Hinode. We will use the child theme as starting point for our new site, as it hides away most of the source code of the main theme. Unless you plan to customize a lot, it is recommended to use the child theme for your future projects.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/github-init-step01.png" caption="Step 1. Create a new repository from the child template" >}}
  {{< img src="img/github-init-step02.png" caption="Step 2. Enter a repository name" >}}
  {{< img src="img/github-init-step03.png" caption="Step 3. Review the initialized repository" >}}
{{< /carousel >}}

Navigate to https://github.com/gethinode/child in your browser and click on the green button `Use this template` to create a new repository. You may need to sign in to GitHub for the button to become available. Provide a meaningful name for your repository, such as `hinode-demo`. The repository's visibility can be either private or public. Public repositories can be seen by anyone, such as open-source projects. Private repositories are only visible to yourself, or to anyone you have granted access. Lastly, click on the green button `Create repository from template` to create your repository.

### Connecting your local machine

We will now connect our local machine to the newly created GitHub repository. Navigate to a folder on your local machine, such as `~/Documents`. Use the `git clone` command to download and extract your GitHub repository within the current folder. By default, git creates a new subfolder with the name of your repository, e.g. `hinode-demo`. The next command is an example, be sure to replace the <mark>&lt;USER&gt;</mark> name with your own.

{{< command user="user" host="localhost" prompt="Documents $" >}}
git clone https://github.com/<USER>/hinode-demo.git
(out)Cloning into 'hinode-demo'...
(out)remote: Enumerating objects: 62, done.
(out)remote: Counting objects: 100% (62/62), done.
(out)remote: Compressing objects: 100% (43/43), done.
(out)remote: Total 62 (delta 9), reused 49 (delta 8), pack-reused 0
(out)Receiving objects: 100% (62/62), 3.27 MiB | 974.00 KiB/s, done.
(out)Resolving deltas: 100% (9/9), done.
{{< /command >}}

### Installing the packages and dependencies

We will now install the various packages and dependencies used by Hinode. The file `packages.json` in the repository root defines the npm packages and their versions as used by Hinode. First, navigate to the `hinode-demo` folder:

{{< command user="user" host="localhost" prompt="Documents $" >}}
cd hinode-demo
{{< /command >}}

Next, use the command `npm install` to download and install the various packages. npm will store these files in the `hinode-demo/node_modules` folder. The script includes an instruction to download and install the Hugo binary that is compatible with your platform too. In this approach, the Hugo binary is linked exclusively to your repository, minimizing potential version conflicts on your local machine.

{{< command user="user" host="localhost" prompt="hinode-demo $" >}}
npm install
(out)
(out)> @gethinode/child@0.7.1 postinstall
(out)> hugo-installer --version otherDependencies.hugo --extended --destination node_modules/.bin/hugo
(out)
(out)Hugo Installer
(out)Hugo is now available in "node_modules/.bin/hugo".
(out)
(out)Success!
(out)
(out)added 486 packages, and audited 487 packages in 23s
(out)
(out)found 0 vulnerabilities
{{< /command >}}

### Running a local development server

Your site is now ready for testing. Enter the following command to start a local development server:

{{< command user="user" host="localhost" prompt="hinode-demo $" >}}
npm run start
(out)> @gethinode/child@0.7.1 prestart
(out)> npm run clean
(out)
(out)> @gethinode/child@0.7.1 clean
(out)> shx rm -rf public resources
(out)
(out)> @gethinode/child@0.7.1 start
(out)> exec-bin node_modules/.bin/hugo/hugo server --bind=0.0.0.0 --disableFastRender
(out)
(out)Start building sites … 
(out)hugo v0.110.0-e32a493b7826d02763c3b79623952e625402b168+extended darwin/arm64 BuildDate=2023-01-17T12:16:09Z VendorInfo=gohugoio
(out)
(out)                   | EN  | NL  
(out)-------------------+-----+-----
(out)  Pages            |  36 | 35  
(out)  Paginator pages  |   0 |  0  
(out)  Non-page files   |   0 |  0  
(out)  Static files     |  38 | 38  
(out)  Processed images | 171 |  0  
(out)  Aliases          |   3 |  2  
(out)  Sitemaps         |   2 |  1  
(out)  Cleaned          |   0 |  0  
(out)
(out)Built in 32352 ms
(out)Watching for changes in Documents/hinode-demo/{archetypes,assets,content,data,i18n,layouts,node_modules,package.json,static}
(out)Watching for config changes in Documents/hinode-demo/config/_default, Documents/hinode-demo/config/_default/menus
(out)Environment: "development"
(out)Serving pages from memory
(out)Web Server is available at http://localhost:1313/ (bind address 0.0.0.0)
(out)Press Ctrl+C to stop
{{< /command >}}

It usually takes less than a minute to build the site and to start the web server in development mode. Before building the site, Hinode cleans several folders. The build itself shows the result of the pages and other assets generated by Hugo. By default, the starter web site is bilingual and supports both the English and Dutch language. Lastly, Hugo mentions the local address on which it is available (usually `http://localhost:1313/`) and indicates the folders it is watching. The latter means that if you make any changes whilst the web server is running, Hugo should pick up those changes and regenerate the applicable assets. Using a feature called live reloading, your web browser will be instructed to refresh the web page accordingly.

## Step 2 - Managing the content

We will now use VSCode to modify the content of our demo site. Start the application and open the `hinode-demo` folder. The explorer view provides an overview of the folders and files of the repository. The key folders are the following:

| Folder    | Description |
|-----------|-------------|
| `assets`  | Contains static files such as images and stylesheets that are processed by Hugo during build. |
| `config`  | Defines the configuration of the site. |
| `content` | Maintains the content and its translations of the site. |
| `layouts` | Defines Hugo shortcodes and partials. |
| `static`  | Specifies static files to be deployed as-is, thus without any processing by Hugo. |
{.table}

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/vscode-edit-step01.png" caption="Step 1. Open the source code folder in VSCode" >}}
  {{< img src="img/vscode-edit-step02.png" caption="Step 2. Create a new develop branch" >}}
  {{< img src="img/vscode-edit-step03.png" caption="Step 3. Edit the about page" >}}
{{< /carousel >}}

We will now set up a new branch before we make any changes. It is a good software practice to set up at least one branch for development and testing, instead of working directly on the main branch. Hinode provides several predefined tests that verify if submitted changes in a Pull Request adhere to coding conventions and do not break the build.

Head over to the `Source Control` section of VSCode and click on the button `...` to open the source control menu. Within the menu, navigate to `Branch / Create Branch...`. Provide `develop` as branch name and confirm with <kbd>enter</kbd>. The blue status bar on the bottom of VSCode will now display `develop` as selected branch. A repository usually contains a `main` branch that maintains the production code, and one or more development branches. Complex projects with multiple contributors may have multiple active (feature) branches and even nested branches.

Still within the `develop` branch, replace the content of the `content/en/about.md` with the following. When done, head over to the address `http://localhost:1313/en/about/` in your web browser to validate the result of the changes.

```md
---
title: About
description: The Hinode demo site illustrates how to set up a new web site.
date: 2023-03-29
showComments: false
---

This is my first site created with Hinode.

```

## Step 3 - Validating the changes

Hinode defines severals tests to validate the code adheres to [coding standards]({{< relref "contribute#coding-guidelines" >}}). Run the following command to run the tests locally. The test should confirm our code is safe to check in. 

{{< command user="user" host="localhost" prompt="hinode-demo $" >}}
npm run lint
(out)
(out)> @gethinode/child@0.7.1 lint
(out)> npm run -s lint:markdown
(out)
(out)markdownlint-cli2 v0.6.0 (markdownlint v0.27.0)
(out)Finding: *.md content/**/*.md !node_modules !CHANGELOG.md
(out)Linting: 27 file(s)
(out)Summary: 0 error(s)
{{< /command >}}

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/vscode-commit-step01.png" caption="Step 1. Stage the changes" >}}
  {{< img src="img/vscode-commit-step02.png" caption="Step 2. Publish the branch" >}}
{{< /carousel >}}

Head over to VSCode's Source Control to view the pending changes. Click on the file `about.md` to open the code inspector. VSCode will then show the differences between the previous version and current version of the file. Content that has been replaced or removed is marked red, and content that has been added or modified is marked green. Verify the changes and click on the `+` button to stage the changes. Enter a descriptive commit message such as `Update about page`. When done, click on the blue `Commit` button to commit the changes on the `develop` branch. Lastly, click on the blue button `Publish Branch` to submit tbe branch and its content to GitHub. For an existing branch you would select the menu item `push` to submit the changes to the remote repository.

{{< alert color="secondary" >}}
By convention, a commit message should use the imperative mood and should be less than 150 characters in total. Review the blog from Initial Commit to see more [best practices and guidelines to write good commit messages]({{< param "links.initialcommit" >}}).
{{< /alert >}}

## Step 4 - Submitting a Pull Request

With your changes committed to the remote develop branch, you can now merge the changes with the main branch. Head over to your repository on GitHub to submit a Pull Request (PR). Click on the green button `New pull request` within the menu `Pull Requests` to do so. Enter a descriptive title for the PR, or confirm the default title suggested by GitHub. Click on the green button to submit the PR, which triggers GitHub to run several checks. By default, Hinode runs a linting test and builds the web site with the latest three versions of Node.js. The linting test is the same test ran in the [previous step]({{< relref "#step-3---validating-the-changes" >}}). The tests act as a sort of safeguard to prevent changes breaking the main repository. You can confirm the merge when all checks have passed successfully. You can then observe the commit message associated with the `content` folder when you head back to the code of the main repository.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/github-pr-step01.png" caption="Step 1. Open a pull request" >}}
  {{< img src="img/github-pr-step02.png" caption="Step 2. Enter a descriptive title" >}}
  {{< img src="img/github-pr-step03.png" caption="Step 3. Run the checks" >}}
  {{< img src="img/github-pr-step04.png" caption="Step 4. Validate all checks have passed" >}}
  {{< img src="img/github-pr-step05.png" caption="Step 5. Confirm the merge" >}}
  {{< img src="img/github-pr-step06.png" caption="Step 6. Review the merge completion" >}}
  {{< img src="img/github-pr-step07.png" caption="Step 7. Observe the committed changes" >}}
{{< /carousel >}}

## Conclusion

You have now successfully created your initial Hinode site with version control and automated testing. Review the [hosting and deployment options]({{< relref "hosting-and-deployment" >}}) to see various options on how to publish your site to a hosting provider. While you continue to make updates to the content and layout of your site, you should consider to regularly update the dependencies of your repository too. Use the `upgrade` command to check for any package updates. If applicable, run `npm install` again to install the updated packages.

{{< command user="user" host="localhost" prompt="hinode-demo $" >}}
npm run upgrade
(out)
(out)> @gethinode/child@0.7.1 upgrade
(out)> npx npm-check-updates -u
(out)
(out)Upgrading Documents/hinode-demo/package.json
(out)[====================] 19/19 100%
(out)
(out)All dependencies match the latest package versions :)
{{< /command >}}

You can also enable Dependabot on your GitHub repository to [automatically keep the dependencies and packages used in your repository updated to the latest version]({{< param "links.dependabot" >}}).
