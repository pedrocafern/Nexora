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

<style scoped>

.logo {
    width: 180px;
}

.navBar{
  display:flex;
  align-items:center;
  justify-content:space-between;

  margin:auto;

  padding:1rem 40px;

  background: rgba(20,20,20,0.45);
  backdrop-filter: blur(10px);
}

.navLinks {
  /* Links */
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.navButtonLink{
  padding: 8px 18px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--color-orange), var(--color-yellow));
  color: black;
  font-weight: 600;
  transition: 0.25s ease;
}

.navButtonLink:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(255,140,26,0.35);
}

a {
  /* Tirar o traço embaixo do link */
  text-decoration: none;
  /* Cor dos links */
  color: var(--text-color);
}

</style>