# Getting Started

This guide will help you get up and running with TableCrafter.js in just a few minutes.

## Installation

TableCrafter.js can be installed via NPM or included directly from a CDN.

### NPM

```bash
npm install tablecrafter
```

### CDN

```html
<script src="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.js"></script>
```

### Download

You can also download the latest release from [GitHub](https://github.com/TableCrafter/tablecrafter/releases) and include it directly in your project.

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
      pageSize: 10
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