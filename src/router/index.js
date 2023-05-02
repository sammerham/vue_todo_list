import { createRouter, createWebHistory } from 'vue-router'
// import About from '@/views/About.vue';
// import Add from '@/views/Add.vue';
// import Edit from '@/views/Edit.vue';
// import List from '@/views/List.vue';
// import Home from '@/views/Home.vue';


const routes = [
    { 
        path: '/', 
        name: 'Home',
        component: () => import('@/views/Home.vue'),
        // component: Home,
    },
    { 
        path: '/about', 
        name: 'About',
        // component: About,
        component: () => import('@/views/About.vue'),

        beforeEnter: (to, from, next) => {
            // ...
            console.log('manage route guard');
            next();
        },
    },
    { 
        path: '/add', 
        name: 'Add',
        // component: Add,
        component: () => import('@/views/Add.vue'),
        meta:{
            requiresAuth:true
        }
    },
    { 
        path: `/:id/edit`, 
        name: 'Edit',
        // component: Edit,
        component: () => import('@/views/Edit.vue'),
    },
    { 
        path: '/list', 
        name: 'List',
        // component: List,
        component: () => import('@/views/List.vue'),
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