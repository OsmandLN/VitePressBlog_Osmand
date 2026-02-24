---
title: Projects
description: Selected frontend projects by Osmand — Vue, UI engineering, and web architecture.
---
<script setup>
  import { ref } from "vue"
  import ProjectCard from './.vitepress/theme/components/projects/ProjectCard.vue'
  
 const projectArray = ref([
  {
    id: 1,
    icon: "VueJS",
    name: "TechPro-official",
    description: "Tech company website built with Vue.js.",
    techStack: ["VueJS", "VueX", "SCSS", "Leaflet"],
    githubUrl: "https://github.com/OsmandLN/TechPro-official",
    demoUrl:"https://techpro-official.vercel.app/#/",
    picture: "/images/projects/TechPro-official.png",
  },
  {
    id: 2,
    icon: "VueJS",
    name: "weather_info_vue_composition",
    description:
      "Real time weather information website built with composition API.",
    techStack: ["VueJS", "TypeScript", "Vite"],
    githubUrl: "https://github.com/OsmandLN/weather_info_vue_composition",
    demoUrl:"https://weather-info-vue-composition.vercel.app/",
    picture: "/images/projects/weather_info_vue_composition.png",
  },
  {
    id: 3,
    icon: "NodeJS",
    name: "BASEBALLSANITY",
    description:
      "Company website (baseball related) built with Express Handlebars.",
    techStack: ["JavaScript", "ExpressJS", "SCSS"],
    githubUrl: "https://github.com/OsmandLN/Brand_website_project",
    demoUrl:"-",
    picture: "/images/projects/Baseballsanity.png",
  },
])
</script>



# Projects

A curated collection of my selected work, focusing on **frontend architecture, UI engineering, and performance optimization**.

---

## Crafted

<div>
  <div>
    <ProjectCard v-for="project in projectArray" :key="project.id" :project="project"/>
  </div>
</div>

<!-- --- -->

<!-- ## More Projects

- **Form Builder** — dynamic schema-driven forms  
- **Markdown Editor** — live preview editor  
- **Design Token System** — themeable design variables   -->

---

## GitHub

👉 Full project archive:  
https://github.com/OsmandLN

---
