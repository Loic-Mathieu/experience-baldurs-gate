<template>
 <header id="nav">
   <div class="header-element">
     <a href="/">
       <img alt="bg3-logo" src="../assets/bg3-logo.png">
     </a>
   </div>
   <div class="menu">
     <ul>
       <li v-for="item in nav">
         <a :href="item.link">{{item.text}}</a>
       </li>
     </ul>
   </div>
   <div class="header-element">
     <!-- place holder -->
   </div>
 </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'EBGHeader',
  props: ['nav'],
})
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

header .header-element {
  width: 80px;
  padding: 3px;
}

header .header-element img {
  width: 80px;
}

ul {
  padding: unset;
}

ul li {
  display: inline;
}

li + li {
  margin-left: 15px;
}

ul li:before {
  content: '\2022';
  margin-right: 3px;
}

ul li a {
  text-decoration: none;
  color: inherit;

  position: relative;
}

ul li a:hover {
  color: white;
}

ul li a::after {
  position: absolute;
  content: '';
  background-color: white;

  width: 100%;
  height: 2px;
  bottom: -15px;
  left: 0;

  transition: 0.25s ease-out;

  transform: scaleY(0);
}

ul li a:hover::after {
  bottom: -8px;
  transform: scaleY(1);
}

.menu {
  padding: 0 110px;
  background-image: url("../assets/fog-1.png");
  background-size: 100% 100%;
}
</style>
