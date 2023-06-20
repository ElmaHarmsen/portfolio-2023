<template>
  <div class="footer-container">
    <div class="footer-lines">
      <StitchyLineHorizontal />
      <StitchyLineHorizontal />
    </div>
    <div class="footer-section">
      <h2 class="heading-sub">Contact</h2>
      <div class="contacts">
        <h3>
          <a href="mailto:elmaharmsen01@gmail.com" target="blank">elmaharmsen01@gmail.com</a>
        </h3>
        <h3>
          <a href="https://www.linkedin.com/in/elma-harmsen/">linkedin.com/in/elma-harmsen</a>
        </h3>
        <h3>
          <a
            href="https://drive.google.com/file/d/1JCQZk-irfRUNiYi-nMuQEwGzgjDMC4Qp/view?usp=sharing"
            target="blank"
            >Download resume</a
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StitchyLineHorizontal from "./StitchyLineHorizontal.vue";
</script>

<style scoped>
.footer-lines {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
}

.footer-section {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  padding: 70px 50px;
}

.contacts {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
}

.contacts h3 a {
  color: var(--rusty-brown);
  text-decoration: 1px underline dashed;
}
</style>
