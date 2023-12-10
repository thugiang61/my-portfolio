<template>
  <Transition name="slide-fade">
    <div v-if="showElement" class="grid-layout intro-info">
      <div v-if="showElement" class="left-column center">
        <img
          src="@/assets/imgs/profile-picture.jpg"
          alt="profile-picture"
          class="profile-picture"
        />
        <PersonalizeTheme />
      </div>

      <div class="right-column center">
        <PreviewInfo width="340" height="200" show-corners>
          <h1>What I do</h1>
          <p>
            I study <b>Software Engineer</b> and I'm on my way to become a
            professional <b>Full-stack</b> developer
          </p>
        </PreviewInfo>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted } from "vue";
import PersonalizeTheme from "@/components/HomePage/IntroSection/PersonalizeTheme";
import PreviewInfo from "@/components/common/PreviewInfo";

const showElement = ref(false);
onMounted(() => (showElement.value = true));
</script>

<style scoped lang="scss">
.intro-info {
  background-color: var(--secondary-background-color);
  padding-top: 50px;
  padding-bottom: 50px;
}

.profile-picture {
  width: 300px;
  height: 300px;

  display: block;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid var(--border-color);
}

.left-column {
  height: fit-content;
}

.right-column {
  h1,
  p {
    padding: 0 10px;
  }

  p {
    font-size: 18px;
  }
}
</style>
