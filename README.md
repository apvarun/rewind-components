# Rewind Components

[![npm version](https://badge.fury.io/js/rewind-components.svg)](https://badge.fury.io/js/rewind-components)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/rewind-components.svg)
![NPM](https://img.shields.io/npm/l/rewind-components.svg)

Ready to use components for your next project.

![Rewind Logo](public/rewind-logo.png)

* Optimized Build with small footprint (2-3k gzipped)
* Pure React Components
* Minimal Design

<a href="https://rewind-components.apvarun.com/" target="_blank">→ PREVIEW</a>

## Get Started

Add the Rewind component library to your project to use the components.

### Install

```
yarn add rewind-components -S
```
or if you are using NPM:
```
npm install rewind-components --save
```

### Usage

All the components in Rewind are exported from the base component.
You can import only the ones you need and so not load unused components in your production bundle.

**Example:** `import { Alert } from "rewind-components";`

Include the CSS into your global CSS file for all the Rewind components.
And make sure to use purgeCSS or UnCSS to remove unused CSS frmo your bundle.

```
@import "~rewind-components/dist/index.css";
```

### Browser support

Rewind Components are supported in Chrome, Firefox, Safari, and Microsoft Edge.
