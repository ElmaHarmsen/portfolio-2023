<script setup lang="ts"></script>

<template>
  <main>
    <div class="section__top">
      <h1 class="heading__special">devoted human computer interaction designer</h1>
      <img src="../assets/cloud.png" class="cloud" alt="white cloud with blue shadow" />
      <span class="dot dot__active"></span>
      <span class="chevron chevron__down"></span>
    </div>
    <div class="section__bottom">
      <h2>header</h2>
      <p>body text here <br />more body text</p>
    </div>
  </main>
</template>

<style>
.section__top,
.section__bottom {
  min-height: 100vh;
  padding: 1rem;
}
.section__bottom {
  background-color: var(--white);
}
</style>
