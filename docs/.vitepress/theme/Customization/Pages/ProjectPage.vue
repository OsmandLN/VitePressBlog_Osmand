<template>
  <v-container class="projects-wrapper pa-6">
    <v-row>
      <v-col cols="12" md="4" v-for="project in projectArray" :key="project.id">
        <v-card height="200px" position="relative">
          <div>
            <!-- TODO: write a component to handle icons (use props to control icons)  -->
            <!-- <VueJS v-if="project.icon === 'VueJS'" /> -->
            <!-- <NodeJS v-else-if="project.icon === 'NodeJS'" /> -->
          </div>
          <v-img></v-img>
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-subtitle class="text-wrap">
            {{ project.description }}
          </v-card-subtitle>
          <v-card-actions class="d-flex justify-end">
            <v-btn
              :href="project.url"
              target="_blank"
              rel="noreferrer noopenner"
              color="orange"
              variant="elevated"
            >
              EXPLORE
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
// import project icons
import VueJS from "../Components/icons/VueJS.vue";
import NodeJS from "../Components/icons/NodeJS.vue";

const projectArray = ref([
  {
    id: 1,
    icon: "VueJS",
    name: "TechPro-official",
    description: "Tech company website built with Vue.js.",
    url: "https://github.com/OsmandLN/TechPro-official",
  },
  {
    id: 2,
    icon: "VueJS",
    name: "weather_info_vue_composition",
    description:
      "Real time weather information website built with composition API.",
    url: "https://github.com/OsmandLN/weather_info_vue_composition",
  },
  {
    id: 3,
    icon: "NodeJS",
    name: "BASEBALLSANITY",
    description:
      "Company website (baseball related) built with Express Handlebars.",
    url: "https://github.com/OsmandLN/Brand_website_project",
  },
]);
</script>

<style lang="scss" scoped>
.projects-wrapper {
  width: 90dvw;
  height: 90dvh;
  position: relative;
  top: 4rem;
}

.v-card {
  position: relative;
}

.v-card-actions {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
}
</style>
