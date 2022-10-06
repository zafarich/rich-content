<template>
  <div v-for="(item, index) in content.block" :key="index" class="flex">
    <!-- <a
      :href="item.clickLink || ''"
      target="_blank"
      class="flex-center-center flex-col w-1/2"
      :class="{ 'pointer-events-none': !item.clickLink }"
    >
      <img
        class="w-full h-full object-cover"
        :src="item.img.src"
        :alt="item.img.alt"
        :class="item.img.position"
      />
    </a> -->
    <div class="w-1/2 flex-center-center">
      <span>ASKDJLKASJD</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();
</script>

<style scoped></style>
