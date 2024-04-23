/*
 * @Author: fuwei
 * @Date: 2024-04-22 23:47:20
 * @LastEditors: fuwei
 * @LastEditTime: 2024-04-23 00:47:33
 * @FilePath: \bigevent-vite\src\router\index.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
/*
 * @Author: YangYuhan 861896230u@qq.com
 * @Date: 2023-03-04 09:40:31
 * @LastEditors: 枫林残忆 2997534654@qq.com
 * @LastEditTime: 2024-04-09 08:55:41
 * @FilePath: \Geology-V3\src\router\index.ts
 * @Description: 路由
 */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Root",
    component: () => import("../views/login.vue"),
  },
  {
    path: "/home",
    component: () => import("../views/home.vue"),
    meta: {
      keepAlive: false,
    },
  },
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
