export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/buefy
    'nuxt-buefy',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    '@nuxtjs/toast'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},


auth: {
  strategies: {
    local: {
      endpoints: {
        login: {
          url: 'api/token/',
          method: 'post',
          propertyName: 'access',
          altProperty: 'refresh'
        },
        logout: {},
        user: false
      }
    }
  },
  redirect: {
    login: '/login'
  }
},

router: {
  middleware: ['auth']
},

axios: {
  baseUrl: 'http://localhost:8000'
},

toast: {
  position: 'top-center',
  iconPack: 'fontawesome',
  duration: 3000,
  register: [
  {
    name: 'defaultSuccess',
      message: (payload) =>
    ! payload.msg ? 'Operation successful' : payload.msg,
    options: {
      type: 'success',
      icon: 'check'
    }
  },
  {
    name: 'defaultError',
    message: (payload) =>
      !payload.msg ? 'Error' : payload.msg,
    options: {
      type: 'error',
      icon: 'times'
    }
  }


  ]
},

build: {
  extend(config, ctx) {}
}

}