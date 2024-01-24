<template>
  <div class="portfolio">
    <img class="personal-photo" src="../../assets/個人照.jpg" alt="個人照">
    <ul class="self-introduction">
      <li>臺南人</li>
      <li>經濟系畢業</li>
      <li>國外業務、機械工程師工作經驗</li>
      <li>目前從事前端開發</li>
      <li>資深喵迷</li>
      <li>喜歡看運動賽事，但不喜歡運動</li>
      <li>模型組裝</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.portfolio {
  width: 100dvw;
  height: 100dvh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url('../../assets/under_the_clouds.png');
  background-size: cover;
  background-position: center;

  // margin: 0 auto;
  .personal-photo {
    width: 300px;
    border-radius: 80px;
    margin-bottom: 20px;
  }

  .self-introduction {
    list-style: circle;

    li {
      font-weight: 700;

      &:hover {
        background: -webkit-linear-gradient(135deg, gold 10%,
            #bd34fe 30%,
            #41d1ff);
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
</style>