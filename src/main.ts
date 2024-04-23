/*
 * @Author: fuwei
 * @Date: 2024-04-21 23:47:28
 * @LastEditors: fuwei
 * @LastEditTime: 2024-04-23 00:37:14
 * @FilePath: \bigevent-vite\src\main.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);
app.use(router);

app.mount("#app");
