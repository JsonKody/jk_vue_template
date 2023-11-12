import "./style.scss";
import { pop } from "./directives/Pop";
import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router/router";
import App from "./App.vue";

const pinia = createPinia();
const app = createApp(App);
app.directive("pop", pop);

app.use(router).use(pinia).mount("#app");

/**
 * Icons:
 * https://tabler-icons.io/
 */
