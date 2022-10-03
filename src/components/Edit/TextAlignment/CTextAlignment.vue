<template>
  <div>
    <h6 class="mb-2 font-medium text-[14px] leading-[20px]">
      Выравнивание текста
    </h6>
    <div class="flex-center gap-2">
      <div
        v-for="(item, index) in alignments"
        :key="index"
        @click="handleAlignment(item)"
        class="bg-grey-light w-8 h-8 flex-center-center py-[6px] px-[5px] rounded cursor-pointer transition"
        :class="{ 'alignment__active transition': activeAlign == item }"
      >
        <Icon :name="item" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";
import { TextAlignment } from "@/helpers/scheme_types";

interface Emits {
  (e: "align", v: TextAlignment): void;
}
const $emit = defineEmits<Emits>();
const alignments = ["text-left", "text-center", "text-right"];
const activeAlign = ref<TextAlignment>("text-left");

$emit("align", activeAlign.value);
function handleAlignment(alignment: TextAlignment) {
  activeAlign.value = alignment;
  $emit("align", alignment);
}
</script>

<style>
.alignment__active path {
  fill: #fbc100;
  transition: all 0.3s;
}
</style>
