<template>
  <div>
    <footer
      class="
        footer
        d-flex
        flex-row
        justify-content-center
        align-items-center
        flex-wrap
        p-3
        mb-auto
      "
    >
      <div class="text-white">
        Derechos Reservados -
      </div>
      <div>
        <a
          href="https://www.lupodigitalhub.com/"
          class="footer__lupo"
          target="_blank"
        >
          Desarrollado por
          <img src="~/assets/img/logo-lupo.svg" alt="Lupo Digital Hub">
          2022
        </a>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'FooterComponent'
}
</script>
<style lang="scss">
@import "@/assets/scss/variables";

footer {
  background-color: $primary-blue;
}
footer a:hover {
  color: gray;
}
.footer__lupo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: 300;
  padding: 0.5rem;
  /* background-color: #1d1d1d; */
  color: #ffffff;
}
.footer__lupo img {
  width: 2rem;
  margin: 0 1rem;
}
</style>
