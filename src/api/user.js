import request from '@/utils/request'

/*登录*/
export function login(data) {
  return request({
    url: '/tzwAuth/auth/user/doLogin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/tzwSystem/sys/user/getInfo',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/tzwAuth/auth/user/logout',
    method: 'delete'
  })
}
