export default function useSelectTheme() {
  function getTheme() {
    return localStorage.getItem("theme");
  }

  function setTheme(theme) {
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
