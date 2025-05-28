/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-16 14:22:18
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 10:44:42
 * @FilePath: \ourhome\src\utils\request.ts
 * @Description: 请求拦截器和响应拦截器 可以实现跨域访问以及请求头token的保存
 * 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//定制请求的实例

//导入axios  npm install axios
import axios, { CancelTokenSource } from "axios"

import { ElMessage } from "element-plus"
//定义一个变量,记录公共的前缀  ,  baseURL
// const baseURL = 'http://192.168.1.206:8080'
const baseURL = "/api"
const instance = axios.create({ baseURL })

import { useTokenStore } from "@/stores/token.js"
// 在请求实例中添加取消令牌管理
const pendingRequests = new Map<string, CancelTokenSource>()

// 添加请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 请求前的回调
    // 添加token
    const tokenStore = useTokenStore()
    // 判断有没有token
    if (tokenStore.token) {
      config.headers.Authorization = tokenStore.token
    }
    // 生成请求唯一标识
    const requestKey = `${config.method}:${config.url}`
    // 如果存在相同请求，则取消之前的请求
    if (pendingRequests.has(requestKey)) {
      const cancelToken = pendingRequests.get(requestKey)
      cancelToken?.cancel("请求被取消，原因：重复请求")
      pendingRequests.delete(requestKey)
    }
    // 为当前请求创建取消令牌
    const source = axios.CancelToken.source()
    config.cancelToken = source.token
    pendingRequests.set(requestKey, source)
    return config
  },
  (err) => {
    // 请求错误的回调
    return Promise.reject(err)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (result) => {
    // 请求完成后，从 pendingRequests 中移除该请求
    const requestKey = `${result.config.method}:${result.config.url}`
    pendingRequests.delete(requestKey)
    // 判断业务状态码
    if (result.data.code === 0) {
      return result.data
    }
    // 操作失败
    // alert(result.data.msg?result.data.msg:'服务异常')
    ElMessage.error(result.data.msg ? result.data.msg : "服务异常")
    // 异步操作的状态转换为失败
    return Promise.reject(result.data)
  },
  (err) => {
    // 判断响应状态码，如果为401，则证明未登录，提示请登录，并跳转到登录页面
    if (err.response?.status === 401) {
      ElMessage.error("请先登录")
      router.push("/login")
    } else if (axios.isCancel(err)) {
      console.log("请求被取消:", err.message)
    } else {
      ElMessage.error("服务异常")
    }
    return Promise.reject(err) // 异步的状态转化成失败的状态
  }
)

/* import {useRouter} from 'vue-router'
const router = useRouter(); */

import router from "@/router"
//添加响应拦截器
instance.interceptors.response.use(
  (result) => {
    //判断业务状态码
    if (result.data.code === 0) {
      return result.data
    }

    //操作失败
    //alert(result.data.msg?result.data.msg:'服务异常')
    ElMessage.error(result.data.msg ? result.data.msg : "服务异常")
    //异步操作的状态转换为失败
    return Promise.reject(result.data)
  },
  (err) => {
    //判断响应状态码,如果为401,则证明未登录,提示请登录,并跳转到登录页面
    if (err.response.status === 401) {
      ElMessage.error("请先登录")
      router.push("/login")
    } else {
      ElMessage.error("服务异常")
    }

    return Promise.reject(err) //异步的状态转化成失败的状态
  }
)

export default instance
