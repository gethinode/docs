---
author: Mark Dumay
title: Collapse
date: 2023-07-10
description: Use the map shortcode to show an interactive map.
layout: docs
icon: fa map
tags: component
---

## Overview

Use the map shortcode to show an interactive map, powered by [Leaflet][leaflet]. The shortcode is a simplified wrapper of the Leaflet library that provides basic functionality. As an example, the following shortcode displays an interactive map of the city of Amsterdam.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
  {{</* map lat=52.377 long=4.90 popup="Amsterdam Central Station" popup-lat=52.378062 popup-long=4.900562 */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Arguments

The shortcode supports the following arguments:

{{< table >}}
| Argument    | Required | Description |
|-------------|----------|-------------|
| id          | No       | Optional unique id of the map element, e.g. `leaflet-map-1`. |
| class       | No       | Optional class attribute of the inner panel element, defaults to `ratio ratio-16x9 w-100 mx-auto`. |
| lat         | No       | Latitude of the map center, defaults to `52.377`. |
| long        | No       | Longitude of the map center, defaults to `4.90`. |
| zoom        | No       | Initial map zoom level between 1 (minimum zoom) - 18 (maximum zoom), defaults to `13`. |
| popup       | No       | Optional text of a popup marker. |
| popup-lat   | No       | Latitude of the popup marker. |
| popup-long  | No       | Longitude of the popup marker. |
{{< /table >}}


## Examples

Change the location and style of your map with shortcode arguments.

### Zoom level

Set the `zoom` to a value of `1` to display a world map. The map is centered on Europe by default, adjust the `lat` and `long` values to set a different center.

{{< example lang="hugo" >}}
{{</* map zoom=1 */>}}
{{< /example >}}

### Center coordinates

Specify the map center by providing `lat` and `long` values. Add a marker to the map by specifying a `popup` text and `popup-lat` and `popup-long` coordinates. The following example display the city center of Amsterdam and adds a marker for the central train station.

{{< example lang="hugo" >}}
{{</* map lat=52.377 long=4.90 popup="Amsterdam Central Station" popup-lat=52.378062 popup-long=4.900562 */>}}
{{< /example >}}

### Identification

Assign a specific identified to the map by setting the `id` argument. The following example displays a map for the city of London with a unique id.

{{< example lang="hugo" >}}
{{</* map id="leaflet-map-london" lat=51.505 long=-0.09 zoom=10 */>}}
{{< /example >}}