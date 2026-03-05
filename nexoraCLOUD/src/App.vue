<script setup>
import { RouterLink,  RouterView} from 'vue-router'
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
