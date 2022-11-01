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
        p-5
        mb-auto
      "
    >
      <span class="text-white">
        Derechos Reservados&nbsp;-&nbsp;
      </span>
      <span>
        <a
          href="https://www.lupodigitalhub.com/"
          class="footer__lupo"
          target="_blank"
        >
          Desarrollado por
          <img src="~/assets/img/logo-lupo.svg" alt="Lupo Digital Hub">
          2022
        </a>
      </span>
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
  background-color: #061181;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin-top: 10rem;
}
.footer__lupo {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  /* background-color: #1d1d1d; */
  color: #ffffff;
}
.footer__lupo img {
  width: 2rem;
  margin: 0 1rem;
}
@media (max-width: 767px) {
  footer {
    font-size: 3rem;
  }
  .footer__lupo img {
    width: 5rem;
    margin: 0 1rem;
  }

}
</style>
