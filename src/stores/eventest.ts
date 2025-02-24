/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-23 15:20:00
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-12-24 16:03:51
 * @FilePath: \ourhome\src\stores\token.ts
 * @Description: 这个文件用来测试pinia的使用
 *步骤：
 1、安装pinia，在main.ts中引入并使用
 2、创建store文件，一般放在src/stores目录下，文件名必须以store.ts结尾
 3、在store文件中定义一个函数，函数名必须以use开头，函数返回一个对象，对象中包含state(基本数据、状态、属性等)、getters、actions、mutations四个属性
 4、在组件中引入store，使用useStore()函数获取store对象，并调用其中的方法
 5、在组件中使用state、getters、actions、mutations属性

 state 是 store 的数据 (data)，getters 是 store 的计算属性 (computed)，而 actions 则是方法 (methods)。
 (1)、响应式数据：pinia使用了vue3的响应式系统，所有state数据都是响应式的，当state数据发生变化时，所有依赖该数据的组件都会自动更新。
 (2)、模块化：pinia可以将store分割成多个模块，每个模块可以包含自己的state、getters、actions、mutations，可以更好的管理store。
 (3)、TypeScript：pinia支持TypeScript，可以获得更好的类型提示和代码补全。
 */
import { defineStore } from 'pinia'
import { ref } from 'vue'

// 方法一  Option Store
// export const useCounterStore = defineStore('counter', {
//   state: () => ({ count: 0, name: 'Eduardo' }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++
//     },
//   },
// })

// 方法二  Setup Store
// export const useCounterStore = defineStore('counter', () => {
//   const count = ref(0)
//   const doubleCount = computed(() => count.value * 2)
//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })

export const useInfoStore = defineStore('userInfotest', () => {
  // 其他配置...
  const info = ref({
    name: 'jackson',
    mail: 'jackson@qq.com',
    phone: '13812345678',
  })

  const setInfo = (str: string) => {
    info.value.name = str
  }

  const removeInfo = () => {
    info.value.mail = ''
  }

  return { info, setInfo, removeInfo }
})
