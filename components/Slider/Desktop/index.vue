<template>
  <div id="carouselDesk">
    <b-carousel
      id="sliderDesk"
      v-model="slide"
      :interval="7000"
      img-width="10920"
      img-height="1080"
      indicators
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="~/assets/img/Movilidad-para-Quito-1.jpg" />
      <b-carousel-slide
        img-src="~/assets/img/Movilidad-para-Quito-slide-2.jpg"
      />
      <b-carousel-slide img-src="~/assets/img/fondo-modal.png">
        <div class="caption-text m-5">
          Para scootear gratis, llena el siguiente formulario
        </div>
        <b-button v-b-modal.contact-form-cupon variant="danger">
          Obtener mi cupón
        </b-button>
        <b-modal id="contact-form-cupon" size="xl" hide-footer hide-header>
          <contact-form />
        </b-modal>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import ContactForm from '~/components/Form'

export default {
  name: 'SliderDesk',
  components: {
    ContactForm
  },
  data () {
    return {
      url: this.$config.imageURL,
      slide: 0,
      sliding: null
    }
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
<style lang="scss">
#carouselDesk {
  height: 100vh;
  .carousel {
    // height: 50vh;
  }
  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 0px;
    top: 40vh;
    left: 15%;
    z-index: 10;
    padding-top: 20px;
    padding-bottom: 20px;
    // color: #fff;
    text-align: center;
  }
  .carousel-item {
    height: 100vh;
    .caption-text {
      word-wrap: break-word;
      font-size: 5rem !important;
      line-height: 4.5rem;
      font-family: "Arboria-Bold" !important;
      color: #fff;
    }
  }
}
</style>
