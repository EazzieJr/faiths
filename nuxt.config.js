export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FAITH OLANIYI | Creative Specialist',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'description', name: 'description', content: 'FAITH OLANIYI IS A CREATIVE GENERALIST SPECIALIZED IN PRODUCT AND BUSINESS MANAGEMENT. HE IS AN ATYPICAL THINKER AND PROBLEM SOLVER WHO CONSTANTLY GENERATES INNOVATIVE SOLUTIONS TO COMPLEX PROBLEMS.' },
      { hid: 'keywords', name: 'keywords', content: 'Faith Olaniyi, Creative Specialist, Founder, CEO, Cyclebreeze, Chief of staff, Business Strategist, Problem solver, Portfolio, Faith Olaniyi Portfolio' },

      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:title', name: 'og:title', content: 'FAITH OLANIYI | Creative Specialist' },
      { hid: 'og:url', name: 'og:url', content: "https://faitholaniyi.net" },
      { hid: 'og:site_name', name: 'og:site_name', content: "FAITH OLANIYI | Creative Specialist" },
      { hid: 'og:image', name: 'og:image', content: "/images/faith.png" },
      { hid: 'og:description', name: 'og:description', content: "FAITH OLANIYI IS A CREATIVE GENERALIST SPECIALIZED IN PRODUCT AND BUSINESS MANAGEMENT. HE IS AN ATYPICAL THINKER AND PROBLEM SOLVER WHO CONSTANTLY GENERATES INNOVATIVE SOLUTIONS TO COMPLEX PROBLEMS." },

      { hid: 'twitter:site', name: 'twitter:site', content: "@faith_olaniyi" },
      { hid: 'twitter:title', name: 'twitter:title', content: 'Faith Olaniyi' },
      { hid: 'twitter:card', name: 'twitter:card', content: "summary_large_image" },
      { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: "An image of the Faith" },
      { hid: 'twitter:image', name: 'twitter:image', content: "/images/faith.png" },
      { hid: 'twitter:description', name: 'twitter:description', content: "FAITH OLANIYI IS A CREATIVE GENERALIST SPECIALIZED IN PRODUCT AND BUSINESS MANAGEMENT. HE IS AN ATYPICAL THINKER AND PROBLEM SOLVER WHO CONSTANTLY GENERATES INNOVATIVE SOLUTIONS TO COMPLEX PROBLEMS." },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: "32x32", href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: "16x16", href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: 'site.web</link>manifest' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/favicon/apple-touch-icon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/tailwind/tailwind.css',
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ["gsap"],

    postcss: {
      plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
