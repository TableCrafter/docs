# What is TableCrafter?

TableCrafter.js is a lightweight, mobile-responsive JavaScript data table library with zero dependencies. It's designed to make creating beautiful, interactive tables as simple as possible while providing the power and flexibility needed for complex applications.

## Why TableCrafter?

### Zero Dependencies
TableCrafter is built with pure vanilla JavaScript - no jQuery, no framework requirements, no external dependencies. This means:
- **Smaller bundle size** - Only ~30KB minified + gzipped
- **Better performance** - No overhead from unnecessary libraries
- **Universal compatibility** - Works anywhere JavaScript runs
- **Future-proof** - No dependency updates or security vulnerabilities

### Mobile-First Design
Unlike traditional table libraries that treat mobile as an afterthought, TableCrafter is built mobile-first:
- **Automatic responsive transformation** - Tables become cards on mobile
- **Touch-friendly interactions** - Optimized for touch devices
- **Configurable breakpoints** - Customize when layouts change
- **Smart field visibility** - Show/hide columns based on screen size

### Developer Experience
TableCrafter prioritizes developer happiness:
- **Intuitive API** - Configure tables with simple JavaScript objects
- **TypeScript support** - Full type definitions included
- **Comprehensive documentation** - Examples for every feature
- **Framework agnostic** - Works with React, Vue, Angular, or vanilla JS

## Key Features

### 🚀 Core Functionality
- **Data display** - Arrays, URLs, or async data sources
- **Sorting** - Click column headers to sort data
- **Filtering** - Real-time search across all columns
- **Pagination** - Client-side pagination with configurable page sizes
- **Export** - CSV export with filtered data support

### ✏️ Editing & Interaction
- **Inline editing** - Click any cell to edit data directly
- **Validation** - Built-in and custom validation rules
- **Events** - Rich callback system for custom behavior
- **Keyboard navigation** - Full keyboard accessibility

### 📱 Responsive Design
- **Automatic layout switching** - Table ↔ cards transformation
- **Configurable breakpoints** - Mobile, tablet, and desktop layouts
- **Field visibility controls** - Show/hide columns per device type
- **Touch gestures** - Swipe, tap, and touch interactions

### 🎨 Customization
- **CSS custom properties** - Easy theming with CSS variables
- **Custom templates** - Override any part of the UI
- **Plugin system** - Extend functionality with plugins
- **Event hooks** - Hook into any part of the table lifecycle

## How It Works

TableCrafter uses a simple, declarative approach:

```javascript
const table = new TableCrafter('#container', {
  // Your data
  data: [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' }
  ],
  
  // Column configuration
  columns: [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name', editable: true },
    { field: 'email', label: 'Email', editable: true }
  ],
  
  // Features
  sortable: true,
  filterable: true,
  editable: true,
  responsive: true
});

table.render();
```

That's it! TableCrafter handles all the complexity behind the scenes.

## Comparison with Other Libraries

| Feature | TableCrafter | DataTables | Grid.js | Handsontable |
|---------|--------------|------------|---------|--------------|
| Dependencies | ✅ Zero | ❌ jQuery | ✅ Zero | ❌ Multiple |
| Bundle Size | ✅ ~30KB | ❌ ~200KB+ | ✅ ~12KB | ❌ ~500KB+ |
| Mobile Responsive | ✅ Native | ⚠️ Plugin | ❌ Limited | ⚠️ Basic |
| Inline Editing | ✅ Built-in | ⚠️ Plugin | ❌ No | ✅ Advanced |
| TypeScript | ✅ Full | ⚠️ Community | ✅ Full | ✅ Full |
| Learning Curve | ✅ Easy | ⚠️ Moderate | ✅ Easy | ❌ Steep |

## Use Cases

TableCrafter is perfect for:

### 📊 **Data Dashboards**
- Display metrics and KPIs
- Real-time data updates
- Interactive filtering and sorting

### 📋 **Admin Interfaces**
- User management tables
- Content management systems
- Configuration panels

### 📱 **Mobile Applications**
- Contact lists
- Product catalogs
- Order management

### 🌐 **Public Websites**
- Pricing tables
- Feature comparisons
- Directory listings

### 🔧 **Internal Tools**
- Employee directories
- Inventory management
- Report viewers

## Philosophy

TableCrafter is built on these core principles:

### **Simplicity First**
The API should be intuitive and require minimal configuration for common use cases.

### **Performance Matters**
Every feature is optimized for speed and memory efficiency.

### **Mobile is Essential**
Mobile users are first-class citizens, not an afterthought.

### **Developer Experience**
Great documentation, helpful error messages, and predictable behavior.

### **Extensibility**
Core features cover 80% of use cases, plugins handle the rest.

## What's Next?

Ready to get started? Here's your roadmap:

1. **[Getting Started](/guide/getting-started)** - Install and create your first table
2. **[Quick Start](/guide/quick-start)** - 5-minute tutorial with examples
3. **[Configuration](/guide/configuration)** - Learn about all available options
4. **[Examples](/examples/basic)** - See TableCrafter in action

Or jump straight to a specific topic:
- **[Data Sources](/guide/data-sources)** - Connect to APIs and databases
- **[Responsive Design](/guide/responsive)** - Mobile optimization
- **[Inline Editing](/guide/inline-editing)** - Enable data editing
- **[Customization](/guide/customization)** - Theming and styling