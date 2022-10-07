<template>
  <div id="scooter-carousel">
    <slider-desk class="d-none d-sm-none d-xs-none d-xl-block d-lg-block d-md-block" />
    <slider-mobile class="d-block d-sm-block d-xs-block d-xl-none d-lg-none d-md-none" />
  </div>
</template>
<script>
import SliderDesk from '~/components/Slider/Desktop'
import SliderMobile from '~/components/Slider/Mobile'

export default {
  name: 'MobilidadPge',
  components: {
    SliderDesk,
    SliderMobile
  },
  layout: 'scooter',
  data () {
    return {
      url: this.$config.imageURL,
      slide: 0,
      sliding: null
    }
  },
  head () {
    return {
      title: 'Movilidad para Quito con Paticio Alarcón',
      meta: [
        {
          hid: 'title',
          name: 'title',
          content: 'Movilidad para Quito con Paticio Alarcón'
        },
        {
          hid: 'description',
          name: 'description',
          content: 'Es hora de cambiar la movilidad para darle sotenibilidad a Quito'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Movilidad para Quito con Paticio Alarcón'
        }
      ]
    }
  }
}
</script>
<style lang="scss">

@media only screen and (min-width: 768px) {
}
</style>
