import request from './config'

export const createPlane = data => {
  return request({
    url: '/planes/',
    method: 'POST',
    data
  })
}
export const updatePlane = data => {
  return request({
    url: '/planes/',
    method: 'PATCH',
    data
  })
}

export const getallPlanemodel = params => {
  return request({
    url: '/planes-model/',
    method: 'GET',
    params
  })
}
