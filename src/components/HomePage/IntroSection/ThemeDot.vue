<template>
  <div :style="customColor" @click="changeTheme(themeName)"></div>
</template>

<script setup>
import useSelectTheme from "@/composables/SelectTheme";
import { computed, defineProps } from "vue";

const props = defineProps(["dotColor", "themeName"]);
const { getTheme, setTheme } = useSelectTheme();

const customColor = computed(() => {
  return `background-color: ${props.dotColor}`;
});

function changeTheme(newTheme) {
  const currentTheme = getTheme();

  if (currentTheme !== newTheme) {
    setTheme(newTheme);
  }
}
</script>

<style scoped>
div {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin: 20px;

  border: 3px solid var(--border-color);
  box-shadow: -3px 1px 3px -1px rgb(0 0 0 / 75%);
  cursor: pointer;
  transition-duration: 0.3s;
}

div:hover {
  border-width: 5px;
  transform: scale(1.2);
}
</style>
