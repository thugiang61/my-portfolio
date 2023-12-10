import { ref, onMounted, onUnmounted } from "vue";
import { onBeforeRouteUpdate } from "vue-router";

// diem iu la chi dung cho 1 transition cho 1 component th, vi phia duoi nay dung id
export default function useDetectScrollIntoView(elementId) {
  const isInView = ref(false);
  // const route = useRoute();

  onMounted(() => window.addEventListener("scroll", isElementIntoView));
  onUnmounted(() => window.removeEventListener("scroll", isElementIntoView));

  function isElementIntoView() {
    const el = document.getElementById(elementId);
    if (el) {
      // console.log(document, el, elementId);
      let rect = el.getBoundingClientRect();
      let inView =
        // rect.width > 0 &&
        // rect.height > 0 &&
        rect.top >= 0 || rect.bottom >= 0; // dung || co dung ko?
      // rect.bottom <=
      //   (window.innerHeight || document.documentElement.clientHeight);
      // console.log(rect.top);

      if (inView) {
        setTimeout(() => (isInView.value = true), 10);
        // isInView.value = true;
        // }
      } else isInView.value = false;
    }
  }

  onBeforeRouteUpdate((to) => {
    if (to.hash.includes(elementId)) isInView.value = true;
  });
  // watch(route.params., (newVal) => {
  //   console.log(newVal);
  // });

  return { isInView };
}
