import { createModel, getAllModels } from '~/api/aircrafts'

export const actions = {
  async createModel ({ commit }, data) {
    const res = await createModel(data)
    return res
  },
  async getAllModels ({ commit }, query) {
    const res = await getAllModels(query)
    return res
  }
}
