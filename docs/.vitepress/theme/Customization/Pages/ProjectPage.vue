<script setup>
import { ref } from 'vue';
// import project icons
import VueJS from '../Components/icons/VueJS.vue';
import NodeJS from '../Components/icons/NodeJS.vue';

const projectArray = ref([
  {
    projectId: 1,
    projectIcon: 'VueJS',
    projectName: 'TechPro-official',
    projectDescription: 'Tech company website built with Vue.js.',
    projectUrl: 'https://github.com/OsmandLN/TechPro-official'
  },
  {
    projectId: 2,
    projectIcon: 'VueJS',
    projectName: 'weather_info_vue_composition',
    projectDescription: 'Real time weather information website built with composition API.',
    projectUrl: 'https://github.com/OsmandLN/weather_info_vue_composition'
  },
  {
    projectId: 3,
    projectIcon: 'NodeJS',
    projectName: 'BASEBALLSANITY',
    projectDescription: 'Company website (baseball related) built with Express Handlebars.',
    projectUrl: 'https://github.com/OsmandLN/Brand_website_project'
  },
])
</script>

<template>
  <div class="projects-wrapper">
    <a :href="project.projectUrl" target="_blank" rel="noreferrer noopenner" class="project-card"
      v-for="project in projectArray" :key="project.projectId">
      <div class="project-icon">
        <VueJS v-if="project.projectIcon === 'VueJS'" />
        <NodeJS v-else-if="project.projectIcon === 'NodeJS'" />
      </div>
      <span class="project-name">{{ project.projectName }}</span>
      <p class="project-description">
        {{ project.projectDescription }}
      </p>
    </a>
  </div>
</template>

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