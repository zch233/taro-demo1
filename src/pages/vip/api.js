import request from '../../utils/request'

export function login (jscode) {
  return request(`/wx/user/miniLogin?code=${jscode}`)
}

export function createMember (data) {
  return request('/wx/member/create', data)
}
