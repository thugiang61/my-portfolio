<template>
  <div class="preview-shadow" :style="customWidthHeight + customBgcolor">
    <div class="preview" :style="customWidthHeight + customBordercolor">
      <div v-if="showCorners">
        <div class="corner top-left-corner"></div>
        <div class="corner top-right-corner"></div>
        <div class="corner bottom-left-corner"></div>
        <div class="corner bottom-right-corner"></div>
      </div>

      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  height: String,
  width: String,
  color: String,
  showCorners: {
    type: Boolean,
    default: false,
  },
});

const customWidthHeight = computed(
  () => `width: ${props.width}px; height: ${props.height}px;`,
);

const customBgcolor = computed(
  () =>
    `background-color: ${
      props.color ? props.color : "var(--preview-shadow-background-color)"
    };
    `,
);

const customBordercolor = computed(
  () =>
    `border: 1px solid ${props.color ? props.color : "var(--border-color)"};`,
);
</script>

<style scoped lang="scss">
.preview-shadow {
  position: relative;

  .preview {
    position: absolute;
    top: 20px;
    left: 20px;

    .corner {
      width: 14px;
      height: 14px;
      background-color: #2e2929;

      border-radius: 50%;
      border: 1px solid var(--border-color);

      position: absolute;
    }

    .top-left-corner {
      top: -7px;
      left: -7px;
    }

    .top-right-corner {
      top: -7px;
      right: -7px;
    }

    .bottom-left-corner {
      bottom: -7px;
      left: -7px;
    }

    .bottom-right-corner {
      bottom: -7px;
      right: -7px;
    }
  }
}
</style>
