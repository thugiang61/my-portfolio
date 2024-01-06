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
          <!-- class="one-line-typewriter" -->
          <h1>What I do</h1>
          <!-- <div>
            <p class="typewriter first">I study <b>Software Engineer</b> and</p>
            <p class="typewriter second">I'm on my way to become a</p>
            <p class="typewriter third">
              professional <b>Full-stack</b> developer
            </p>
          </div> -->
          <p class="slide-down">
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
onMounted(() => {
  showElement.value = true;
  setInterval(() => {
    console.log("hihi");
  }, 6000);
});
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
