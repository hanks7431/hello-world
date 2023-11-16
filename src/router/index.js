import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [  // URL에 따라 보여줄 컴포넌트 결정
    {
        path: '/',
        name: 'home',
        component: HomeView, // 라우터에 연결되는 컴포넌트는 views폴더에 저장됨.
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue'),
        // 라우터에 연결되는 컴포넌트는 views폴더에 저장됨.
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
