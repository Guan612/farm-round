import {
	createSSRApp
} from "vue";
import uviewPlus from 'uview-plus'
import api from "@/api/index.js"
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus);
	app.config.globalProperties.$api = api;
	return {
		app,
	};
}
