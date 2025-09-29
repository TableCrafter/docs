# TableCrafter.js Documentation

This repository contains the official documentation website for TableCrafter.js, built with [VitePress](https://vitepress.dev/).

## 🌐 Live Documentation

**Production:** https://tablecrafter.github.io/docs  
**Development:** http://localhost:5173

## 🚀 Development

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Setup

```bash
# Clone the repository
git clone https://github.com/TableCrafter/docs.git
cd docs

# Install dependencies
npm install

# Start development server
npm run docs:dev
```

The documentation site will be available at `http://localhost:5173`

### Commands

```bash
# Development server
npm run docs:dev

# Build for production
npm run docs:build

# Preview production build
npm run docs:preview

# Deploy to GitHub Pages
npm run deploy
```

## 📝 Writing Documentation

### File Structure

```
docs/
├── .vitepress/
│   └── config.js          # VitePress configuration
├── guide/                 # User guides
├── api/                   # API reference
├── examples/              # Code examples
└── index.md              # Homepage
```

### Guidelines

1. **Clear and Concise** - Write for developers who want to get things done quickly
2. **Code Examples** - Include working code snippets for every feature
3. **Progressive Disclosure** - Start simple, then show advanced options
4. **Mobile-First** - Ensure all examples work on mobile devices
5. **Accessibility** - Follow WCAG guidelines for inclusive documentation

### Adding New Pages

1. Create a new `.md` file in the appropriate directory
2. Add the page to the sidebar in `.vitepress/config.js`
3. Use clear headings and include a table of contents
4. Add code examples and live demos where possible

### Code Examples

Use syntax highlighting and include language specifiers:

````markdown
```javascript
const table = new TableCrafter('#table', {
  data: [...],
  columns: [...]
});
```
````

### Components

VitePress supports Vue components in Markdown. See existing examples for patterns.

## 📋 Content Roadmap

### Completed ✅
- [x] Homepage with hero section
- [x] Getting Started guide
- [x] What is TableCrafter overview
- [x] Basic table example
- [x] VitePress configuration

### In Progress 🚧
- [ ] Complete API reference
- [ ] Advanced examples
- [ ] Framework integration guides
- [ ] Performance optimization guide

### Planned 📅
- [ ] Interactive playground
- [ ] Video tutorials
- [ ] Community showcase
- [ ] Migration guides

## 🎨 Design System

The documentation uses a consistent design system:

- **Primary Color:** `#3b82f6` (Blue 500)
- **Font:** System font stack for optimal performance
- **Layout:** Mobile-first responsive design
- **Icons:** Lucide icons for consistency

## 🚢 Deployment

The documentation is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

### Manual Deployment

```bash
npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch.

## 🤝 Contributing

We welcome contributions to improve the documentation!

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally with `npm run docs:dev`
5. Submit a pull request

### What to Contribute

- **Fix typos and errors**
- **Add missing examples**
- **Improve code snippets**
- **Add new guides**
- **Enhance existing content**

## 📊 Analytics

The documentation includes privacy-focused analytics to understand usage patterns and improve content.

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

---

**TableCrafter.js** - Craft beautiful, responsive data tables with ease.