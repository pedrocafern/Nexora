<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
      <nav>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <HelloWorld msg="You did it!" />
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

<style>
@import  './assets/main.css'


</style>