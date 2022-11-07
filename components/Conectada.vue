<template>
  <section class="conectada__section">
    <img class="conectada__media" src="/images/conectada-segura.svg" alt="">
  </section>
</template>

<script>
export default {
  name: 'ConectadaComponent'
}
</script>

<style lang="scss">
.conectada__section{
  padding: 0 10rem;
}
.conectada__media{
  width: 100%;
}
@media (max-width: 767px) {
  .conectada__section{
    padding: 0 5rem;
  }
}
</style>
