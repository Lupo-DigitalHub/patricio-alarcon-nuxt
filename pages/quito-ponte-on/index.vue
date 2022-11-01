<template>
  <section class="movilidad__page">
    <div class="headerintern__contact">
      <a href="/">
        <img class="headerintern__logo" src="images/patricio-logo.svg" alt="">
      </a>
      <div class="headerintern__icos">
        <a href="https://www.facebook.com/PatoAlarcon2023">
          <img class="headerintern__ico" target="_blank" src="images/icon-facebook.svg" alt="">
        </a>
        <a href="https://www.instagram.com/patoalarcon2023/">
          <img class="headerintern__ico" target="_blank" src="images/icon-instagram.svg" alt="">
        </a>
        <a href="https://twitter.com/PatoAlarcon2023">
          <img class="headerintern__ico" target="_blank" src="images/icon-twitter.svg" alt="">
        </a>
        <span>/PatoAlarcon2023</span>
      </div>
    </div>
    <Movilidad/>
  </section>
</template>

<script>
import Movilidad from '@/components/Movilidad.vue'

export default {
  name: 'QuitoOnPage',
  components: {
    Movilidad
  }
}
</script>

<style lang="scss">
.movilidad__page{
  margin-bottom: 10rem;
}
.headerintern__contact{
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 10rem;
  align-items: flex-start;
  background: #1D216C;
  padding: 2rem 10rem;
}
.headerintern__logo{
  width: 40rem;
}
.headerintern__icos{
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 2rem;
  color: #ffffff;
}
.headerintern__ico{
  width: 4rem;
}
@media (max-width: 767px) {
  .headerintern__contact{
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }
  .headerintern__logo{
    width: 60rem;
  }
  .headerintern__icos{
    font-size: 3.5rem;
  }
  .headerintern__ico{
    width: 6rem;
  }
}
</style>
