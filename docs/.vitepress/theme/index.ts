// https://vitepress.dev/guide/custom-theme
import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./style.css"
import "../theme/Customization/customizedStyle.scss"
// components
// import SloganTyping from "./Customization/Components/SloganTyping.vue"
// pages
import About from "./Customization/Pages/AboutPage.vue"
import Projects from "./Customization/Pages/ProjectsPage.vue"

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      //     // https://vitepress.dev/guide/extending-default-theme#layout-slots
      // "home-hero-image": () => h(SloganTyping)
    })
  },

  enhanceApp({ app, router, siteData }) {
    // 導入自訂布局
    app.component("about", About)
    app.component("projects", Projects)
  }
} satisfies Theme
