<template>
  <div class="flex-center-center flex-col">
    <img
      v-for="(item, index) in content.block"
      :key="index"
      class="w-full max-h-[708px] h-full object-cover"
      :src="item.img.src"
      :alt="item.img.alt"
      :class="item.img.position"
    />
  </div>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
