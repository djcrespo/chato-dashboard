import request from './config'

export const createMaintenance = data => {
  return request({
    url: '/maintenance/',
    method: 'POST',
    data
  })
}
export const updateMaintenance = data => {
  return request({
    url: '/maintenance/',
    method: 'PATCH',
    data
  })
}
export const getallChapterata = params => {
  return request({
    url: '/ata-chapters/',
    method: 'GET',
    params
  })
}
export const getallAta = params => {
  return request({
    url: '/ata/',
    method: 'GET',
    params
  })
}
