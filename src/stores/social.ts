/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-23 15:20:00
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-29 18:55:24
 * @FilePath: \ourhome\src\stores\token.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

const socialImageStore = defineStore(
  'social',
  () => {
    // 其他配置...
    const imglist = ref([])

    const addImgs = (newImg: string) => {
      imglist.value.push(newImg)
    }

    const removeImg = () => {}

    return { imglist, addImgs, removeImg }
  },
  { persist: true } // 持久化存储
)

export default socialImageStore
