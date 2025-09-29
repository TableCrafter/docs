# Getting Started

This guide will help you get up and running with TableCrafter.js and its advanced WordPress plugin parity features in just a few minutes.

## Installation

TableCrafter.js can be installed via NPM or included directly from a CDN.

### NPM

```bash
npm install tablecrafter
```

### CDN

```html
<!-- Include both CSS and JavaScript -->
<link rel="stylesheet" href="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.css">
<script src="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.js"></script>
```

### Download

You can also download the latest release from [GitHub](https://github.com/TableCrafter/tablecrafter/releases) and include it directly in your project.

## Quick Start Options

TableCrafter offers different complexity levels depending on your needs:

- **[Basic Usage](#basic-usage)** - Simple tables with sorting and filtering
- **[Advanced Configuration](#advanced-configuration)** - WordPress parity features with API integration
- **[WordPress Integration](#wordpress-integration)** - Drop-in replacement for WordPress plugins

## Basic Usage

### HTML Structure

First, create a container element in your HTML:

```html
<div id="my-table"></div>
```

### JavaScript Setup

#### ES Modules

```javascript
import TableCrafter from 'tablecrafter';

const table = new TableCrafter('#my-table', {
  data: [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
  ],
  columns: [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name' },
    { field: 'email', label: 'Email' }
  ]
});

table.render();
```

#### CommonJS

```javascript
const TableCrafter = require('tablecrafter');

const table = new TableCrafter('#my-table', {
  // configuration options
});

table.render();
```

#### Browser Global

```html
<script src="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.js"></script>
<script>
  const table = new TableCrafter('#my-table', {
    data: [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
    ],
    columns: [
      { field: 'id', label: 'ID' },
      { field: 'name', label: 'Name' },
      { field: 'email', label: 'Email' }
    ]
  });

  table.render();
</script>
```

## Your First Table

Let's create a complete example with some sample data:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First TableCrafter Table</title>
  <link rel="stylesheet" href="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.css">
</head>
<body>
  <div id="users-table"></div>

  <script src="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.js"></script>
  <script>
    const users = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', active: true },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', active: true },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', active: false },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', active: true }
    ];

    const table = new TableCrafter('#users-table', {
      data: users,
      columns: [
        { field: 'id', label: 'ID', sortable: true },
        { field: 'name', label: 'Full Name', sortable: true, editable: true },
        { field: 'email', label: 'Email Address', sortable: true, editable: true },
        { field: 'role', label: 'Role', sortable: true, editable: true },
        { field: 'active', label: 'Status', sortable: true }
      ],
      sortable: true,
      filterable: true,
      editable: true,
      responsive: true,
      pagination: true,
      pageSize: 10,
      exportable: true
    });

    table.render();
  </script>
</body>
</html>
```

This example demonstrates several key features:

- **Data binding** with an array of objects
- **Column configuration** with custom labels
- **Sorting** by clicking column headers
- **Filtering** with the search box
- **Inline editing** by clicking cells
- **Responsive design** that adapts to mobile
- **Pagination** for large datasets
- **CSV export** functionality

## Advanced Configuration

For WordPress plugin parity and enterprise features, TableCrafter offers advanced configuration options:

### WordPress-Level Features

```javascript
const table = new TableCrafter('#advanced-table', {
  // API data source
  data: '/api/employees',
  
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
        displayField: 'name',
        filter: { active: true }
      }
    },
    { 
      field: 'manager_id', 
      label: 'Manager',
      lookup: {
        url: '/api/users',
        valueField: 'id',
        displayField: 'name',
        filter: { role: 'manager' }
      }
    }
  ],
  
  // Advanced filtering with auto-detection
  filters: {
    advanced: true,
    autoDetect: true,
    showClearAll: true,
    types: {
      'department_id': { type: 'multiselect' },
      'hire_date': { type: 'daterange' },
      'salary': { type: 'numberrange' }
    }
  },
  
  // Bulk operations
  bulk: {
    enabled: true,
    operations: ['delete', 'export', 'promote'],
    showProgress: true
  },
  
  // Enhanced responsive design
  responsive: {
    enabled: true,
    fieldVisibility: {
      mobile: { 
        showFields: ['name', 'department_id'],
        hideFields: ['id', 'email', 'manager_id'] 
      },
      tablet: { 
        showFields: ['name', 'email', 'department_id'] 
      }
    }
  },
  
  // Add new entries
  addNew: {
    enabled: true,
    modal: true,
    fields: [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true },
      { name: 'department_id', label: 'Department', type: 'select', required: true }
    ],
    validation: {
      name: { required: true, minLength: 2 },
      email: { required: true, type: 'email' }
    }
  },
  
  // API integration
  api: {
    baseUrl: '/api/employees',
    endpoints: {
      data: '',
      create: '',
      update: '/{id}',
      delete: '/{id}',
      lookup: '/lookup'
    },
    headers: {
      'Authorization': 'Bearer your-jwt-token',
      'X-API-Key': 'your-api-key'
    },
    authentication: {
      type: 'bearer',
      token: 'your-jwt-token'
    }
  },
  
  // Permission system
  permissions: {
    enabled: true,
    view: ['admin', 'manager', 'employee'],
    edit: ['admin', 'manager'],
    delete: ['admin'],
    create: ['admin', 'manager'],
    ownOnly: false
  },
  
  // State persistence
  state: {
    persist: true,
    storage: 'localStorage',
    key: 'employee_table_state'
  },
  
  // Event callbacks
  onEdit: function(event) {
    console.log('Data edited:', event);
  },
  onBulkAction: function(event) {
    console.log('Bulk action performed:', event);
  },
  onFilter: function(event) {
    console.log('Filters applied:', event);
  },
  onAdd: function(event) {
    console.log('New entry added:', event);
  }
});

