<template>
  <router-view></router-view>
</template>

<script setup>
import { onMounted } from "vue";
import useSelectTheme from "@/composables/SelectTheme";

const { getTheme, setTheme } = useSelectTheme();

onMounted(() => {
  const currentTheme = getTheme();
  setTheme(currentTheme);
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#app {
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
