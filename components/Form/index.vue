<template>
  <div v-if="show" class="form__section modal-cupon-bg">
    <b-container>
      <h4 class="form-title text-center">Estás a un solo paso de obtener tu cupón</h4>
    </b-container>
    <validation-observer ref="observerIWantIt" v-slot="{ handleSubmit }">
      <b-form
        class="container my-3"
        @submit.stop.prevent="handleSubmit(onSubmit)"
      >
        <validation-provider
          v-slot="validationContext"
          rules="required|max:50"
          name="nombre"
        >
          <b-form-group class="my-2" label="Nombre">
            <b-form-input
              v-model="form.nombre"
              :state="getValidationState(validationContext)"
              size="lg"
              placeholder=""
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider
          v-slot="validationContext"
          rules="required|max:10|numeric"
          name="telefono"
        >
          <b-form-group class="my-2" label="Teléfono">
            <b-form-input
              v-model="form.telefono"
              :state="getValidationState(validationContext)"
              size="lg"
              placeholder=""
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider
          v-slot="validationContext"
          rules="required|email"
          name="email"
        >
          <b-form-group class="my-2" label="Email">
            <b-form-input
              v-model="form.email"
              :state="getValidationState(validationContext)"
              size="lg"
              placeholder=""
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <validation-provider
          v-slot="validationContext"
          rules="required"
          name="sector"
        >
          <b-form-group label="Sector">
            <b-form-select
              v-model="form.sector"
              :options="sectorOptions"
              :state="getValidationState(validationContext)"
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
        <!-- <validation-provider
          v-slot="validationContext"
          rules="required"
          name="mensaje"
        >
          <b-form-group label="Mensaje">
            <b-form-textarea
              v-model="form.mensaje"
              :state="getValidationState(validationContext)"
              rows="6"
              max-rows="9"
              placeholder=""
            />
            <b-form-invalid-feedback>
              {{ validationContext.errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider> -->
        <b-button variant="danger" class="w-100" type="submit">
          Enviar
        </b-button>
      </b-form>
    </validation-observer>
  </div>
  <div v-else>
    <b-container fluid class="modal-cupon-bg mx-0 px-0 text-center d-flex align-items-center flex-column align-content-center justify-content-center p-5">
      <h4 class="form-title text-center">Ahora puedes movilizarte GRATIS</h4>
      <div class="cupon-text my-3">Movilízate por Quito de manera sostenible con Moveo.</div>
      <div class="cupon-text my-3">Copia y guarda tu código:</div>
      <div><span class="cupon-txt"> {{ cuponResponse[0].code }} </span></div>
      <div class="cupon-text my-3">Descarga la app aquí:</div>
      <div class="d-flex flex-row">
        <a href="https://apps.apple.com/ec/app/moveo/id1576607900" target="_blank"><b-img src="~/assets/img/app-store-logo1.png" /></a>
        <a href="https://play.google.com/store/apps/details?id=moveo.app" target="_blank"><b-img src="~/assets/img/play-store-logo2.png" /></a>
      </div>
    </b-container>
  </div>
</template>
<script>
import locations from '@/assets/data/locations'

export default {
  name: 'ContactForm',
  data () {
    return {
      sectorOptions: locations,
      form: {
        nombre: null,
        email: null,
        telefono: null,
        sector: null,
        mensaje: null
      },
      loading: true,
      show: true,
      formResponse: {},
      cuponResponse: {}
    }
  },
  methods: {
    getValidationState ({ dirty, validated, valid = null }) {
      return dirty || validated ? valid : null
    },
    async onSubmit () {
      try {
        const responseForm = await this.$axios.$post('/leads_scooters', this.form,
          {
            headers: { 'Content-Type': 'application/json' }
          })
        this.formResponse = responseForm.data.id
        const response = await this.$axios.$get(`/scooters_codes?fields[]=code&filter[id][_eq]=${this.formResponse}`)
        this.cuponResponse = response.data
        this.show = false
      } catch (error) {
      }
    }
  }
}
</script>
<style lang="scss">
@import "~/assets/scss/_variables";
legend {
  color: #FFF !important;
  font-weight: bold;
}
.form__section {
  height: 70rem !important;
  font-size: 2rem;
  border-radius: 5rem;
  input{
    font-size: 2rem;
  }
  select{
    font-size: 2rem;
  }
  button{
    font-size: 2rem;
    margin-top: 1rem;
  }
}
.form-title {
    font-family: 'Arboria-Bold';
    color: #FFF;
    font-size: 2rem;
    line-height: 2rem;
    text-transform: uppercase;
    margin: 2rem 0;
    // padding: 1rem;
}
.modal-cupon-bg{
  background-image: url('~/assets/img/fondo-modal.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  // height: 55vh;
  height: fit-content;
  padding: 2rem;
  height: 70rem !important;

}
.cupon-text{
  color: #FFF;
  font-size: 1.5rem;
}
.cupon-txt{
  color: #FFF;
  font-weight: bold;
  background-color: $primary-red;
  padding: 1rem;
  font-size: 3rem;
}
@media only screen and (min-width: 768px) {
  .form-title {
    font-family: 'Arboria-Bold';
    color: #FFF;
    font-size: 3.5rem;
    line-height: 3.5rem;
    text-transform: uppercase;
    // padding: 1rem;
}
.cupon-text{
  color: #FFF;
  font-size: 3rem;
}
.cupon-txt{
  color: #FFF;
  font-weight: bold;
  background-color: $primary-red;
  padding: 1rem;
}
}
@media (max-width: 767px) {
  .form__section {
    height: auto !important;
    font-size: 3.5rem;
    border-radius: 5rem;
    padding: 6rem 3rem;
    input{
      font-size: 3.5rem;
    }
    select{
      font-size: 3.5rem;
    }
    button{
      font-size: 3.5rem;
      margin-top: 1rem;
    }
  }
  .form-title {
    font-size: 5rem;
    line-height: 1;
  }
  .cupon-text{
    font-size: 4rem;
  }
  .cupon-txt{
    font-size: 4.3rem;
  }
  .modal-cupon-bg{
    height: auto !important;
  }
}
</style>
