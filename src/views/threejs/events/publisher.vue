<!--
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-12-24 15:01:01
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-12-27 11:21:20
 * @FilePath: \ourhome\src\views\threejs\events\publisher.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
<div class="publisher">
  <a class="none" href="#">Publisher</a>
  <button @click="store.setInfo('Publisher')">Publish</button>
  <button @click="test()">Publish</button>
</div>
</template>

<script setup lang="ts">
import { useInfoStore } from '@/stores/eventest'
// 可以在组件中的任意位置访问 `store` 变量 
const store = useInfoStore()
function test() {
  console.log('adc' && 'aaa');
  
}
</script>

<style lang="scss" scoped>
.publisher{
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
  h1{
    font-size: 24px;
    color: #343a40;
    // text-decoration: underline;  // 下划线
    // text-decoration: overline;   // 顶部线
    // text-decoration: line-through;  //删除线
  }
  a{
    text-decoration: none; // 移除下划线（所有效果）
    text-decoration: underline overline; //上划线+下划线

  }
}
</style>