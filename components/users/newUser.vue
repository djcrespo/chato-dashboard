<template>
  <b-modal v-model="activeUser" :can-cancel="false">
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            AGREGAR USUARIOS
          </p>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <p class="title">
              Datos personales
            </p>
            <div class="columns">
              <div class="column is-4">
                <b-field label="Nombres">
                  <b-input value="Ruben Alonso" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Apellido Paterno">
                  <b-input value="Morcillo" />
                </b-field>
              </div>
              <div class="column  is-4">
                <b-field label="Apellido Materno">
                  <b-input value="Tzec" />
                </b-field>
              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <p class="title">
              Dirección
            </p>
            <div class="columns">
              <div class="column is-4">
                <b-field label="Calle">
                  <b-input value="59J" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Numero">
                  <b-input value="584" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Cruzamientos">
                  <b-input value="106 y 108" />
                </b-field>
              </div>
            </div>
          </div>
          <div class="columns">
            <div class="column is-4">
              <b-field label="Colonia">
                <b-input value="Bojorquez" />
              </b-field>
            </div>
            <div class="column is-4">
              <b-field label="Codigo Postal">
                <b-input value="97230" />
              </b-field>
            </div>
          </div>
          <hr>
          <div class="container">
            <p class="title">
              Telefono y RFC
            </p>
            <div class="columns">
              <div class="column is-4">
                <b-field label="Telefono">
                  <b-input value="9996457673" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="RFC">
                  <b-input value="ERW54T3BD76TREE6" />
                </b-field>
              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <p class="title">
              Area de Servicio
            </p>
            <div class="columns">
              <div class="column is-4">
                <b-field label="Departamento">
                  <b-select placeholder="Seleccione un Departamento">
                    <option value="1">
                      Taller
                    </option>
                    <option value="2">
                      Administracion
                    </option>
                  </b-select>
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Role">
                  <b-select placeholder="Seleccione un Rol">
                    <option value="1">
                      Pintor
                    </option>
                    <option value="2">
                      Tecnico en Mantenimiento
                    </option>
                  </b-select>
                </b-field>
              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <p class="title">
              Datos de la Licencia
            </p>
            <div class="columns">
              <div class="column  is-3">
                <b-field label="Vigencia">
                  <b-datepicker
                    v-model="selected"
                    :show-week-number="showWeekNumber"
                    :locale="locale"
                    placeholder="Seleccionar fecha"
                    icon="calendar-today"
                    :icon-right="selected ? 'close-circle' : ''"
                    icon-right-clickable
                    trap-focus
                    @icon-right-click="clearDate"
                  />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Numero de licencia">
                  <b-input value="AFAC142526" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Tipo de Licencia">
                  <b-input value="Clase 1" />
                </b-field>
              </div>
            </div>
          </div>
          <hr>
          <div class="container">
            <p class="title">
              Cuenta
            </p>
            <div class="columns">
              <div class="column  is-4">
                <b-field label="Email">
                  <b-input
                    type="email"
                    :value="email"
                    placeholder="Your email"
                    required
                  />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Password">
                  <b-input
                    type="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    required
                  />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Password confirmation">
                  <b-input
                    type="password"
                    :value="password"
                    password-reveal
                    placeholder="Your password"
                    required
                  />
                </b-field>
              </div>
            </div>
          </div>
          <hr>
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
  name: 'NewUser',
  props: {
    activeUser: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      selected: new Date(),
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
