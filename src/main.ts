/*
 * @Author: fuwei
 * @Date: 2024-04-21 23:47:28
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-28 23:51:12
 * @FilePath: \ourhome\src\main.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { createApp } from "vue"
import { createPinia } from "pinia"
import App from "./App.vue"
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import router from "./router/index"
import { createPersistedState } from "pinia-persistedstate-plugin"
// import "@/mock/index.ts" // 引入 mock 数据

// main.js 或 main.ts
declare global {
  interface Window {
    CESIUM_BASE_URL: string
  }
}

window.CESIUM_BASE_URL = "/node_modules/cesium/Build/Cesium/"
const pinia = createPinia()
const app = createApp(App)
const persist = createPersistedState()
pinia.use(persist)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount("#app")
