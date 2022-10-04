<template>
  <div class="flex flex-col gap-12">
    <div v-for="(item, index) in content.block" :key="index">
      <div class="flex-center-center">
        <img
          class="w-full h-full object-cover select-none mb-4"
          :src="item.img.src"
          :alt="item.img.alt"
          :class="item.img.position"
        />
      </div>

      {{ item?.title?.value }}
      <CContentInput
        class="mb-2 font-medium text-[20px] leading-[28px] cursor-text whitespace-pre"
        @updateText="handleText($event, 'title', index)"
        :model-value="item?.title?.value"
        :style="`color: ${item.title.color}`"
        :class="[item.title.align, item.title.size]"
      />

      {{ item?.text?.value }}
      <CContentInput
        class="font-normal text-[14px] leading-[24px] cursor-text whitespace-pre"
        :model-value="item?.text?.value"
        @updateText="handleText($event, 'text', index)"
        :style="`color: ${item.text.color}`"
        :class="[item.text.align, item.text.size]"
      />
    </div>
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

withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

function handleText(e: any, target: string, idx: number): void {
  const data = {
    content_type: "billboard",
    value: e,
    target,
    idx,
  };
  $emit("updateData", data);
}
</script>

<style scoped></style>
