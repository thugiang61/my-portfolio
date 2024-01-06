export default function useSelectTheme() {
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
    } else {
      localStorage.setItem("theme", "white");

      document.documentElement.className = "white";
    }
  }

  return { getTheme, setTheme };
}
