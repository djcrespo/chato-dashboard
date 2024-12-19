<template>
  <b-modal v-model="manteActive" :can-cancel="false">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            MODIFICAR MANTENIMIENTOS
          </p>
        </header>
        <section class="modal-card-body">
          <b-steps size="is-medium" type="is-warning">
            <b-step-item step="1" label="Aeronave">
              <h1 class="title has-text-centered">
                Aeronave.
              </h1>
              <div class="container">
                <p class="title">
                  Datos de la Aeronave.
                </p>
                <div class="columns">
                  <div class="column is-2">
                    <b-field label="Id">
                      <b-input value="1" />
                    </b-field>
                  </div>
                  <div class="column is-6">
                    <b-field label="Aeronave">
                      <b-autocomplete
                        v-model="name"
                        rounded
                        :data="filteredDataArray"
                        placeholder="Seleccionar Aeronave"
                        icon="magnify"
                        clearable
                        @select="option => selected = option"
                      >
                        <template #empty>
                          No results found
                        </template>
                      </b-autocomplete>
                    </b-field>
                  </div>
                  <div class="column is-2">
                    <b-field label="Matricula">
                      <b-input value="XB-ABC" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
            </b-step-item>
            <b-step-item step="2" label="Mantenimiento">
              <h1 class="title has-text-centered">
                Mantenimiento
              </h1>
              <div class="container">
                <div class="columns">
                  <div class="column is-10">
                    <b-field label="Descripcion del mantenimiento">
                      <b-input value="cambio de mangueras" />
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tipo de Mantenimiento">
                      <b-select placeholder="Seleccione el Tipo de Mantenimiento">
                        <option value="1">
                          Inspeccion
                        </option>
                        <option value="2">
                          Remplazo
                        </option>
                        <option value="3">
                          Overhaul
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Capitulo ATA">
                      <b-select placeholder="Seleccione el Capitulo">
                        <option value="1">
                          Aircraft Geneal
                        </option>
                        <option value="2">
                          Sistemas
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Numero ATA">
                      <b-select placeholder="Seleccione el Numero ATA">
                        <option value="1">
                          ATA 22
                        </option>
                        <option value="2">
                          ATA 28
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Nombre del ATA">
                      <b-select placeholder="Seleccione el nombre del ATA">
                        <option value="1">
                          Piloto Automatico
                        </option>
                        <option value="2">
                          Combustible
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-5">
                    <b-field label="Descripcion del capitulo ATA">
                      <b-input maxlength="200" type="textarea" placeholder="Aqui va la Descripcion" disabled />
                    </b-field>
                  </div>
                  <div class="column is-5">
                    <b-field label="Descripcion del Numero ATA">
                      <b-input maxlength="200" type="textarea" placeholder="Aqui va la Descripcion" disabled />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Datos del componente.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Numero de Parte">
                      <b-input value="HAYE5363GS" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Numero de serie">
                      <b-input value="HTF5647frrrtasj" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
            </b-step-item>
            <b-step-item step="3" label="Fecha">
              <h1 class="title has-text-centered">
                Fecha de Mantenimiento
              </h1>
              <div class="container">
                <div class="columns">
                  <div class="column is-3">
                    <b-field label="Horas">
                      <b-input value="10000" />
                    </b-field>
                  </div>
                  <div class="column is-2">
                    <b-field label="Dias">
                      <b-input value="365" />
                    </b-field>
                  </div>
                  <div class="column is-2">
                    <b-field label="Años">
                      <b-input value="1" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="TBO/REPL">
                      <b-input value="10000" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
            </b-step-item>
          </b-steps>
        </section>
        <footer class="modal-card-foot">
          <b-button
            label="Cancelar"
            type="is-danger"
            @click="$emit('close')"
          />
          <b-button
            label="Guardar"
            type="is-success"
          />
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: 'EditMaintenance',
  props: {
    manteActive: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
      }
    }
  },
  methods: {
    async save () {
      try {
        await this.$store.dispatch('modules/planes/updatePlane', this.form)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>
