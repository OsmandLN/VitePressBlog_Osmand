<template>
  <v-container class="projects-wrapper pa-6">
    <v-row>
      <v-col cols="12" md="4" v-for="project in projectArray" :key="project.id">
        <v-card min-height="450px" position="relative">
          <v-img height="200px" :src="project.picture" cover></v-img>
          <v-card-title>
            {{ project.name }}
          </v-card-title>
          <v-card-subtitle class="text-wrap mb-3">
            {{ project.description }}
          </v-card-subtitle>
          <div class="px-2">
            <v-chip class="mx-1" v-for="tech in project.techStack" :key="tech">
              {{ tech }}
            </v-chip>
          </div>
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

const projectArray = ref([
  {
    id: 1,
    icon: "VueJS",
    name: "TechPro-official",
    description: "Tech company website built with Vue.js.",
    techStack: ["VueJS", "VueX", "SCSS", "Leaflet"],
    url: "https://github.com/OsmandLN/TechPro-official",
    picture: "/images/projects/TechPro-official.png",
  },
  {
    id: 2,
    icon: "VueJS",
    name: "weather_info_vue_composition",
    description:
      "Real time weather information website built with composition API.",
    techStack: ["VueJS", "TypeScript", "Vite"],
    url: "https://github.com/OsmandLN/weather_info_vue_composition",
    picture: "/images/projects/weather_info_vue_composition.png",
  },
  {
    id: 3,
    icon: "NodeJS",
    name: "BASEBALLSANITY",
    description:
      "Company website (baseball related) built with Express Handlebars.",
    techStack: ["JavaScript", "ExpressJS", "SCSS"],
    url: "https://github.com/OsmandLN/Brand_website_project",
    picture: "/images/projects/Baseballsanity.png",
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
