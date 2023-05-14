<template>
  <footer>
    {{copyRight}}
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBGFooter',
  data () {
    return {
      copyRight: '© 2023 Bebou inc'
    }
  }
})
</script>
