// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "../theme/customization/customizedStyle.scss"
import "vuetify/styles"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { createVuetify } from "vuetify"

// pages
import About from "./customization/pages/AboutSection.vue"
import Projects from "./customization/pages/ProjectsSection.vue"

const vuetify = createVuetify({ components, directives })

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },

  enhanceApp({ app, router, siteData }) {
    app.component("about", About)
    app.component("projects", Projects)
    app.use(vuetify)
  },
} satisfies Theme
