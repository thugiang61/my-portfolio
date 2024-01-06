// import { ref } from "vue";

export default function useSelectTheme() {
  // const theme = ref("");

  function getTheme() {
    return localStorage.getItem("theme");
  }

  function setTheme(theme) {
    // var element = document.createElement("link");
    // element.setAttribute("rel", "stylesheet");
    // element.setAttribute("type", "text/css");

    if (theme) {
      localStorage.setItem("theme", theme);

      document.documentElement.className = theme;
      // document.getElementById(
      //   "theme-color",
      // ).href = `assets/css/theme-color/${theme}-theme.css`;
      // require(`@/assets/css/theme-color/${theme}-theme.css`);

      // element.setAttribute(
      //   "href",
      //   `@/assets/css/theme-color/${theme}-theme.css`,
      // );
    } else {
      localStorage.setItem("theme", "white");

      document.documentElement.className = "white";
      // document.getElementById("theme-color").href =
      //   "src/assets/css/theme-color/white-theme.css";
      // require("@/assets/css/theme-color/white-theme.css");

      // element.setAttribute(
      //   "href",
      //   "src/assets/css/theme-color/white-theme.css",
      // );
    }
    // document.getElementsByTagName("head")[0].appendChild(element);
  }

  // onMounted(() => {
  //   var element = document.createElement("link");
  //   element.setAttribute("rel", "stylesheet");
  //   element.setAttribute("type", "text/css");

  //   theme.value = localStorage.getItem("theme");
  //   console.log(theme);
  //   if (theme.value)
  //     element.setAttribute(
  //       "href",
  //       `@/assets/css/theme-color/${theme.value}-theme.css`,
  //     );
  //   else
  //     element.setAttribute("href", "@/assets/css/theme-color/white-theme.css");
  //   document.getElementsByTagName("head")[0].appendChild(element);
  //   // getTheme();
  //   // setTheme(theme.value);
  // });

  return { getTheme, setTheme };
}
