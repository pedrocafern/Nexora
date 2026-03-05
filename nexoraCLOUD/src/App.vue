<script setup>
import { RouterLink,  RouterView} from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-toolbar-title>NexoraCLOUD</v-toolbar-title>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </v-app-bar>
  </v-app>
  <main>
    <RouterView />
  </main>
</template>
