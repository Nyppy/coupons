import Vue from 'vue'
import router from './router'
const VueInputMask = require('vue-inputmask').default
import Vuelidate from 'vuelidate'
import store from './store'
import App from './App.vue'
import i18n from './i18n'



Vue.use(Vuelidate)
Vue.use(VueInputMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
