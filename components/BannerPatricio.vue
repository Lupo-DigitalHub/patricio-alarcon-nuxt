<template>
  <section class="banner__patricio__section">
    <div class="banner__patricio__grad"></div>
    <div class="banner__patricio__section__wrapper">
      <img class="banner__patricio d-none d-md-block" src="images/banner-patricio.webp" alt="">
      <img class="banner__patricio__movil d-md-none" src="images/banner-patricio-movil.webp" alt="">
      <div class="banner__info">
        <div class="banner__info__wrapper">
          <div class="banner__info__left">
            Muévete de manera inteligente en quito y gratis.
          </div>
          <a href="#obten-tu-cupon" class="banner__info__right">
            <span>Obten tu cupón</span>
            <img src="images/arrow-go.svg" alt="">
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BannerPatricioComponent'
}
</script>

<style lang="scss">
.banner__patricio__section{
  margin-top: -2px;
  position: relative;
}
.banner__patricio__grad{
  background: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);
  position: absolute;
  width: 100%;
  height: 40rem;
}
.banner__patricio__section__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.banner__patricio{
  width: 90%;
  border-radius: 5rem;
  margin-top: 10rem;
}
.banner__patricio__movil{
  width: 90%;
  border-radius: 5rem;
}
.banner__info{
  width: 80%;
}
.banner__info__wrapper{
  display: flex;
  margin: 0 auto;
  color: #ffffff;
  line-height: 1;
}
.banner__info__left{
  background: #1C2269;
  font-size: 4rem;
  text-transform: uppercase;
  padding: 2rem 10rem;
  width: 60%;
  border-radius: 0 0 0 5rem;
}
.banner__info__right{
  background: #C90015;
  font-size: 4.5rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 2rem 5rem;
  width: 40%;
  font-weight: bold;
  border-radius: 0 0 5rem 0;

  img{
    width: 4rem;
  }
}

@media (max-width: 767px) {
  .banner__info__wrapper{
    flex-direction: column;
  }
  .banner__info__left{
    width: 100%;
    padding: 3rem 5rem;
    font-size: 4rem;
    border-radius: 0;
    text-align: center;
  }
  .banner__info__right{
    width: 100%;
    padding: 3rem 5rem;
    font-size: 4rem;
    border-radius: 0 0 5rem 5rem;
  }

}
</style>
