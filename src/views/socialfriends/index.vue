<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 10:24:45
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-23 11:22:29
 * @FilePath: \bigevent-vue3\src\views\socialfriends\index.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template id="myhead">
  <div class="index">
    <Pyqhead />
    <Zmd />
    <Card />
  </div>
</template>

<script setup lang="ts">
import Pyqhead from "@/views/socialfriends/charts/pyqhead.vue";
import Card from "@/views/socialfriends/charts/card.vue";
import Zmd from '../socialfriends/charts/zmd.vue'


</script>

<style lang="scss" scoped>
#myhead {
  margin-left: 0%;
  margin-top: 0%;
  width: 100%;
}

.index {
  background-color: #cbeaea;
}
</style>