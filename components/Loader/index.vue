<template>
  <div class="screen-loader">
    <div class="content-loader">
      <img src="~/assets/img/logo-pa.svg" alt="logo">
    </div>
  </div>
</template>
<script>
export default {
  name: 'ScreenComponent'
}
</script>
<style lang="scss">
  @import "~/assets/scss/_variables";
  .screen-loader{
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    .content-loader{
      width: 25%;
      text-align: center;
      animation: pulse 1.5s linear infinite;
      img{
        width: 100%;
      }
      p{
        margin-top: 3rem;
        font-size: 3rem;
        // font-family: $font-title;
        color: $secondary-gray;
        text-transform: uppercase;
      }
    }
  }
  @keyframes pulse {
    0% {
     transform: scale(1, 1);
    }

    50% {
     transform: scale(1.1, 1.1);
    }

    100% {
    transform: scale(1, 1);
    }
  }
</style>
