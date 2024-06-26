/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-23 15:20:00
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 14:27:42
 * @FilePath: \ourhome\src\stores\token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTokenStore = defineStore(
  // 这种暴露方式要通过import { useTokenStore } from '@/stores/token.ts'导入
  'token',
  () => {
    // 其他配置...
    const token = ref('')
    const setToken = (newToken: string) => {
      token.value = newToken
    }

    const removeToken = () => {
      token.value = ''
    }

    return { token, setToken, removeToken }
  },
  { persist: true } // 持久化存储
)
