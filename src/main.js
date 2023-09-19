import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import GAuth from 'vue-google-oauth2';

Vue.config.productionTip = false

// cookie
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

// QRcode generator
import VueQRCodeComponent from 'vue-qrcode-component'
Vue.component('qr-code', VueQRCodeComponent)

// GA
import VueAnalytics from 'vue-analytics'
Vue.use(VueAnalytics, {
  id: 'UA-167881827-4',
  router,
  checkDuplicatedScript: true
})

const gauthOption = {
  clientId: '54064734422-1nk5g1ag3n29qbqpero42krrtpdkugmd.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
  fetch_basic_profile: true,
};

Vue.use(GAuth, gauthOption);

new Vue({
  router,
  store,
  vuetify,
  // VueMarkdown,
  render: h => h(App)
}).$mount('#app')
