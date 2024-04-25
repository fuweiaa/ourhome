<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 09:59:39
 * @LastEditors: fuweiaa
 * @LastEditTime: 2024-04-25 15:21:58
 * @FilePath: \bigevent-vue3\src\views\home.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <div class="common-layout">
    <Header />
    <el-divider class="fgx" />
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

  .fgx {
    margin: 0
  }

  .header {
    display: flex;
    flex-direction: row;

    .points {
      position: relative;
      top: 50%;
    }
  }
}
</style>
