/*
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-05-27 17:07:46
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-27 17:31:29
 * @FilePath: \ourhome\src\api\mock.ts
 * @Description:
 *
 * Copyright (c) 2025 by VGE, All Rights Reserved.
 */
import axios from "axios"

async function mockGet() {
  try {
    // 发起GET请求获取数据
    const response = await axios.get("/data/list")
    // 返回响应数据
    return response.data
  } catch (error) {
    // 输出错误信息
    console.error("Error fetching mock data:", error)
    // 抛出错误
    throw error
  }
}
export { mockGet }


