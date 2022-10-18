import request from '@/utils/request'

// 查询操作日志列表
export function list(query) {
  return request({
    url: '/tzwSystem/log/operation/queryPageOperationLogList',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delOperlog(operId) {
  return request({
    url: '/tzwSystem/log/operation/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanOperlog() {
  return request({
    url: '/tzwSystem/log/operation/clean',
    method: 'delete'
  })
}
