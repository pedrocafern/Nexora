import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Login from '../views/Login.vue'
import About from '../views/About.vue'


const routes = [

    { 
        path: '/',
        component: Home
    },
        { 
        path: '/about',
        component: About
    },
        { 
        path: '/login',
        component: Login,
        meta: { hideNavbar: true }  // Esconde a Navbar nesta rota
    },
        { 
        path: '/dashboard',
        component: Dashboard
    }

]

    const router = createRouter({
    history: createWebHistory(),
    routes

})

export default router