<template>
  <section class="game__section">
    <iframe
    frameborder="0"
    src="https://itch.io/embed-upload/7016078?color=000000"
    allowfullscreen=""
  >
    <a href="https://pattodiablo.itch.io/alarcon-vs-pulporruptor">Play Patricio Alarcón Vs Pulporruptor on itch.io</a>
  </iframe>

  </section>
</template>

<script>
export default {
  name: 'PulpoGameComponent'
}
</script>

<style lang="scss">
  .game__section{
    display: flex;
    justify-content: center;

    iframe{
      width: 100%;
      height: 94vh;
    }
  }
  @media (max-width: 767px) {
    .game__section{
      iframe{
        width: 100%;
        height: 90vh;
      }
    }
  }
</style>
