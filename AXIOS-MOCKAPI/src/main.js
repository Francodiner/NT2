import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import Vuelidate from 'vuelidate'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import Vueaxios from 'vue-axios'
import store from './store'
import './globalMixins'

Vue.use(VueRouter)
Vue.use(Vuelidate)
Vue.use(Vueaxios, axios) 

const router = new VueRouter({
    routes: Routes
});

new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store : store
})