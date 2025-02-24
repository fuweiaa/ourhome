<template>
  <!-- Cesium容器 -->
  <div class="box">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as Cesium from 'cesium';

// 假设这是您从Cesium ion获取的access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMzM1YjQ1NC0xYTBjLTQ0YmQtYmRiZC04YTAyNTA4OWViNjkiLCJpZCI6MTQyNDMzLCJpYXQiOjE2OTI2OTQ1MTN9.uSZFiVkWTDZuorDE3wmru-H1w9Ha90k4kKCuAqtpYrg';

onMounted(() => {
  // 初始化Cesium Viewer
  const viewer = new Cesium.Viewer("cesiumContainer", {
    // 关闭所有控件
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    timeline: false,

  });






});

// 添加地形

</script>

<style scoped>
/* 确保Cesium容器占满整个页面 */
.box {
  width: 100%;
  height: 90vh;
  /* 或者其他适当的值 */
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#cesiumContainer {
  width: 100%;
  height: 100%;
}
</style>
