<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <nav class="navbar">
            <RouterLink to="/">Home </RouterLink>
            <RouterLink to="/about"> About </RouterLink>
            <RouterLink to="/login"> Login </RouterLink>
        </nav>
    <RouterView />
</template>