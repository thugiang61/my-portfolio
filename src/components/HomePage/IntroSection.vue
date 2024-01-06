<template>
  <div id="intro" class="section-border-bottom">
    <Transition name="slide-fade">
      <div
        v-if="showElement"
        style="width: fit-content; margin: 0 auto; padding-right: 20px"
      >
        <h1 class="intro-title typewriter">Hi, I'm Giang Nguyen</h1>
      </div>
    </Transition>

    <div class="intro-body">
      <TheHeader />
      <IntroInfo />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import TheHeader from "@/components/common/TheHeader";
import IntroInfo from "@/components/HomePage/IntroSection/IntroInfo";

const showElement = ref(false);
onMounted(() => (showElement.value = true));
</script>

<style scoped lang="scss">
.intro-title {
  font-size: 4rem;
  text-align: center;
}

.intro-body {
  border: 4px solid var(--border-color);
  border-bottom: 0;
  margin: 0 30px;
  box-shadow: -3px 1px 3px -1px rgb(0 0 0 /75%);
}
</style>
