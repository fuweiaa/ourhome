<!--
 * @Author: fuweiaa
 * @Date: 2024-04-23 09:59:39
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-28 00:20:51
 * @FilePath: \ourhome\src\views\home.vue
 * @Description: 
 * Copyright (c) 2024 by VGE, All Rights Reserved. 
-->
<template>
  <div class="common-layout">
    <Header v-show="isVisible" />
    <div class="content" v-show="isVisible"></div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, watch, ref } from 'vue';
import Header from '../components/Header.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const isVisible = ref(true);

onBeforeMount(() => {
  watch(
    () => router.currentRoute.value.meta.hideHeader,
    (newValue) => {
      if (newValue) {
        isVisible.value = false;
        // 当 meta.hideHeader 为 true 时隐藏 Header
        // 例如在登录页时隐藏 Header
        // 可以在这里执行 Header 的隐藏逻辑
      } else {
        isVisible.value = true;
        // 当 meta.hideHeader 为 false 或未设置时显示 Header
        // 可以在这里执行 Header 的显示逻辑
      }
    }
  );
});
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;

  .content {
    padding: 0;
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
