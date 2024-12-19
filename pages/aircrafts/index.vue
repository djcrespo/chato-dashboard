<template>
  <section>
    <general-nav
      :count="0"
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

    <div class="container">
      <b-field>
        <b-button
          label="Clear selected"
          type="is-danger"
          icon-left="close"
          :disabled="!selected"
          @click="selected = null"
        />
      </b-field>

      <b-tabs>
        <b-tab-item label="Aeronaves">
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
    </div>

    <!--
    <b-modal v-model="activeModal">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              AGREGAR AERONAVES
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
                            Servicio Comercial (XA)
                          </option>
                          <option value="2">
                            Servicio Privado (XB)
                          </option>
                          <option value="3">
                            Servicio del Gobierno (XC)
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
                    <div class="column is-4">
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
    -->

    <!--
    <b-modal v-model="isCardModalActive">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              MODIFICAR AERONAVES
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
                    Datos del Avión.
                  </p>
                  <div class="columns">
                    <div class="column is-5">
                      <b-field label="Nombre">
                        <b-input value="Cessna Grand caravan 172" disabled />
                      </b-field>
                    </div>
                    <div class="column is-4">
                      <b-field label="Tipo de Matricula">
                        <b-select placeholder="Seleccione el tipo de matricula" disabled>
                          <option value="1">
                            Servicio Comercial (XA)
                          </option>
                          <option value="2">
                            Servicio Privado (XB)
                          </option>
                          <option value="3">
                            Servicio del Gobierno (XC)
                          </option>
                        </b-select>
                      </b-field>
                    </div>
                    <div class="column is-2">
                      <b-field label="Matricula">
                        <b-input value="XB-ABC" disabled />
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
                    <div class="column is-4">
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
          </section>
          <footer class="modal-card-foot">
            <b-button
              label="Limpiar"
              type="is-danger"
              @click="$emit('close')"
            />
            <b-button
              label="Guardar"
              type="is-warning"
            />
          </footer>
        </div>
      </form>
    </b-modal>
     -->
  </section>
</template>

<script>
export default {
  data () {
    const data = [
      { id: 1, first_name: 'Cessna grand caravn b208', last_name: 'XB-ABC', last: 'DFRA24252', modelo: 'Cessna b208', tiempo: '10,500', servicio: '10,000' },
      { id: 2, first_name: 'Pipistel virus 172', last_name: 'XC-AGC', last: 'GSTS56D', modelo: 'Pispestrel 172', tiempo: '11,500', servicio: '11,000' }
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
          label: 'AERONAVE',
          searchable: true
        },
        {
          field: 'last_name',
          label: 'MATRICULA',
          searchable: true
        },
        {
          field: 'last',
          label: 'N. SERIE'
        },
        {
          field: 'modelo',
          label: 'MODELO'
        },
        {
          field: 'tiempo',
          label: 'TIEMPO TOTAL (T.T.)'
        },
        {
          field: 'servicio',
          label: 'T.U.R.M.'
        }
      ],
      activeModal: false,
      isCardModalActive: false,
      activeEdit: false
    }
  },
  methods: {
    getData () {
      this.activeModal = false
      this.activeEdit = false
    }
  }
}
</script>
