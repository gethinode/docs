# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation site for Hinode, a Hugo theme based on Bootstrap 5. The site is published to https://gethinode.com and deployed via Netlify.

## Common Commands

### Development

```bash
npm start                    # Start dev server with live reload (auto-vendors modules)
npm run start:prod           # Start server in production mode with minification
```

### Building

```bash
npm run build                # Production build with minification (auto-cleans public/)
npm run build:cache          # CI build with cache optimizations
npm run build:debug          # Debug build with verbose output (auto-updates modules)
npm run build:preview        # Preview build with drafts and future posts
npm run build:headers        # Generate Netlify headers and server config
```

### Linting

```bash
npm test                     # Run all lints (alias for lint:markdown)
npm run lint                 # Run all lints
npm run lint:markdown        # Lint markdown files
npm run lint:markdown-fix    # Auto-fix markdown issues
npm run lint:scripts         # Lint JavaScript with ESLint (neostandard)
npm run lint:styles          # Lint SCSS files with Stylelint
```

### Hugo Modules

```bash
npm run mod:update           # Update all modules, vendor, and tidy
npm run mod:vendor           # Vendor Hugo modules to _vendor/
npm run mod:tidy             # Clean up go.sum
npm run mod:clean            # Clean Hugo module cache
```

### Utilities

```bash
npm run clean:public         # Remove public/ directory
npm run clean:install        # Remove package-lock.json and node_modules
npm run upgrade              # Upgrade npm dependencies and Hugo modules
npm run env                  # Display Hugo environment info
npm run check                # Display Hugo version
```

## Architecture

### Hugo Module System

- Main theme imported from `github.com/gethinode/hinode`
- Additional modules in `go.mod` provide features like FontAwesome, Mermaid, KaTeX, FlexSearch
- Vendored modules stored in `_vendor/` directory
- Module mounts defined in `config/_default/hugo.toml`

### Configuration Structure

- `config/_default/` - Default configuration files
  - `hugo.toml` - Main Hugo config
  - `params.toml` - Site parameters
  - `languages.toml` - Language settings
  - `markup.toml` - Markdown rendering options
  - `menus/` - Navigation menus
- `config/production/` - Production overrides
- `config/ci/` - CI environment config

### Content Organization

- `content/en/` - English content
  - `docs/latest/` - Current documentation (mounted to `/docs/`)
  - `guides/` - Tutorial guides
- Content uses Hugo page bundles with front matter

### Asset Pipeline

- SCSS in `assets/scss/` processed with Dart Sass (via Netlify plugin)
- JavaScript in `assets/js/`
- PostCSS with autoprefixer, cssnano, and PurgeCSS
- Build stats written to `hugo_stats.json` for PurgeCSS

### Layouts

Custom layouts in `layouts/` override theme templates. The site uses Hugo's template inheritance from the Hinode theme.

## Release Workflow

The project uses automated releases with semantic versioning:

### Commit Conventions

- Follows [Conventional Commits](https://www.conventionalcommits.org/) specification
- Enforced via commitlint with `@commitlint/config-conventional`
- Commit format: `type(scope): description`
  - Types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`
  - Example: `feat(docs): add new search functionality`

### Git Hooks (Husky)

Husky manages Git hooks to ensure code quality:

- **pre-commit**: Runs `npm test` (markdown linting)
- **commit-msg**: Validates commit messages with commitlint
- Hooks are skipped in CI and production environments

### Semantic Release

Automated versioning and releases on the `main` branch:

- **Trigger**: Pushes to `main` or manual workflow dispatch
- **Process**:
  1. Analyzes commits since last release
  2. Determines version bump (major/minor/patch)
  3. Generates release notes
  4. Creates GitHub release
  5. Updates `package.json` and `package-lock.json`
- **Plugins**:
  - `@semantic-release/commit-analyzer` - Determines version bump
  - `@semantic-release/release-notes-generator` - Generates changelog
  - `@semantic-release/github` - Creates GitHub releases
  - `@semantic-release/git` - Commits version updates
- **Workflow**: `.github/release.yml`

## Key Files

### Core Configuration

- `netlify.toml` - Netlify deployment configuration
- `go.mod` / `go.sum` - Hugo module dependencies
- `package.json` - npm scripts and dependencies
- `config/_default/hugo.toml` - Main Hugo configuration

### Linting Configuration

- `.markdownlint-cli2.jsonc` - Markdown linting rules
  - Disabled rules: MD013 (line length), MD024 (duplicate headings), MD026 (trailing punctuation), MD034 (bare URLs), MD053 (link definitions), MD055 (table pipe alignment), MD056 (table column count)
  - Ignores: `node_modules`, `CHANGELOG.md`
- `eslint.config.js` - JavaScript linting with neostandard preset
- Stylelint uses `stylelint-config-standard-scss` (configured in package.json)

### Release & Git Hooks

- `commitlint.config.js` - Conventional commits configuration
- `.husky/commit-msg` - Commit message validation hook
- `.husky/pre-commit` - Pre-commit linting hook
- `.github/release.yml` - Semantic release workflow
