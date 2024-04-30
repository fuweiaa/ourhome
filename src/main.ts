/*
 * @Author: fuwei
 * @Date: 2024-04-21 23:47:28
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-23 15:35:26
 * @FilePath: \bigevent-vue3\src\main.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import router from "./router/index";


const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
