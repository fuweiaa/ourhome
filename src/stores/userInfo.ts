/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-23 15:20:00
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-28 10:19:17
 * @FilePath: \ourhome\src\stores\token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserInfoStore = defineStore(
  'userInfo',
  () => {
    // 其他配置...
    const info = ref({})

    const setInfo = (newInfo: {}) => {
      info.value = newInfo
    }

    const removeInfo = () => {
      info.value = {}
    }

    return { info, setInfo, removeInfo }
  },
  { persist: true } // 持久化存储
)

export default useUserInfoStore
