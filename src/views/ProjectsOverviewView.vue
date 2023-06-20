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
        <img
          src="../assets/arrow_forward_ivory-white.svg"
          class="project-arrow"
          alt="Arrow forward white"
        />
        <div class="project-bg-img project-1-bg"></div>
      </div>
      <div class="project-container">
        <StitchyLineHorizontal />
        <div class="project-section">
          <h1>Dusk Till Dark</h1>
        </div>
        <img
          src="../assets/arrow_forward_ivory-white.svg"
          class="project-arrow"
          alt="Arrow forward white"
        />
        <div class="project-bg-img project-2-bg"></div>
      </div>
      <div class="project-container">
        <StitchyLineHorizontal />
        <div class="project-section">
          <h1>We Fly Cheap</h1>
        </div>
        <img
          src="../assets/arrow_forward_ivory-white.svg"
          class="project-arrow"
          alt="Arrow forward white"
        />
        <div class="project-bg-img project-3-bg"></div>
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

.project-container:hover {
  cursor: pointer;
}

.project-container:hover .project-arrow {
  opacity: 1;
  transform: translateX(20px);
}

.project-container:hover .project-bg-img {
  opacity: 1;
}

.project-container:hover .project-section h1 {
  color: var(--ivory-white);
}

.project-arrow {
  opacity: 0;
  position: absolute;
  bottom: 30px;
  left: 30px;
  width: 64px;
  height: 64px;
  transition: all 0.3s ease;
}

.project-bg-img {
  display: block;
  opacity: 0;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 7px;
  filter: sepia(70%);
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: calc(100% + (2 * 15px));
  margin: -15px 0px;
  transition: all 0.7s ease;
}

.project-1-bg {
  background-image: url("../assets/fast-fashion.jpg");
}

.project-2-bg {
  background-image: url("../assets/fast-fashion.jpg");
}

.project-3-bg {
  background-image: url("../assets/fast-fashion.jpg");
}

.project-section {
  padding: 30px 50px;
}

.project-section h1 {
  transition: all 0.3s ease;
}
</style>
