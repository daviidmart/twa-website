<template>
  <div class="container-fluid" style="padding: 0">
    <Menu
      :page="'PROYECTOS /   ' + this.$route.params.categoria.toUpperCase()"
      style="color: white !important"
    />
    <Flicking
      ref="flicking"
      :options="{ circular: true }"
      style="height: 60vh"
      class="animate__animated animate__fast animate__fadeInDown"
    >
      <div style="width: 100%" v-for="d in data.images" :key="d">
        <div
          class="img"
          :style="{
            backgroundImage: 'url(' + require('@/assets/' + d) + ')',
          }"
        ></div>
      </div>
    </Flicking>

    <div class="rigth" v-on:click="siguiente">&gt;</div>
    <div class="left" v-on:click="anterior">&lt;</div>

    <div class="d-flex">
      <div class="d-flex w-100 justify-content-center align-self-center">
        <div class="card" style="width: 40rem">
          <br /><br />
          <h1 style="margin-bottom: 4rem; position: relative">
            proyecto<div class="subtext">{{ data.short }}</div>
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
import Flicking from "@egjs/vue3-flicking";

export default defineComponent({
  name: "Home",
  components: {
    Menu,
    Flicking,
  },

  methods: {
    siguiente: function () {
      this.$refs.flicking.next();
    },
    anterior: function () {
      this.$refs.flicking.prev();
    },
  },

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
body {
  overflow: auto !important;
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
  position: absolute;
  margin: auto;
  bottom: -1rem;
  right: -6rem;
  left: 0;
  letter-spacing: 0;
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
  height: 100%;
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