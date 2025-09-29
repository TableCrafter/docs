# What is TableCrafter?

TableCrafter.js is an advanced data table library that provides **complete WordPress plugin parity** with zero dependencies. Originally designed to replace the WordPress Gravity Tables plugin, it offers enterprise-grade features in a framework-agnostic package that works anywhere JavaScript runs.

## Why TableCrafter?

### WordPress Plugin Replacement
TableCrafter was built to replace WordPress Gravity Tables plugin with 100% feature parity plus enhancements:
- **Drop-in replacement** - Migrate existing WordPress tables seamlessly
- **Enhanced capabilities** - Exceeds original plugin functionality
- **Framework freedom** - Use in React, Vue, Angular, or WordPress themes
- **Future-proof** - Not locked into WordPress ecosystem

### Enterprise-Grade Features
Built for production applications with advanced requirements:
- **Role-based permissions** - Granular access control with user context
- **API integration** - RESTful CRUD operations with authentication
- **Bulk operations** - Multi-row selection with custom actions
- **State persistence** - Save user preferences across sessions
- **Lookup fields** - Dynamic dropdowns with API data sources

### Advanced Mobile Experience
Next-generation responsive design that exceeds mobile table standards:
- **Expandable cards** - Two-tier content display with hidden field sections
- **Field visibility controls** - Different layouts per breakpoint (mobile/tablet/desktop)
- **Touch optimization** - Swipe, tap, and gesture support
- **Progressive enhancement** - Works on any device, optimized for each

### Zero Dependencies Architecture
Pure vanilla JavaScript with no external requirements:
- **45KB bundle** - Complete feature set in minimal footprint
- **Universal compatibility** - Works in any JavaScript environment
- **No version conflicts** - Never breaks due to dependency updates
- **Security focused** - No third-party vulnerabilities

## Advanced Features (WordPress Parity+)

### 🔍 Advanced Filtering System
- **Auto-type detection** - Automatically determines optimal filter type per column
- **Multi-select dropdowns** - Checkbox-based selection with search
- **Date range filters** - From/to date pickers with validation
- **Number range filters** - Min/max inputs with numeric validation
- **Filter persistence** - Maintains filter state across sessions

### ⚡ Bulk Operations Framework
- **Multi-row selection** - Checkbox-based selection with select all
- **Built-in actions** - Delete, export, edit operations with progress indicators
- **Custom actions** - Extensible system for application-specific bulk operations
- **Undo support** - Rollback functionality for destructive operations
- **Permission integration** - Bulk actions respect user permissions

### 🔗 Lookup Fields & API Integration
- **Dynamic lookups** - API-driven dropdown editing with caching
- **Role-based filtering** - Lookup data filtered by user permissions
- **Multiple sources** - Users, posts, custom tables, external APIs
- **Auto-formatting** - Display values automatically formatted from lookup data
- **RESTful CRUD** - Complete API integration for data synchronization

### 🛡️ Enterprise Permission System
- **Role-based access** - Granular permissions (view, edit, delete, create)
- **User context** - Current user integration with role assignment
- **Own-only restrictions** - Users can only access their own data
- **Field-level permissions** - Hide/disable specific columns per user
- **API-aware** - Permissions enforced on both client and server

### 📱 Enhanced Mobile Experience
- **Expandable cards** - Primary fields visible, secondary fields expandable
- **Breakpoint configuration** - Custom field visibility per device type
- **Touch gestures** - Swipe to expand, tap to edit, pull to refresh
- **Responsive tables** - Horizontal scroll with sticky columns on tablets

### 💾 State Management & Persistence
- **Filter persistence** - Remembers user's filtering preferences
- **Sort preferences** - Maintains column sorting across sessions
- **Pagination state** - Returns to last viewed page
- **Selection memory** - Maintains bulk selections during navigation
- **Configurable storage** - localStorage, sessionStorage, or custom backend

## How It Works

TableCrafter uses a simple, declarative approach:

