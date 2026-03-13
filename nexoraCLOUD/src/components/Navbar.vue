<script setup>
import { RouterLink } from 'vue-router'
import logo from '../assets/Logo.svg'
</script>

<template>
    <header class="navBar">

        <img :src="logo" alt="Nexora Logo" class="logo" />

        <span class="navEspaco"></span>

        <nav class="navLinks">

            <RouterLink to="/">Home</RouterLink>

            <RouterLink to="/about">About</RouterLink>

            <RouterLink to="/login" class="navButtonLink">Login</RouterLink>
        </nav>
    </header>
</template>