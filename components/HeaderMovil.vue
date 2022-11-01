<template>
  <header>
    <div class="swiper swiper__header">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-movil-1.webp" alt="">
        </div>
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-movil-2.webp" alt="">
        </div>
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-movil-3.webp" alt="">
        </div>
      </div>
    </div>
    <div class="arrowmovil__header">
      <b-button class="arrowmovil__header__button" v-b-modal.pulpo-game-movil href="">Combate al pulpo</b-button>
      <img src="images/arrow-down.svg" alt="">
    </div>
    <div class="headermovil__contact">
      <img class="headermovil__logo" src="images/patricio-logo.svg" alt="">
      <div class="headermovil__icos">
        <a href="https://www.facebook.com/PatoAlarcon2023">
          <img class="headermovil__ico" target="_blank" src="images/icon-facebook.svg" alt="">
        </a>
        <a href="https://www.instagram.com/patoalarcon2023/">
          <img class="headermovil__ico" target="_blank" src="images/icon-instagram.svg" alt="">
        </a>
        <a href="https://twitter.com/PatoAlarcon2023">
          <img class="headermovil__ico" target="_blank" src="images/icon-twitter.svg" alt="">
        </a>
        <span>/PatoAlarcon2023</span>
      </div>
    </div>
    <b-modal id="pulpo-game-movil" class="modal__pulpo" size="xl" hide-footer hide-header>
      <PulpoGame />
    </b-modal>
  </header>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

export default {
  name: 'HeaderMovilComponent',
  data () {
    return {
      swiper: {}
    }
  },
  mounted () {
    this.swiper = new Swiper('.swiper__header', {
      effect: 'fade',
      autoplay: {
        delay: 3000
      }
    })
  }
}
</script>

<style lang="scss">
.arrowmovil__header{
  width: 100%;
  position: absolute;
  bottom: 8rem;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  .arrowmovil__header__button{
    background: #C90015;
    font-size: 4rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 2rem;
  }
  img{
    width: 8rem;
  }
}

.headermovil__contact{
  position: absolute;
  z-index: 20;
  top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10rem;
  align-items: center;
  gap: 1rem;
}
.headermovil__logo{
  width: 60rem;
}
.headermovil__icos{
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 4rem;
  color: #ffffff;
}
.headermovil__ico{
  width: 6rem;
}
</style>
