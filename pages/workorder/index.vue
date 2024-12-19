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
      <section>
        <b-steps
          v-model="activeStep"
          :rounded="isRounded"
          type="is-success"
          size="is-medium"
        >
          <b-step-item step="1" label="Account">
            <h1 class="title has-text-centered">
              Account
            </h1>
            Lorem ipsum dolor sit amet.
          </b-step-item>

          <b-step-item step="2" label="Profile">
            <h1 class="title has-text-centered">
              Profile
            </h1>
            Lorem ipsum dolor sit amet.
          </b-step-item>

          <b-step-item step="3" :visible="showSocial" label="Social">
            <h1 class="title has-text-centered">
              Social
            </h1>
            Lorem ipsum dolor sit amet.
          </b-step-item>

          <template
            #navigation="{previous, next}"
          >
            <b-button
              outlined
              type="is-danger"
              icon-pack="fas"
              :icon-left="backward"
              :disabled="previous.disabled"
              @click.prevent="previous.action"
            >
              Previous
            </b-button>
            <b-button
              outlined
              type="is-success"
              icon-pack="fas"
              icon-right="forward"
              :disabled="next.disabled"
              @click.prevent="next.action"
            >
              Next
            </b-button>
          </template>
        </b-steps>
      </section>
    </b-modal>

    <b-modal v-model="isCardModalActive" :width="640" scroll="keep">
      <!--esto es del otro boton-->
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/placeholder-1280x960.png" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="/static/img/placeholder-1280x960.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">
                John Smith
              </p>
              <p class="subtitle is-6">
                @johnsmith
              </p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      isImageModalActive: false,
      isCardModalActive: false,
      activeStep: 0,
      customNavigation: false
    }
  }
}
</script>
