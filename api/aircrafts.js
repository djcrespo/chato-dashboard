import request from './config'

// Modelos de aeronaves
export const createModel = data => {
  return request({
    url: '/planes-model/',
    method: 'POST',
    data
  })
}

export const getAllModels = params => {
  return request({
    url: '/planes-model/',
    methods: 'GET',
    params
  })
}
