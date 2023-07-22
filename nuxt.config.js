export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '1page',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/robots',
    [
      '@nuxtjs/yandex-metrika',
      {
        id: '89783548',
        webvisor: true,
        // clickmap: true,
        // useCDN: false,
        // trackLinks: true,
        // accurateTrackBounce: true,
      }
    ],
    '@nuxtjs/sitemap',
  ],

  sitemap: {
    hostname:'',
    gzip: true,
     routes: [
      '/*',
                '/',
      
      {
        url: '/ru/**',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2022-09-22T06:13:00.000Z'
      }
    ]
  },

  server: {
    host: process.env.NUXT_APP_HOST, // default: localhost
    port: process.env.NUXT_APP_PORT // default: 3000
  },

  robots: {
    UserAgent: '*',
    Allow: '/*',
    //Disallow: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
