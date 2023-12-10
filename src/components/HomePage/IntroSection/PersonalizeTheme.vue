<template>
  <h2>Persionalize theme</h2>
  <div class="theme-dots">
    <ThemeDot :dot-color="white" theme-name="white" />
    <ThemeDot :dot-color="blue" theme-name="blue" />
    <ThemeDot :dot-color="teal" theme-name="teal" />
    <ThemeDot :dot-color="purple" theme-name="purple" />
  </div>
  <i>*Theme settings will be saved for your next visit</i>
</template>

<script setup>
import ThemeDot from "@/components/HomePage/IntroSection/ThemeDot";

const white = "#fff";
const blue = "#1b2d41";
const teal = "#6abaa3";
const purple = "#7e4c74";
</script>

<style scoped>
/* h2 {
  line-height: 0;
} */

.theme-dots {
  display: flex;
  vertical-align: top;
  /* height: 110%;
  margin-top: 20px; */
  /* margin-bottom: 20px; */
}

i {
  font-size: 15px;
}
</style>
