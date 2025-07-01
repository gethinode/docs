---
author: Mark Dumay
title: Automating dependency updates
date: 2023-08-21
description: Guide on how to automate npm and hugo dependencies with GitHub actions.
tags: ["guide", "action"]
weight: 50
thumbnail: 
    url: img/cogs.jpg
    author: Laura Ockel
    authorURL: https://unsplash.com/@viazavier
    origin: Unsplash
    originURL: https://unsplash.com/photos/UQ2Fw_9oApU
---

## Introduction

The Hinode template uses both Hugo modules and npm packages. In this guide we will use GitHub actions to upgrade both types of dependencies automatically, ensuring our repository is always up to date. However, before we enable these automation steps, we will set up branch protection first. This guide assumes you have successfully setup a site based on the Hinode template. See the guide on {{< link "editing" >}}how to create a site with Hinode{{< /link >}} for more information.

> [!NOTE]
> This guide uses branch protection. You will require a paid plan if you have a private repository. See {{< link github_plans >}}GitHub's plans{{< /link >}} for more details.

## Step 1 - Testing the branch for the first time

The {{< link repository_template >}}Hinode template{{< /link >}} includes a GitHub action, or workflow, to automatically test and build the main branch upon each change. You can find the full configuration in `.github/workflows/lint-build.yml`. The workflow references two npm commands, being `test` and `build`. By default, Hinode tests content files (extension `.md`), scripts (extension `.js`), and styles (extension `.scss`). The Hinode docs provide more background about the {{< link "docs/getting-started/contribute#coding-guidelines" >}}coding guidelines{{< /link >}}.

The same `package.json` file also defines a `build` command, which is just a call to the embedded `hugo` binary. The GitHub action `lint-build.yml` calls both the `lint` and `build` commands and is invoked on each push to the `main` repository, or a PR against the same branch. It also includes a `workflow_dispatch` trigger that enables us to run the workflow manually.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/gh-lint-step01.png" caption="Step 1. Trigger the 'lint & build' action" >}}
  {{< img src="img/gh-lint-step02.png" caption="Step 2. Review the jobs" >}}
  {{< img src="img/gh-lint-step03.png" caption="Step 3. Validate the results" >}}
{{< /carousel >}}

Head over the `Actions` panel of your GitHub repository. It lists two actions, of which we will select `lint & build`. Click on `Run workflow {{< fas caret-down >}}` and `Run workflow` to manually invoke the workflow. GitHub will then show the various jobs running in parallel. The action runs the `npm lint` and `npm build` commands sequentially against a so-called test matrix. The test matrix includes different versions of Node.js to test, but could also include a host Operating System (OS) for example. The main panel shows the terminal output of a runner, which is simply a container running on GitHub's server with the specified host OS and packages. You can click on each of the jobs' steps to view the output - which should look familiar. When all jobs have finished successfully, GitHub will report the entire workflow run as completed.

## Step 2 - Configuring branch protection

Branch protection sets up rules that must be satisfied before a Pull Request can be merged with a specific branch. This should include your production branch (usually `main`), but could also include other branches that you would like to control. Branch protection acts as a safeguard to prevent any changes to break your build. Ofcourse, it is not 100% fool proof, so it would still make sense to do regular testing of any changes before you submit them. However, minor dependency updates and security updates should (in theory) not introduce any breaking changes. If you have a stable repository and (main) branch, it is quite safe to assume that, as long as all your tests are successful, these minor updates can be automatically merged without unexpected impact.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/gh-branch-protect-step01.png" caption="Step 1. Click on Protect this branch" >}}
  {{< img src="img/gh-branch-protect-step02.png" caption="Step 2. Apply settings" >}}
  {{< img src="img/gh-branch-protect-step03.png" caption="Step 3. Authenticate the changes" >}}
  {{< img src="img/gh-branch-protect-step04.png" caption="Step 4. Confirm branch protection" >}}
{{< /carousel >}}

Navigate to the homescreen of your repository on GitHub. You should see a warning that says your main branch is not protected. Click on the button `Protect this branch` to initiate branch protection. You can set up multiple rules to your liking. The recommended rules to enforce at a minimum are the following:

- Require a pull request before merging
- Require status checks to pass before merging
  - Require branches to be up to date before merging
{.tickmark}

> [!IMPORTANT]
> GitHub does not automatically update your status checks. For example, if you decide to modify your test matrix, you need to manually remove the obsolete labels and add the new labels.

These settings ensure all proposed changes are submitted as part of a PR and prevents any commits directly on the main branch. We can then use each PR request as a trigger to test our codebase and build. We will now select the tests we ran previously in our `lint & build` action. Add all test labels to the second check (`Require status checks to pass before merging`) individually. For example, you can add the `build (18.x)` label as prerequisite, meaning that your site should be compatible with Node.js v18. We are now ready to automate our dependency upgrades.

