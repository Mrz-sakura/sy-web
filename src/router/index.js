import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import * as path from "path";

Vue.use(VueRouter);
/**
 * @type {RouteConfig}
 */
const routes = [
  { path: "/", redirect: "/index" },
  { path: "/index", name: "Index", component: () => import("../views/index") }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
// 获取到原始push方法重写
const push = VueRouter.prototype.push;
router.push = location =>{
  const _path = router.currentRoute.path
  if(_path === location){
    return
  }
  push.call(this,location)
}

export default router;
