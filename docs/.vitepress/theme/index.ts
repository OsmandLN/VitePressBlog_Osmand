import { h } from "vue"
import type { Theme } from "vitepress"
import DefaultTheme from "vitepress/theme"
import "./styles/theme.scss"
import "vuetify/styles"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import { createVuetify } from "vuetify"
import Layout from "./Layout.vue"

const vuetify = createVuetify({ components, directives })

export default {
  extends: DefaultTheme,
  Layout: Layout,
  enhanceApp({ app, router, siteData }) {
    app.use(vuetify)
  },
} satisfies Theme
