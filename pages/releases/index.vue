<template>
  <section>
    <div class="buttons">
      <b-button
        label="Agregar"
        type="is-success"
        size="is-medium"
        @click="isImageModalActive = true"
      />
      <b-button
        label="Modificar"
        type="is-warning"
        size="is-medium"
        @click="isCardModalActive = true"
      />
      <b-button
        label="Eliminar"
        type="is-danger"
        size="is-medium"
        @click="isModalActive = true"
      />
    </div>
    <b-modal v-model="isImageModalActive">
      <b-steps size="is-medium" type="is-success">
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
                  <b-input value="Cessna Grand caravan 172" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Tipo de Matricula">
                  <b-select placeholder="Seleccione el tipo de matricula">
                    <option value="1">
                      Servicio Comercial
                    </option>
                    <option value="2">
                      Servicio Privado
                    </option>
                    <option value="3">
                      Servicio del Gobierno
                    </option>
                  </b-select>
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
          <div class="container">
            <div class="columns">
              <div class="column is-4">
                <b-field label="Numero de serie">
                  <b-input value="REYE546WH" />
                </b-field>
              </div>
              <div class="column is-5">
                <b-field label="Modelo">
                  <b-input value="Cessna 172" />
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
              <div class="column is-3">
                <b-field label="Tiempo total de vuelo (T.T.)">
                  <b-input value="10,500" />
                </b-field>
              </div>
              <div class="column is-3">
                <b-field label="T.U.R.M">
                  <b-input value="10,000" />
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
    </b-modal>
    <b-modal v-model="isCardModalActive">
      <!--esto es del otro boton-->
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
                  <b-input value="Cessna Grand caravan 172" />
                </b-field>
              </div>
              <div class="column is-4">
                <b-field label="Tipo de Matricula">
                  <b-select placeholder="Seleccione el tipo de matricula">
                    <option value="1">
                      Servicio Comercial
                    </option>
                    <option value="2">
                      Servicio Privado
                    </option>
                    <option value="3">
                      Servicio del Gobierno
                    </option>
                  </b-select>
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
          <div class="container">
            <div class="columns">
              <div class="column is-4">
                <b-field label="Numero de serie">
                  <b-input value="REYE546WH" />
                </b-field>
              </div>
              <div class="column is-5">
                <b-field label="Modelo">
                  <b-input value="Cessna 172" />
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
              <div class="column is-3">
                <b-field label="Tiempo total de vuelo (T.T.)">
                  <b-input value="10,500" />
                </b-field>
              </div>
              <div class="column is-3">
                <b-field label="T.U.R.M">
                  <b-input value="10,000" />
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
    </b-modal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isImageModalActive: false,
      isCardModalActive: false
    }
  }
}
</script>
