<template>
  <section>
    <div class="buttons">
      <b-button
        label="Agregar"
        type="is-success"
        size="is-medium"
        @click="activeMante = true"
      />
      <b-button
        label="Modificar"
        type="is-warning"
        size="is-medium"
        @click="manteActive = true"
      />
      <b-button
        label="Eliminar"
        type="is-danger"
        size="is-medium"
        @click="isModalActive = true"
      />
    </div>

    <new-maintenance
      :active-mante="activeMante"
      @close="getData"
    />

    <edit-maintenance
      :mante-active="manteActive"
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
    <b-modal v-model="activeMante">
      <form action="">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">
              AGREGAR MANTENIMIENTOS
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
    -->

    <!--
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
          label: 'DESCRIPCION',
          searchable: true
        },
        {
          field: 'last_name',
          label: 'TIPO DE TRABAJO',
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
      activeMante: false,
      manteActive: false
    }
  },
  methods: {
    getData () {
      this.activeMante = false
      this.manteActive = false
    }
  }
}
</script>
