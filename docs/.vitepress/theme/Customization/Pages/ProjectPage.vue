<template>
  <div class="projects-wrapper">
    <a :href="project.url" target="_blank" rel="noreferrer noopenner" class="project-card"
      v-for="project in projectArray" :key="project.id">
      <div class="project-icon">
        <VueJS v-if="project.icon === 'VueJS'" />
        <NodeJS v-else-if="project.icon === 'NodeJS'" />
      </div>
      <span class="project-name">{{ project.name }}</span>
      <p class="project-description">
        {{ project.description }}
      </p>
    </a>
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import project icons
import VueJS from '../Components/icons/VueJS.vue';
import NodeJS from '../Components/icons/NodeJS.vue';

const projectArray = ref([
  {
    id: 1,
    icon: 'VueJS',
    name: 'TechPro-official',
    description: 'Tech company website built with Vue.js.',
    url: 'https://github.com/OsmandLN/TechPro-official'
  },
  {
    id: 2,
    icon: 'VueJS',
    name: 'weather_info_vue_composition',
    description: 'Real time weather information website built with composition API.',
    url: 'https://github.com/OsmandLN/weather_info_vue_composition'
  },
  {
    id: 3,
    icon: 'NodeJS',
    name: 'BASEBALLSANITY',
    description: 'Company website (baseball related) built with Express Handlebars.',
    url: 'https://github.com/OsmandLN/Brand_website_project'
  },
])
</script>

<style lang="scss" scoped>
.projects-wrapper {
  width: 90dvw;
  // height: 90dvh;
  position: relative;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  .project-card {
    width: 95%;
    height: auto;
    position: relative;
    padding: 5px;
    border-radius: 10px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;

    &:hover {
      background-color: rgba(orange, 0.5);
    }

    .project-icon {
      width: 25px;
      height: 25px;
      position: absolute;
      top: 45%;
      left: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 5px;
    }

    .project-name {
      width: calc(100% - 30px - 10px);
      height: 25px;
      position: relative;
      left: 30px;
      display: inline-block;
      font-size: 18px;
    }

    .project-description {
      width: calc(100% - 30px - 10px);
      position: relative;
      left: 30px;
      font-size: 14px;
    }
  }
}

// tablet
@media screen and (min-width: 768px) {
  .projects-wrapper {

    .project-card {
      margin-bottom: 25px;
    }
  }
}

// desktop
@media screen and (min-width: 1024px) {
  .projects-wrapper {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;

    .project-card {
      width: 30%
    }
  }
}
</style>