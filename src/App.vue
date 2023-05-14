<template>
  <EBGHeader/>
  <div class="content">
    <router-view/>
  </div>
  <EBGFooter/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EBGHeader from '@/components/EBGHeader.vue'
import EBGFooter from '@/components/EBGFooter.vue'

export default defineComponent({
  name: 'App',
  components: { EBGHeader, EBGFooter }
})
</script>

<style>
@import "primevue/resources/themes/lara-light-indigo/theme.css";
@import "primevue/resources/primevue.min.css";
</style>
