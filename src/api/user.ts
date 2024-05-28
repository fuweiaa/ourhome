/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-16 16:26:58
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-28 10:51:21
 * @FilePath: \ourhome\src\api\user.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from '@/utils/request.ts'

const userRegisterService = (registerData: any) => {
  // 因为registerData为json字符串，请求参数格式不对所以采用URLSearchParams完成传递
  const params = new URLSearchParams()
  for (let key in registerData) {
    params.append(key, registerData[key])
  }
  return instance.post('/user/register', params)
}

const userLoginService = (loginData: any) => {
  // 因为registerData为json字符串，请求参数格式不对所以采用URLSearchParams完成传递
  const params = new URLSearchParams()
  for (let key in loginData) {
    params.append(key, loginData[key])
  }
  return instance.post('/user/login', params)
}

// 获取用户信息
const userInfoService = () => {
  return instance.get('/user/userInfo')
}

// 修改个人信息
const userInfoUpdateService = (userInfoData: any) => {
  return instance.put('/user/update', userInfoData)
}

// 修改用户头像
const userAvatarUpdateService = (avatarUrl: any) => {
  // 因为avatarUrl为json字符串，请求参数格式不对所以采用URLSearchParams完成传递
  const params = new URLSearchParams()
  params.append('avatarUrl', avatarUrl)
  return instance.patch('/user/updateAvatar', params)
}
export {
  userRegisterService,
  userLoginService,
  userInfoService,
  userInfoUpdateService,
  userAvatarUpdateService,
}
