---
title: Troubleshooting
description: Review common issues and resolutions.
date: 2023-02-08
layout: docs
---

Review the table below for some common issues and their potential cause. Please file a [bug report]({{< relref "contribute#bug-reports" >}}) if you believe you have encountered an unknown issue.

<!-- markdownlint-disable MD036 MD037 -->
{{< accordion class="accordion-theme accordion-flush" >}}
  {{< accordion-item header="The published website is not rendering at all" >}}
    Hinode uses [npm]({{< param "links.npm" >}}) to automate the build process and to keep track of dependencies. As such, the default Hugo commands to build and deploy a website do not work. Check the [hosting and deployment]({{< relref "hosting-and-deployment" >}}) section on how to build and deploy Hinode properly.
  {{< /accordion-item >}}
  {{< accordion-item header="The published website is not applying the styles correctly" >}}
    Incorrect styling of your published website may have several causes:

  **The stylesheet refers to the incorrect location**

  Be sure to update the `baseURL` in `config/_default/config.toml`.

  **The certificate of your website has expired or is not set up correctly**

  Hinode adds an `integrity` check and `crossorigin` validation to protect against manipulation of the site's stylesheet. Most browsers will refuse to load the stylesheet if the website's certicate is invalid. Ensure your certificate is valid and properly loaded, for example by clicking on the `lock` icon in the address bar of your browser. Check with your hosting provider if the certificate is invalid.

  **The DNS is not updated yet**

  You typically need to update address the records of your DNS provider when using a custom domain. For example, the website https://gethinode.com uses [CloudFlare]({{< param "links.cloudflare" >}}) as DNS provider and [Netlify]({{< param "links.netlify" >}}) as hosting provider. The CloudFlare DNS records includes a `CNAME` record that links `gethinode.com` to the endpoint `gethinode-docs.netlify.app`. It may take some time for all DNS records to have been propagated properly.

  **The browser has cached a previous version of the website**

  Your browser might retain an older copy of your website and its resources in memory. Clear the browser cache if needed and reload your website. Google Chrome provides the option to empty the cache and perform a hard reload for a specific site when using the developer tools. You can add `?nocache=1` to your address in Safari to bypass the cache.
  {{< /accordion-item >}}
  {{< accordion-item header="Links to external images, videos, or iframes are broken" >}}
    Hinode uses a strict content security policy, which may prevent your browser from downloading external resources. See the [server configuration]({{< relref "server-headers" >}}) on how to configure your server headers.
  {{< /accordion-item >}}
  {{< accordion-item header="Included images are not optimized" >}}
    Ensure your images are stored in the `assets` folder instead of the `static` folder. See the documentation about [images and figures]({{< relref "images-and-figures" >}}) for more details.
  {{< /accordion-item >}}
  {{< accordion-item header="Included vector images have incorrect dimensions" >}}
    Add the class value `img-fluid` to your vector image, for example `<img src="/img/logo.svg" class="img-fluid">`.
  {{< /accordion-item >}}
  {{< accordion-item header="My local files are ignored" >}}
    Hinode uses mounts to create a virtual file system. Be sure to include mounts for the base repository and the current repository. See the documentation about [mounted folders]({{< relref "../advanced-settings/overview#mounted-folders" >}}) for more details.
  {{< /accordion-item >}}
{{< /accordion >}}
<!-- markdownlint-enable MD036 MD037 -->
