<template>
  <section class="proyectos__section">
    <div class="proyectos__line"></div>
    <div class="proyectos__section__wrapper">
      <h2 class="proyectos__h2">
        <span>Entre sus</span>
        <span>proyectos empresariales,</span>
        <span>se encuentra</span>
      </h2>
      <div class="proyectos__list">
        <div class="proyectos__list__wrapper">
          <div class="proyecto justifystart">
            <div class="proyecto__wrapper reverse">
              <div class="proyecto__info">
                <h3>Gerente</h3>
                <p>La gerencia de la distribuidora, donde logró aumentar la facturación desde 2 millones a más de 300 millones, generando una importante cantidad de puestos de trabajo.</p>
              </div>
              <div class="proyecto__number">1</div>
            </div>
          </div>
          <div class="proyecto justifyend">
            <div class="proyecto__wrapper">
              <div class="proyecto__number">2</div>
              <div class="proyecto__info left">
                <h3>Jefe de distribución</h3>
                <p>Fue jefe distribuidor de la empresa de lácteos TONI, donde tuvo un amplio contacto con las tiendas de barrio y conoció de cerca la situación y problema de este importante sector.</p>
              </div>
            </div>
          </div>
          <div class="proyecto justifystart">
            <div class="proyecto__wrapper reverse">
              <div class="proyecto__info">
                <h3>Propietario</h3>
                <p>Es propietario, actualmente, del negocio de snacks a base del maíz donde su principal objetivo está enfocado hacia el desarrollo de zonas de población indígena vulnerable, agricultores y mujeres de muy escasos recursos en la provincia Bolívar.</p>
              </div>
              <div class="proyecto__number">3</div>
            </div>
          </div>
          <div class="proyecto justifyend">
            <div class="proyecto__wrapper">
              <div class="proyecto__number">4</div>
              <div class="proyecto__info left">
                <h3>Empresario</h3>
                <p>Es un empresario que apoya proyectos del desarrollo sustentable, agroalimentario y en movilidad sostenible.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProyectosComponent'
}
</script>

<style lang="scss">
.proyectos__section{
  position: relative;
}
.proyectos__section__wrapper{
  display: flex;
  flex-direction: column;
  gap: 10rem;
}
.proyectos__list__wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}
.proyectos__line{
  position: absolute;
  width: 2px;
  background: #DF2F31;
  height: 70%;
  top:40rem;
  left: 50%;
  transform: translateX(-50%);
}
.proyectos__h2{
  text-align: center;
  font-size: 4rem;
  text-transform: uppercase;
  color: #061181;
  display: flex;
  flex-direction: column;
  line-height: 1;
  span{
    &:nth-child(2){
      color: #DF2F31;
      font-size: 6rem;
      font-weight: bold;
    }
  }
}
.proyecto{
  font-size: 2.7rem;
  display: flex;
  position: relative;
}
.proyecto__wrapper{
  width: 50%;
  display: flex;
  align-items: center;
  gap: 10rem;
}
.proyecto__info{
  text-align: right;
  width: 123rem;
  background: #F3F3F9;
  padding: 5rem;
  border-radius: 5rem;
  h3{
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: bold;
    color: #061181;
  }
}
.proyecto__number{
  width: 24rem;
  height: 10rem;
  background: #DF2F31;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 5rem;
  font-weight: bold;
}
.left{
  text-align: left;
}
.justifystart{
  justify-content: flex-start;
  margin-right: -10rem;
}
.justifyend{
  justify-content: flex-end;
  margin-left: -10rem;
}
@media (max-width: 767px) {
  .proyectos__section{
    padding: 0 5rem;
  }
  .proyecto__wrapper{
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
  .proyectos__h2{
    font-size: 5rem;
    span{
      &:nth-child(2){
        font-size: 7rem;
      }
    }
  }
  .proyecto{
    font-size: 3.5rem;
  }
  .proyectos__line{
    height: 80%;
  }
  .proyecto__info{
    text-align: center;
    width: 100%;
    h3{
      font-size: 5rem;
    }
  }
  .proyecto__number{
    width: 13rem;
    height: 13rem;
  }
  .justifystart{
    margin-right: 0;
  }
  .justifyend{
    margin-left: 0;
  }
  .reverse{
    flex-direction: column-reverse;
  }
}
</style>
