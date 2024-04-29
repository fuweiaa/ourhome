<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 10:24:45
 * @LastEditors: yy
 * @LastEditTime: 2024-04-28 16:28:14
 * @FilePath: \bigevent-vue3\src\views\socialfriends\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
    <div>
        <pyqhead/>
        <zmd/>
        <Card/>
    </div>
</template>

<script setup lang="ts">
import pyqhead from "../socialfriends/charts/pyqhead.vue"
import Card from "@/views/socialfriends/charts/card.vue";
import zmd from '../socialfriends/charts/zmd.vue'
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