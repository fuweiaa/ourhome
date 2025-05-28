import axios from "axios"

// 高德天气API的基础URL
const BASE_URL = "https://restapi.amap.com/v3/weather/weatherInfo"

async function getWeatherInfo(city: string): Promise<any> {
  const apiKey = "23455c34ce2a664fb85d5a2a2a8e0777" // API Key
  // 构造请求的URL
  const url = `${BASE_URL}?city=${city}&key=${apiKey}&&output=JSON&extensions=all`
  try {
    const resp = await axios.get(url)
    // 处理响应数据
    const weatherInfo = resp.data.forecasts
    return weatherInfo[0] // 返回第一个预报信息
  } catch (error) {
    // 错误处理
    console.error("请求失败:", error)
    throw new Error("获取天气信息失败")
  }
}

export { getWeatherInfo }
