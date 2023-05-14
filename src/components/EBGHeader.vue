<template>
 <header>
   <TabMenu :model="items" />
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TabMenu from 'primevue/tabmenu'

export default defineComponent({
  name: 'EBGHeader',
  components: {
    TabMenu
  },
  data () {
    return {
      items: [
        {
          label: 'home',
          icon: 'logo',
          to: '/'
        },
        {
          label: 'about',
          to: '/about'
        }
      ]
    }
  }
})
</script>
