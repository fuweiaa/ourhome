<template>
    <div class="weather-container">
        <div class="blue-text">
            今日事今日毕☺ 今日不毕明日毕☹
        </div>
        <div class="weather-container">
            <h2>当前天气</h2>
            <div v-if="weatherData" id="weather">
                <p>城市：{{ weatherData.name }}</p>
                <p>天气：{{ weatherData.weather[0].description }}</p>
                <p>温度：{{ weatherData.main.temp }}°C</p>
                <p>湿度：{{ weatherData.main.humidity }}%</p>
                <p>风速：{{ weatherData.wind.speed }} m/s</p>
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
const apiKey = import.meta.env.VITE_API_KEY; // 从环境变量中获取API密钥
const city = '北京'; // 默认城市

// 定义API响应类型
interface WeatherResponse {
    name: string;
    weather: { description: string }[];
    main: { temp: number; humidity: number };
    wind: { speed: number };
}

// 获取天气数据的函数
const fetchWeather = async () => {
    try {
        const response = await axios.get<WeatherResponse>(
            `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
        );
        weatherData.value = response.data;
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
    font-size: 18px;
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

#weather p {
    font-size: 1.1em;
    color: #555;
    margin: 8px 0;
}
</style>