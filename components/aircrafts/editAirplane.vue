<template>
  <b-modal v-model="activeEdit" :can-cancel="false">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            MODIFICAR AERONAVES
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
                  Datos del Avión.
                </p>
                <div class="columns">
                  <div class="column is-5">
                    <b-field label="Nombre">
                      <b-input v-model="form.name" value="Cessna Grand caravan 172" />
                    </b-field>
                  </div>
                  <div class="column is-4">
                    <b-field label="Tipo de Matricula">
                      <b-select v-model="form.type_tuition" placeholder="Seleccione el tipo de matricula" @input="addPrefix">
                        <option value="XA">
                          Servicio Comercial (XA)
                        </option>
                        <option value="XB">
                          Servicio Privado (XB)
                        </option>
                        <option value="XC">
                          Servicio del Gobierno (XC)
                        </option>
                      </b-select>
                    </b-field>
                  </div>
                  <div class="column is-2">
                    <b-field label="Matricula">
                      <b-input v-model="form.tuition" value="XB-ABC" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Numero de serie">
                      <b-input v-model="form.series" value="REYE546WH" />
                    </b-field>
                  </div>
                  <div class="column is-5">
                    <b-field label="Modelo">
                      <b-input v-model="form.model" value="Cessna 172" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Servicio
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tiempo total de vuelo (T.T.)">
                      <b-input v-model="form.time" value="10,500" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="T.U.R.M">
                      <b-input v-model="form.senior_service" value="10,000" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
            </b-step-item>
            <b-step-item step="2" label="Motores">
              <h1 class="title has-text-centered">
                Motores
              </h1>
              <div class="container">
                <p class="title">
                  Datos del Primer Motor.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Nombre">
                      <b-input value="Nombre del motor" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Numero de serie">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Modelo">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Servicio del Primer Motor.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tiempo Total de vuelo (T.T.)">
                      <b-input value="10,500" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="T.U.R.M.">
                      <b-input value="10,000" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Datos del Segundo Motor.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Nombre">
                      <b-input value="Nombre del motor" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Numero de serie">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Modelo">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Servicio del Segundo Motor.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tiempo Total de vuelo (T.T.)">
                      <b-input value="10,500" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="T.U.R.M.">
                      <b-input value="10,000" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
            </b-step-item>
            <b-step-item step="3" label="Helices">
              <h1 class="title has-text-centered">
                Helices
              </h1>
              <div class="container">
                <p class="title">
                  Datos de la Primera Helice.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Nombre">
                      <b-input value="Nombre de la helice" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Numero de serie">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Modelo">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Servicio de la Primera Helice.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tiempo Total de vuelo (T.T.)">
                      <b-input value="10,500" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="T.U.R.M.">
                      <b-input value="10,000" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Datos de la Segunda Helice.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Nombre">
                      <b-input value="Nombre de la helice" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Numero de serie">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="Modelo">
                      <b-input value="HTF564747HH" />
                    </b-field>
                  </div>
                </div>
              </div>
              <hr>
              <div class="container">
                <p class="title">
                  Servicio de la Segunda Helice.
                </p>
                <div class="columns">
                  <div class="column is-4">
                    <b-field label="Tiempo Total de vuelo (T.T.)">
                      <b-input value="10,500" />
                    </b-field>
                  </div>
                  <div class="column is-3">
                    <b-field label="T.U.R.M.">
                      <b-input value="10,000" />
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
            label="Modificar"
            type="is-warning"
            @click="save"
          />
        </footer>
      </div>
    </form>
  </b-modal>
</template>

<script>
export default {
  name: 'EditAirplane',
  props: {
    activeEdit: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      form: {
        tuition: 'XA-',
        type_tuition: 'XA',
        enginers: [],
        proppellers: []
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
    },
    addPrefix () {
      this.form.tuition = this.form.type_tuition + '-'
    }
  }
}
</script>
