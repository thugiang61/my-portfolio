// import { createApp } from "vue/dist/vue.esm-bundler.js";

// // define các hooks cho chính cái #app thì gắn app.component cho #app và xài đc ngoài  #app
// // chư nếu createApp bằg 1 component App bự thì ko gắn component cho App bằng app.component đc, mà phải gắn trg App.vue á?
// => CAI NAO A COMPONENT CHINH THI COMPONENT CON DC GOI VA DUNG TRG DO
// const app = createApp({
//   data() {
//     return { msg: "hello" };
//   },
// });

// app.component("the-button", {
//   template: '<button @click="increaseCount">Click me! {{count}}</button>',
//   data() {
//     return {
//       count: 0,
//     };
//   },
//   methods: {
//     increaseCount() {
//       this.count++;
//     },
//   },
// });

// app.mount("#app");
import { createApp } from "vue";
import { MotionPlugin } from "@vueuse/motion";
import router from "@/router/index";

import "@/assets/css/style.css";
import "@/assets/css/queries.scss";
import "@/assets/css/transitions.css";

import "@/assets/css/theme-color/white-theme.css";
import "@/assets/css/theme-color/blue-theme.css";
import "@/assets/css/theme-color/teal-theme.css";
import "@/assets/css/theme-color/purple-theme.css";

import App from "@/App";

const app = createApp(
  App,
  // {
  // mounted() {
  // },
  // render: (h) => h(App),
  // }
);

// app.provide("isMobile", window.screen.width < 740);
app.use(MotionPlugin);
app.use(router);

app.mount("#app");
