import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import firebase from 'firebase'
import VScrollLock from 'v-scroll-lock'

Vue.config.productionTip = false

firebase.initializeApp({
  apiKey: "AIzaSyBGENUnX6WsoLRDb0dYFSMPQw7-92Emtlg",
    authDomain: "boatreview-84b38.firebaseapp.com",
    databaseURL: "https://boatreview-84b38.firebaseio.com",
    projectId: "boatreview-84b38",
    storageBucket: "boatreview-84b38.appspot.com",
    messagingSenderId: "723950594445",
    appId: "1:723950594445:web:b55a159271db1d05c075c4",
    measurementId: "G-W41KXG74DC"
})

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VScrollLock)

const router = new VueRouter({
    routes: Routes
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
