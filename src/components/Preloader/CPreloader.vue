<template>
  <div class="overflow-hidden relative">
    <div
      v-if="loading"
      :class="preloaderClass"
      class="v-skeleton-loader__image v-skeleton-loader__bone !w-full"
    ></div>
    <template v-else>
      <slot />
    </template>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  loading?: boolean;
  preloaderClass?: string | Array<any>;
}
const props = withDefaults(defineProps<Props>(), {
  preloaderClass: "",
});
</script>

<style scoped>
.v-skeleton-loader__image {
  position: relative;
  background: rgba(0, 0, 0, 0.12);
}

.v-skeleton-loader__bone:after {
  -webkit-animation: loading 1.5s infinite;
  animation: loading 1.5s infinite;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform: translateX(-100%);
  z-index: 1;
}

.v-skeleton-loader__bone:after {
  background: linear-gradient(
    90deg,
    hsla(0, 0%, 100%, 0),
    hsla(0, 0%, 100%, 0.3),
    hsla(0, 0%, 100%, 0)
  );
}

@-webkit-keyframes loading {
  to {
    transform: translateX(100%);
  }
}

@keyframes loading {
  to {
    transform: translateX(100%);
  }
}
</style>