## Step 3 - Enabling auto-merged npm updates

GitHub provides an action called {{< link dependabot >}}Dependabot{{< /link >}} that helps us to automate the upgrades of our npm dependencies. The Hinode template has enabled Dependabot by default. The configuration can be found in `.github/dependabot.yml`. In the default setting, Dependabot creates a Pull Request for each dependency update. You will need to review these PRs and approve them manually.

With the branch protection in place we can enable `auto-merge`. This setting, which is disabled by default, allows merges to be automated if all preconditions (~branch protection rules) have been met. We can use this feature to automatically merge Dependabot PRs into our main branch. Head over to the `general` section in the repository settings. Within the section, scroll down until you find a setting called `Allow auto-merge`. Select it to apply this setting.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/gh-auto-merge-step01.png" caption="Step 1. Navigate to 'general' in the repository settings" >}}
  {{< img src="img/gh-auto-merge-step02.png" caption="Step 2. Toggle 'auto-merge'" >}}
{{< /carousel >}}

The template repository includes a workflow created by Nícolas Iensen to {{< link nicolasiensen >}}configure auto-merge for Dependabot PRs{{< /link >}}. It approves any PR that includes a minor or patch upgrade. Major upgrades are not automatically approved and still require manual validation.

## Step 4 - Automating Hugo module upgrades

{{< link dependabot_issue_6860 >}}Dependabot is not compatible with Hugo modules yet{{< /link >}}. Instead, Hinode uses a fork of {{< link create_pr >}}create-pull-request{{< /link>}} from Peter Evans to update the Hugo modules. It calls the npm `mod:update` command on a scheduled interval. It will create a new branch and a Pull Request if it finds any updates. The corresponding action with the title `Update Hugo Dependencies` can be found in `.github/workflows/mod-update.yml`.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/gh-token-step01.png" caption="Step 1. Navigate to your account settings" >}}
  {{< img src="img/gh-token-step02.png" caption="Step 2. Define a new fine-grained tokens" >}}
  {{< img src="img/gh-token-step03.png" caption="Step 3. Apply R/W access for contents and Pull Requests" >}}
  {{< img src="img/gh-token-step04.png" caption="Step 4. Generate the token" >}}
  {{< img src="img/gh-token-step05.png" caption="Step 5. Navigate to the repository settings" >}}
  {{< img src="img/gh-token-step06.png" caption="Step 6. Create a new action secret" >}}
  {{< img src="img/gh-token-step07.png" caption="Step 7. Define the action secret HUGO_MOD_PR" >}}
{{< /carousel >}}

> [!CAUTION]
> Be careful with using actions from the marketplace, as this introduces a security risk. Rob Bos has written an excellent {{< link devops_journal >}}blog about the risks involved and how you can mitigate this{{< /link >}}.

The `Update Hugo Dependencies` action requires elevated privileges. We will now create a new fine-grained Personal Access Token (PAT) called `HUGO_MOD_PR` to authorize this action to run on our behalf. Set up the token in the `Developer settings` of your **Account settings** on GitHub. The token requires access to your repository with the following permissions:

- Read and Write access to content (code) and pull requests
{.tickmark}

When done, head over to `action secret` in the security section of the **repository configuration**. Create a new Repository token with the name `HUGO_MOD_PR` in your repository configuration and paste the PAT as content. Click on `Add secret` to add it to your repository.

{{< carousel class="col-sm-12 col-lg-8 mx-auto" >}}
  {{< img src="img/gh-mod-step01.png" caption="Step 1. Run the action workflow" >}}
  {{< img src="img/gh-mod-step02.png" caption="Step 2. Review the job output" >}}
  {{< img src="img/gh-mod-step03.png" caption="Step 3. Open the associated PR" >}}
  {{< img src="img/gh-mod-step04.png" caption="Step 4. Enable auto-merge" >}}
  {{< img src="img/gh-mod-step05.png" caption="Step 5. Confirm auto-merge" >}}
  {{< img src="img/gh-mod-step06.png" caption="Step 6. Validate the auto-merge" >}}
  {{< img src="img/gh-mod-step07.png" caption="Step 7. Observe the merged PR" >}}
{{< /carousel >}}

We can now run the `Update Hugo Dependencies` action. Head over to the actions overview and trigger the action manually. You can review the job output. When any modules updates have been found, the action will automatically create a PR on our behalf. Go to the Pull Requests overview and select the corresponding PR. You can now enable auto-merge for this type of PR. When all checks have been met, GitHub will automatically merge the PR with the main branch.

## Conclusion

You have now successfully configured automated updates for your Hinode site. Review the [hosting and deployment options]({{% relref "hosting-and-deployment" %}}) to see various options on how to (automatically) publish your site to a hosting provider.