// Set user context for permissions
table.setCurrentUser({
  id: 1,
  name: 'John Admin',
  roles: ['admin', 'manager']
});

table.render();
```

### Advanced Features Demonstrated

This configuration showcases:

- **🔗 Lookup Fields** - Dynamic dropdowns with API data sources
- **🔍 Auto-Filtering** - Intelligent filter type detection
- **⚡ Bulk Operations** - Multi-row selection with custom actions
- **📱 Mobile Optimization** - Field visibility per device type
- **🛡️ Permissions** - Role-based access control
- **💾 State Persistence** - User preference memory
- **🔄 API Integration** - Full CRUD operations with authentication
- **➕ Add New Entries** - Modal-based data creation with validation

## WordPress Integration

For WordPress sites, TableCrafter can replace existing Gravity Tables installations:

```javascript
// WordPress-specific integration
const wpTable = new WordPressTableCrafter('#wp-table', tableId, {
  gravityFormsIntegration: true,
  userRoleFilter: 'driver',
  ownOnly: true,
  wpApiBase: '/wp-json/tablecrafter/v1',
  nonce: window.tablecrafterNonce
});

wpTable.render();
```

## Next Steps

Now that you have a basic table working, explore these guides to learn more:

- **[Configuration](/guide/configuration)** - Learn about all available options
- **[Data Sources](/guide/data-sources)** - Connect to APIs and external data
- **[Responsive Design](/guide/responsive)** - Optimize for mobile devices
- **[Inline Editing](/guide/inline-editing)** - Enable data editing features
- **[Events & Callbacks](/guide/events)** - Handle user interactions

## Framework Integration

TableCrafter.js works great with all major frameworks:

- **[React](/guide/react)** - React component wrapper
- **[Vue.js](/guide/vue)** - Vue component integration
- **[Angular](/guide/angular)** - Angular component setup

## Need Help?

- Check out the **[Examples](/examples/basic)** for common use cases
- Browse the **[API Reference](/api/tablecrafter)** for detailed documentation
- Visit our **[GitHub Discussions](https://github.com/TableCrafter/tablecrafter/discussions)** for community support
- Report bugs on **[GitHub Issues](https://github.com/TableCrafter/tablecrafter/issues)**