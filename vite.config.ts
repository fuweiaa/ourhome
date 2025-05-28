/*
 * @Author: fuweiaa
 * @Date: 2024-04-23 09:59:39
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-28 23:54:33
 * @FilePath: \ourhome\vite.config.ts
 * @Description:
 * Copyright (c) 2024 by VGE, All Rights Reserved.
 */
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "path"
import html from "vite-plugin-html"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 10099,
    host: "127.0.0.1",
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8095", // 后台服务所在路径
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""), //   /api 替换为空字符串
      },
    },
  },
  build: {
    outDir: "dist",
  },
})

// https://vitejs.dev/config/
