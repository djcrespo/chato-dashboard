import { createPlane, getallPlanemodel } from '~/api/planes'

export const actions = {
  async createPlane ({ commit }, data) {
    const res = await createPlane(data)
    return res
  },
  async getallPlanemodel ({ commit }, query) {
    const res = await getallPlanemodel(query)
    return res
  }
}
