import Vue from 'vue'
import router from './router'
const VueInputMask = require('vue-inputmask').default
import Vuelidate from 'vuelidate'
import store from './store'
import App from './App.vue'



Vue.use(Vuelidate)
Vue.use(VueInputMask)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
