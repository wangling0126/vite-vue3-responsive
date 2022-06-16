import { RouteRecordRaw } from 'vue-router'
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/main/index.vue')
	}
]

export default routes
