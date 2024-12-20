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
    method: 'GET',
    params
  })
}

export const updatePartialModel = (id, data) => {
  return request({
    url: `/planes-model/${id}/`,
    method: 'PATCH',
    data
  })
}

export const deleteModel = id => {
  return request({
    url: `/planes-model/${id}/`,
    method: 'DELETE'
  })
}

// Aeronaves

export const getAllPlanes = params => {
  return request({
    url: '/planes/',
    method: 'GET',
    params
  })
}

export const deletePlane = id => {
  return request({
    url: `/planes/${id}/`,
    method: 'DELETE'
  })
}
