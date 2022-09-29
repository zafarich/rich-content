<template>
  <div
    v-if="objectHas(item, 'title') || objectHas(item, 'text')"
    class="flex flex-col gap-6"
  >
    <div v-for="(el, idx) in elements" :key="idx" class="">
      <div v-if="objectHas(item, el.type)" class="flex flex-col gap-4">
        <h4 class="font-medium text-[18px] leading-[20px] mb-2">
          {{ el.label }}
        </h4>
        <CChooseColor />
        <CTextAlignment />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CChooseColor from "@/components/Edit/ChooseColor/CChooseColor.vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";
import { objectHas } from "@/helpers/global";

export interface Props {
  item: object;
}

const props = withDefaults(defineProps<Props>(), {});

const elements = [
  {
    type: "title",
    label: "Заголовок",
  },
  {
    type: "text",
    label: "Основной текст",
  },
];
</script>

<style scoped></style>
