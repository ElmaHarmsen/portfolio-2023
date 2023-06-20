<template>
  <main>
    <div class="home-view">
      <h2 class="heading-sub">Elma Harmsen</h2>
      <h1 class="heading-main">Hi.</h1>
      <RouterLink to="/projects-overview">
        <button class="home-button">
          <h2>My work</h2>
        </button>
      </RouterLink>
      <RouterLink to="/about">
        <button class="home-button">
          <h2>Me</h2>
        </button>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import MainNavigation from "@/components/MainNavigation.vue";
</script>

<style scoped>
.home-view {
  min-height: 100vh;
  padding: 70px 50px;
}

.heading-main {
  position: absolute;
  top: 50%;
}

.home-button {
  background-color: transparent;
  color: var(--rusty-brown);
  border: 2px dashed var(--rusty-brown);
  border-radius: 5px;
  height: 60px;
  width: 260px;
  cursor: pointer;
}
</style>
