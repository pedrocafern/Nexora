<template>
    <router-view/>
</template>

<style>
* {
  color: var(--text-color);
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.navbar {
  padding: 1rem;
  display: flex;
  gap: 1rem;

  background: rgba(20, 20, 20, 0.45); /* transparência */
  backdrop-filter: blur(10px);       /* efeito glass */
  -webkit-backdrop-filter: blur(10px); /* suporte Safari */

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

body {
  background-color: var(--color-black-soft);
}
</style>
