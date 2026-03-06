<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <v-app>
    <v-app-bar >

      <v-toolbar-title class="logoGradient">NexoraCLOUD</v-toolbar-title>
      
      <v-btn to="/" variant="text">Home</v-btn>
      <v-btn to="/about" variant="text">About</v-btn>

    </v-app-bar>

    <v-main>
      <v-container>
         <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
* {
  font-family: 'Noto Sans', noto-sans-100, sans-serif ;
}

.logoGradient {
  background: linear-gradient(
    to bottom,
    #FFFFFF,
    #FFC857,
    #FF8C1A
  );

  background-clip: text;
  -webkit-text-fill-color: transparent;
}


</style>