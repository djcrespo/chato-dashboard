<template>
  <div class="container">
    <general-nav
      :count="count"
      :text="'modelo(s) de aeronave(s)'"
      @new="activePlane = true"
    />

    <new-planemodel
      :active-plane="activePlane"
      @close="getData"
    />

    <edit-planemodel
      :active-plane="activeEdit"
      :model-select="selectModel"
      @close="getData"
    />

    <section class="section">
      <b-table
        :data="data"
        :loading="isLoading"
      >
        <b-table-column v-slot="props" field="id" label="ID">
          {{ props.row.id }}
        </b-table-column>
        <b-table-column v-slot="props" field="model" label="Modelo">
          {{ props.row.model }}
        </b-table-column>
        <b-table-column v-slot="props" label="Opciones" width="40">
          <div class="columns">
            <div class="column">
              <b-button
                type="is-info"
                icon-right="pencil"
                @click="modifyModel(props.row)"
              />
            </div>
            <div class="column">
              <b-button
                type="is-danger"
                icon-right="delete"
                @click="deleteModel(props.row.id)"
              />
            </div>
          </div>
        </b-table-column>
      </b-table>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AircraftModel',
  data () {
    return {
      activePlane: false,
      activeEdit: false,
      isLoading: false,
      selectModel: {},
      data: [],
      count: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.activePlane = false
      this.activeEdit = false
      this.selectModel = {}
      try {
        this.isLoading = true
        const res = await this.$store.dispatch('modules/aircrafts/getAllModels')
        this.count = res.count
        this.data = res.count > 0 ? res.results : []
        this.isLoading = false
      } catch (error) {
        console.log(error)
      }
    },
    modifyModel (row) {
      this.selectModel = row
      this.activeEdit = true
    },
    deleteModel (id) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar registro',
        message: 'Estás seguro de eliminar este registro?, no podrás revertir cambios.',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          try {
            this.isLoading = true
            await this.$store.dispatch('modules/aircrafts/deleteModel', id)
            this.$buefy.toast.open('Eliminado correctamente!')
            this.getData()
          } catch (error) {
            this.$buefy.toast.open('Error!')
          }
        }
      })
    }
  }
}
</script>
