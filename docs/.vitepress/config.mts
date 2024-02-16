import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE Fort",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ], // 網站分頁頁籤icon
  description: "Fort built with VitePress.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "Home",
        link: "/index"
      },
      {
        text: "About",
        link: "/about/introduction"
      },
      {
        text: "Notes",
        link: "/notes/list"
      },
      {
        text: "Projects",
        link: "/projects/list"
      }
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/OsmandLN"
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com/in/osmand-lien-7986a2117"
      }
    ],

    footer: {
      copyright: "Copyright &copy; 2024- Osmand Lien"
    }
  }
})
