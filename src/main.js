import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

// cookie
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

// QRcode gnerator
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

// GA
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-167881827-4',
  router,
  checkDuplicatedScript: true
})

// import VueMarkdown from 'vue-markdown'

new Vue({
  router,
  store,
  vuetify,
  // VueMarkdown,
  render: h => h(App)
}).$mount('#app')
