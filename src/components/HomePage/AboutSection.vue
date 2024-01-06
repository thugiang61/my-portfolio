<template>
  <!-- <div id="about-me">
    <Transition name="fade"> -->
  <!-- phai dung v-show de getElementById cho dung -->
  <!-- v-show="showElement" -->
  <!-- <div 
        v-show="isInView"
        class="grid-layout section-border-bottom secondary-background"
      > -->
  <div
    id="about-me"
    class="grid-layout section-border-bottom secondary-background"
    v-motion-fade-visible
  >
    <div class="left-column" style="padding: 20px">
      <div class="border-bottom">
        <h2>More about me</h2>
        <p>
          I build <b>user's interface</b> and love learning
          <b>foreign languages</b>, reading books and listening to music
        </p>
        <p>
          Most of my skills are self-taught and from work experiences, but I
          like and also <b>learn most from</b> interacting and studying with
          each others
        </p>
      </div>

      <!-- <div class="border-bottom"> -->
      <div :class="{ 'border-bottom': isMobile }">
        <div>
          <h2>My skills/ knowledge</h2>
          <p>
            What I have learnt at school and from my job as well as some
            subjects I'm studying hard right now:
            <!-- @click="readFile" -->
            <a href="./NguyenThanhThuGiang_CV.pdf" target="_blank"
              >My full CV/ résumé</a
            >
          </p>
          <div class="skills-list">
            <!-- <div class="left-column"> -->
            <ul>
              <li>C#, .NET</li>
              <li>HTML, CSS, JS</li>
              <li>VueJs</li>
              <li>ThreeJS</li>
            </ul>
            <!-- </div>
          <div class="right-column"> -->
            <ul>
              <li>C++</li>
              <li>English</li>
              <li>French</li>
              <li>...</li>
              <!-- <li>Java</li>
            <li>Python</li> -->
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="right-column center">
      <img
        class="media-profile"
        src="@/assets/imgs/github-profile.png"
        alt="github-profile"
      />

      <h1>Find me on social media</h1>
      <p>
        Facebook:
        <a target="_blank" href="https://www.facebook.com/thugiang.nguyenthanh"
          >@thugiang</a
        >
      </p>
      <p>
        Github:
        <a target="_blank" href="https://github.com/thugiang61">@thugiang61</a>
      </p>

      <h1>Or contact me via</h1>
      <p>
        Gmail: <a @click="copyToClipboard(email)">{{ email }}</a>
      </p>
      <p style="text-align: center">
        Tel:
        <a @click="copyToClipboard(phone)">{{ phone }}</a>
        (Also&nbsp;my&nbsp;<a href="https://zalo.me/pc" target="_blank">Zalo</a
        >&nbsp;number)
      </p>
    </div>
  </div>
  <!-- </Transition> -->

  <!-- <Transition name="slide"> -->
  <TheToaster :show-toaster="showNotification">
    &check;&emsp;Copied to clipboard!
  </TheToaster>
  <!-- </div> -->
</template>

<script setup>
import { ref } from "vue";
import TheToaster from "@/components/common/TheToaster";
import useDetectMobile from "@/composables/DetectMobile";
// import { useRoute } from "vue-router";
// import useDetectScrollIntoView from "@/composables/DetectScrollIntoView";

// const showElement = ref(false);
const showNotification = ref(false);
const { isMobile } = useDetectMobile();
// const route = useRoute();

// NEU DUNG CAI NAY HIEN/ AN DUA TREN SCROLL, THI KHI SCROLL LUC NHAN VAO LINK PAST-PROJECTS DE SCROLL DEN VI TRI #PAST-PROJECTS THI LUC NAY SE BI LAN LON VS CAI DETECT SCROLL CUA ABOUT-ME
// const { isInView } = useDetectScrollIntoView("about-me");
// const showElement = computed(() =>
//   route.path.includes("/projects") ? true : isInView.value,
// );

const email = "thugiang6.1@gmail.com";
const phone = "(+84) 905 093 938";

// function readFile() {
//   window.open(require("src/assets/files/NguyenThanhThuGiang_CV.pdf"), "_blank"); //to open in new tab

//   // var images = require.context("@/assets/files/", false, /\.pdf$/);
//   // return images("./NguyenThanhThuGiang_CV.pdf");
// }

function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
  showNotification.value = true;
  // console.log(showNotification.value);
  setTimeout(() => (showNotification.value = false), 3000);
  // console.log(showNotification.value);
  // Alert the copied text
  // alert("Copied contact: " + value);
}

// function isElementIntoView() {
//   const el = document.getElementById("about-me");
//   let rect = el.getBoundingClientRect();
//   let inView =
//     // rect.width > 0 &&
//     // rect.height > 0 &&
//     rect.top >= 0 || rect.bottom >= 0;
//   // &&
//   // rect.bottom <=
//   //   (window.innerHeight || document.documentElement.clientHeight);
//   console.log(rect.bottom);
//   if (inView) {
//     setTimeout(() => (showElement.value = true), 300);
//     // }
//   } else showElement.value = false;
// }

// onMounted(() => window.addEventListener("scroll", isElementIntoView));
// onUnmounted(() => window.removeEventListener("scroll", isElementIntoView));
</script>

<style scoped lang="scss">
p {
  font-size: 18px;
}

.left-column {
  display: grid;
  align-content: center;

  h2,
  p {
    margin: 30px 0;
  }

  .border-bottom {
    border-bottom: 2px solid var(--border-color);
  }

  .skills-list {
    width: 50%;
    margin: 30px auto;
    padding: 10px;
    border-radius: 10px;
    background-color: var(--skills-list-background-color);

    display: flex;
    justify-content: space-evenly;
  }
}

.right-column {
  margin-bottom: 20px;

  h1 {
    margin: 20px 0;
    text-align: center;
  }

  p {
    margin: 5px;
  }

  a {
    cursor: pointer;
  }

  .media-profile {
    width: 80%;
    margin: 10px auto;
    border-radius: 10px;
    border: 2px solid var(--border-color);
  }
}

// .slide-enter-from {
//   transform: translateX(50px);
//   opacity: 0;
// }

// .slide-enter-active {
//   transition: all 0.3s ease;
// }

// .slide-enter-to {
//   opacity: 1;
//   transform: translateX(0);
// }

// .slide-leave-from {
//   transform: translateX(0);
//   opacity: 1;
// }

// .slide-leave-active {
//   transition: all 0.3s ease;
// }

// .slide-leave-to {
//   transform: translateX(50px);
//   opacity: 0;
// }
</style>
