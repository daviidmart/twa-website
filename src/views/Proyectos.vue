<template>
  <div class="container-fluid" style="padding: 0">
    <Menu
      :page="this.$route.params.categoria.toUpperCase()"
      style="color: black !important"
    />
    <Flicking
      ref="flicking"
      :options="{ circular: true }"
      class="vh-100 animate__animated animate__fast animate__fadeInDown"
    >
      <div
        style="width: 100%; position: relative"
        v-for="d in data"
        :key="d.title"
      >
        <router-link :to="'/proyectos/'+this.$route.params.categoria+'/'+d.short.toLowerCase()">
          <div
            class="img"
            :style="{
              backgroundImage:
                'url(' + require('@/assets/' + d.thumbnail) + ')',
            }"
          >
            <p class="subtitle-1">Proyecto &nbsp;&nbsp;&nbsp;/</p>
            <p class="subtitle-2">{{ d.title }}</p>
            <p class="proyecto-title">proyecto</p>
            <p class="proyecto-title-2">{{ d.short }}</p>
          </div>
        </router-link>
      </div>
    </Flicking>
  </div>
  <img class="logo-tw" :src="require('@/assets/img/logo-tw.webp')" />
  <img class="logo-a" :src="require('@/assets/img/logo-a.webp')" />
  <div class="rigth" v-on:click="siguiente">&gt;</div>
  <div class="left" v-on:click="anterior">&lt;</div>
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
  },

  created() {
    switch (this.categoria) {
      case "oficinas":
        this.data = oficinas;
        break;
      case "residencial":
        this.data = residencial;
        break;
      default:
        this.data = [];
        break;
    }
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

<style scoped>
h1 {
  font-family: "Argesta Hairline RegularItalic" !important;
  letter-spacing: -5px;
  font-size: 3em;
}

h2 {
  font-family: "Argesta Hairline RegularItalic" !important;
}

p,
h5,
h6 {
  font-family: "Neue Machina Light" !important;
}

p {
  font-size: 13px;
}

a {
  color: black;
  text-decoration: inherit; /* no underline */
}

a:hover {
  color: black;
  text-decoration: inherit; /* no underline */
}

.logo-tw {
  position: absolute;
  z-index: 9999;
  bottom: 0;
  left: 0;
  width: 20vh;
}

.logo-a {
  position: absolute;
  z-index: 9999;
  top: 0;
  right: 0;
  width: 14vh;
}

.text-justify {
  text-align: justify;
}

.proyecto-title {
  font-family: "Argesta Hairline RegularItalic" !important;
  color: black;
  position: absolute;
  bottom: -4.2rem;
  left: 0;
  font-size: 2.5rem;
  letter-spacing: -0.25rem;
}

.proyecto-title-2 {
  color: black;
  position: absolute;
  bottom: -3.3rem;
  right: 0;
  font-size: 1.5rem;
  font-family: "Neue Machina UltraLight" !important;
}

.subtitle-1 {
  position: absolute;
  top: -1.8rem;
  left: 0;
  font-size: 1rem;
}

.subtitle-2 {
  position: absolute;
  right: 0;
  font-size: 1rem;
  top: -1.8rem;
  text-align: end;
}

.card {
  background: none;
  border: none;
}

.img {
  width: 40vh;
  height: 40vh;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.rigth {
  position: absolute;
  z-index: 99;
  margin: auto;
  top: -10vh;
  bottom: 0;
  font-size: 50px;
  right: 30px;
  text-align: center;
  height: 100px;
  line-height: 70px;
  color: black;
  font-family: "Neue Machina UltraLight" !important;
  cursor: pointer;
}

.left {
  position: absolute;
  z-index: 99;
  margin: auto;
  top: -10vh;
  bottom: 0;
  font-size: 50px;
  left: 30px;
  text-align: center;
  height: 100px;
  line-height: 70px;
  color: black;
  font-family: "Neue Machina UltraLight" !important;
  cursor: pointer;
}
</style>