<template>
  <h1>Contact</h1>
  <MainNavigation
    :prevNavItem="{ routerPath: '/project', itemTitle: 'Project' }"
    :nextNavItem="{ routerPath: '/', itemTitle: 'About' }"
  />
</template>

<script setup lang="ts">
import MainNavigation from "@/components/MainNavigation.vue";
</script>
