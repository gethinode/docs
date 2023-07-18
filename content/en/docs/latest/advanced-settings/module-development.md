---
title: Module development
description: Develop your own Hugo modules compatible with Hinode.
date: 2023-07-18
layout: docs
---

Hinode fully supports [Hugo modules]({{< param "links.hugo_modules" >}}) to provide a flexible and extensible modular framework. By default, Hinode includes core building blocks for [Bootstrap]({{< param "links.bootstrap" >}}), [FlexSearch]({{< param "links.flexsearch" >}}), and [Font Awesome]({{< param "links.fontawesome" >}}). Review the following paragraphs in order to develop your own modules.

<!-- TODO: work in progress -->

## Features

This template defines a starting point for developing Hugo modules that are compatible with the Hinode theme. A Hinode module can use two starting points in general:

1. Hugo provides a fully functional module system, powered by Go modules. It supports integration of non-Hugo packages too, typically hosted by a Git provider such as GitHub. Hugo 

Hugo uses Go modules under the hood to optionally include (remote) repositories. Although the repositories are expected to be hosted externally by default, you can use module replacements to redirect Hugo to look for a local folder instead.

npm


It introduces the following features.

1. **npm** is used to isolate the required binaries, including Hugo, from the host. It is also used to track dependencies. The package manager is compatible with dependabot and can be included in GitHub actions as part of an automated CI/CD process.
2. **Hugo modules** are used to integrate tagged releases for specified GitHub repositories. The
3. semantic-release - 


## Notes

local development requires hugo mod vendor