---
author: Mark Dumay
title: Adding npm packages
date: 2023-03-13
description: Guide on how to add additional npm packages to your site.
# tags: ["npm", "leaflet"]
thumbnail: img/packages.jpg
photoCredits: <a href="https://unsplash.com/@mildlee">Mildleee</a>
photoSource: <a href="https://unsplash.com/photos/7KKy7-TeeVs">Unsplash</a>
---

Hinode uses [npm packages]({{< ref "/docs/0.9/advanced-settings/overview#npm-packages" >}}) and [mounted folders]({{< param "links.hugo_mounts" >}}) to create a flexible, automated build system. This guide shows how to add an npm package to your site. It installs Leaflet as an example. [Leaflet]({{< param "links.leaflet" >}}) is an open-source JavaScript library to add mobile-friendly interactive maps to your site.

## Install Leaflet as development dependency

Run the following command from within your project folder to add Leaflet as a development dependency. npm will download the package and save the files in your local `node_modules` folder. The dependency is also added to `package.json` in your repository root.

{{< command >}}
npm i -D leaflet
{{< /command >}}

## Mount the library to the assets folder

Using Hugo's module mounts, Hinode bundles all JavaScript files found in the `assets/js` folder into a single file. Add a link to Leaflet's core JavaScript file to include it in your project's JavaScript bundle. Add the below configuration to `config/_default/config.toml` to mount the file `leaflet.js`.

```toml
  [[module.mounts]]
    source = "node_modules/leaflet/dist"
    target = "assets/js/vendor/leaflet"
    includeFiles = "leaflet.js"
```

## Import the css file

Leaflet requires the presence of several style elements. Similarly to the JavaScript bundle, add the following statement to `assets/scss/app.scss` to include Leaflet's <abbr title="Cascading Stylesheet">CSS</abbr> file in your main style. Please note that the file extension `.css` should be omitted.

```scss
// Import Leaflet
@import "leaflet/dist/leaflet";
```

## Adjust the Content Security Policy

Leaflet requires access to [OpenStreetMap]({{< param "links.openstreetmap" >}}). Adjust the Content Security Policy in `config/_default/server.toml` to enable access to the remote images. You might need to adjust the settings of your hosting provider too (see `netlify.toml` in the repository root).

```toml
img-src 'self' https://i.vimeocdn.com https://i.ytimg.com https://tile.openstreetmap.org; \
```

## Add the image map placeholder

Add a `map` placeholder to your (Markdown) content file. The following placeholder uses a 16x9 ratio and stretches across the main body.

```html
<div id="map" class="ratio ratio-16x9 w-100"></div>
```

## Initialize the map

Finally, initialize the map placeholder with the OpenStreetMap content. The following example uses the city of London as an example. The `mapID` refers to the ID of the placeholder. The code tests if an element with the `map` ID is present and initializes the placeholder accordingly. You can place the code in `assets/js/leaflet.js`, where Hinode will pick it up automatically.

```js
const mapID = 'map'

if (document.getElementById(mapID) !== null) {
  const map = L.map(mapID).setView([51.505, -0.09], 13)

  const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)
}
```

## Test the map

From here on you should have a working map on your site. Run the following command to start a local development server.

{{< command >}}
npm run start
{{< /command >}}

You can now modify the placeholder and map initialization as needed.
