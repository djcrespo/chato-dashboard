<template>
  <div class="container">
    <general-nav
      :count="count"
      :text="'aeronave(s)'"
      @new="activeModal = true"
    />

    <new-airplane
      :active-modal="activeModal"
      @close="getData"
    />

    <edit-airplane
      :active-edit="activeEdit"
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
        <b-table-column v-slot="props" field="name" label="Nombre">
          {{ props.row.name }}
        </b-table-column>
        <b-table-column v-slot="props" field="model" label="Modelo">
          {{ props.row.model.model }}
        </b-table-column>
        <b-table-column v-slot="props" field="model" label="Modelo">
          {{ props.row }}
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
                @click="deletePlane(props.row.id)"
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
  data () {
    return {
      activeModal: false,
      activeEdit: false,
      isLoading: false,
      data: [],
      count: 0
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      this.activeModal = false
      this.activeEdit = false
      this.isLoading = true
      try {
        const res = await this.$store.dispatch('modules/aircrafts/getAllPlanes')
        this.count = res.count
        this.data = res.count > 0 ? res.results : []
        this.isLoading = false
        console.log(res)
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    deletePlane (id) {
      this.$buefy.dialog.confirm({
        title: 'Eliminar registro',
        message: 'Estás seguro de eliminar este registro?, no podrás revertir cambios.',
        confirmText: 'Eliminar',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: async () => {
          try {
            this.isLoading = true
            await this.$store.dispatch('modules/aircrafts/deletePlane', id)
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
