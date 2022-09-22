<template>
  <div>
    <img
      class="w-full h-[708px] object-cover select-none mb-4"
      :src="content.block.img.src"
    />

    <h4
      contentEditable="true"
      class="mb-2 font-medium text-[20px] leading-[28px] text-black-grey cursor-text"
      ref="title"
    >
      Заголовок
    </h4>
    <p
      contentEditable="true"
      class="text-black-grey font-normal text-[14px] leading-[24px] cursor-text"
    >
      Пожалуйста, замените этот текст Вашим собственным. Просто кликните по
      тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

const props = withDefaults(defineProps<Props>(), {});
const title = ref<HTMLParagraphElement>();
</script>

<style scoped></style>
