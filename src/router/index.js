import Vue from 'vue'
import VueRouter from 'vue-router'

import Formulario from "../views/Formulario"
import Home from "../views/Home"
import Data from "../views/VisualizarData"
import Detalle from "../views/Detalle"


Vue.use(VueRouter)

const routes = [
  
  {path: '/api', name:"api", component:Data},
  {path: '/alta', name:'alta', component:Formulario},
  {path: '/home', name:"home", component:Home},
  {path: '/detalle', name:"detalle", component:Detalle}

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router