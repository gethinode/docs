---
title: Fonts
description: Configure a specific font to style your website.
date: 2023-03-12
layout: docs
---

Hinode uses a configurable font stack that includes support for Emoji across browsers and devices. Review the configuration settings below on how to update the font.

## Font configuration

Hinode uses a font stack that includes support for Emoji across browsers and devices. You can adjust the main font in the `/config/_default/params.toml` file in the `style` section. You can either use fonts from an external provider or serve them locally. To improve performance, Hinode serves the Inter font locally by default.

{{< docs name="font" file="config/_default/params.toml" >}}

### External fonts

Set the `themeFontPath` to the address of your font provider, such as [Google Fonts]({{< param "links.google_fonts" >}}):

```toml
themeFontPath = "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;600&display=swap"
```

Hinode enables support for Google Fonts by default. If you use a different font provider, be sure to adjust the Content Security Policy in the [server configuration]({{< ref "server" >}}). The font-face definitions in the file `assets/scss/fonts.scss` are ignored when using an external font.

### Local fonts

To improve performance, Hinode serves the Inter font locally by default. Set the `themeFontPath` to the following local folder:

```toml
themeFontPath = "/fonts"
```

The font files are retrieved from the folder `static/fonts`. The [google-webfonts-helper]({{< param "links.webfonts_helper" >}}) from Mario Ranftl is a helpful tool to download the correct font files. It also generates the proper font-face definitions. Copy the definitions to the `assets/scss/theme/fonts.scss` file and download the font files themselves to the `static/fonts` folder.

## Customization

The font stack is defined in the `assets/scss/common/_variables.scss` file. The variable `$themeFont` is initialized to the value in the [font configuration](#font-configuration).

{{< docs name="font" file="assets/scss/common/_variables.scss" >}}
