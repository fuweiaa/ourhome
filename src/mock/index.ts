// src/mock/index.ts

import Mock from "mockjs"
import "./user" // 加载用户模块

const generateRandomUserData = () => {
  return Mock.mock({
    name: "@cname",
    userName: "@first",
    password: '@string("lower", 10)', // 生成10位小写字母的随机字符串作为密码
    phone: /^1[385][1-9]\d{8}/, // 生成符合中国手机号格式的随机手机号
  })
}

Mock.mock("/data/list", "get", () => {
  const users = []
  const randomUserCount = Math.floor(Math.random() * 20) + 1
  for (let i = 0; i < randomUserCount; i++) {
    users.push(generateRandomUserData())
  }
  return {
    status: 200,
    data: users,
    success: true,
    message: "成功",
  }
})
