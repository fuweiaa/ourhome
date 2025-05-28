/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-16 16:26:58
 * @LastEditors: fuwei 2567873016@qq.com
 * @LastEditTime: 2025-05-29 00:28:34
 * @FilePath: \ourhome\src\api\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "@/utils/request.ts"

const userRegisterService = (registerData: any) => {
  return instance.post("/user/register", registerData)
}

const userLoginService = (loginData: any) => {
  console.log("loginData", loginData)

  return instance.post("/user/login", loginData)
}

// 获取用户信息
const userInfoService = () => {
  return instance.get("/user/userInfo")
}

// 修改个人信息
const userInfoUpdateService = (userInfoData: any) => {
  return instance.put("/user/update", userInfoData)
}

// 修改用户头像
const userAvatarUpdateService = (avatarUrl: any) => {
  return instance.patch("/user/updateAvatar", { avatarUrl })
}
export {
  userRegisterService,
  userLoginService,
  userInfoService,
  userInfoUpdateService,
  userAvatarUpdateService,
}
