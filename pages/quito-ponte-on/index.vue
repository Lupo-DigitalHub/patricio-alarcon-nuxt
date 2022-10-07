<template>
  <div id="scooter-carousel">
    <slider-desk class="d-block d-sm-none d-xs-none d-md-block" />
    <slider-mobile />
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
  }
}
</script>
<style lang="scss">

@media only screen and (min-width: 768px) {
}
</style>
