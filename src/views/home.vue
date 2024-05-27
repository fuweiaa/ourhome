<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 09:59:39
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-27 11:18:50
 * @FilePath: \bigevent-vue3\src\views\home.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <div class="common-layout">
    <Header />
    <div class="content"></div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;

  .content {
    padding: 0px;
    height: 70px;
  }

  .header {
    position: fixed;
    z-index: 5;
    display: flex;
    flex-direction: row;

    .points {
      position: relative;
      top: 50%;
    }
  }
}
</style>
