<template>
  <div class="m-2">
    <nav class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          <p class="subtitle is-5">
            <strong>{{ count }}</strong> {{ text }}
          </p>
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <div class="level-item">
          <b-button
            label="Agregar"
            type="is-success"
            size="is-medium"
            @click="$emit('new')"
          >
            Nuevo registro
          </b-button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'GeneralNav',
  props: {
    count: {
      type: Number,
      default: 0
    },
    text: {
      type: String,
      default: 'registros'
    }
  }
}
</script>
