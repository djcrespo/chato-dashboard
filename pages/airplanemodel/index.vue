<template>
  <div class="container">
    <general-nav
      :count="0"
      :text="'modelo(s) de aeronave(s)'"
      @new="activePlane = true"
    />

    <new-planemodel
      :active-plane="activePlane"
      @close="getData"
    />

    <section class="section">
      <b-table
        :data="data"
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
      data: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    async getData () {
      try {
        const res = await this.$store.dispatch('modules/aircrafts/getAllModels')
        this.data = res.count > 0 ? res.results : []
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    },
    deleteModel (id) {
      this.$buefy.dialog.confirm({
        title: 'Deleting account',
        message: 'Are you sure you want to <b>delete</b> your account? This action cannot be undone.',
        confirmText: 'Delete Account',
        type: 'is-danger',
        hasIcon: true,
        onConfirm: () => this.$buefy.toast.open('Account deleted!')
      })
    }
  }
}
</script>
