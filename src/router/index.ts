import {createWebHashHistory, createRouter} from "vue-router";
// @ts-ignore
import Home from "../views/Home.vue";
// @ts-ignore
import SwitchDemo from "../components/SwitchDemo.vue";
// @ts-ignore
import ButtonDemo from "../components/ButtonDemo.vue";

// 指定路由的模式,此处使用的是hash模式
const history = createWebHashHistory()
// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/", component: Home,
      children: [
        {path: "switch", component: SwitchDemo},
        {path: "button", component: ButtonDemo},
      ]
    }
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});

export default router
