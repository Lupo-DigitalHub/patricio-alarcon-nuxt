<template>
  <div class="page-content">
    <nav-bar />
    <Nuxt />
    <FooterComponent />
  </div>
</template>
<script>
import FooterComponent from '~/components/Footer'
import NavBar from '@/components/NavBar'

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    FooterComponent
  }
}
</script>
<style lang="scss">
@import "@/assets/scss/fonts";
@import "@/assets/scss/variables";
.page-content{
  height: 100vh !important;
}
</style>
