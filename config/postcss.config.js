const autoprefixer = require('autoprefixer')({})
const cssnano = require('cssnano')({
  preset: 'advanced'
})
const whitelister = require('purgecss-whitelister')
const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])]
  },
  dynamicAttributes: ["data-bs-theme"],
  safelist: [
    ...whitelister([
      './assets/scss/theme/theme.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_clipboard.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_command.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_navbar.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_search.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_sidebar.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_syntax.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_syntax-dark.scss',
      './node_modules/@gethinode/hinode/assets/scss/components/_syntax-light.scss',
      './node_modules/@gethinode/hinode/assets/scss/theme/fonts.scss',
      './node_modules/bootstrap/scss/_carousel.scss',
      './node_modules/bootstrap/scss/_dropdown.scss',
      './node_modules/bootstrap/scss/_reboot.scss',
      './node_modules/bootstrap/scss/_tooltip.scss',
      './node_modules/bootstrap/scss/_transitions.scss',
      './node_modules/bootstrap/scss/_utilities.scss'
    ])
  ]
})

module.exports = {
  plugins: [
    autoprefixer,
    cssnano,
    purgecss
  ]
}
