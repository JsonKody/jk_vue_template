import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import Art from "../views/Art.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/games", component: Games },
  { path: "/art", component: Art },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // scrollBehavior -> pokud uzivatel klikne na link s hashem (#) scrolluj v ramci stranky na hash,
  // jinak scrolluj na souradnice [0, 0] (zmena Page)
  scrollBehavior(to): Object {
    if (to.hash) {
      return {
        el: to.hash,
        scroll: "smooth",
      };
    }
    return {
      top: 0,
      left: 0,
    };
  },
});


export default router