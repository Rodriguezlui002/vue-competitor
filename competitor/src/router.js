import { createRouter, createWebHistory } from 'vue-router';

import Landing from './pages/Landing.vue';
import SignUp from './pages/SignUp.vue';
import Login from './pages/Login.vue';
import Dashboard from './pages/Dashboard.vue';
import NotFound from './pages/NotFound.vue';
import store from './store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Landing},
        { path: '/signup', component: SignUp },
        { path: '/login', component: Login },
        { path: '/dashboard', component: Dashboard, meta: { requiresAuth: true } },
        { path: '/:notFound(.*)', component: NotFound }
    ],
});

router.beforeEach(function(to, _, next) {
    if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
        next('/');
    } else {
        next();
    }
});

export default router;