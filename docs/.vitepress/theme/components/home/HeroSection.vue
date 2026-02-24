<template>
  <section class="hero">
    <div class="bg-glow"></div>

    <div class="content">
      <h1>
        Hi, I'm <span class="accent">Osmand</span>.
      </h1>

      <p class="subtitle py-2">
        Frontend Engineer · Vue · Vite · UI Architecture
      </p>

      <div class="actions">
        <a class="btn primary" href="/projects">View Projects</a>
        <a class="btn ghost" href="https://github.com/OsmandLN" target="_blank">
          GitHub
        </a>
        <a class="btn primary" href="/notes/note-cover">View Notes</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.hero {
  position: relative;
  min-height: 80vh;
  display: grid;
  place-items: center;
  /* overflow: hidden; */
}

.bg-glow {
  position: absolute;
  width: 100vw;
  height: 600px;
  background: radial-gradient(circle,
      rgba(255, 200, 0, 0.5),
      transparent 60%);
  filter: blur(80px);
  animation: float 8s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-40px);
  }
}

.content {
  position: relative;
  z-index: 1;
  text-align: center;
}

h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.03em;
}

.accent {
  color: gold;
}

.subtitle {
  margin-top: 1rem;
  font-size: 1.2rem;
  opacity: 0.75;
}

.actions {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn {
  padding: 0.7rem 1.6rem;
  border-radius: 999px;
  font-weight: 600;
  transition: all 0.25s ease;
}

.primary {
  background: gold;
  color: #000;
}

.primary {
  &:hover {
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
    transform: translateY(-2px);
  }
}

.ghost {
  border: 1px solid rgba(255, 255, 255, 0.3);
}

.ghost {
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
}
</style>
