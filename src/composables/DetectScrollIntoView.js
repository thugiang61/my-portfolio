import { ref, onMounted, onUnmounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

export default function useDetectScrollIntoView(elementId) {
  const isInView = ref(false);

  onMounted(() => window.addEventListener("scroll", isElementIntoView));
  onUnmounted(() => window.removeEventListener("scroll", isElementIntoView));

  function isElementIntoView() {
    const el = document.getElementById(elementId);
    if (el) {
      let rect = el.getBoundingClientRect();
      let inView = rect.top >= 0 || rect.bottom >= 0;

      if (inView) {
        setTimeout(() => (isInView.value = true), 10);
      } else isInView.value = false;
    }
  }

  onBeforeRouteUpdate((to) => {
    if (to.hash.includes(elementId)) isInView.value = true;
  });
  return { isInView };
}
