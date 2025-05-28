<template>
  <div class="weather-container">
    <div class="blue-text">
      今日事今日毕☺ 今日不毕明日毕☹
    </div>
    <div class="weather-container">
      <h2>当前天气</h2>
      <div v-if="weatherData" id="weather">
        <div>城市：{{ weatherData.city }}</div>
        <div>天气：{{ weatherData.casts[0].dayweather }} 转 {{ weatherData.casts[0].nightweather }}</div>
        <div>温度：{{ weatherData.casts[0].daytemp + '—' + weatherData.casts[0].nighttemp }}°C</div>
      </div>
      <div v-else>
        <p>获取天气数据失败</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 定义响应式变量
const weatherData = ref<WeatherResponse | null>(null);
const apiKey = "23455c34ce2a664fb85d5a2a2a8e0777" // API Key
const city = '北京'; // 默认城市
let cityAdcode = '510104' // 城市的adcode


// 定义API响应类型
interface WeatherResponse {
  city: string;
  casts: [{
    dayweather: string;
    nightweather: string;
    daytemp: string;
    nighttemp: string;
  }];
  province: string;
  reportTime: string;
}

// 获取天气数据的函数
const fetchWeather = async () => {
  try {
    const apiUrl = `https://restapi.amap.com/v3/weather/weatherInfo?city=${cityAdcode}&key=${apiKey}&&output=JSON&extensions=all`;
    const response = await axios.get(apiUrl);
    console.log('获取天气数据:', response.data);
    weatherData.value = response.data.forecasts[0];
    console.log('处理后的天气数据:', weatherData.value);

  } catch (error) {
    console.error('获取天气数据失败:', error);
    weatherData.value = null;
  }
};

// 组件挂载时获取天气数据
onMounted(() => {
  fetchWeather();
});
</script>

<style scoped>
.blue-text {
  color: #4b8ac9;
  font-family: '微软雅黑', '宋体', Arial, sans-serif;
  /* 设置优雅的字体 */
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  margin: 20px;
  padding: 10px;
  border-radius: 4px;
  background-color: #ffffff3d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  white-space: pre-wrap;
}

.weather-container {
  background-color: #ffffff3d;
  padding: 20px 30px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(253, 253, 253, 0.985);
  text-align: center;
  max-width: 200px;
  margin: 10px 10px;
}

.weather-container h2 {
  margin-bottom: 20px;
  color: #333;
}

#weather {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 0.9em;
  color: #555;
}
</style>