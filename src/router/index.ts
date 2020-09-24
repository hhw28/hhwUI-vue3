import {createWebHashHistory, createRouter} from "vue-router";
import Home from "../views/Home.vue";
import SwitchDemo from "../components/SwitchDemo.vue";
import ButtonDemo from "../components/ButtonDemo.vue";
import DialogDemo from "../components/DialogDemo.vue";
import TabsDemo from "../components/TabsDemo.vue";

// 指定路由的模式,此处使用的是hash模式
const history = createWebHashHistory()

// 在 Vue-router新版本中，需要使用createRouter来创建路由
const router = createRouter({
  history: history,
  routes: [
    {
      path: "/", component: Home,
      children: [
        {path: "", component: SwitchDemo},
        {path: "switch", component: SwitchDemo},
        {path: "button", component: ButtonDemo},
        {path: "dialog", component: DialogDemo},
        {path: "tabs", component: TabsDemo},
      ]
    }
  ],
});
router.afterEach(() => {
  console.log("路由切换了");
});

export default router
