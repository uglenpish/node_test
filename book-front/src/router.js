import { createRouter, createWebHistory } from 'vue-router'

const routes =  [
	{
		path: "/",
		alias: "/tutorials",
		name: "tutorials",
		component: () => import("./views/TutorialsList.vue")
	},
	{
		path: "/tutorials",
		name: "tutorial-details",
		component: () => import("./views/Tutorial.vue")
	},
	{
		path: "/add",
		name: "add",
		component: () => import("./views/AddTutorial.vue")
	}
];



const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router