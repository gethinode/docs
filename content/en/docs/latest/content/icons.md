---
title: Icons
description: Use out-of-the-box Font Awesome icons to style your website.
date: 2023-09-25
layout: docs
---

Hinode provides out-of-the box access to the free icons of {{< link fontawesome >}}Font Awesome{{< /link >}}. The [shortcodes]({{< relref "icon" >}}) `icon`, `fa`, `fab`, and `fas` are available to add these icons with as limited code as possible. The Font Awesome icon library provides various {{< link fa_styling >}}styling options{{< /link >}}. The below paragraphs illustrate how to apply the styling options compatible with Markdown, Bootstrap, and the [content security policy]({{< relref "server-headers" >}}).

## Styling basics

The {{< link fa_icons >}}Font Awesome icon library{{< /link >}} provides access to more than 2.000 free and open-source icons. Simply search for a keyword and review the presented options. For example, searching for the keyword `music` and filtering for `free` returns a list of nearly 30 icons. Use one of the following three [shortcodes]({{< relref "icon" >}}) to add an icon to your Markdown content:

- `fa` - regular Font Awesome icon library
- `fab` - brands Font Awesome icon library
- `fas` - solid Font Awesome icon library

Specify the correct icon library and omit the `fa-` prefix from the icon name to insert an icon.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas music */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The icons inherit the current styling options and as such blend in with text inline. For example, apply the [theme color]({{< relref "colors" >}}) `text-primary` to the paragraph containing the icon to change its color. You can also pass the class attribute directly to the shortcode, such as `text-info`.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas music */>}}
{.text-primary}

{{</* fas music text-info */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Sizing icons

Font Awesome supports both relative and absolute sizing. The following two section explain how to apply the sizing to an icon.

### Relative sizing

Font Awesome includes a range of t-shirt based sizes that are relative to the browser's default font size of 16px. The icons align to the inline text. The following example illustrative the available relative sizes.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas mug-saucer fa-2xs */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa-xs */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa-sm */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa-lg */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa-xl */>}} When my six o’clock alarm buzzes, I require a pot of good java.

{{</* fas mug-saucer fa-2xl */>}} When my six o’clock alarm buzzes, I require a pot of good java.
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The table below illustrates the relative sizing classes and their equivalent relative and absolute font size.

{{< table "table-striped w-auto" >}}
| Relative Sizing Class | Font Size | Equivalent in Pixels |
|----------|--------:|-----:|
| `fa-2x`  | 0.625em | 10px |
| `fa-xs`  | 0.75em  | 12px |
| `fa-sm`  | 0.875em | 14px |
| `fa`     | 1em     | 16px |
| `fa-lg`  | 1.25em  | 20px |
| `fa-xl`  | 1.5em   | 24px |
| `fa-2xl` | 2em     | 32px |
{{< /table >}}

### Absolute sizing

Font Awesome also supports absolute sizing on a scale of 1x to 10x. The icons do not necessarily align to their surrounding text. The following example illustrative the various absolute sizes.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas camera fa-1x */>}}
{{</* fas camera fa-2x */>}}
{{</* fas camera fa-3x */>}}
{{</* fas camera fa-4x */>}}
{{</* fas camera fa-5x */>}}
{{</* fas camera fa-6x */>}}
{{</* fas camera fa-7x */>}}
{{</* fas camera fa-8x */>}}
{{</* fas camera fa-9x */>}}
{{</* fas camera fa-10x */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The table below illustrates the absolute sizing classes and their equivalent font size.

{{< table "table-striped w-auto" >}}
| Absolute Sizing Class | Font Size |
|---------|--------:|
| `fa-1x` | 1em |
| `fa-2x` | 2em |
| `fa-3x` | 3em |
| `fa-4x` | 4em |
| `fa-5x` | 5em |
| `fa-6x` | 6em |
| `fa-7x` | 7em |
| `fa-8x` | 8em |
| `fa-9x` | 9em |
| `fa-10x` | 10em |
{{< /table >}}

### Responsive sizing

{{< alert >}}
**New in v0.19.0** - Added support for a wrapper argument that applies `fa-wrapper` and `fa-fluid` automatically.

---

**New in v0.14.5** - Added support for responsive sizing using containers.
{{< /alert >}}

Hinode supports responsive sizing of icons using so-called containers. Assigning `wrapper` a value will wrap the icon in a HTML `div` element. Hinode assigns `.fa-wrapper` to the class attribute of the wrapper and `fa-fluid` to the icon itself. The icon is now dynamically resized.

<!-- markdownlint-disable MD037 -->
{{< alert type="info" >}}
Container support is a relatively new CSS feature that is not supported by all browsers yet. See this overview to {{</* link caniuse_container >}}check the current browser support{{< /link */>}}. Hinode uses a fixed-size icon with a `font-size` of `5rem` as fallback.
{{< /alert >}}
<!-- markdownlint-enable MD037 -->

The following example demonstrates a centered, responsive icon. The icon keeps its original aspect ratio, so the wrapper may have some whitespace. Use `text-center` to center the icon within the container, and `mx-auto` to center the container itself.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas class="rocket bg-body-tertiary" wrapper="col-6 mx-auto text-center" */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Fixed width

Add `fa-fw` to the class of the HTML element referencing your icon to apply a fixed width. This ensures icons of varying icon width are properly aligned to each other. The following example illustrates how this works.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas person-skating fa-fw bg-body-tertiary */>}} Skating
{.fa-3x}

