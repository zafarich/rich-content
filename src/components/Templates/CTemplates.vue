<template>
  <div>
    <img :src="image" class="!max-w-full !w-full" />
    <p class="mt-2 text-white text-[14px] leading-[18px]">{{ desc }}</p>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  image: string;
  desc: string;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
