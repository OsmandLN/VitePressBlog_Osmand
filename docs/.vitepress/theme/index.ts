// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "../theme/Customization/customizedStyle.scss"

// pages
import About from "./Customization/Pages/AboutPage.vue"
import Projects from "./Customization/Pages/ProjectPage.vue"

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
  }
} satisfies Theme