{{</* fas person-skiing fa-fw bg-body-tertiary */>}} Skiing
{.fa-3x}

{{</* fas person-skiing-nordic fa-fw bg-body-tertiary */>}} Nordic Skiing
{.fa-3x}

{{</* fas person-snowboarding fa-fw bg-body-tertiary */>}} Snowboarding
{.fa-3x}

{{</* fas snowplow fa-fw bg-body-tertiary */>}} Snowplow
{.fa-3x}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Lists

Use the classes `.fa-ul` and `.fa-li` to replace default bullets in unordered lists. The following example illustrates how this works.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}

- {{</* fas class="circle-check" wrapper="fa-li" */>}}List icons can
- {{</* fas class="square-check" wrapper="fa-li" */>}}be used to
- {{</* fas class="spinner fa-pulse" wrapper="fa-li" */>}} replace bullets
- {{</* fa class="square" wrapper="fa-li" */>}} in lists
{.fa-ul}

{{< /example >}}
<!-- markdownlint-enable MD037 -->

## Rotating icons

Use specific classes to rotate the icon with a specific degree. The following example illustrates how this works.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas person-snowboarding fa-3x */>}}
{{</* fas person-snowboarding fa-3x fa-rotate-90 */>}}
{{</* fas person-snowboarding fa-3x fa-rotate-180 */>}}
{{</* fas person-snowboarding fa-3x fa-rotate-270 */>}}
{{</* fas person-snowboarding fa-3x fa-flip-horizontal */>}}
{{</* fas person-snowboarding fa-3x fa-flip-vertical */>}}
{{</* fas person-snowboarding fa-3x fa-flip-both */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The following classes are available:

{{< table "table-striped w-auto" >}}
| Class | Details |
|---------|--------|
| `fa-rotate-90` | Rotates an icon 90° |
| `fa-rotate-180` | Rotates an icon 180° |
| `fa-rotate-270` | Rotates an icon 270° |
| `fa-flip-horizontal` | Mirrors an icon horizontally |
| `fa-flip-vertical` | Mirrors an icon vertically |
| `fa-flip-both` | Mirrors an icon both vertically and horizontally |
{{< /table >}}

## Animating icons

Font Awesome supports various animations by simply adding a animation class to the HTML element. The following example illustrates the available basic animations. Add custom styles to your [Sass files]({{< ref "styles" >}}) to apply additional {{< link fa_animation >}}animation utilities{{< /link >}}.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas heart fa-3x fa-beat */>}}
{{</* fas triangle-exclamation fa-3x fa-fade */>}}
{{</* fas circle-info fa-3x fa-beat-fade */>}}
{{</* fas basketball fa-3x fa-bounce */>}}
{{</* fas camera-rotate fa-3x fa-flip */>}}
{{</* fas bell fa-3x fa-shake */>}}
{{</* fas arrows-rotate fa-3x fa-spin */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The following table describes the available basic animation classes.

{{< table "table-striped w-auto" >}}
| Class | Details |
|---------|--------|
| `fa-beat` | Scales an icon up or down |
| `fa-fade` | Fades an icon in and out |
| `fa-beat-fade` | Scales and pulses an icon in and out |
| `fa-bounce` | Bounces an icon up and down |
| `fa-flip` | Rotates an icon about the Y axis 180 degrees |
| `fa-shake` | Shakes an icon back and forth |
| `fa-spin` | Roates an icon |
{{< /table >}}

## Bordered and pulled icons

Use `fa-border` and `fa-pull-right` or `fa-pull-left` for easy pull quotes or article icons. The following example illustrates a quote.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas quote-left fa-2x fa-pull-left */>}}
Gatsby believed in the green light, the orgastic future that year by year recedes before us.
It eluded us then, but that’s no matter — tomorrow we will run faster, stretch our arms further...
And one fine morning — So we beat on, boats against the current, borne back ceaselessly into the past.
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The following table describes the available classes.

