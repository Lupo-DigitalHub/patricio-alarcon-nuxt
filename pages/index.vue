<template>
  <div>
    <loader v-if="loading" />
    <b-container v-else fluid class="mx-0 px-0">
      <b-img :src="`${url}/${section.banner}`" class="w-100 img-fluid" />
      <b-container class="my-3">
        <h1 class="name-title text-center">
          {{ section.title_scooter }}
        </h1>
        <b-row class="my-5">
          <b-col>
            <div class="landing-content">
              <div class="my-3" v-html="section.scooter_text" />
              <div>
                <b-button v-b-modal.contact-form variant="outline-danger"> Obtener mi cupón </b-button>
                <b-modal
                  id="contact-form"
                  size="xl"
                  hide-footer
                  hide-header
                >
                  <contact-form />
                </b-modal>
              </div>
            </div>
          </b-col>
          <b-col>
            <b-img
              :src="`${url}/${section.scooter_image}`"
              class="w-100 img-fluid"
            />
          </b-col>
        </b-row>
      </b-container>
      <div class="d-flex justify-content-center align-items-center">
        <b-img src="~/assets/img/bandera-slogan.png" class="img-fluid" />
      </div>
    </b-container>
  </div>
</template>
<script>
import Loader from '~/components/Loader'
import ContactForm from '~/components/Form'

export default {
  name: 'IndexPage',
  components: {
    Loader,
    ContactForm
  },
  layout: 'default',
  data () {
    return {
      loading: true,
      section: [],
      url: this.$config.imageURL
    }
  },
  async created () {
    const response = await this.$axios.$get('/landing_patricio_alarcon?fields[]=title,description,banner,title_scooter,scooter_text,scooter_image')
    this.section = response.data
    this.loading = false
  }
}
</script>
<style lang="scss">
</style>
