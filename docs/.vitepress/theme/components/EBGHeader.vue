<template>
 <header>
   <ul>
     <li v-for="item in nav">
       <a :href="item.link">{{item.text}}</a>
     </li>
   </ul>
   <ul>
     <li v-for="item in sidebar">{{item}}</li>
   </ul>
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBGHeader',
  props: ['nav', 'sidebar'],
})
</script>