```javascript
const table = new TableCrafter('#container', {
  // Data source (API or array)
  data: '/api/employees', // or array of objects
  
  // Column configuration with advanced features
  columns: [
    { field: 'id', label: 'ID' },
    { field: 'name', label: 'Name', editable: true },
    { field: 'email', label: 'Email', editable: true },
    { 
      field: 'manager_id', 
      label: 'Manager',
      editable: true,
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
    showClearAll: true
  },
  
  // Bulk operations
  bulk: {
    enabled: true,
    operations: ['delete', 'export', 'promote']
  },
  
  // Enhanced responsive design
  responsive: {
    fieldVisibility: {
      mobile: { showFields: ['name', 'email'] },
      tablet: { showFields: ['name', 'email', 'manager_id'] }
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
    edit: ['admin', 'hr'],
    delete: ['admin'],
    ownOnly: false
  },
  
  // State persistence
  state: {
    persist: true,
    storage: 'localStorage'
  }
});

// Set user context for permissions
table.setCurrentUser({
  id: 1,
  roles: ['admin', 'hr']
});

table.render();
```

That's it! TableCrafter handles all the complexity behind the scenes.

## Comparison with Other Libraries

| Feature | TableCrafter | WordPress Gravity Tables | DataTables | AG Grid | Handsontable |
|---------|--------------|--------------------------|------------|---------|--------------|
| **WordPress Parity** | ✅ 100%+ | ✅ Original | ❌ No | ❌ No | ❌ No |
| **Dependencies** | ✅ Zero | ❌ WordPress | ❌ jQuery | ✅ Zero | ❌ Multiple |
| **Bundle Size** | ✅ 45KB | ❌ Server-side | ❌ 200KB+ | ❌ 500KB+ | ❌ 800KB+ |
| **Advanced Filtering** | ✅ Auto-detect | ✅ Manual setup | ⚠️ Basic | ✅ Advanced | ⚠️ Basic |
| **Bulk Operations** | ✅ Built-in | ✅ Built-in | ❌ No | ✅ Enterprise | ✅ Pro only |
| **Mobile Cards** | ✅ Expandable | ✅ Basic | ❌ No | ⚠️ Limited | ❌ No |
| **Lookup Fields** | ✅ API-driven | ✅ WordPress | ❌ No | ✅ Enterprise | ❌ No |
| **Permissions** | ✅ Role-based | ✅ WordPress | ❌ No | ✅ Enterprise | ✅ Pro only |
| **API Integration** | ✅ RESTful | ❌ WordPress only | ⚠️ Basic | ✅ Advanced | ⚠️ Limited |
| **Framework Support** | ✅ All | ❌ WordPress only | ✅ All | ✅ All | ✅ All |
| **Pricing** | ✅ Free/MIT | ❌ WordPress plugin | ✅ Free | ❌ $999+/year | ❌ $390+/year |

## Use Cases

TableCrafter excels in complex, enterprise-grade applications:

### 🏢 **WordPress Plugin Migration**
- Replace existing Gravity Tables installations
- Maintain all current functionality
- Add modern features and mobile optimization
- Reduce server load with client-side processing

### 📊 **Enterprise Dashboards**
- Role-based data access with user permissions
- Real-time API data with auto-refresh
- Advanced filtering for complex datasets
- Bulk operations for administrative tasks

### 📋 **SaaS Admin Interfaces**
- Multi-tenant user management
- Permission-based feature access
- API-driven data synchronization
- Mobile-responsive admin panels

### 📱 **Mobile-First Applications**
- Touch-optimized data tables
- Expandable card layouts for complex data
- Offline capability with state persistence
- Progressive web app compatibility

### 🔗 **API-Driven Applications**
- Dynamic lookup fields from multiple sources
- Real-time data updates with WebSocket support
- RESTful CRUD operations with error handling
- Authentication and authorization integration

### 🏭 **Internal Business Tools**
- Employee management systems
- Inventory tracking with bulk operations
- Report viewers with advanced filtering
- Data entry forms with validation

## Philosophy

TableCrafter is built on these core principles:

### **WordPress Parity Plus**
Match every feature of the original WordPress plugin, then exceed expectations with modern enhancements.

### **Enterprise Ready**
Built for production applications with advanced requirements like permissions, API integration, and bulk operations.

### **Framework Freedom**
Work seamlessly across all JavaScript frameworks and environments, from WordPress to React to vanilla HTML.

### **Mobile Excellence**
Mobile experience should exceed desktop capabilities, not just match them.

### **Developer Experience**
Comprehensive documentation, intuitive API design, and extensive examples for every feature.

### **Performance First**
Every feature optimized for speed, memory efficiency, and smooth user interactions.

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