import instance from '@/utils/request'

function articleGetAllService() {
  // 同步等待服务器相应的结果
  return instance.get('/article/getAll')
}

function articleSearchService(conditions: any) {
  instance.get('/article/search', { params: conditions })
}

export { articleGetAllService, articleSearchService }
