# Basic Table Example

This example demonstrates the most common TableCrafter.js use case - displaying data in a sortable, filterable table.

## Live Example

<div id="basic-example" style="margin: 20px 0;"></div>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // This would be loaded from CDN in a real example
  if (typeof window !== 'undefined' && window.TableCrafter) {
    const data = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', salary: 75000 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', salary: 68000 },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', salary: 85000 },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', salary: 72000 },
      { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'QA Engineer', salary: 65000 }
    ];

    const table = new TableCrafter('#basic-example', {
      data: data,
      columns: [
        { field: 'id', label: 'ID', sortable: true },
        { field: 'name', label: 'Name', sortable: true },
        { field: 'email', label: 'Email', sortable: true },
        { field: 'role', label: 'Role', sortable: true },
        { field: 'salary', label: 'Salary', sortable: true }
      ],
      sortable: true,
      filterable: true,
      responsive: true
    });

    table.render();
  }
})
</script>

## Code

### HTML

```html
<div id="employee-table"></div>
```

### JavaScript

```javascript
// Sample data - could come from an API
const employees = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', salary: 75000 },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', salary: 68000 },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', salary: 85000 },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', salary: 72000 },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'QA Engineer', salary: 65000 }
];

// Create the table
const table = new TableCrafter('#employee-table', {
  data: employees,
  columns: [
    { field: 'id', label: 'Employee ID', sortable: true },
    { field: 'name', label: 'Full Name', sortable: true },
    { field: 'email', label: 'Email Address', sortable: true },
    { field: 'role', label: 'Job Role', sortable: true },
    { field: 'salary', label: 'Annual Salary', sortable: true }
  ],
  sortable: true,        // Enable column sorting
  filterable: true,      // Enable search/filtering
  responsive: true       // Enable mobile responsiveness
});

// Render the table
table.render();
```

## Features Demonstrated

### ✅ Data Display
The table automatically renders your data with proper formatting and structure.

### ✅ Column Sorting
Click any column header to sort the data in ascending or descending order.

### ✅ Global Filtering
Use the search box to filter data across all columns in real-time.

### ✅ Responsive Design
Resize your browser to see how the table adapts to different screen sizes.

## Customization Options

You can customize various aspects of this basic table:

### Column Configuration

```javascript
columns: [
  {
    field: 'id',
    label: 'ID',
    sortable: true,
    filterable: false,  // Exclude from search
    width: '80px'       // Set column width
  },
  {
    field: 'salary',
    label: 'Salary',
    sortable: true,
    formatter: (value) => `$${value.toLocaleString()}`  // Format currency
  }
]
```

### Table Options

```javascript
const table = new TableCrafter('#table', {
  data: employees,
  columns: columns,
  
  // Appearance
  striped: true,          // Alternate row colors
  bordered: true,         // Add borders
  hover: true,           // Highlight on hover
  
  // Functionality
  sortable: true,
  filterable: true,
  responsive: true,
  
  // Pagination
  pagination: true,
  pageSize: 10,
  
  // Events
  onSort: (column, direction) => {
    console.log(`Sorted by ${column} ${direction}`);
  },
  onFilter: (searchTerm) => {
    console.log(`Filtered by: ${searchTerm}`);
  }
});
```

## Next Steps

Now that you've seen a basic table in action, explore these advanced features:

- **[Editable Table](/examples/editable)** - Enable inline editing
- **[Advanced Filtering](/examples/filtering)** - Multiple filter types
- **[API Integration](/examples/api)** - Load data from external sources
- **[Custom Styling](/examples/styling)** - Theme and customize appearance

## Complete Example

Here's a complete HTML file you can save and run:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic TableCrafter Example</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    h1 {
      color: #333;
      margin-bottom: 30px;
    }
  </style>
</head>
<body>
  <h1>Employee Directory</h1>
  <div id="employee-table"></div>

  <script src="https://unpkg.com/tablecrafter@latest/dist/tablecrafter.min.js"></script>
  <script>
    const employees = [
      { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Developer', salary: 75000 },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Designer', salary: 68000 },
      { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Manager', salary: 85000 },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Developer', salary: 72000 },
      { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', role: 'QA Engineer', salary: 65000 }
    ];

    const table = new TableCrafter('#employee-table', {
      data: employees,
      columns: [
        { field: 'id', label: 'ID', sortable: true },
        { field: 'name', label: 'Name', sortable: true },
        { field: 'email', label: 'Email', sortable: true },
        { field: 'role', label: 'Role', sortable: true },
        { field: 'salary', label: 'Salary', sortable: true, formatter: (value) => `$${value.toLocaleString()}` }
      ],
      sortable: true,
      filterable: true,
      responsive: true
    });

    table.render();
  </script>
</body>
</html>
```

Save this as `basic-table.html` and open it in your browser to see TableCrafter in action!