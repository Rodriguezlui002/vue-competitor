import { createRouter, createWebHistory } from 'vue-router';

import TheLanding from './pages/TheLanding.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: TheLanding},
    ]
});

export default router;