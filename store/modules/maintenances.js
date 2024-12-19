import { createMaintenance, getallChapterata, getallAta } from '~/api/maintenances'

export const actions = {
  async createMaintenance  ({ commit }, data) {
    const res = await createMaintenance(data)
    return res
  },
  async getallChapterata ({ commit }, query) {
    const res = await getallChapterata(query)
    return res
  },
  async getallAta ({ commit }, query) {
    const res = await getallAta(query)
    return res
  }
}
