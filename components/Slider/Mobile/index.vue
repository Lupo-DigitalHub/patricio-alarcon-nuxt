<template>
  <div id="carouselMobile">
    <b-carousel
      id="sliderlMobile"
      v-model="slide"
      :interval="7000"
      img-width="428"
      img-height="926"
      indicators
      controls
      background="#ababab"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide
        class=""
        img-src="~/assets/img/Movilidad-para-Quito-1-m.jpg"
      />
      <b-carousel-slide
        class=""
        img-src="~/assets/img/Movilidad-para-Quito-2-m.jpg"
      />
      <b-carousel-slide
        class=""
        img-src="~/assets/img/Movilidad-para-Quito-3-m.jpg"
      >
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
  name: 'SliderMobile',
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
#carouselMobile {
  height: 100vh;
  .carousel {
    height: 100vh;
  }
  .carousel-caption {
    position: absolute;
    right: 15%;
    bottom: 0px;
    top: 30vh;
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
      font-size: 2rem !important;
      line-height: 2rem;
      font-family: "Arboria-Bold" !important;
      color: #fff;
    }
  }
}
</style>
