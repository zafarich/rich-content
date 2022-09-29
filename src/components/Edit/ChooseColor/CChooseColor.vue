<template>
  <div>
    <h4 class="font-medium text-[14px] leading-[20px] mb-2">Цвет текста</h4>
    <div class="flex-center gap-2">
      <div
        class="w-8 h-8 border-[1px] border-solid border-grey rounded outline-[1px] outline-transparent outline cursor-pointer transition"
        v-for="(item, index) in colors"
        :key="index"
        :style="`background-color: ${item}`"
        :class="{
          '!border-yellow !outline-yellow transition': activeColor == item,
        }"
        @click="handleColor(item)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { TextColors } from "@/helpers/scheme_types";

interface Emits {
  (e: "color", v: TextColors): void;
}

const $emit = defineEmits<Emits>();
const colors = ["#F7F7F7", "#333333", "#BABAC0", "#767676"];
const activeColor = ref<TextColors>("#333333");

function handleColor(color: TextColors): void {
  activeColor.value = color;
  $emit("color", color);
}
</script>

<style scoped></style>
