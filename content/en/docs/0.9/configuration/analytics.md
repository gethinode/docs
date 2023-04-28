---
title: Analytics
description: Enable analytics for your website to view usage statistics and more.
date: 2023-04-27
layout: docs
---

## Configuration

Hinode supports Google Universal Analytics and Google Analytics 4 out-of-the-box. Simply add your Google property (starting with `G-` or `UA-`) to the main configuration in `config/_default/config.toml`.

{{< alert >}}
    Google has deprecrated Universal Analytics in favor of Google Analytics 4. On July 1, 2023, standard Universal Analytics properties will no longer process data. 360 Universal Analytics properties will receive a one-time processing extension ending on July 1, 2024.
{{< /alert >}}

```toml
googleAnalytics = "G-xxxxxxxxxx"
```

## Default behavior

Review the next sections to understand the default behavior when dealing with web analytics.

### Anonymous users

Hinode anonymizes the visitor's IP address when the client sends a Do Not Track request.

### Local development

By default, analytics is disabled when running on a local machine to prevent polution of the gathered insights. Modify the condition `(not site.IsServer)` as needed.

The file `assets/js/analytics.js` defines the JavaScript template that is ingested into the main bundle.

<div class="mb-3 syntax-highlight">
{{< highlight go-html-template "hl_lines=2" >}}
    {{- $pc := .Site.Config.Privacy.GoogleAnalytics -}}
    {{- if (and (not .Site.IsServer) (not $pc.Disable)) -}}
    [...]
    {{- end -}}
{{< / highlight >}}
</div>

The partial `layouts/partials/footer/scripts.html` loads the Google Tag Manager if applicable (Google Analytics 4 only).

<div class="mb-3 syntax-highlight">
{{< highlight go-html-template "hl_lines=1" >}}
    {{- if and (not site.IsServer) $header -}}
    [...]
    {{- end -}}
{{< / highlight >}}
</div>

## Content Security Policy

[Google Analytics requires several Content Security Policies]({{< param "links.google_analytics_csp" >}}) to be set in the [server headers]({{< relref "server" >}}).

### Google Analytics 4

Hinode has enabled access for Google Analytics 4 by default. The following settings are added to `config/_default/server.toml`. Similar settings are defined in the `netlify.toml` file provided in the repository’s root when deploying to [Netlify]({{< param "links.netlify" >}}).

```yaml
script-src:  https://*.googletagmanager.com
img-src:     https://*.google-analytics.com https://*.googletagmanager.com
connect-src: https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com
```

### Universal Analytics (Google Analytics)

Access for Universal Analytics is not enabled by default. Ensure the following settings are defined in `config/_default/server.toml` and `netlify.toml` when applicable.

```yaml
script-src: https://www.google-analytics.com https://ssl.google-analytics.com
img-src: https://www.google-analytics.com
connect-src: https://www.google-analytics.com
```