<template>
  <div>
    <HeaderComponent class="d-none d-md-block" />
    <HeaderMovilComponent class="d-md-none" />
    <BannerPatricio />
    <QuienEs />
    <Conectada />
    <Info />
    <Movilidad />
    <FooterComponent />
  </div>
</template>
<script>
import HeaderComponent from '@/components/Header'
import HeaderMovilComponent from '@/components/HeaderMovil'
import BannerPatricio from '@/components/BannerPatricio'
import QuienEs from '@/components/QuienEs'
import Conectada from '@/components/Conectada'
// import Proyectos from '@/components/Proyectos'
import Info from '@/components/Info'
import Movilidad from '@/components/Movilidad'
import FooterComponent from '@/components/Footer'

export default {
  name: 'IndexPage',
  layout: 'default',
  components: {
    HeaderComponent,
    HeaderMovilComponent,
    BannerPatricio,
    QuienEs,
    // Proyectos,
    Conectada,
    Info,
    Movilidad,
    FooterComponent
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
          content: 'Movilidad para Quito con Paticio Alarcón'
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
</style>
