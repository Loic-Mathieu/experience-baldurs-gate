<template>
  <div id="ebg-index">

    <h1>{{getPckg}}</h1>

    <div v-for="index in getIndexes[1]">
      <h2 class="category">{{ index.title }}</h2>
      <ul>
        <li v-for="item in index.children">
          <a :href="item"> {{ item.split('/')[1] }} </a>
        </li>
      </ul>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { DocTypeEnum } from '../models/DocData'

export default defineComponent({
  name: 'EBGIndex',
  props: ['docType', 'index'],
  data() {
    return {
      DocTypeEnum
    }
  },
  computed: {
    getPckg() {
      return (this.docType ?? '').toUpperCase();
    },
    getIndexes() {
      const pckg = this.docType;
      return Object.entries(this.index).find(([key, value]) => key.includes(pckg))
    }
  }
})
</script>


