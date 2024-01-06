<template>
  <div :class="{ header: true, sticky: isSticky }">
    <div class="ios-dots">
      <HeaderDot :dot-color="red" />
      <HeaderDot :dot-color="yellow" />
      <HeaderDot :dot-color="green" />
    </div>

    <span class="header-title" v-if="showTitle || isSticky">
      <router-link to="/home#intro">
        <span v-if="!isMobile">Hi, I'm </span>Giang Nguyen
      </router-link>
    </span>

    <div class="nav-bar">
      <!-- <a href="#intro">Intro</a>
      <a href="#about-me">About&nbsp;me</a>
      <a href="#past-projects">Past&nbsp;projects</a>
      <a href="#contact-me">Contact&nbsp;me</a> -->

      <div
        v-if="isOpenMenuList"
        :class="{ 'menu-list': true, mobile: isMobile }"
      >
        <router-link to="/home#intro" @click="menuIconClicked = false"
          >Intro</router-link
        >
        <router-link to="/home#about-me" @click="menuIconClicked = false"
          >About&nbsp;me</router-link
        >
        <router-link to="/home#past-projects" @click="menuIconClicked = false"
          >Past&nbsp;projects</router-link
        >
        <router-link to="/home#contact-me" @click="menuIconClicked = false"
          >Contact&nbsp;me</router-link
        >
      </div>

      <div
        v-if="isMobile"
        :class="{ 'menu-icon': true, clicked: menuIconClicked }"
        @click="menuIconClicked = !menuIconClicked"
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderDot from "@/components/common/HeaderDot";
import useDetectMobile from "@/composables/DetectMobile";
import { ref, defineProps, computed, onMounted, onUnmounted } from "vue";

const SCROLL_Y_APPLY_STICKY = 270;

const red = "#fc6058";
const yellow = "#fec20f";
const green = "#2aca3e";

const { isMobile } = useDetectMobile();
const menuIconClicked = ref(false);
const isSticky = ref(window.scrollY > SCROLL_Y_APPLY_STICKY);
const isOpenMenuList = computed(
  () => !isMobile.value || (isMobile.value && menuIconClicked.value),
);

defineProps({ showTitle: { type: Boolean, default: false } });

onMounted(() => {
  document.addEventListener("scroll", windowScrollDown);
});

onUnmounted(() => {
  document.removeEventListener("scroll", windowScrollDown);
});

function windowScrollDown() {
  // console.log(window.scrollY, window.scrollY > SCROLL_Y_APPLY_STICKY);

  // luc apply sticky header thi vi cai css cua sticky header lam thay doi gtri scrollY nen nh pj se bi nhay nhay header luc keo xuong duoi cung, vi keo xuong ma hien thi scrollY lai tdoi ts cai gtri ko hien
  isSticky.value = window.scrollY > SCROLL_Y_APPLY_STICKY;
}
// const isMobile = computed(() => document.body.clientWidth < 740);
// function toggleMenuIcon(menuIcon) {
//   menuIcon.classList.toggle("clicked");
// }
</script>

<style scoped lang="scss">
// @import "@/assets/css/queries.scss";

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid var(--border-color);
  background-color: var(--primary-background-color);

  &.sticky {
    position: fixed;
    top: 0;
    left: 0; /*ko bik chỉnh top vs left này để làm j*/
    z-index: 900; /*đưa lên phía trc?!?*/
    width: 97%;
  }

  .ios-dots {
    display: flex;
  }

  .header-title {
    font-size: 24px;
    font-weight: bolder;

    a {
      color: var(--text-color);
    }

    // @include mobile {
    //   font-size: 18px;
    // }
  }

  .nav-bar {
    // display: inline-block;
    // cursor: pointer;
    position: relative;

    a {
      // margin-right: 20px;
      margin-left: 50px;
      font-weight: bolder;
      font-size: 18px;
      transition: 0.2s;

      &:hover {
        border-bottom: 4px solid var(--anchor-color);
      }
    }

    .menu-icon {
      display: inline-block;
      cursor: pointer;

      .bar1,
      .bar2,
      .bar3 {
        width: 35px;
        height: 5px;
        background-color: var(--anchor-color);
        margin: 6px 0;
        transition: 0.4s;
        border-radius: 3px;
      }

      /* Rotate first bar */
      &.clicked .bar1 {
        transform: translate(0, 11px) rotate(-45deg);
      }

      /* Fade out the second bar */
      &.clicked .bar2 {
        opacity: 0;
      }

      /* Rotate last bar */
      &.clicked .bar3 {
        transform: translate(0, -11px) rotate(45deg);
      }
    }

    .menu-list.mobile {
      // float: left;
      display: flex;
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      // margin-top: 20px;
      padding: 5px 20px;
      background-color: var(--primary-background-color);
      // width: 10%;

      position: absolute;
      right: -58%;
      top: 140%; // bottom: 5%;
      z-index: 1;
      // transition: 0.3s;

      a {
        padding: 5px 0;
        margin: 0 auto;
        width: 100%;
        // border: 1px solid var(--border-color);
        text-align: center;
      }
    }
  }
}

@media (max-width: 500px) {
  .header .header-title {
    font-size: 18px;
  }

  .header {
    &.sticky {
      padding-top: 30px;
      width: 91% !important; // ? tsao lai co important ms dc nhi
    }
  }
}
</style>
