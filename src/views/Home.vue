<template>
  <div class="container-fluid">
    <div
      class="logo-position animate__animated animate__fast animate__fadeInDown"
    >
      <div class="menu animate__animated animate__fadeIn">
        <p>
          <router-link to="/proyectos/residencial">RESIDENCIAL</router-link> /
          <router-link to="/">INTERIORISMO</router-link> /
          <router-link to="/">MOBILIARIO</router-link> /
          <router-link to="/proyectos/oficinas">OFICINAS</router-link> /
          <router-link to="/">COMERCIO</router-link>
        </p>
        <p>
          <router-link to="/proyectos/vivienda vertical"
            >VIVIENDA VERTICAL</router-link
          >
          /
          <router-link to="/">ENTREMIENTO</router-link>
          /
          <router-link to="/">CONCURSOS</router-link>
        </p>
        <p>
          <router-link to="/equipo">EQUIPO</router-link> /
          <router-link to="/contacto">CONTACTO</router-link>
        </p>
      </div>
      <div class="logo logo-animation"></div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `TWA | Home`,
      description: ``,
    });

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
});
</script>

<style scoped>
  .logo-position {
    width: 100%;
    height: 6vw;
    position: absolute;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .logo-animation {
    animation-name: logo-position;
    animation-delay: 800ms;
    animation-duration: 800ms;
    animation-fill-mode: forwards;
  }

  @keyframes logo-position {
    from {
      margin-top: 0px;
    }
    to {
      margin-top: 100px;
    }
  }

  .menu {
    opacity: 0;
    bottom: -150px;
    animation-name: menu-opacity;
    animation-delay: 1.2s;
    animation-duration: 400ms;
    animation-fill-mode: forwards;
    text-align: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
  }

  .menu p {
    font-family: "Neue Machina Light" !important;
    margin-bottom: 0 !important;
  }

  .menu p a {
    color: black;
    text-decoration: inherit; /* no underline */
  }

  @keyframes menu-opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>