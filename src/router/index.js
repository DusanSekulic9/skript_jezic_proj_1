import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Telefon from "@/views/Telefon";
import NoviTelefon from "@/views/NoviTelefon";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/edit',
    name: 'NoviTelefon',
    component: NoviTelefon
  },
  {
    path: '/telefon/:id',
    name: 'telefon',
    component: Telefon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
