<template>
  <section id="obten-tu-cupon" class="movilidad__section">
    <div class="movilidad__section__wrapper">
      <img class="movilidad__section__logo" src="images/quito-ponte-on-logo.svg" alt="">
      <div class="movilidad__content">
        <div class="swiper swiper__movilidad">
          <div class="swiper-wrapper">
            <div class="swiper-slide swiper__movilidad">
              <img src="images/banner-movilidad-1.jpg" alt="">
            </div>
            <div class="swiper-slide swiper__movilidad">
              <img src="images/banner-movilidad-2.jpg" alt="">
            </div>
          </div>
          <div class="swiper-pagination swiper__pag"></div>
        </div>
        <div class="movilidad__form">
          <FormComponent />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min'
import 'swiper/swiper-bundle.min.css'

import FormComponent from '@/components/Form'

export default {
  name: 'MovilidadComponent',
  components: {
    FormComponent
  },
  data () {
    return {
      swiper: {}
    }
  },
  mounted () {
    this.swiper = new Swiper('.swiper__movilidad', {
      effect: 'fade',
      autoplay: {
        delay: 5000
      },
      pagination: {
        el: '.swiper__pag',
        clickable: true
      }
    })
  }
}
</script>

<style lang="scss">
.movilidad__section{
  padding: 0 10rem;
}
.movilidad__content{
  display: flex;
}
.swiper__movilidad img{
  width: 100rem;
  height: 70rem;
  object-fit: cover;
  border-radius: 5rem;
}
.movilidad__section__logo{
  width: 80rem;
  align-self: center;
  margin: 10rem 0;
}
.movilidad__form{
  width: 125rem;
}
.movilidad__section__wrapper{
  width: 100%;
  display: flex;
  flex-direction: column;
}
.swiper__pag{
  bottom: 3rem;
  width: 100%;
  height: 5rem;
}
.swiper__pag .swiper-pagination-bullet{
  background: #fff;
  opacity: 1;
  width: 1.5rem;
  height: 1.5rem;
}
.swiper__pag .swiper-pagination-bullet-active{
  background:#C90015;
}

@media (max-width: 767px) {
  .movilidad__section{
    padding: 0 5rem;
  }
  .movilidad__section__logo{
    width: 80%;
    margin: 6rem 0;
  }
  .swiper__movilidad img{
    width: 100%;
  }
  .movilidad__content{
    flex-direction: column-reverse;
    gap: 5rem;
  }
  .movilidad__form{
    width: 100%;
  }
  .swiper{
    width: 100%;
  }
}
</style>
