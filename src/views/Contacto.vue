<template>
  <div class="container-fluid">
    <Menu page="CONTACTO" style="color: black !important" />
    <div class="d-flex vh-100">
      <div class="d-flex w-100 justify-content-center align-self-center">
        <div class="card" style="width: 25rem">
          <div
            class="
              card-body
              animate__animated animate__fast animate__fadeInDown
            "
          >
            <h1 style="margin-bottom: 3rem; position: relative">
              Contacto
              <div class="subtext">TWA</div>
            </h1>
            <p style="text-align: center">Ciudad de México, MEXICO</p>
            <p>Nombre:</p>
            <input type="text" class="form-control" />
            <p>E-Mail:</p>
            <input type="text" class="form-control" />
            <p>Tel/Cel:</p>
            <input type="text" class="form-control" />
            <p>Mensaje / Cotización</p>
            <textarea class="form-control" rows="3"></textarea>
            <br />
            <button type="button" class="btn btn-light btn-block">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import Menu from "@/components/Menu.vue";

export default defineComponent({
  name: "Contacto",
  components: {
    Menu,
  },

  setup() {
    const siteData = reactive({
      title: `TWA | Contacto`,
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

h1 {
  font-family: "Argesta Hairline RegularItalic" !important;
  letter-spacing: -5px;
  font-size: 3em;
  color: black;
}

.subtext {
  font-family: "Neue Machina UltraLight";
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0px;
  line-height: 8px;
}

.container-fluid {
  background: url("../assets/img/fotos/jorge-salvador-CKN87OWfj9s-unsplash.jpg") !important;
  background-position: center !important;
  background-size: cover !important;
  background-repeat: no-repeat !important;
}

.card {
  background: none !important;
  border: none !important;
}

.card-body p {
  text-align: left;
  margin-top: 10px;
  margin-bottom: 5px;
  font-family: "Neue Machina Light" !important;
  color: black !important;
}

input {
  color: black !important;
  font-family: "Neue Machina UltraLight" !important;
  border: none;
  background: #ffffffba;
}

textarea {
  color: black !important;
  font-family: "Neue Machina UltraLight" !important;
  border: none;
  background: #ffffffba;
}

button {
  width: 100% !important;
  font-family: "Neue Machina UltraLight" !important;
  color: black !important;
}
</style>