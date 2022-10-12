<template>
  <div
    class="flex flex-col transition mobile:p-0"
    :class="[content.block[0].theme, content.block[0].padding]"
  >
    <div v-for="(item, index) in content.block" :key="index">
      <CContentInput
        class="font-medium text-[20px] cursor-text whitespace-pre"
        @updateText="handleText($event, 'title', index)"
        :model-value="item?.title?.value"
        :style="`color: ${item.title.color}`"
        :class="[item.title.align, item.title.size, item.gap]"
      />

      <CContentInput
        class="font-normal text-[14px] cursor-text whitespace-pre"
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
