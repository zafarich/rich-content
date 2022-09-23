<template>
  <div>
    <img
      class="w-full h-[708px] object-cover select-none mb-4"
      :src="content.block.img.src"
    />

    <CInput
      placeholder="Заголовок"
      v-model="title"
      class="mb-2 font-medium text-[20px] leading-[28px] cursor-text"
    />

    <CInput
      placeholder="Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке."
      v-model="desc"
      class="font-normal text-[14px] leading-[24px] cursor-text"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CInput from "@/components/Input/CInput.vue";
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

const props = withDefaults(defineProps<Props>(), {});
const title = ref("");
const desc = ref("");
</script>

<style scoped></style>
