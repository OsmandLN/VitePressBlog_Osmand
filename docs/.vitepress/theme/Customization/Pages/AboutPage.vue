<template>
  <div class="portfolio playpen-sans-cute">
    <img class="personal-photo" src="../../assets/個人照.jpg" alt="個人照">
    <div class="self-introduction-wrapper">
      <i>Self Introduction</i>
      <ul class="self-introduction">
        <li>From Tainan, Taiwan</li>
        <li>Frontend Engineer with 2+ years experience</li>
        <li>A fan of Uni-Lions(CPBL), SoftBank HAWKS(NPB), and Boston Red Sox(MLB).</li>
        <li>Interesting in watching sport games, but not so interested in playing sports. </li>
        <li>Like to assemble Gunpla.</li>
      </ul>
    </div>
    <div class="programming-skills-wrapper">
      <i>Programming Skills</i>
      <ul class="programming-skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript(ES6+)</li>
        <li>TypeScript(Beginner)</li>
        <li>Node.js</li>
        <li>Vue.js(Vue 2/Vue 3)</li>
        <li>React.js(some hooks)</li>
        <li>Element/Element Plus</li>
        <li>Bootstrap</li>
        <li>Leaflet</li>
        <li>Echarts</li>
        <li>Git</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap');

.playpen-sans-cute {
  font-family: "Playpen Sans", cursive;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

.portfolio {
  width: 100dvw;
  // height: 100dvh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .personal-photo {
    width: 300px;
    border-radius: 80px;
    margin-bottom: 20px;
  }

  .self-introduction-wrapper {
    margin-bottom: 20px;
  }

  .self-introduction-wrapper,
  .programming-skills-wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    i {
      margin-bottom: 30px;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: underline;
    }

    .self-introduction,
    .programming-skills {
      width: 100%;
      list-style: circle;

      li {
        font-weight: 700;
        line-height: 2;

        &:hover {
          background: -webkit-linear-gradient(135deg,
              #bd34fe 30%,
              #41d1ff);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .portfolio {

    .self-introduction-wrapper,
    .programming-skills-wrapper {

      i {
        font-size: 1.75rem;
      }

      .self-introduction,
      .programming-skills {
        display: flex;
        flex-direction: column;
        align-items: center;

        li {
          font-size: 1.25rem;
        }
      }
    }
  }
}
</style>