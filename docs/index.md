---
layout: home

hero:
  name: "TableCrafter.js"
  text: "Craft Beautiful Data Tables"
  tagline: "Advanced data table library with WordPress plugin parity - zero dependencies, mobile-first, API-ready"
  # image:
    # src: /logo-large.svg
    # alt: TableCrafter
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
  - icon: 🔍
    title: Advanced Filtering
    details: Multi-select dropdowns, date ranges, number ranges with auto-type detection. WordPress-level filtering capabilities.

  - icon: 📱
    title: Enhanced Mobile Experience
    details: Expandable card layouts with field visibility controls per breakpoint. Touch-optimized interactions.

  - icon: ⚡
    title: Bulk Operations
    details: Multi-row selection, bulk delete/export/edit with progress indicators. Custom bulk actions support.

  - icon: 🔗
    title: Lookup Fields & API
    details: Dynamic lookup dropdowns with API integration, caching, and role-based filtering. RESTful CRUD operations.

  - icon: 🛡️
    title: Permission System
    details: Role-based access control with granular permissions. User context management and own-only restrictions.

  - icon: ✏️
    title: Advanced Editing
    details: Inline editing with lookup dropdowns, form validation, and API synchronization. Modal-based entry creation.

  - icon: 💾
    title: State Persistence
    details: Save filters, sorting, pagination across sessions. Configurable localStorage/sessionStorage backends.

  - icon: 🔄
    title: WordPress Integration
    details: Complete WordPress plugin replacement with Gravity Forms integration and user system compatibility.

  - icon: ⚡
    title: Zero Dependencies
    details: Pure vanilla JavaScript with no external dependencies. Framework-agnostic and production-ready.
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
    { 
      field: 'department_id', 
      label: 'Department',
      editable: true,
      lookup: {
        url: '/api/departments',
        valueField: 'id',
        displayField: 'name'
      }
    },
    { field: 'role', label: 'Role', editable: true }
  ],
  
  // Advanced filtering with auto-detection
  filters: {
    advanced: true,
    autoDetect: true,
    showClearAll: true
  },
  
  // Bulk operations
  bulk: {
    enabled: true,
    operations: ['delete', 'export', 'edit']
  },
  
  // Enhanced responsive design
  responsive: {
    fieldVisibility: {
      mobile: { showFields: ['name', 'role'] },
      tablet: { showFields: ['name', 'email', 'role'] }
    }
  },
  
  // API integration
  api: {
    baseUrl: '/api/employees',
    authentication: { type: 'bearer', token: 'jwt-token' }
  },
  
  // Permission system
  permissions: {
    enabled: true,
    edit: ['admin', 'manager'],
    delete: ['admin']
  },
  
  editable: true,
  pagination: true,
  state: { persist: true }
});

// Set user context for permissions
table.setCurrentUser({
  id: 1,
  roles: ['admin']
});

table.render();
```

## Why TableCrafter?

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it? Skip to the [Quick Start](/guide/quick-start).

</div>

TableCrafter.js was built to solve the common pain points developers face when working with data tables, with **complete WordPress plugin parity** and advanced features:

- **WordPress Plugin Replacement**: Drop-in replacement for Gravity Tables with 100% feature parity plus enhancements
- **Framework Agnostic**: Works with React, Vue, Angular, WordPress, or plain HTML
- **Enterprise Ready**: Role-based permissions, API integration, audit logging, and bulk operations
- **Mobile First**: Advanced responsive design with expandable cards and touch optimization
- **Developer Experience**: Intuitive API, comprehensive examples, and extensive customization options
- **Production Proven**: Built from analysis of WordPress plugin v3.1.1 with real-world requirements

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