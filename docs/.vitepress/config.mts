import { defineConfig } from "vitepress"

export default defineConfig({
  base: '/VitePressBlog_Osmand/',
  title: "FE Fort",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico"
      }
    ]
  ],
  description: "Fort built with VitePress.",
  themeConfig: {
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
        link: "/notes/articles/note-cover"
      },
      {
        text: "Projects",
        link: "/projects/list"
      }
    ],
    sidebar: {
      "/notes/articles/": [
        {
          text: "Notes",
          items: [
            {
              text: "[JS]關於非同步處理機制",
              link: "/notes/articles/JS-async_event_loop"
            },
            {
              text: "note2",
              link: "/notes/articles/note2"
            },
            {
              text: "note3",
              link: "/notes/articles/note3"
            }
          ]
        }
      ]
    },
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
