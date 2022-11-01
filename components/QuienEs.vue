<template>
  <section class="quienes__section">
    <div class="quienes__section__wrapper">
      <div class="quienes__banner">
        <h1 class="quienes__banner__title">
          <span>¿Quién es</span>
          <span>Patricio</span>
          <span>Alarcón?</span>
        </h1>
        <img class="quienes__media" src="images/banner-patricio-vertical.jpg" alt="">
      </div>
      <div class="quienes__info">
        <p>Patricio Alarcón está casado, es padre de 2 hijos y tiene 47 años. Parte de su formación la recibió en Estados Unidos: cuenta con un BS in Entrepreneurship de Babson College (USA) y un Master in Business Administration (IDE).</p>
        <p>Su vida ha estado atravesada por la dedicación al emprendimiento, la gestión empresarial, la representación en diferentes instituciones de la sociedad civil y la ayuda social, conjuntamente con su familia.</p>
        <p>Ha sido Presidente de la Cámara de Comercio de Quito, donde con su estilo franco y frontal logró llevar a la Institución desde el déficit hacia el superávit.</p>
        <p>También fue Presidente de la Cámara de Comercio Internacional, Capítulo Ecuador (ICC-Ecuador); Presidente del Comité Empresarial Ecuatoriano; y, Presidente de la Federación Nacional de Cámaras de Comercio del Ecuador.</p>
        <p>Actualmente es miembro del Directorio de la Corporación Participación Ciudadana y forma parte de varios directorios de importantes empresas en el Ecuador.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'QuienEsComponent'
}
</script>

<style lang="scss">
.quienes__section{
  padding: 10rem;
}
.quienes__section__wrapper{
  display: flex;
  align-items: center;
  gap: 10rem;
}
.quienes__banner{
  position: relative;
}
.quienes__banner__title{
  position: absolute;
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  top: 6rem;
  left: 8rem;
  color: #ffffff;
  span{
    letter-spacing: .3rem;
    line-height: .9;
    &:nth-child(1){
      color: #C90015;
      font-size: 4rem;
    }
    &:nth-child(2), &:nth-child(3){
      font-size: 9rem;
      font-weight: bold;
    }
  }
}
.quienes__media{
  width: 80rem;
}
.quienes__info{
  font-size: 2.7rem;
  line-height: 1.7;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: justify;
}
@media (max-width: 767px) {
  .quienes__section{
    padding: 5rem;
  }
  .quienes__section__wrapper{
    flex-direction: column;
    gap: 5rem;
  }
  .quienes__info{
    font-size: 3.5rem;
    line-height: 1.5;
  }
  .quienes__media{
    width: 100%;
  }

}
</style>
