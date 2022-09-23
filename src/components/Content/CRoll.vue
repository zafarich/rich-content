<template>
  <div>
    <img class="w-full h-[708px] object-cover" :src="content.block.img.src" />
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
