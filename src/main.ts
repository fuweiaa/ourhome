/*
 * @Author: fuwei
 * @Date: 2024-04-21 23:47:28
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 14:38:54
 * @FilePath: \bigevent-vue3\src\main.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
import { createPersistedState } from 'pinia-persistedstate-plugin'
const pinia = createPinia()
const app = createApp(App)
const persist = createPersistedState()
pinia.use(persist)
app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
