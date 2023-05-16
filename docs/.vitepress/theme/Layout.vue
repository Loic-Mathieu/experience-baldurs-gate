<template>
  <EBGHeader :nav="site.themeConfig.nav" :sidebar="site.themeConfig.sidebar" />
  <div id="app">
    <div v-if="frontmatter.home">
      <h1>{{ site.title }}</h1>
      <p>{{ site.description }}</p>
    </div>
    <div v-else>
      <a href="/">Home</a>
      <Content />
    </div>
  </div>
  <EBGFooter />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import EBGHeader from './components/EBGHeader.vue'
import EBGFooter from './components/EBGFooter.vue'
import fs from 'fs'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>
