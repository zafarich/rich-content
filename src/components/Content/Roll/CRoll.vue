<template>
  <a
    :href="item.clickLink || ''"
    target="_blank"
    v-for="(item, index) in content.block"
    :key="index"
    class="flex-center-center flex-col"
    :class="{ 'pointer-events-none': !item.clickLink }"
  >
    <img
      class="w-full h-full object-cover"
      :src="checkSrc(item.img.src)"
      :alt="item.img.alt"
      :class="item.img.position"
    />
  </a>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";
import { checkSrc } from "@/helpers/global";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

withDefaults(defineProps<Props>(), {});
defineEmits<Emits>();
</script>
