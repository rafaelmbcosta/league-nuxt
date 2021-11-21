import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - liga-pge-app',
    title: 'liga-pge-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewp ort', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/TiptapVuetify'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/apollo',
    'nuxt-material-design-icons-iconfont',
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: `${process.env.BASE_URL}/graphql`
      }
    },
    authenticationType: '',
    tokenName: 'apollo-token',
    websocketsOnly: false
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
          primary: colors.teal.darken2,
          accent: colors.orange.darken1,
          accent2: colors.yellow.darken1,
          background: colors.blueGrey.lighten5,
          secondary: colors.white,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.red.darken3,
          success: colors.teal.accent4
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vuetify/lib', 'tiptap-vuetify']
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: `${process.env.BASE_URL}`,
    https: process.env.SSL
  },

  auth: {
    strategies: {
      local: {
        token: {
          property: 'jwt'
        },
        user: {
          property: false,
          autoFetch: true
        },
        endpoints: {
          login: { url: '/user_token', method: 'post', propertyName: 'jwt' },
          logout: { url: '/logout', method: 'post' },
          user: false
        }
      }
    }
  }
}
