<template>
  <div class="">
    <transition name="fade">
      <p class="mt-1.5 text-xs text-red">
        {{ message }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  message: string;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
