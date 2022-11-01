<template>
  <header>
    <div class="swiper swiper__header">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-1.webp" alt="">
        </div>
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-2.webp" alt="">
        </div>
        <div class="swiper-slide swiper__slide">
          <img src="images/banner-pulpo-3.webp" alt="">
        </div>
      </div>
    </div>
    <div class="arrow__header">
      <b-button class="arrow__header__button" v-b-modal.pulpo-game href="">Combate al pulpo</b-button>
      <img src="images/arrow-down.svg" alt="">
    </div>
    <div class="header__contact">
      <img class="header__logo" src="images/patricio-logo.svg" alt="">
      <div class="header__icos">
        <a href="https://www.facebook.com/PatoAlarcon2023">
          <img class="header__ico" target="_blank" src="images/icon-facebook.svg" alt="">
        </a>
        <a href="https://www.instagram.com/patoalarcon2023/">
          <img class="header__ico" target="_blank" src="images/icon-instagram.svg" alt="">
        </a>
        <a href="https://twitter.com/PatoAlarcon2023">
          <img class="header__ico" target="_blank" src="images/icon-twitter.svg" alt="">
        </a>
        <span>/PatoAlarcon2023</span>
      </div>
    </div>
    <b-modal id="pulpo-game" class="modal__pulpo" size="xl" hide-footer hide-header>
      <PulpoGame />
    </b-modal>
  </header>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

import PulpoGame from '@/components/PulpoGame'

export default {
  name: 'HeaderComponent',
  components: {
    PulpoGame
  },
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
header{
  position: relative;
}
.swiper__header{
  width: 100%;
}
.swiper__slide img{
  width: 100%;
}
.arrow__header{
  position: absolute;
  bottom: 2rem;
  z-index: 10;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  .arrow__header__button{
    background: #C90015;
    font-size: 2.5rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    border-radius: 2rem;
    border: none;
  }

  img{
    width: 8rem;
  }
}
.header__contact{
  position: absolute;
  z-index: 20;
  top: 5rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10rem;
  align-items: flex-start;
}
.header__logo{
  width: 40rem;
}
.header__icos{
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
}
.header__ico{
  width: 4rem;
}
</style>
