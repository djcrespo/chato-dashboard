import request from './config'

/*  LOGIN  */
export const login = (data) => {
  return request({
    url: '/auth/login/',
    method: 'POST',
    data
  })
}

/*  USER  */
export const getUserInfo = (id) => {
  return request({
    url: `/users/${id}/`,
    method: 'GET'
  })
}
