<template>
  <div class="flex flex-col gap-12">
    <div v-for="(item, index) in content.block" :key="index">
      <img
        class="w-full h-[708px] object-cover select-none mb-4"
        :src="item.img.src"
      />

      <CContentInput
        placeholder="Заголовок"
        class="mb-2 font-medium text-[20px] leading-[28px] cursor-text"
        @updateText="updateText($event, 'title', index)"
      />

      <CContentInput
        placeholder="Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке."
        v-model="desc"
        class="font-normal text-[14px] leading-[24px] cursor-text"
        @updateText="updateText($event, 'text', index)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";
import useStore from "@/store/index";

export interface Props {
  content: Content;
}

withDefaults(defineProps<Props>(), {});
const store = useStore();
const { updateText } = store;
</script>

<style scoped></style>
