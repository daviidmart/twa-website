<template>
    <div class="row animate__animated animate__fast animate__fadeInLeft" style="padding-top: 25px; position: absolute; top: 0; left: 0; z-index: 99;">
      <div class="col-auto pagina">
        {{page}} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; /
      </div>
      <div class="col menu">
        <router-link to="/">Menú / TWA</router-link>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    page: String
  }
}
</script>

<style scoped>
    .pagina {
        margin-left: 100px;
        font-family: 'Neue Machina Regular' !important;
        font-weight: bold;
        text-align: left;
    }

    .menu {
        margin-left: 100px;
        font-family: 'Neue Machina UltraLight' !important;
        text-align: left;
    }

    .menu a {
        color: inherit;
        text-decoration: inherit; /* no underline */
    }
</style>
