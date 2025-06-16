<!--
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-03-22 23:25:55
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-06-16 15:50:34
 * @FilePath: \ourhome\src\views\cesium\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by VGE, All Rights Reserved. 
-->
<template>
  <!-- Cesium容器 -->
  <div class="box">
    <div id="cesiumContainer"></div>
    <div class="loadGltf" @click="onLoad">加载fltf模型</div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import * as Cesium from 'cesium';
let viewer: Cesium.Viewer;
// 假设这是您从Cesium ion获取的access token
Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxMzM1YjQ1NC0xYTBjLTQ0YmQtYmRiZC04YTAyNTA4OWViNjkiLCJpZCI6MTQyNDMzLCJpYXQiOjE2OTI2OTQ1MTN9.uSZFiVkWTDZuorDE3wmru-H1w9Ha90k4kKCuAqtpYrg';
function flyToCoordinate(
  viewer: Cesium.Viewer,
  longitude: number,
  latitude: number,
  height: number,
  options: {
    heading?: number; // 航向角（度，默认 0，正北为 0，顺时针增加）
    pitch?: number;   // 俯仰角（度，默认 -30，向下倾斜）
    roll?: number;    // 滚转角（度，默认 0）
    duration?: number;// 过渡动画时长（秒，默认 3）
    offset?: Cesium.Cartesian3; // 相机与目标的垂直偏移（默认 [0,0,0]）
  } = {}
) {
  // 1. 将经纬度高程转换为笛卡尔坐标（地心地固坐标系 ECEF）
  const targetPosition = Cesium.Cartesian3.fromDegrees(
    longitude,
    latitude,
    height
  );

  // 2. 配置相机的朝向（可选）
  const heading = Cesium.Math.toRadians(options.heading || 0); // 转换为弧度
  const pitch = Cesium.Math.toRadians(options.pitch || -30);   // 转换为弧度
  const roll = Cesium.Math.toRadians(options.roll || 0);

  // 3. 配置过渡动画参数
  const duration = options.duration || 3; // 3 秒过渡
  const offset = options.offset || new Cesium.Cartesian3(0, 0, 0); // 无偏移

  // 4. 执行视角跳转（平滑过渡）
  viewer.camera.flyTo({
    destination: targetPosition, // 目标位置（笛卡尔坐标）
    orientation: {
      heading: heading, // 航向角
      pitch: pitch,     // 俯仰角
      roll: roll        // 滚转角
    },
    duration: duration, // 过渡时长
    offset: offset      // 相机偏移
  });
}
onMounted(() => {
  const terrain = new Cesium.Terrain(
    Cesium.CesiumTerrainProvider.fromUrl("http://172.16.21.65:9090/data/file/CZSCZQ-2/GeographicDataKind/3dtiles/全线高精度DEM(1)")
  );
  // 初始化Cesium Viewer
  viewer = new Cesium.Viewer("cesiumContainer", {
    // 关闭所有控件
    animation: false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    timeline: false,
    terrain: terrain
  })

  flyToCoordinate(viewer, 102, 30, 7000, {
    heading: 0,       // 正北方向
    pitch: -45,       // 俯仰角 -45°（向下看）
    duration: 5,      // 5 秒过渡
    offset: new Cesium.Cartesian3(0, 0, 500) // 相机在目标正上方 500 米
  });
});

function onLoad() {


}
// function loadGltf() {

//   var modelMatrix = new Cesium.Transforms.eastNorthUpToFixedFrame(
//     new Cesium.Cartesian3.fromDegrees(120.71901, 38.081056, 6.0));        //gltf数据加载位置
//   var model = viewer.scene.primitives.add(new Cesium.Model.fromGltf({
//     url: this.url, //gltf文件的URL
//     modelMatrix: modelMatrix,
//     scale: 100.0     //放大倍数
//   }))

//   var hpr = new Cesium.HeadingPitchRoll(0, 0, 0);  // 设置方向角
//   var origin = Cesium.Cartesian3.fromDegrees(120.71901, 38.081056, 6.0);   // 设置位置
//   var modelMatrix1 = Cesium.Transforms.headingPitchRollToFixedFrame(
//     origin,
//     hpr
//   );
//   var model = scene.primitives.add(new Cesium.Model.fromGltf({
//     url: this.url1, //gltf文件的URL
//     modelMatrix: modelMatrix1,
//     scale: 100.0     //放大倍数
//   }))


//   viewer.camera.flyTo({
//     destination: new Cesium.Cartesian3.fromDegrees(120.71901, 38.081056, 80000.0)     //相机飞入点
//   })

// }
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

.loadGltf {
  position: absolute;
  top: 100px;
  left: 10px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  cursor: pointer;
  z-index: 1000;
  /* 确保按钮在Cesium之上 */
}
</style>
