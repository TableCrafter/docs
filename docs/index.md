---
layout: home

hero:
  name: "TableCrafter.js"
  text: "Craft Beautiful Data Tables"
  tagline: "A lightweight, mobile-responsive JavaScript library with zero dependencies"
  image:
    src: /logo-large.svg
    alt: TableCrafter
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/TableCrafter/tablecrafter
    - theme: alt
      text: Try Live Demo
      link: /examples/basic

features:
  - icon: ⚡
    title: Zero Dependencies
    details: Pure vanilla JavaScript with no external dependencies. Works everywhere JavaScript runs.

  - icon: 📱
    title: Mobile First
    details: Responsive design that automatically transforms into mobile-friendly card layouts.

  - icon: ✏️
    title: Inline Editing
    details: Click any cell to edit data directly in the table with built-in validation.

  - icon: 🔄
    title: Data Sources
    details: Support for arrays, URLs, and async data sources with automatic loading.

  - icon: 📊
    title: Sorting & Filtering
    details: Advanced sorting and real-time filtering with multiple column support.

  - icon: 📄
    title: Pagination
    details: Client-side pagination with configurable page sizes and navigation.

  - icon: 📤
    title: Export Ready
    details: Built-in CSV export with support for filtered data and custom formatting.

  - icon: 🎨
    title: Customizable
    details: Extensive theming options with CSS custom properties and event callbacks.

  - icon: 🚀
    title: Performance
    details: Optimized for speed with efficient rendering and memory management.
---

## Quick Example

Transform your data into beautiful, interactive tables in just a few lines of code:

```javascript
import TableCrafter from 'tablecrafter';

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager' }
];

const table = new TableCrafter('#my-table', {
  data: data,
  columns: [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name', editable: true },
    { field: 'email', label: 'Email', editable: true },
    { field: 'role', label: 'Role', editable: true }
  ],
  editable: true,
  responsive: true,
  pagination: true
});

table.render();
```

## Why TableCrafter?

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it? Skip to the [Quick Start](/guide/quick-start).

</div>

TableCrafter.js was built to solve the common pain points developers face when working with data tables:

- **No Framework Lock-in**: Works with React, Vue, Angular, or plain HTML
- **Mobile Ready**: Built-in responsive design that actually works
- **Developer Friendly**: Intuitive API with comprehensive TypeScript support
- **Production Ready**: Battle-tested with comprehensive test coverage
- **Extensible**: Plugin system for custom functionality

## What's Next?

- **[Getting Started](/guide/getting-started)** - Install and set up TableCrafter
- **[Configuration](/guide/configuration)** - Learn about all available options
- **[Examples](/examples/basic)** - See TableCrafter in action
- **[API Reference](/api/tablecrafter)** - Complete API documentation

## Community

- **[GitHub](https://github.com/TableCrafter/tablecrafter)** - Source code and issues
- **[NPM](https://www.npmjs.com/package/tablecrafter)** - Package downloads
- **[Discussions](https://github.com/TableCrafter/tablecrafter/discussions)** - Community support

---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #3b82f6 30%, #1d4ed8);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #3b82f6 50%, #1d4ed8 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>