<!--
 * @Author: fuwei 2567873016@qq.com
 * @Date: 2025-03-22 23:25:55
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-28 00:02:06
 * @FilePath: \ourhome\src\views\threejs\weather.vue
 * @Description: 
 * 
 * Copyright (c) 2025 by VGE, All Rights Reserved. 
-->
<template>
  <div ref="threeContainer" class="container">
    <div v-if="weatherInfo" class="weather">
      <p>城市: {{ weatherInfo.city }}</p>
      <p>天气: {{ weatherInfo }}</p>
      <p>气温: {{ weatherInfo.temperature }}°C</p>
      <p>风向: {{ weatherInfo.winddirection }}</p>
      <p>风力: {{ weatherInfo.windpower }}</p>
      <p>湿度: {{ weatherInfo.humidity }}%</p>


      <p>天气预报情况：</p>
      <p>省份：{{ weatherInfo.casts[0] }}</p>
      <p>日期：{{ weatherInfo.casts[0].date }}</p>
      <p>白天天气气象：{{ weatherInfo.casts[0].dayweather }}</p>
      <p>晚上天气现象：{{ weatherInfo.casts[0].nightweather }}</p>
      <p>白天温度：{{ weatherInfo.casts[0].daytemp }}</p>
      <p>晚上温度：{{ weatherInfo.casts[0].nighttemp }}</p>
      <p>白天风向：{{ weatherInfo.casts[0].daywind }}</p>
      <p>晚上风向：{{ weatherInfo.casts[0].nightwind }}</p>
      <p>白天风力：{{ weatherInfo.casts[0].daypower }}</p>
      <p>晚上风力：{{ weatherInfo.casts[0].nightpower }}</p>

    </div>
    <!-- <div v-else>
      <p>正在加载天气信息...</p>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getWeatherInfo } from '@/api/weather.ts'

let cityAdcode = '510104' // 城市的adcode
const weatherInfo = ref<any>(null) // 使用 ref 来保存响应式数据

// 获取天气信息的异步操作
async function fetchWeather(adcode: string) {
  try {
    const weather = await getWeatherInfo(adcode); // 根据城市adcode获取天气信息
    weatherInfo.value = weather; // 将获取的天气数据赋值给响应式变量
  } catch (error) {
    console.error(error);  // 打印错误信息
  }
}

// 在组件挂载时获取天气信息
onMounted(() => {
  fetchWeather(cityAdcode) // 调用函数获取天气信息
  console.log(weatherInfo);
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.weather {
  font-size: 18px;
}
</style>
