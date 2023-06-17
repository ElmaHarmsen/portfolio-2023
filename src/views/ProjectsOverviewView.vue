<template>
  <div class="projects-view">
    <div class="header-container">
      <h2 class="heading-sub">Projects</h2>
    </div>
    <div class="projects-divider">
      <div class="project-container">
        <StitchyLineHorizontal />
        <div class="project-section">
          <h1>Fast Fashion</h1>
        </div>
        <div class="project-bg-img"></div>
      </div>
      <div class="project-container">
        <StitchyLineHorizontal />
        <div class="project-section">
          <h1>Dusk Till Dark</h1>
        </div>
      </div>
      <div class="project-container">
        <StitchyLineHorizontal />
        <div class="project-section">
          <h1>We Fly Cheap</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StitchyLineHorizontal from "../components/StitchyLineHorizontal.vue";
</script>

<style scoped>
.projects-view {
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
}

.header-container {
  padding: 70px 50px 30px 50px;
}

.projects-divider {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 1;
}

.project-container {
  position: relative;
  display: flex;
  flex-flow: column;
  flex-grow: 1;
}

.project-bg-img {
  display: block;
  background-image: url("../assets/fast-fashion.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  filter: sepia(70%);
  position: absolute;
  z-index: -1;
  width: calc(100vw + 15px);
  height: calc(100% + (2 * 15px));
  margin: -15px;
}

.project-section {
  padding: 30px 50px;
}
</style>
