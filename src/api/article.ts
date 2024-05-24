/*
 * @Author: fuweiaa 2567873016@qq.com
 * @Date: 2024-05-16 15:00:44
 * @LastEditors: fuweiaa 2567873016@qq.com
 * @LastEditTime: 2024-05-23 15:43:02
 * @FilePath: \ourhome\src\api\article.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from '@/utils/request'
import { useTokenStore } from '@/stores/token'
const tokenStore = useTokenStore()
function articleDetail() {
  return instance.get('/article/detail', {
    headers: { Authorization: tokenStore.token },
  })
}

function articleGetAllService() {
  // 同步等待服务器相应的结果
  return instance.get('/article/getAll')
}

function articleSearchService(conditions: any) {
  instance.get('/article/search', { params: conditions })
}

export { articleGetAllService, articleSearchService, articleDetail }
