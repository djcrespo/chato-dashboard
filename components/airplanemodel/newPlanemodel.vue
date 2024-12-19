<template>
  <b-modal v-model="activePlane" :can-cancel="false">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            AGREGAR MODELOS
          </p>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <div class="columns">
              <div class="column is-4">
                <b-field label="Modelo de Aeronave">
                  <b-input value="Cessna 172" />
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column is-2">
                <b-button
                  label="Limpiar"
                  type="is-danger"
                  @click="$emit('close')"
                />
              </div>
              <div class="column">
                <b-button
                  label="Guardar"
                  type="is-success"
                />
              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <b-tabs>
              <b-tab-item label="Modelos de Aeronaves">
                <b-table
                  :data="data"
                  :columns="columns"
                  :selected.sync="selected"
                  focusable
                  bordered="isBordered"
                  striped="isStriped"
                />
              </b-tab-item>

              <b-tab-item label="Selected">
                <pre>{{ selected }}</pre>
              </b-tab-item>
            </b-tabs>

            <b-field>
              <b-button
                label="Limpiar Seleccion"
                type="is-danger"
                icon-left="close"
                :disabled="!selected"
                @click="selected = null"
              />
            </b-field>
          </div>
        </section>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: 'NewPlanemodel',
  props: {
    activePlane: {
      type: Boolean,
      default: false
    }
  },
  data () {
    const data = [
      { id: 1, first_name: 'Cessna grand caravn b208' },
      { id: 2, first_name: 'Pipistel virus 172' }
    ]
    return {
      data,
      isBordered: false,
      isStriped: false,
      selected: data[0],
      columns: [
        {
          field: 'id',
          label: 'ID',
          width: '100',
          numeric: true,
          searchable: true
        },
        {
          field: 'first_name',
          label: 'MODELO DE AERONAVE',
          searchable: true
        }
      ],
      form: {
      }
    }
  },
  methods: {
    clearDate () {
      this.selected = null
    },
    async save () {
      try {
        await this.$store.dispatch('modules/planes/createPlane', this.form)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
