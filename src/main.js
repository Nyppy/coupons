import Vue from 'vue'
import App from './App.vue'
import router from './router'
const VueInputMask = require('vue-inputmask').default
import Vuelidate from 'vuelidate'

Vue.use(Vuelidate)
Vue.use(VueInputMask)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
