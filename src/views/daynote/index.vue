<!--
 * @Author: yy
 * @Date: 2024-04-29 16:39:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-29 16:40:14
 * @FilePath: \bigevent-vue3\src\views\daynote\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
    <div>
        <Daynotehead />
        <Book />
    </div>
</template>

<script setup lang="ts">
import Daynotehead from "../daynote/daynotehead.vue"
import Book from "../daynote/book.vue"
//   export default {
//     name: 'index',
//     components:{
//       Card,
//       zmd
//     }
//   }
</script>

<style lang="scss" scoped>
#myhead {
    margin-left: 0%;
    margin-top: 0%;
    width: 100%;
}
</style>