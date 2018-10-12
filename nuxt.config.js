export default {
  /*
  ** Headers of the page
  */
  css: [
    { src: 'assets/main.scss', lang: 'scss' },
    { src: 'flickity/css/flickity.css', lang: 'css' },
    { src: 'prismjs/themes/prism-okaidia.css', lang: 'css' }
  ],
  head: {
    title: 'thephilgray',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/normalize/7.0.0/normalize.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href:
          'https://fonts.googleapis.com/css?family=Lora:400,700,400italic,700italic'
      }
    ]
  },
  modules: ['nuxtent', '@nuxtjs/vuetify'],
  plugins: [
    { src: '~/plugins/vue-flickity', ssr: false },
    // { src: '~/plugins/disqus' },
    { src: '~/plugins/filters' },
    { src: '~plugins/vue-masonry' }
  ],
  vuetify: {
    // Vuetify options
    //  theme: { }
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FEBAC5' },

  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLINT on save
    */
    extend(config, ctx) {
      if (ctx.client) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    }
  }
};
