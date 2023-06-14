<template>
  <main>
    <div class="section__top">
      <h1 class="heading__special">devoted human computer interaction designer</h1>
      <img src="../assets/cloud.png" class="cloud" alt="white cloud with blue shadow" />
      <span class="dot dot__active"></span>
      <span class="chevron chevron__down"></span>
    </div>
    <div class="section__bottom">
      <img src="../assets/photo.jpg" class="about__photo" alt="Photo about me" />
      <div class="about__paragraph">
        <h2>section title</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna velit, iaculis ac
          consequat sed, interdum ac libero. Mauris eget dui ac justo porta volutpat. Quisque id ex
          volutpat erat fermentum pretium auctor sit amet lorem. Fusce urna massa, cursus dapibus
          felis sit amet, semper interdum velit. Vivamus id velit eget dui imperdiet bibendum.
        </p>
      </div>
      <div class="about__pers-skills">
        <h2>section title</h2>
        <div>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
      <div class="about__tech-skills">
        <h2>section title</h2>
        <div>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
      <div class="about__prof-skills">
        <h2>section title</h2>
        <div>
          <p>item</p>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
      <div class="about__educ-master">
        <h2>section title</h2>
        <div>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
      <div class="about__educ-bachelor">
        <h2>section title</h2>
        <div>
          <p>item</p>
          <p>item</p>
          <p>item</p>
        </div>
      </div>
    </div>
  </main>
  <MainNavigation
    :prevNavItem="{ routerPath: '/contact', itemTitle: 'Contact' }"
    :nextNavItem="{ routerPath: '/project', itemTitle: 'Project' }"
  />
</template>

<script setup lang="ts">
import MainNavigation from "@/components/MainNavigation.vue";
</script>

<style scoped>
.section__top,
.section__bottom {
  min-height: 100vh;
  padding: 1rem;
}
.section__bottom {
  display: flex;
  flex-flow: column nowrap;
  row-gap: 80px;
  background-color: var(--white);
}

.about__photo {
  width: 100%;
}

.about__paragraph,
.about__pers-skills,
.about__tech-skills,
.about__prof-skills,
.about__educ-master,
.about__educ-bachelor {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 20px;
  text-align: center;
}
</style>
