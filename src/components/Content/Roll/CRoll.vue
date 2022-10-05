<template>
  <div class="flex-center-center flex-col">
    <a
      :href="item.imgLink || ''"
      target="_blank"
      v-for="(item, index) in content.block"
      :key="index"
      :class="{ 'pointer-events-none': !item.imgLink }"
    >
      <img
        class="w-full h-full object-cover"
        :src="item.img.src"
        :alt="item.img.alt"
        :class="item.img.position"
      />
    </a>
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
