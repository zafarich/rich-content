<template>
  <a
    :href="item.imgLink || ''"
    target="_blank"
    v-for="(item, index) in content.block"
    :key="index"
    class="flex-center-center flex-col"
    :class="{ 'pointer-events-none': !item.imgLink }"
  >
    <img
      class="w-full h-full object-cover"
      :src="item.img.src"
      :alt="item.img.alt"
      :class="item.img.position"
    />
  </a>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
