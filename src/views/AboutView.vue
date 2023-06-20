<template>
  <div class="about-view">
    <div class="header-container">
      <h2 class="heading-sub">About</h2>
    </div>
    <div class="about-container">
      <StitchyLineHorizontal />
      <img src="../assets/photo.jpg" class="about-photo" alt="About me photo" />
      <StitchyLineHorizontal />
      <div class="about-items__container">
        <p class="about-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam magna velit, iaculis ac
          consequat sed, interdum ac libero. Mauris eget dui ac justo porta volutpat. Quisque id ex
          volutpat erat fermentum pretium auctor sit amet lorem. Fusce urna massa, cursus dapibus
          felis sit amet, semper interdum velit. Vivamus id velit eget dui imperdiet bibendum.
          Mauris eget dui ac justo porta volutpat. Quisque id ex volutpat erat fermentum pretium
          auctor sit amet lorem.
        </p>
        <div class="about-skills">
          <h2 class="heading-sub">Personal skills</h2>
          <div class="about-skills__items">
            <p>Organized & Reliable</p>
            <p>Professional & Determined</p>
            <p>Intuitive & Empathetic</p>
            <p>Creative & Flexible</p>
          </div>
        </div>
        <div class="about-skills">
          <h2 class="heading-sub">Technical skills</h2>
          <div class="about-skills__items">
            <p>HTML, CSS & SCSS</p>
            <p>JavaScript</p>
            <p>Vue.js & React</p>
            <p>Figma</p>
          </div>
        </div>
        <div class="about-skills">
          <h2 class="heading-sub">Professional skills</h2>
          <div class="about-skills__items">
            <p>Human-Computer Interaction</p>
            <p>Interaction Design</p>
            <p>User Interface Design</p>
            <p>Frontend Development</p>
          </div>
        </div>
        <div class="about-education">
          <h2 class="heading-sub">Master of Social Science</h2>
          <div class="about-education__items">
            <p>Human Computer Interaciton</p>
            <p>Uppsala University</p>
            <p>Sweden, 2022-2024</p>
          </div>
        </div>
        <div class="about-education">
          <h2 class="heading-sub">Bachelor of Science</h2>
          <div class="about-education__items">
            <p>Communication and Multimedia Design</p>
            <p>Hanze University of Applied Sciences</p>
            <p>Netherlands, 2017-2022</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import StitchyLineHorizontal from "../components/StitchyLineHorizontal.vue";
</script>

<style scoped>
.header-container {
  padding: 70px 50px 30px 50px;
}

.about-container {
  display: flex;
  flex-flow: column;
}

.about-photo {
  width: 100vw;
  height: calc(100% + (2 * 15px));
  margin: -15px 0px;
  filter: sepia(70%);
  border-radius: 7px;
}

.about-items__container {
  display: flex;
  flex-flow: column;
  row-gap: 70px;
  padding-bottom: 69px;
}

.about-paragraph {
  padding: 45px 50px 0px 50px;
}

.about-skills,
.about-education {
  padding: 0px 50px;
}

.about-skills__items,
.about-education__items {
  display: flex;
  flex-flow: column;
  row-gap: 15px;
  padding-top: 30px;
}
</style>