{{< table "table-striped w-auto" >}}
| Class | Details |
|-------|---------|
| `fa-border` | Creates a border with border-radius and padding applied around an icons |
| `fa-pull-left` | Pulls an icon by floating it left and applying a margin-right |
| `fa-pull-right` | Pulls an icon by floating it right and applying a margin-left |
{{< /table >}}

## Stacking icons

Use the `fa-stack` class on the parent HTML element of the two icons you want to stack. Then add the `fa-stack-1x` class for the regularly sized icon and add the `fa-stack-2x` class for the larger icon. `fa-inverse` can be added to the icon with the `fa-stack-1x` to help with a knock-out looking effect. Add a [theme color]({{< ref "colors" >}}) such as `text-primary` to change the color of the icon. The following example illustrates the available options.

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* fas square fa-stack-2x */>}}
{{</* fab x-twitter fa-stack-1x fa-inverse */>}}
{.fa-stack .fa-2x}

{{</* fas circle fa-stack-2x */>}}
{{</* fas flag fa-stack-1x fa-inverse */>}}
{.fa-stack .fa-2x}

{{</* fas camera fa-stack-1x */>}}
{{</* fas ban fa-stack-2x text-danger */>}}
{.fa-stack .fa-2x}

{{</* fas square fa-stack-2x */>}}
{{</* fas terminal fa-stack-1x fa-inverse */>}}
{.fa-stack .fa-4x}
{{< /example >}}
<!-- markdownlint-enable MD037 -->

The following table describes the available classes.

{{< table "table-striped w-auto" >}}
| Class | Details |
|-------|---------|
| `fa-stack`    | Used on a parent HTML element of the two icons to be stacked |
| `fa-stack-1x` | Used on the icon which should be displayed at base size when stacked |
| `fa-stack-2x` | Used on the icon which should be displayed larger when stacked |
| `fa-inverse`  | Inverts the color of the icon displayed at base size when stacked |
{{< /table >}}

## Adding custom icons

{{< release version="v0.20.5" >}}

{{< alert type="info" >}}
Hinode removes any embedded `height` and `width` attributes from the icon data to ensure the icon is responsive. The `viewBox` attribute is kept.
{{< /alert >}}

You can reference a custom family and icon stored in the local `assets` folder. The {{< link "docs/components/icon" />}} shortcode uses the path `assets/svgs/{family}/{icon}.svg`, replacing `{family}` and `{icon}` with the specified values. You can mix the custom icon with Font Awesome styling directives (such as `fa-4x`, although animations are typically not supported). The following example shows an icon called `activity` of the `custom` family of size `fa-4x`. 

<!-- markdownlint-disable MD037 -->
{{< example lang="hugo" >}}
{{</* icon custom activity fa-4x */>}}
{{< /example >}}
<!-- markdownlint-enable MD037 -->
