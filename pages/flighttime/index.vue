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
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              AGREGAR iNFORMACION DEL VUELO
            </p>
            <button
              type="button"
              class="delete"
              @click="$emit('close')"
            />
          </header>
          <section class="modal-card-body">
            <b-steps size="is-medium" type="is-success">
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
                    <div class="column is-2">
                      <b-field label="Numero de serie">
                        <b-input value="XsTA3746" />
                      </b-field>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container">
                  <p class="title">
                    Personal.
                  </p>
                  <div class="columns">
                    <div class="column is-3">
                      <b-field label="Tripulacion">
                        <b-numberinput type="is-success" min="1" />
                      </b-field>
                    </div>
                    <div class="column is-3">
                      <b-field label="N. personas abordo">
                        <b-numberinput type="is-success" min="1" />
                      </b-field>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container">
                  <p class="title">
                    Lugar de salida y llegada.
                  </p>
                  <div class="columns">
                    <div class="column is-4">
                      <b-field label="Salida">
                        <b-select placeholder="Seleccionar lugar de salida">
                          <option value="1">
                            Merida
                          </option>
                          <option value="2">
                            Mexico
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Llegada">
                        <b-select placeholder="Seleccionar lugar de llegada">
                          <option value="1">
                            Merida
                          </option>
                          <option value="2">
                            Mexico
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                    <div class="column is-2">
                      <b-field label="Salida">
                        <b-input value="MID" />
                      </b-field>
                    </div>
                    <div class="column is-2">
                      <b-field label="Llgada">
                        <b-input value="MEX" />
                      </b-field>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container">
                  <p class="title">
                    Hora de salida y llegada
                  </p>
                  <div class="columns">
                    <div class="column is-4">
                      <b-field label="Salida (UTC)">
                        <b-clockpicker
                          v-model="timesalida"
                          placeholder="Seleccionar la hora"
                          :hour-format="format"
                          type="is-success"
                        >
                          <b-button
                            label="Now"
                            type="is-success"
                            icon-left="clock"
                            @click="timesalida = new Date()"
                          />
                          <b-button
                            label="Clear"
                            type="is-success"
                            icon-left="close"
                            outlined
                            @click="timesalida = null"
                          />
                        </b-clockpicker>
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Llegada (UTC)">
                        <b-clockpicker
                          v-model="timellegada"
                          placeholder="Seleccionar la hora"
                          :hour-format="format"
                        >
                          <b-button
                            label="Now"
                            type="is-primary"
                            icon-left="clock"
                            @click="timellegada = new Date()"
                          />
                          <b-button
                            label="Clear"
                            type="is-danger"
                            icon-left="close"
                            outlined
                            @click="timellegada = null"
                          />
                        </b-clockpicker>
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Tiempo de C a C">
                        <b-input value="2:20" />
                      </b-field>
                    </div>
                  </div>
                </div>
                <hr>
                <div class="container">
                  <p class="title">
                    Hora de despegue y aterrizaje
                  </p>
                  <div class="columns">
                    <div class="column is-4">
                      <b-field label="Hora de Despegue">
                        <b-clockpicker
                          v-model="hora"
                          placeholder="Seleccionar la hora"
                          :hour-format="format"
                          type="is-success"
                        >
                          <b-button
                            label="Now"
                            type="is-success"
                            icon-left="clock"
                            @click="hora = new Date()"
                          />
                          <b-button
                            label="Clear"
                            type="is-success"
                            icon-left="close"
                            outlined
                            @click="hora = null"
                          />
                        </b-clockpicker>
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Hora de Aterrizaje">
                        <b-clockpicker
                          v-model="horas"
                          placeholder="Seleccionar la hora"
                          :hour-format="format"
                        >
                          <b-button
                            label="Now"
                            type="is-primary"
                            icon-left="clock"
                            @click="horas = new Date()"
                          />
                          <b-button
                            label="Clear"
                            type="is-danger"
                            icon-left="close"
                            outlined
                            @click="horas = null"
                          />
                        </b-clockpicker>
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Tiempo de Vuelo">
                        <b-input value="2:20" />
                      </b-field>
                    </div>
                  </div>
                </div>
                <hr>
              </b-step-item>
              <b-step-item step="2" label="Piloto">
                <h1 class="title has-text-centered">
                  Piloto
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
              label="Limpiar"
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

    <b-modal v-model="isCardModalActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              MODIFICAR MANTENIMIENTOS
            </p>
            <button
              type="button"
              class="delete"
              @click="$emit('close')"
            />
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
              label="Limpiar"
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
  </section>
</template>

<script>
export default {
  data () {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      timesalida: new Date(),
      timellegada: new Date(),
      times: new Date(),
      hora: new Date(),
      horas: new Date()
    }
  }
}
</script>
