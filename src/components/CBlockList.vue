<template>
  <VueDraggableNext
    class="dragArea list-group w-full flex flex-col gap-8 mt-8"
    :list="blocks"
    :group="{ name: 'people', pull: 'clone', put: false }"
    :sort="false"
  >
    <div v-for="(item, index) in blocks" :key="index" class="selectDisable">
      <img
        draggable="true"
        :src="item.image"
        class="!max-w-full !w-full select-none"
      />
      <p class="mt-2 text-white text-[14px] leading-[18px]">
        {{ item.desc }}
      </p>
    </div>
  </VueDraggableNext>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";

import blocks from "@/helpers/blocks";
</script>

<style scoped></style>
