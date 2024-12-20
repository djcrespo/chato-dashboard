import {
  createModel,
  getAllModels,
  updatePartialModel,
  deleteModel,
  getAllPlanes,
  deletePlane
} from '~/api/aircrafts'

export const actions = {
  async createModel ({ commit }, data) {
    const res = await createModel(data)
    return res
  },
  async getAllModels ({ commit }, query) {
    const res = await getAllModels(query)
    return res
  },
  async updatePartialModel ({ commit }, data) {
    console.log(data)
    const res = await updatePartialModel(data.id, data)
    return res
  },
  async deleteModel ({ commit }, id) {
    const res = await deleteModel(id)
    return res
  },
  async getAllPlanes ({ commit }, query) {
    const res = await getAllPlanes(query)
    return res
  },
  async deletePlane ({ commit }, id) {
    const res = await deletePlane(id)
    return res
  }
}
