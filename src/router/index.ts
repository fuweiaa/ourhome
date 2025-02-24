/*
 * @Author: fuwei
 * @Date: 2024-04-22 23:47:20
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2025-02-19 15:59:30
 * @FilePath: \bigevent-vue3\src\router\index.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/background.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      keepAlive: false,
      hideHeader: true, // 添加一个 meta 字段来标识需要隐藏 Header
    },
  },
  {
    path: '/social',
    component: () => import('@/views/socialfriends/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/daynote',
    component: () => import('@/views/daynote/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/scene',
    component: () => import('@/views/threejs/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/eating',
    component: () => import('@/views/eating/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/question',
    component: () => import('@/views/question/aaa.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/user/userInfo',
    component: () => import('@/views/user/UserInfo.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/user/userAvatar',
    component: () => import('@/views/user/UserAvatar.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/user/userResetPassword',
    component: () => import('@/views/user/UserResetPassword.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/publish',
    component: () => import('@/views/publisher/publishselector.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/test',
    component: () => import('@/views/webTest/index.vue'),
    meta: {
      keepAlive: false,
    },
  },
  {
    path: '/cesium',
    component: () => import('@/views/cesiumt/index.vue'),
    meta: {
      keepAlive: false,
    },
  },

  // 其他路由...
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
