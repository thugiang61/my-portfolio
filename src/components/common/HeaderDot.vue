<template>
  <div :style="customColor"></div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps(["dotColor"]);

const customColor = computed(() => {
  return `background-color: ${props.dotColor}`;
});
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
