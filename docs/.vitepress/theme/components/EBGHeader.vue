<template>
 <header>
   <ul>
     <li><a href="/">Home</a></li>
     <li v-for="item in nav">
       <a :href="item.link">{{item.text}}</a>
     </li>
   </ul>
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBGHeader',
  props: ['nav'],
})
</script>
