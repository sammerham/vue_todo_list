import { createRouter, createWebHistory } from 'vue-router'
import About from '@/views/About.vue';
import Add from '@/views/Add.vue';
import Edit from '@/views/Edit.vue';
import List from '@/views/List.vue';
import Home from '@/views/Home.vue';


const routes = [
    { 
        path: '/', 
        name: 'Home',
        // component: () => import('@/views/About.vue'),
        component: Home,
    },
    { 
        path: '/about', 
        name: 'About',
        component: About,
        beforeEnter: (to, from, next) => {
            // ...
            console.log('manage route guard');
            next();
        },
    },
    { 
        path: '/add', 
        name: 'Add',
        component: Add,
    },
    { 
        path: `/edit/:id`, 
        name: 'Edit',
        component: Edit,
    },
    { 
        path: '/list', 
        name: 'List',
        component: List,
    },
    { 
        path: '/:catchAll(.*)*', 
        redirect: {name:'Home'},
    },
    
]


const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(), 
    routes, // short for `routes: routes`
    linkExactActiveClass: 'text-red'
  });

//   router.beforeEach((to, from, next)=>{
//     //call back accept 3 params to from next
//     // to obj with info about where user navigating to 
//     // from  obj with info about where user navigating from
//     // next is func route will next match route if func isn't called
//     next();
//   });

  export default router;