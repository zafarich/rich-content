<template>
  <div>
    <img
      v-for="(item, index) in content.block"
      :key="index"
      class="w-full h-[708px] object-cover"
      :src="item.img.src"
    />
  </div>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

const props = withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
