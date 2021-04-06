import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Telefon from "@/views/Telefon";
import NoviTelefon from "@/views/NoviTelefon";
import Welcome from "@/views/Welcome";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Tablet from "@/views/Tablet";
import NoviTablet from "@/views/NoviTablet";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/editTelfon',
    name: 'NoviTelefon',
    component: NoviTelefon
  },
  {
    path: '/telefon/:id',
    name: 'telefon',
    component: Telefon
  },
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/tablet/:id',
    name: 'tablet',
    component: Tablet
  },
  {
    path: '/editTablet',
    name: 'editTablet',
    component: NoviTablet
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
