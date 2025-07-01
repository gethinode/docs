---
title: Fonts
description: Configure a specific font to style your website.
date: 2024-02-13
layout: docs
---

Hinode uses a configurable font stack that includes support for Emoji across browsers and devices. Review the configuration settings below on how to update the font.

## Font configuration

Hinode uses a font stack that includes support for Emoji across browsers and devices. You can adjust the main font in the `/config/_default/params.toml` file in the `style` section. You can either use fonts from an external provider or serve them locally. To improve performance, Hinode serves the Inter font locally by default.

{{< docs name="font" file="config/_default/params.toml" >}}

### External fonts

Set the `themeFontPath` to the address of your font provider, such as {{< link google_fonts >}}Google Fonts{{< /link >}}:

```toml
themeFontPath = "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;600&display=swap"
```

Hinode enables support for Google Fonts by default. If you use a different font provider, be sure to adjust the Content Security Policy in the [server configuration]({{% relref "server-headers" %}}). The font-face definitions in the file `assets/scss/fonts.scss` are ignored when using an external font.

### Local fonts

To improve performance, Hinode serves the Inter font locally by default. Set the `themeFontPath` to the following local folder:

```toml
themeFontPath = "/fonts"
```

The font files are retrieved from the folder `static/fonts`. The {{< link webfonts_helper >}}google-webfonts-helper{{< /link >}} from Mario Ranftl is a helpful tool to download the correct font files. It also generates the proper font-face definitions. Copy the definitions to the `assets/scss/theme/fonts.scss` file and download the font files themselves to the `static/fonts` folder.

{{< release version="0.23.0" >}}

You can preload the font to improve loading speed. Select the primary font that is used above the page fold. In the next example, we select the `Inter regular` font of type `woff2` to preload. Hinode uses the font file extension to determine the font type automatically.

```toml
themeFontPreload = "/fonts/inter-v12-latin-regular.woff2"
```

### Using multiple fonts

You can configure multiple fonts and apply them to different elements of your site. For example, you could pair a serif font with a sans serif font to get a more distinct look and feel. The following example configures `Fira Sans` as default font. It then configures `PT Serif` font to headings and display headings specifically.

Define the font stack in `params.toml`, separating the family names by a comma:

```toml
[style]
    themeFont = "Fira Sans, PT Serif"
    themeFontPath = "/fonts" # local path
```

Use the {{< link webfonts_helper >}}google-webfonts-helper{{< /link >}} to download the two fonts. Copy the font files to your local `static/fonts` directory. Put the font face definitions in a new file `assets/scss/theme/fonts.scss`.

Hinode now uses `Fira Sans` as default font for the entire site, as it is the first font in our custom font stack. We can then use a small stylesheet configuration to apply the serif font to our headings and display headings. Create a new file `assets/scss/theme/theme.scss` and apply the following style configuration:

```scss
h1, h2, h3, h4, h5, h6, .display-1, .display-2, .display-3, .display-4, .display-5, .display-6 {
    font-family: 'PT Serif';
}
```

## Customization

The font stack is defined in the `assets/scss/common/_variables.scss` file. The variable `$themeFont` is initialized to the value in the [font configuration](#font-configuration).

{{< docs name="font" file="assets/scss/common/_variables.scss" >}}
