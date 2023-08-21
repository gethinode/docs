---
author: Mark Dumay
title: Adding npm packages (deprecated)
date: 2023-04-03
description: Guide on how to add existing npm packages to your site.
tags: ["guide", "npm", "leaflet"]
weight: 100
thumbnail: 
    url: img/packages.jpg
    author: Mildlee
    authorURL: https://unsplash.com/@mildlee
    origin: Unsplash
    originURL: https://unsplash.com/photos/7KKy7-TeeVs
---

{{< alert type="danger" >}}
The preferred approach since `v0.16` is to develop a module that wraps the required npm packages, instead of including them directly into your main site. Visit the [modules guide]({{< relref "modules" >}}) for more details.
{{< /alert >}}

## Introduction

Hinode uses [npm packages]({{< ref "/docs/advanced-settings/overview#npm-packages" >}}) and {{< link hugo_mounts >}}mounted folders{{< /link >}} to create a flexible, automated build system. This guide shows how to add an npm package to your site. It installs Leaflet as an example. {{< link leaflet >}}Leaflet{{< /link >}} is an open-source JavaScript library to add mobile-friendly interactive maps to your site. This guide assumes you have a working site already. Check the [introduction]({{< relref "introduction" >}}) on how to set up a site with Hinode with npm.

<!-- markdownlint-disable MD037 -->
{{< alert type="info" >}}
A full working example of this guide is available on {{</* link repository_leaflet >}}GitHub{{< /link */>}}.
{{< /alert >}}
<!-- markdownlint-enable MD037 -->

## Step 1 - Setting up leaflet

As first step we will install the Leaflet package with npm. Next, we will mount the JavaScript library. Lastly, we will import Leaflet's stylesheet.

### Installing Leaflet as development dependency

Run the following command from within your project folder to add Leaflet as a development dependency. npm will download the package and save the files in your local `node_modules` folder. The dependency is also added to `package.json` in your repository root.

{{< command >}}
npm i -D leaflet
{{< /command >}}

### Mounting the library to the assets folder

Using Hugo's module mounts, Hinode bundles all JavaScript files found in the `assets/js` folder into a single file. Add a link to Leaflet's core JavaScript file to include it in your project's JavaScript bundle. Add the below configuration to `config/_default/hugo.toml` to mount the file `leaflet.js`.

```toml
  [[module.mounts]]
    source = "node_modules/leaflet/dist"
    target = "assets/js"
    includeFiles = "leaflet.js"
```

The default marker from Leaflet requires several images. Mount these images to `static/css/images` for them to become available.

```toml
  [[module.mounts]]
    source = "node_modules/leaflet/dist/images"
    target = "static/css/images"
    includeFiles = "*.png"
```

### Importing the css file

Leaflet requires the presence of several style elements. Similarly to the JavaScript bundle, add an import statement to `assets/scss/app.scss` to include Leaflet's <abbr title="Cascading Stylesheet">CSS</abbr> file in your main style. You can copy the basic file from the Hinode repository and add the statement to the bottom of the file. Please note that the file extension `.css` should be omitted. By default, the CSS transpiler looks up files in the root of the repository and the current directory of the `app.scss` entrypoint.

```scss
[...]

// Import Leaflet (note: omit the .css extension to avoid import issues)
@import "node_modules/leaflet/dist/leaflet";
```

## Step 2 - Adjusting the Content Security Policy

Leaflet requires access to {{< link openstreetmap >}}OpenStreetMap{{< /link >}} and requires the `data:` attribute for image sources. Adjust the Content Security Policy in `config/_default/server.toml` to enable access to the remote images. You might need to adjust the settings of your hosting provider too (see `netlify.toml` in the repository root).

```toml
img-src 'self' data: https://i.vimeocdn.com https://i.ytimg.com https://tile.openstreetmap.org; \
```

## Step 3 - Adding the image map

Add a `map` placeholder to your (Markdown) content file. The following placeholder uses a 16x9 ratio and stretches across the main body.

```html
<div id="map" class="ratio ratio-16x9 w-100"></div>
```

Next, initialize the map placeholder with the OpenStreetMap content. The following code uses the city of London as an example. The `mapID` refers to the ID of the placeholder. The code tests if an element with the `map` ID is present and initializes the placeholder accordingly. It adds a marker with a default icon next. You can place the code in `assets/js/leafletmap.js`, where Hinode will pick it up automatically.

{{< alert type="info" >}}
Hinode processes the script files in alphabetical order. Our custom script requires the script from the Leaflet library to be initialized first. You can set `showJS` in the `debugging` section of the site parameters to review the order of the processed files.
{{< /alert >}}

```js
const mapID = 'map'

if (document.getElementById(mapID) !== null) {
  const map = L.map(mapID).setView([51.505, -0.09], 13)

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  L.marker([51.5, -0.09]).addTo(map)
      .bindPopup('A pretty CSS popup.<br> Easily customizable.')
      .openPopup();
}
```

## Step 4 - Testing the map

From here on you should have a working map on your site. Run the following command to start a local development server.

{{< command >}}
npm run start
{{< /command >}}

You can now modify the placeholder and map initialization as needed.

## Conclusion

We have now added an existing npm package and integrated it with Hinode. The [advanced setttings]({{< relref "/docs/advanced-settings/overview" >}}) in the documentation provides more background about Hinode's build system.
