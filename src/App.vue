<template>
  <router-view></router-view>
  <!-- <Transition name="fade">  -->
  <!-- <HomePage /> -->
  <!-- </Transition> -->
</template>

<script setup>
import { onMounted } from "vue";
// import HomePage from "@/pages/HomePage";
import useSelectTheme from "@/composables/SelectTheme";
// import { database as db } from "@/firebase/config";
// import { collection, addDoc } from "firebase/firestore";

const { getTheme, setTheme } = useSelectTheme();

// async function createNew() {
//   // const newData = {
//   //   name: "Alice",
//   //   subject: "Would like to have a meeting",
//   //   email: "alice@gmail",
//   //   msg: "Do you interested in EdTech field?",
//   // };

//   // const docRef = await addDoc(collection(db, "contacts"), newData);
//   console.log(db, process.env.FIREBASE_API_KEY);
// }

onMounted(() => {
  const currentTheme = getTheme();
  setTheme(currentTheme);
  // console.log("hellp");

  // createNew();
});

// import { onMounted } from "vue";

// onMounted(async () => {

// });
</script>

<style>
/* @import url("https://fonts.googleapis.com/css2?family=Encode+Sans+SC&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

#app {
  /* font-family: Poppins, Roboto, Helvetica, Arial, sans-serif;; */
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* text-align: center;
  margin-top: 60px; */
}
</style>
