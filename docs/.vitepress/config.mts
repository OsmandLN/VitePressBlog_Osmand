import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FE Fort",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]], // 網站分頁頁籤icon
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
          { text: "JavaScript", link: "/notes/JavaScript" }, // 第一層: 定義layout: doc
          { text: "TypeScript", link: "/notes/TypeScript" },
          { text: "Vue.js", link: "/notes/VueJS" },
          { text: "React.js", link: "notes/ReactJS" },
          { text: "CSS", link: "/notes/CSS" }
        ]
      },
      { text: "Projects", link: "/projects/projects" }
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
        //----- Notes -----//
        // JavaScript
        "/notes/JavaScript": [
          {
            items: [
              { text: "JSArticle1", link: "/notes/JavaScript/article1" },
              { text: "JSArticle2", link: "/notes/JavaScript/article2" },
              { text: "JSArticle3", link: "/notes/JavaScript/article3" }
            ]
          }
        ],
        // TypeScript
        "/notes/TypeScript": [
          {
            items: [
              { text: "TSArticle1", link: "/notes/TypeScript/article1" },
              { text: "TSArticle2", link: "/notes/TypeScript/article2" },
              { text: "TSArticle3", link: "/notes/TypeScript/article3" }
            ]
          }
        ],
        // Vue.js
        "/notes/VueJS": [
          {
            items: [
              { text: "VueJSArticle1", link: "/notes/VueJS/article1" },
              { text: "VueJSArticle2", link: "/notes/VueJS/article2" },
              { text: "VueJSArticle3", link: "/notes/VueJS/article3" }
            ]
          }
        ],
        // ReactJS
        "/notes/ReactJS": [
          {
            items: [
              { text: "ReactJSArticle1", link: "/notes/ReactJS/article1" },
              { text: "ReactJSArticle2", link: "/notes/ReactJS/article2" },
              { text: "ReactJSArticle3", link: "/notes/ReactJS/article3" }
            ]
          }
        ],
        // CSS
        "/notes/CSS": [
          {
            items: [
              { text: "CSSArticle1", link: "/notes/CSS/article1" },
              { text: "CSSArticle2", link: "/notes/CSS/article2" },
              { text: "CSSArticle3", link: "/notes/CSS/article3" },
              { text: "CSSArticle4", link: "/notes/CSS/article4" },
              { text: "CSSArticle5", link: "/notes/CSS/article5" },
              { text: "CSSArticle6", link: "/notes/CSS/article6" },
              { text: "CSSArticle7", link: "/notes/CSS/article7" },
              { text: "CSSArticle8", link: "/notes/CSS/article8" },
              { text: "CSSArticle9", link: "/notes/CSS/article9" },
              { text: "CSSArticle10", link: "/notes/CSS/article10" },
              { text: "CSSArticle11", link: "/notes/CSS/article11" },
              { text: "CSSArticle12", link: "/notes/CSS/article12" },
              { text: "CSSArticle13", link: "/notes/CSS/article13" },
              { text: "CSSArticle14", link: "/notes/CSS/article14" },
              { text: "CSSArticle15", link: "/notes/CSS/article15" },
              { text: "CSSArticle16", link: "/notes/CSS/article16" },
              { text: "CSSArticle17", link: "/notes/CSS/article17" }
            ]
          }
        ]
      },

    socialLinks: [
      { icon: "github", link: "https://github.com/OsmandLN" },
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
