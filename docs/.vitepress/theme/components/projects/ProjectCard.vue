<template>
  <v-card position="relative" class="project-card mb-5">
    <v-img height="200px" :src="props.project.picture" cover></v-img>
    <div>
      <h3>🚀 {{ project.name }}</h3>

      <p>{{ project.description }}</p>
      <div>
        <p class="mb-0">Tech Stack</p>
        <v-chip v-for="(tech, index) in project.techStack" :key="tech"
          :class="{ 'mr-1': index < project.techStack.length - 1 }">{{ tech }}</v-chip>
      </div>

      <div>
        <a :href="project.demoUrl" target="_blank" rel="noopener noreferrer"
          v-if="project.demoUrl && project.demoUrl !== '-'">Live Demo →</a>
      </div>
      <div>
        <a :href="project.githubUrl" target="_blank" rel="noopener noreferrer">GitHub →</a>
      </div>
    </div>
  </v-card>
</template>

<script setup lang="ts">
import type { PropType } from "vue"

interface Project {
  id: number;
  icon: string;
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  picture: string;
}

const props = defineProps({
  project: {
    type: Object as PropType<Project>,
    required: true,
  },
})
</script>

<style>
.project-card {
  padding: 1.4rem;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: linear-gradient(145deg,
      rgba(255, 255, 255, 0.04),
      rgba(255, 255, 255, 0.02));
  backdrop-filter: blur(6px);
  transition: all .25s ease;
  color: var(--vp-c-text-1)
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgb(240, 146, 5);
  box-shadow: 0 10px 30px rgba(240, 146, 5, 0.4);
}

.project-card a {
  display: inline-block;
  margin-top: .6rem;
  font-weight: 600;
}
</style>