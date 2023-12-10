import { ref, onMounted, onUnmounted } from "vue";
const WIDTH_APPLY_RESPONSIVE = 850;

export default function useDetectMobile() {
  const isMobile = ref(document.body.clientWidth < WIDTH_APPLY_RESPONSIVE);

  onMounted(() => window.addEventListener("resize", windowWidthChanged));

  onUnmounted(() => window.removeEventListener("resize", windowWidthChanged));

  function windowWidthChanged() {
    isMobile.value = document.body.clientWidth < WIDTH_APPLY_RESPONSIVE;
  }

  return { isMobile };
}
