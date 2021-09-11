import { createRouter, createWebHistory } from 'vue-router';

import Landing from './pages/Landing.vue';
import About from './pages/About.vue';
import SignUp from './pages/SignUp.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing},
        { path: '/about', component: About },
        { path: '/signup', component: SignUp, meta: { requiresUnauth: true } },
        { path: '/login', component: Login, meta: { requiresUnauth: true } },
        { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/');
    } else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
        next('/dashboard');
    } else {
        next();
    }
});

export default router;