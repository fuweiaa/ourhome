/*
 * @Author: fuwei
 * @Date: 2024-04-22 23:47:20
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-28 16:43:03
 * @FilePath: \bigevent-vue3\src\router\index.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("@/components/background.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/login",
    component: () => import("@/views/login/login.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/social",
    component: () => import("@/views/socialfriends/index.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/daynote",
    component: () => import("@/views/daynote/index.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/eating",
    component: () => import("@/views/eating/index.vue"),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: "/question",
    component: () => import("@/views/question/aaa.vue"),
    meta: {
      keepAlive: false,
    },
  }
  // 其他路由...
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
