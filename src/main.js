import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
    routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
