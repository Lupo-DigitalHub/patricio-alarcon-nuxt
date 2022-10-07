<template>
  <b-navbar class="nav-bar ps-5">
    <b-navbar-nav>
      <b-nav-item href="/" class="menu-item">
        Inicio
      </b-nav-item>
      <b-nav-item href="biografia" class="menu-item">
        ¿Quién es Patricio Alarcón?
      </b-nav-item>
      <b-nav-item href="quito-ponte-on" class="menu-item">
        Quito Ponte On
      </b-nav-item>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto pl-5">
      <b-nav-item
        href="https://www.facebook.com/PatoAlarcon2023/"
        class="menu-item"
        target="_blank"
      >
        <span>
          <font-awesome-icon :icon="['fab', 'fa-facebook']" class="fs-4" />
        </span>
      </b-nav-item>
      <b-nav-item
        href="https://twitter.com/PatoAlarcon2023"
        class="menu-item"
        target="_blank"
      >
        <span>
          <font-awesome-icon :icon="['fab', 'fa-twitter']" class="fs-4" />
        </span>
      </b-nav-item>
      <b-nav-item
        href="https://www.instagram.com/patoalarcon2023/"
        class="menu-item"
        target="_blank"
      >
        <span>
          <font-awesome-icon :icon="['fab', 'fa-instagram-square']" class="fs-4" />
        </span>
      </b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>
<script>
export default {
  name: 'NavBar'
}
</script>
<style lang="scss">
@import "~/assets/scss/_variables";
.nav-bar {
  background-color: $primary-blue;
  color: #fff !important;
}
.menu-item a {
  color: #fff !important;
  font-weight: bold;
}
.menu-item:hover {
  background-color: $primary-red;
}
</style>
