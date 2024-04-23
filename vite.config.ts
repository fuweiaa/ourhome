/*
 * @Author: fuweiaa
 * @Date: 2024-04-23 09:59:39
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-23 11:19:00
 * @FilePath: \bigevent-vue3\vite.config.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
