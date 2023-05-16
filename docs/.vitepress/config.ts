import { defineConfig } from 'vitepress'

const getConfig = require("vuepress-bar");
const { nav, sidebar } = getConfig();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "L'expérience Baldur's Gate",
  description: "Un carnet de bord",
  themeConfig: { nav, sidebar }
})

