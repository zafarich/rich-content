<template>
  <div>
    <table class="table-auto w-full">
      <thead class="bg-grey-light">
        <tr>
          <th v-for="key in 3" :key='key' class="">
            <img
              class="w-24 h-24 my-4 mx-auto object-cover"
              src="https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png"
            />
            <CContentInput
              class="mx-3 mb-2 font-medium text-[20px] text-left cursor-text whitespace-pre"
              @updateText="handleText($event, 'title', index)"
              :model-value="'Title'"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='index in 4' :key='index' :class="{'bg-grey-light': index % 2 == 0}">
          <td class='py-2 px-3 leading-[24px]'>
            Пожалуйста, замените этот текст Вашим собственным. Просто кликните
            по тексту, чтобы добавить свой текст. Настройте стиль текста в левой
            колонке.
          </td>
          <td class='py-2 px-3 leading-[24px]'>
            Пожалуйста, замените этот текст Вашим собственным. Просто кликните
            по тексту, чтобы добавить свой текст. Настройте стиль текста в левой
            колонке.
          </td>
          <td class='py-2 px-3 leading-[24px]'>
            Пожалуйста, замените этот текст Вашим собственным. Просто кликните
            по тексту, чтобы добавить свой текст. Настройте стиль текста в левой
            колонке.
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

const props = withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

function handleText(e: any, target: string, index: number): void {
  const data = {
    content_type: "billboard",
    value: e,
    target,
    index,
  };
  $emit("updateData", data);
}
</script>

<style scoped></style>
