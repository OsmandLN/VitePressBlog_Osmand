import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE Fort",
  head: [["link", { rel: "icon", href: "/bolt-solid_meta.svg" }]], // 網站分頁頁籤icon
  description: "Fort built with VitePress.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/index" },
      { text: "About", link: "/about/introduction" },
      {
        text: "Notes",
        items: [
          // { text: "HTML", link: "/html" },
          { text: "JavaScript", link: "/notes/JavaScript" },
          { text: "TypeScript", link: "/notes/TypeScript" },
          { text: "Vue.js", link: "/notes/VueJS" },
          { text: "React.js", link: "notes/ReactJS" },
          { text: "CSS", link: "/notes/CSS" }
        ]
      },
      { text: "Projects", link: "/projects" }
    ],

    sidebar:
      // 適用於每個頁面都要有此sidebar時
      //  [
      //   {
      //     text: "Examples",
      //     items: [
      //       { text: "Markdown Examples", link: "/markdown-examples" },
      //       { text: "Runtime API Examples", link: "/api-examples" }
      //     ]
      //   }
      //  ],

      // 個別設定不同的sidebar
      {
        "/notes/": [{ text: "JavaScript", link: "", collapsed: true }]
      },
    socialLinks: [
      { icon: "github", link: "https://github.com/OsmandLN" },
      {
        icon: "linkedin",
        link: "https://linkedin.com/in/osmand-lien-7986a2117"
      }
    ]
  }
})
