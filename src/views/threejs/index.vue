<!--
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-03-22 23:25:55
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-27 17:32:45
 * @FilePath: \ourhome\src\views\threejs\index.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by VGE, All Rights Reserved. 
-->
<template>
  <div class="container">
    <div class="dialog" :style="{ width: dialogWidth + 'px' }">
      <!-- 对话框内容 -->
      <p>这是一个对话框</p>
      <button @click="closeDialog">关闭</button>
      <div class="resizer" @mousedown="startResize"></div>
      <div class="searchPannel">
        <input type="text" placeholder="请输入起点" v-model="startPoint" />
        <input type="text" placeholder="请输入终点" v-model="endPoint" />
        <button @click="startSearch">搜索</button>
      </div>
      <Session class="session"></Session>
    </div>

    <div class="map-container" id="mapContainer">
      <!-- 高德地图容器 -->
      <div id="panel"></div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import Session from "./components/Session.vue"
import { mockGet } from "@/api/mock";
window._AMapSecurityConfig = {
  securityJsCode: "f069e5a5bcc1a401aeb95849ca7a9c88",
};
let map = null;
var driving = null; // 驾车导航类
var geocoder: { getLocation: (arg0: string, arg1: { (status: any, result: any): void; (status: any, result: any): void; }) => any; } | null = null; // 地理编码类
let startPoint = ref("西南交通大学");
let endPoint = ref("成都市中心");
onMounted(() => {
  AMapLoader.load({
    key: "31170f5880d854295291a30270206f39	", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Scale", 'AMap.Driving', 'AMap.Geocoder'], //需要使用的的插件列表，如比例尺'AMap.Scale'，支持添加多个如：['...','...']
  })
    .then((AMap) => {
      map = new AMap.Map("mapContainer", {
        rotateEnable: true,
        pitchEnable: true,
        zoom: 17,
        pitch: 50,
        rotation: -15,
        viewMode: '3D', //开启3D视图,默认为关闭
        zooms: [2, 20],
        center: [103.986241, 30.764382]
      });
    }).then(() => {
      // 构造路线导航类
      driving = new AMap.Driving({
        map: map,
        panel: "panel"
      });
      // 初始化 Geocoder
      geocoder = new AMap.Geocoder({
        city: "全国", // 可选，默认全国范围
      });
      map.addControl(new AMap.Scale()); //添加比例尺组件到地图实例上
      console.log("高德地图加载完成");
    })
    .catch((e) => {
      console.log(e);
    });
});

onUnmounted(() => {
  map?.destroy();
});

async function closeDialog(params: type) {
  let res = await mockGet();
  console.log("关闭对话框", res);
}


function startSearch() {
  console.log("开始搜索", geocoder);

  let startCity = geocoder.getLocation(startPoint.value, function (status, result) {
    if (status === "complete" && result.info === "OK") {
      const city = result.geocodes[0].city; // 获取城市
      console.log("所在城市:", result);
    } else {
      console.error("未找到该地址或 API 返回错误");
    }
  });
  let endCity = geocoder.getLocation(endPoint.value, function (status, result) {
    if (status === "complete" && result.info === "OK") {
      const city = result.geocodes[0].city; // 获取城市
      console.log("所在城市:", result);
    } else {
      console.error("未找到该地址或 API 返回错误");
    }
  });

  console.log("起点:", startCity, "终点:", endCity);



  // 调用高德地图的搜索功能，此处仅为示例代码，具体实现需根据实际需求编写
  driving.search([
    { keyword: startPoint.value, city: '成都' }, // 添加北京市地震局(公交站)作为搜索关键词
    { keyword: endPoint.value, city: '成都' }  // 添加亦庄文化园(地铁站)作为搜索关键词
  ], function (status, result) {
    // result 即是对应的驾车导航信息，相关数据结构文档请参考  https://lbs.amap.com/api/javascript-api/reference/route-search#m_DrivingResult
    if (status === 'complete') {
      // 搜索成功，绘制驾车路线
      console.log(result);
      console.log('绘制驾车路线完成')
    } else {
      // 搜索失败，记录错误信息
      console.log('获取驾车数据失败：', result)
    }
  })
}

let mcpQuery = ref('');
let mcpResult = ref('');

async function callMcpService() {
  try {
    // 假设这里有一个函数来调用 MCP 服务
    // 实际使用时需要替换为正确的调用方法
    // const result = await callMcpServer(mcpQuery.value);
    // mcpResult.value = result;
    console.log('调用 MCP 服务:', mcpQuery.value);
  } catch (error) {
    console.error('调用 MCP 服务失败:', error);
    mcpResult.value = '调用 MCP 服务失败，请检查输入';
  }
}
let dialogWidth = ref(33.33 * window.innerWidth / 100);
let isResizing = ref(false);

const startResize = () => {
  isResizing.value = true;
  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', stopResize);
};

const handleResize = (e: MouseEvent) => {
  if (isResizing.value) {
    // 防止对话框宽度过小或过大
    const minWidth = 100;
    const maxWidth = window.innerWidth - 100;
    dialogWidth.value = Math.min(Math.max(e.clientX, minWidth), maxWidth);
  }
};

const stopResize = () => {
  isResizing.value = false;
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 90vh;
}

.dialog {
  width: 33.33%; // 对话框占页面宽度的三分之一
  height: 100%;
  padding: 20px;
  background-color: #f0f0f0;
  box-sizing: border-box;
}

.resizer {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%;
  width: 5px;
  background: #ccc;
  cursor: col-resize;
}

.map-container {
  flex: 1;
  height: 100%;
}

#panel {
  position: fixed;
  background-color: white;
  max-height: 90%;
  overflow-y: auto;
  top: 10px;
  right: 10px;
  width: 280px;
}

#panel .amap-call {
  background-color: #ff0000;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

#panel .amap-lib-driving {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  overflow: hidden;
}

.session {
  width: 100%;
  height: 80%;
}
</style>