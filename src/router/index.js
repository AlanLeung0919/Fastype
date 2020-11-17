import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import Typing from '../views/Typing.vue';
import Race from '../views/Race.vue';
import Leaderboard from '../views/Leaderboard.vue';
import Profile from '../views/Profile.vue';
import Setting from '../views/Setting.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'Typing',
		component: Typing
	},
	{
		path: '/race',
		name: 'Race',
		component: Race,
		beforeEnter(to, from, next) {
			/* if (process.env.NODE_ENV === 'development') return next();
			store.commit('setAlert', 'Coming soon...');
			next(false); */
			const pw = window.prompt('Multiplayer in development...');
			if (pw === 'race') next();
			else next(false);
		},
		meta: { requireAuth: true }
	},
	{
		path: '/leaderboard',
		name: 'Leaderboard',
		component: Leaderboard,
		meta: { requireAuth: true }
	},
	{
		path: '/profile',
		name: 'Profile',
		component: Profile,
		meta: { requireAuth: true }
	},
	{
		path: '/setting',
		name: 'Setting',
		component: Setting
	},
	{
		path: '*',
		redirect: '/'
	}
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
});

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requireAuth)) {
		if (!store.state.authState) {
			store.commit('setAlert', 'please sign in first');
			if (from.name === null) next('/');
			else next(false);
		} else {
			next();
		}
	} else {
		next();
	}
});

export default router;
