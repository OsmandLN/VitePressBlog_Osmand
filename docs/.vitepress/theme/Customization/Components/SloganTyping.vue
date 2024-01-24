<template>
  <div class="slogan-typing">
    <h1>Coding...</h1>
  </div>
</template>
<style lang="scss" scoped>
/* reference: https://css-tricks.com/snippets/css/typewriter-effect/ */
.slogan-typing {
  h1 {
    overflow: hidden;
    border-right: 3px solid gold;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 1px;
    animation:
      typing 4s infinite,
      blinking-caret 0.4s step-end infinite;
    transform: translateX(20dvw);
  }
}

@keyframes typing {
  0% {
    width: 0
  }

  10% {
    width: 20%
  }

  20% {
    width: 40%
  }

  30% {
    width: 60%
  }

  35% {
    width: 70%
  }

  40% {
    width: 80%
  }

  50% {
    width: 100%
  }

  60% {
    width: 80%
  }

  70% {
    width: 60%
  }

  80% {
    width: 40%
  }

  90% {
    width: 20%
  }

  100% {
    width: 0
  }
}

@keyframes blinking-caret {

  from {
    border-color: transparent;
  }

  to {
    border-color: transparent;
  }

  50% {
    border-color: gold;
  }
}

@media screen and (max-width:768px) {
  .slogan-typing {
    display: none;
  }
}
</style>