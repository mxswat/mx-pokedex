import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

import vueDebounce from 'vue-debounce'
Vue.use(vueDebounce);

import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)

new Vue({
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
