<template>
  <div class="container-fluid">
    <Menu page="EQUIPO" />
    <div class="logo animate__animated animate__slow animate__fadeIn"></div>
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6">
        <Flicking
          ref="flicking"
          :options="{ circular: true, align: 'prev' }"
          class="vh-30 animate__animated animate__fast animate__fadeInRight"
          style="margin-top: 18vw"
        >
          <div style="width: 33%">
            <div class="card">
              <img
                src="../assets/img/fotos/equipo.jpg"
                alt=""
                class="img-fluid"
              />
              <h1>Ceo &</h1>
              <p>Fundador /</p>
              <p>Arquitecto / José Larroa /</p>
            </div>
          </div>
          <div style="width: 33%">
            <div class="card">
              <img
                src="../assets/img/fotos/equipo.jpg"
                alt=""
                class="img-fluid"
              />
              <h1>arq Jr</h1>
              <p>Arquitecto Jr. /</p>
              <p>Arquitecto / Gerardo Goméz /</p>
            </div>
          </div>
          <div style="width: 33%">
            <div class="card">
              <img
                src="../assets/img/fotos/equipo.jpg"
                alt=""
                class="img-fluid"
              />
              <h1>arq Jr</h1>
              <p>Arquitecto Jr. /</p>
              <p>Arquitecto / Ana Rodriguez /</p>
            </div>
          </div>
          <div style="width: 33%">
            <div class="card">
              <img
                src="../assets/img/fotos/equipo.jpg"
                alt=""
                class="img-fluid"
              />
              <h1>arq Jr</h1>
              <p>Arquitecto Jr. /</p>
              <p>Arquitecto / Gerardo Goméz /</p>
            </div>
          </div>
          <div style="width: 33%">
            <div class="card">
              <img
                src="../assets/img/fotos/equipo.jpg"
                alt=""
                class="img-fluid"
              />
              <h1>arq Jr</h1>
              <p>Arquitecto Jr. /</p>
              <p>Arquitecto / Ana Rodriguez /</p>
            </div>
          </div>
        </Flicking>
      </div>
    </div>
  </div>
</template>

<script>
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

  setup() {
    const siteData = reactive({
      title: `TWA | Equipo`,
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
* {
    overflow: hidden !important;
  }

p {
  font-family: "Neue Machina Light" !important;
  font-size: 13px;
  text-align: left;
  padding: 0;
  margin: 0;
}

h1 {
  font-family: "Argesta Hairline RegularItalic" !important;
  letter-spacing: -5px;
  font-size: 3em;
  text-align: left;
}

.card {
  padding: 1vw;
  background: none;
  border: none;
}

.logo {
  width: 12vw;
  height: 6vw;
  position: absolute;
  bottom: 5vw;
  left: 5vw;
}
</style>