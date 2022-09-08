import { createRouter, createWebHistory } from '@ionic/vue-router';

import HomePage from '../pages/HomePage.vue'
import MapsPage from '../pages/MapsPage.vue'
import HospitalDetails from '../pages/HospitalDetails.vue'
import AboutUs from '../pages/AboutUs.vue'
import ContactUs from '../pages/ContactUs.vue'
import GMaps from '../pages/GMaps.vue'
import MapsGoogle from '../pages/MapsGoogle.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: HomePage
  },
  {
    path: '/map',
    component: MapsPage
  },
  {
    path: '/maps1',
    component: HospitalDetails
  },
  {
    path: '/about',
    component: AboutUs
  },
  {
    path: '/contact',
    component: ContactUs
  },
  {
    path: '/new',
    component: GMaps
  },
  {
    path: '/geo',
    component: MapsGoogle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
