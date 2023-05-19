import { defineConfig } from 'vitepress'

const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();

const title = "L'Expérience Baldur's Gate";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/space-hamster.ico' }]
  ],
  title: title,
  description: `Bienvenue sur ${title}`,
  themeConfig: { nav, sidebar },
  rewrites: {
    ':nav/:pkg/:page': ':pkg/:page'
  }

})

