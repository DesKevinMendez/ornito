import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  base: '/ornito/',
  bundler: viteBundler(),
  theme: defaultTheme({
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
      { text: 'Theming', link: '/theming.md' },
    ],
    sidebar: {
      '/components/': [
        {
          text: 'Components',
          prefix: '/components/',
          children: [
            'README.md',
            'buttons.md',
            'badge.md',
            'alerts.md',
            'modal.md',
            'snackbar.md',
            'loading-svg.md',
            'image-lightbox.md',
            'form-input.md',
            'form-select.md',
            'form-textarea.md',
            'searchable-select.md',
            'switch-input.md',
            'card.md',
            'layout.md',
            'stat-card.md',
            'sidebar.md',
            'navbar.md',
            'dropdown.md',
            'tabs.md',
            'breadcrumb.md',
            'data-table.md',
            'user-avatar.md',
          ],
        },
      ],
    },
  }),
})