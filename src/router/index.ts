import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/collocation/:category',
			name: 'collocation',
			component: () => import('../views/Collocation/Collocation.vue'),
			children: [
				{
					path: ':collection',
					name: 'collection',
					component: () => import('../views/Collocation/CollectionView.vue'),
				},
				{
					path: ':collection/:dictionary',
					name: 'dictionary',
					component: () => import('../views/Collocation/DictionaryView.vue'),
				},
			],
		},
	],
})

export default router
