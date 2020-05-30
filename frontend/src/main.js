import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import VueRellax from 'vue-rellax'
import KeenUI from 'keen-ui'
import 'keen-ui/dist/keen-ui.css'

//Vue.use(VueRellax)
Vue.use(KeenUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components: {},
  render: h => h(App)
}).$mount('#app')
