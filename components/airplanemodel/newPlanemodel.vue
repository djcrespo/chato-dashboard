<template>
  <b-modal v-model="activePlane" :can-cancel="false">
    <b-loading
      v-model="isLoading"
      :is-full-page="false"
      :can-cancel="false"
    />
    <form action="">
      <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
          <p class="modal-card-title">
            Nuevo modelo
          </p>
        </header>
        <section class="modal-card-body">
          <div class="container">
            <div class="columns">
              <div class="column">
                <b-field label="Modelo">
                  <b-input
                    v-model="form.model"
                    placeholder="Cessna 172"
                  />
                </b-field>
              </div>
            </div>
            <hr>
            <div class="level">
              <div class="level-left" />
              <div class="level-right">
                <div class="level-item">
                  <b-button
                    label="Cancelar"
                    type="is-light"
                    @click="close"
                  />
                </div>
                <div class="level-item">
                  <b-button
                    label="Guardar"
                    type="is-success"
                    @click="save"
                  />
                </div>
              </div>
            </div>
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
    return {
      isLoading: false,
      form: {
        model: ''
      }
    }
  },
  methods: {
    clearDate () {
      this.selected = null
    },
    async save () {
      this.isLoading = true
      try {
        await this.$store.dispatch('modules/aircrafts/createModel', this.form)
        this.form.model = ''
        this.isLoading = false
        this.$emit('close')
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    close () {
      this.form.model = ''
      this.$emit('close')
    }
  }
}
</script>
