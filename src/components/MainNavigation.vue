<template>
  <div class="main-nav">
    <RouterLink :to="{ path: navProp.prevNavItem.routerPath }" class="main-nav__item">
      <h2>{{ navProp.prevNavItem.itemTitle }}</h2>
    </RouterLink>
    <RouterLink :to="{ path: navProp.nextNavItem.routerPath }" class="main-nav__item">
      <h2>{{ navProp.nextNavItem.itemTitle }}</h2>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";

const navProp = defineProps({
  prevNavItem: {
    type: Object as PropType<{
      routerPath: string;
      itemTitle: string;
    }>,
    required: true
  },
  nextNavItem: {
    type: Object as PropType<{
      routerPath: string;
      itemTitle: string;
    }>,
    required: true
  }
});
</script>

<style scoped>
.main-nav {
  position: absolute;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  width: 100%;
  background-color: var(--dark-blue);
}

.main-nav__item {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  padding: 12px;
  color: var(--white);
}
</style>
