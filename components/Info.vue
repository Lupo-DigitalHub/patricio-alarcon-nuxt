<template>
  <section class="info__section">
    <div class="info__section__wrapper">
      <div class="info__media">
        <img src="images/banner-patricio-perfil.png" alt="">
      </div>
      <div class="info__text">
        <p>Patricio considera que la capacidad de administrar proyectos a través de un modelo sostenible y responsable, es la clave para lograr resultados exitosos.</p>
        <p>Se considera un ciudadano que cree la transparencia y la solidaridad como modo de actuar básico, y en la libertad como principio y valor fundamental de la vida política y económica.</p>
        <p>Asimismo, es un convencido de que el mundo está cambiando aceleradamente, y hay que adaptarse y aprovechar las oportunidades para generar sociedades más prósperas y justas.</p>
        <p>Patricio quiere ser Alcalde de Quito para cambiar radicalmente la situación de la ciudad, el modelo de administración del Municipio, la solucionar los problemas de la gente y sus requerimientos cotidianos, para así conseguir el mejoramiento en la calidad de vida.</p>
        <p>La meta es construir un modelo sustentable de gestión y convivencia, que le dé a Quito la prosperidad que merece.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoComponent'
}
</script>

<style lang="scss">
.info__section{
  background: #1D216C;
  margin-top: 10rem;
}
.info__section__wrapper{
  display: flex;
  align-items: center;
  font-size: 2.7rem;
  color: #ffffff;
  line-height: 1.7;
  text-align: justify;
}
.info__media img{
  width: 45rem;
}
.info__text{
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
@media (max-width: 767px) {
  .info__media{
    display: none;
  }
  .info__section__wrapper{
    flex-direction: column;
    font-size: 3.5rem;
  }
  .info__text{
    padding: 5rem;
  }
}
</style>
