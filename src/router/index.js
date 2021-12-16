import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Proyectos from '../views/Proyectos.vue'
import Proyecto from '../views/Proyecto.vue'
import Equipo from '../views/Equipo.vue'
import Contacto from '../views/Contacto.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/proyectos/:categoria',
      name: 'Proyectos',
      props: true,
      component: Proyectos
    },
    {
      path: '/proyectos/:categoria/:short',
      name: 'Proyecto',
      props: true,
      component: Proyecto
    },
    {
      path: '/equipo',
      name: 'equipo',
      component: Equipo
    },
    {
      path: '/contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})

export default router
