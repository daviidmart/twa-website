<template>
  <div class="container-fluid" style="padding: 0">
    <Menu
      :page="'PROYECTOS /   ' + this.$route.params.categoria.toUpperCase()"
      style="color: white !important"
    />

    <carousel :items-to-show="1" :wrap-around="true">
      <slide v-for="d in data.images" :key="d">
        <div
          class="img"
          :style="{
            backgroundImage: 'url(' + require('@/assets/' + d) + ')',
          }"
        ></div>
      </slide>

      <template #addons>
        <navigation />
      </template>
    </carousel>

    <div class="rigth" v-on:click="siguiente">&gt;</div>
    <div class="left" v-on:click="anterior">&lt;</div>

    <div class="d-flex animate__animated animate__fadeIn animate__delay-1s">
      <div class="d-flex w-100 justify-content-center align-self-center">
        <div class="card" style="width: 40rem">
          <br /><br />
          <h1 style="margin-bottom: 4rem; position: relative">
            proyecto
            <div class="subtext">{{ data.short }}</div>
          </h1>
          <p class="subtitle" style="margin: 0">Proyecto / {{ data.short }}</p>
          <p class="subtitle">{{ data.title }}</p>
          <br />
          <p class="text-center" v-for="text in data.description" :key="text">
            {{ text }}
          </p>
          <br /><br /><br />
          <h6 v-for="info in data.info" :key="info">{{ info }}</h6>
          <br /><br /><br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// JSON DATA
import oficinas from "../data/oficinas.json";
import residencial from "../data/residencial.json";
// COMPONENTS
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Menu from "@/components/Menu.vue";

import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

export default defineComponent({
  name: "Home",
  components: {
    Menu,
    Carousel,
    Slide,
    Navigation,
  },

  methods: {},

  data() {
    return {
      data: [],
      list: [0, 1, 2, 3, 4],
    };
  },

  props: {
    categoria: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
  },

  beforeMount() {
    var td = [];

    switch (this.categoria) {
      case "oficinas":
        td = oficinas;
        break;
      case "residencial":
        td = residencial;
        break;
    }

    td.forEach((data) => {
      console.log(data.short);
      if (data.short == this.short.toUpperCase()) {
        this.data = data;
      }
    });
  },

  setup() {
    const siteData = reactive({
      title: `TWA | Proyectos`,
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

<style>
.carousel__prev {
  width: 10vw !important;
  height: 100% !important;
  z-index: 9999 !important;
  opacity: 0 !important;
}

.carousel__next {
  width: 10vw !important;
  height: 100% !important;
  z-index: 9999 !important;
  opacity: 0 !important;
}
</style>

<style scoped>

h1 {
  font-family: "Argesta Hairline RegularItalic" !important;
  letter-spacing: -5px;
  font-size: 3em;
}

p,
h5,
h6 {
  font-family: "Neue Machina Light" !important;
}

p {
  font-size: 13px;
}

.subtext {
  font-family: "Neue Machina UltraLight";
  font-size: 1.5rem;
  letter-spacing: 0;
  line-height: 7px;
  margin-right: 15.5rem;
  text-align: end;
}

.text-justify {
  text-align: justify;
}

.subtitle {
  font-size: 14px;
}

.card {
  background: none;
  border: none;
}

.img {
  width: 100%;
  height: 60vh !important;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}

.rigth {
  position: absolute;
  z-index: 99;
  margin: auto;
  top: -40vh;
  bottom: 0;
  font-size: 50px;
  right: 30px;
  text-align: center;
  height: 100px;
  line-height: 70px;
  color: white;
  font-family: "Neue Machina UltraLight" !important;
  cursor: pointer;
}

.left {
  position: absolute;
  z-index: 99;
  margin: auto;
  top: -40vh;
  bottom: 0;
  font-size: 50px;
  left: 30px;
  text-align: center;
  height: 100px;
  line-height: 70px;
  color: white;
  font-family: "Neue Machina UltraLight" !important;
  cursor: pointer;
}
</style>