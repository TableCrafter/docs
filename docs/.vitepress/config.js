import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'TableCrafter.js',
  description: 'Craft beautiful, responsive data tables with ease',
  base: '/docs/',
  ignoreDeadLinks: true,
  
  head: [
    ['link', { rel: 'icon', href: '/docs/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#3c82f6' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'TableCrafter.js | Craft Beautiful Data Tables' }],
    ['meta', { property: 'og:site_name', content: 'TableCrafter.js' }],
    ['meta', { property: 'og:image', content: 'https://tablecrafter.github.io/docs/og-image.png' }],
    ['meta', { property: 'og:url', content: 'https://tablecrafter.github.io/docs/' }],
  ],

  themeConfig: {
    // logo: '/logo.svg',  // Commented out until we add the logo file
    
    nav: [
      { text: 'Guide', link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'API Reference', link: '/api/tablecrafter', activeMatch: '/api/' },
      { text: 'Examples', link: '/examples/basic', activeMatch: '/examples/' },
      {
        text: 'v1.0.0',
        items: [
          { text: 'Changelog', link: '/changelog' },
          { text: 'Release Notes', link: '/releases' }
        ]
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is TableCrafter?', link: '/guide/what-is-tablecrafter' },
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Quick Start', link: '/guide/quick-start' }
          ]
        },
        {
          text: 'Core Features',
          items: [
            { text: 'Configuration', link: '/guide/configuration' },
            { text: 'Data Sources', link: '/guide/data-sources' },
            { text: 'Columns', link: '/guide/columns' },
            { text: 'Sorting & Filtering', link: '/guide/sorting-filtering' },
            { text: 'Pagination', link: '/guide/pagination' },
            { text: 'Responsive Design', link: '/guide/responsive' }
          ]
        },
        {
          text: 'Advanced Features',
          items: [
            { text: 'Inline Editing', link: '/guide/inline-editing' },
            { text: 'Export & Import', link: '/guide/export-import' },
            { text: 'Events & Callbacks', link: '/guide/events' },
            { text: 'Customization', link: '/guide/customization' },
            { text: 'Theming', link: '/guide/theming' }
          ]
        },
        {
          text: 'Integration',
          items: [
            { text: 'React', link: '/guide/react' },
            { text: 'Vue.js', link: '/guide/vue' },
            { text: 'Angular', link: '/guide/angular' },
            { text: 'Vanilla JS', link: '/guide/vanilla-js' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'TableCrafter Class', link: '/api/tablecrafter' },
            { text: 'Configuration Options', link: '/api/configuration' },
            { text: 'Methods', link: '/api/methods' },
            { text: 'Events', link: '/api/events' },
            { text: 'Types', link: '/api/types' }
          ]
        }
      ],
      '/examples/': [
        {
          text: 'Examples',
          items: [
            { text: 'Basic Table', link: '/examples/basic' },
            { text: 'Editable Table', link: '/examples/editable' },
            { text: 'Advanced Filtering', link: '/examples/filtering' },
            { text: 'Mobile Responsive', link: '/examples/mobile' },
            { text: 'Custom Styling', link: '/examples/styling' },
            { text: 'API Integration', link: '/examples/api' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TableCrafter/tablecrafter' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/tablecrafter' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 TableCrafter Team'
    },

    editLink: {
      pattern: 'https://github.com/TableCrafter/docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: 'local'
    },

    outline: {
      level: [2, 3]
    }
  },

  markdown: {
    lineNumbers: true,
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})