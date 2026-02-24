<template>
  <div class="px-2 d-flex flex-column align-center programming-skills-wrapper">
    <i class="mb-2">Skill set</i>
    <div class="px-3 text-wrap programming-skills">
      <section class="mb-4">
        <p class="mb-2">Frontend</p>
        <v-chip label>HTML</v-chip>
        <v-chip label>CSS</v-chip>
        <v-chip label>SCSS</v-chip>
        <v-chip label>JavaScript (ES6+)</v-chip>
        <v-chip label>TypeScript</v-chip>
        <v-chip label>Vue.js (Vue 2 / Vue 3)</v-chip>
        <v-chip label>Element / Element Plus</v-chip>
        <v-chip label>Bootstrap</v-chip>
        <v-chip label>Leaflet</v-chip>
        <v-chip label>Echarts</v-chip>
      </section>
      <section class="mb-4">
        <p class="mb-2">Backend</p>
        <v-chip label>Node.js</v-chip>
      </section>
      <section class="mb-4">
        <p class="mb-2">Others</p>
        <v-chip label>Git</v-chip>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.programming-skills-wrapper {
  width: 90%;

  i {
    font-size: 1.5rem;
    font-weight: 700;
  }

  .programming-skills {
    width: 100%;

    p {
      font-size: 1.25rem;
    }

    .v-chip {
      margin: 0.25rem;

      &:hover {
        background: gold;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}


@media screen and (min-width: 1024px) {
  .programming-skills-wrapper {
    i {
      font-size: 1.75rem;
    }

    .programming-skills {
      width: 50vh;
      display: flex;
      flex-direction: column;

      .v-chip {
        font-size: 1.25rem;
      }
    }
  }
}
</style>
