const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Developer',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: '',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: '/logo.svg',
    nav: [
      {
        text: 'About',
        link: '/about/',
      }
    ],
    sidebar: [
      {
        title: 'Wikimedia APIs',
        path: '/api/',
        children: [
          'api/reading',
          'api/editing',
          'api/data',
          'api/libraries',
          'api/tutorials',
          'api/catalog',
          'api/contact'
        ]
      },
      {
        title: 'Data and machine learning',
        path: '/data/'
      },
      {
        title: 'Build tools',
        path: '/tools/'
      },
      {
        title: 'Contribute',
        path: '/contribute/',
        children: [
          'contribute/opensource'
        ]
      },
      {
        title: 'Operations',
        path: '/operations/'
      },
      {
        title: 'Community',
        path: '/community/',
        children: [
          'community/updates'
        ]
      }
    ],
    search: false,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],

  base: '/wmf-dev-portal-draft/'
}
