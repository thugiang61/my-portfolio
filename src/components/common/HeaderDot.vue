<!--<template>
  <div :style="dotColorVar"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["dotColor", "dotSize"]);

const dotColorVar = computed(() => {
  return { "--dot-color": props.dotColor, "--dot-size": props.dotSize };
}); // phai la object co key la string ms dc
</script>

<style scoped>
div {
  width: var(--dot-size);
  height: var(--dot-size);
  border-radius: 50%;
  /* margin: 15px; */

  background-color: var(--dot-color);
}
</style>
-->

<template>
  <div :style="customColor"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["dotColor"]);

const customColor = computed(() => {
  return `background-color: ${props.dotColor}`;
}); // phai la object co key la string ms dc
</script>

<style scoped>
div {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin: 5px;

  box-shadow: -3px 1px 3px -1px rgb(0 0 0 / 75%);
}
</style>
