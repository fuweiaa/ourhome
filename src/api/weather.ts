import axios from 'axios'

// 高德天气API的基础URL
const BASE_URL = 'https://restapi.amap.com/v3/weather/weatherInfo'

function getWeatherInfo(city: string): Promise<any> {
  const apiKey = 'b57682ccc4e60b8b3d89e23de3c6c7e8' // API Key

  // 构造请求的URL
  const url = `${BASE_URL}?key=${apiKey}&city=${city}&output=JSON&extensions=all`

  // 返回一个Promise，确保异步操作完成后返回数据
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((resp) => {
        // 处理响应数据
        const weatherInfo = resp.data.forecasts
        resolve(weatherInfo[0]) // 返回第一个预报信息
      })
      .catch((error) => {
        // 错误处理
        console.error('请求失败:', error)
        reject('获取天气信息失败') // 如果失败，返回失败信息
      })
  })
}

export { getWeatherInfo }
