import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Datepicker from 'vuejs-datepicker';

// Import Bootstrap and BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

// eslint-disable-next-line vue/multi-word-component-names
Vue.component('Datepicker', Datepicker)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
