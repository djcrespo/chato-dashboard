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
            Editar modelo
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
  name: 'EditPlanemodel',
  props: {
    activePlane: {
      type: Boolean,
      default: false
    },
    modelSelect: {
      type: Object,
      default: () => {}
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
  watch: {
    activePlane (newVal, oldVal) {
      if (newVal) {
        this.form = this.modelSelect
      }
    }
  },
  methods: {
    async save () {
      this.isLoading = true
      try {
        console.log(this.form)
        await this.$store.dispatch('modules/aircrafts/updatePartialModel', this.form)
        this.form = {}
        this.isLoading = false
        this.$emit('close')
      } catch (error) {
        this.isLoading = false
        console.log(error)
      }
    },
    close () {
      this.form = {}
      this.$emit('close')
    }
  }
}
</script>
