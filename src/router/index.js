import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue';
const routes = [
    { 
        path: '/about', 
        name: 'About',
        // component: () => import('@/views/About.vue'),
        component: About,
    },
    
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), 
    routes, // short for `routes: routes`
  });

  export default router;