---
title: Analytics
description: Enable analytics for your website to view usage statistics and more.
date: 2024-08-14
layout: docs
---

## Configuration

Hinode supports Google Analytics 4 out-of-the-box. Simply add your Google property (starting with `G-`) to the configuration in `config/_default/hugo.toml`.

```toml
[services]
  [services.googleAnalytics]
    ID = "G-xxxxxxxxxx"
```

## Default behavior

Review the next sections to understand the default behavior when dealing with web analytics.

### Anonymous users

Hinode anonymizes the visitor's IP address when the client sends a Do Not Track request.

### Local development

By default, analytics is disabled when running on a local machine to prevent pollution of the gathered insights. Modify the condition `(not site.IsServer)` as needed.

The file `assets/js/analytics.js` defines the JavaScript template that is ingested into the main bundle.

```go-html-template {hl_lines=2}
{{- $pc := .Site.Config.Privacy.GoogleAnalytics -}}
{{- if (and (not .Site.IsServer) (not $pc.Disable)) -}}
[...]
{{- end -}}
```

The partial `layouts/_partials/footer/scripts.html` loads the Google Tag Manager if applicable.

```go-html-template {hl_lines=1}
{{- if and (not site.IsServer) $header -}}
[...]
{{- end -}}
```

## Content Security Policy

{{< link google_analytics_csp >}}Google Analytics requires several Content Security Policies{{< /link >}} to be set in the [server headers]({{% relref "server-headers" %}}). Hinode has enabled access for Google Analytics 4 by default. The following settings are added to `config/_default/server.toml`. Similar settings are defined in the `netlify.toml` file provided in the repository’s root when deploying to {{< link netlify >}}Netlify{{< /link >}}.

```yaml
script-src:  https://*.googletagmanager.com
img-src:     https://*.google-analytics.com https://*.googletagmanager.com
connect-src: https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com
```
