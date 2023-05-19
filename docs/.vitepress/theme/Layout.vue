<template>
  <EBGBanner />

  <EBGHeader :nav="site.themeConfig.nav"/>
  <div id="ebg-body">

    <template v-if="DocTypeEnum.HOME === frontmatter.docType">
      <header class="card title">
        <img  alt="bg3-name-logo"  src="./assets/bg3-logo-name.png">
        <h2>{{ site.description }}</h2>
      </header>
    </template>

    <div v-else class="card scroll-card">
      <EBGIndex v-if="frontmatter.isIndex"
                :docType="frontmatter.docType"
                :index="site.themeConfig.sidebar" />

      <!-- loads the MD content -->
      <Content />
    </div>
  </div>
  <EBGFooter :title="site.title" />
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { Content} from 'vitepress'
import EBGBanner from './components/EBGBanner.vue'
import EBGHeader from './components/EBGHeader.vue'
import EBGFooter from './components/EBGFooter.vue'
import EBGIndex from './components/EBGIndex.vue'
import { DocTypeEnum } from './models/DocData'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
</script>
