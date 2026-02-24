import { defineConfig } from "vitepress";

export default defineConfig({
  vite: {
    ssr: {
      noExternal: ["vuetify"],
    },
  },
  base: "/",
  title: "Osmand Lien",
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/favicon.ico",
      },
    ],
  ],
  description: "Personal Website built with VitePress.",
  themeConfig: {
    nav: [
      {
        text: "Projects",
        link: "/projects",
      },
       {
        text: "Notes",
        link: "/notes/note-cover",
      },
    ],
    sidebar: {
      "/notes/": [
        {
          text: "Notes",
          items: [
            {
              text: "[JS]關於非同步處理機制",
              link: "/notes/JS-async_event_loop",
            },
            {
              text: "note2",
              link: "/notes/note2",
            },
            {
              text: "note3",
              link: "/notes/note3",
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/OsmandLN",
      },
      {
        icon: "linkedin",
        link: "https://linkedin.com/in/osmand-lien-7986a2117",
      },
    ],

    footer: {
      copyright: "© 2026 Osmand Lien. All rights reserved.",
    },
  },
});
