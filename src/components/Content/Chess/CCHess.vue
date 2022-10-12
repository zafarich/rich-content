<template>
  <div class="flex flex-col gap-12">
    <div
      v-for="(item, index) in content.block"
      :key="index"
      class="flex flex-center 768:!flex-row flex-col h-full"
      :class="{ 'flex-row-reverse': item.reverse }"
    >
      <a
        class="w-1/2 h-full flex-center"
        :href="item.clickLink || ''"
        target="_blank"
        :class="{ 'pointer-events-none': !item.clickLink }"
      >
        <img
          class="w-full object-cover"
          :src="item.img.src"
          :alt="item.img.alt"
        />
      </a>

      <div class="flex flex-col w-1/2 p-8">
        <div class="flex-grow"></div>
        <div class="">
          <CContentInput
            class="mb-2 font-medium text-[20px] cursor-text whitespace-pre overflow-hidden"
            @updateText="handleText($event, 'title', index)"
            :model-value="item?.title?.value"
            :style="`color: ${item.title.color}`"
            :class="[item.title.align, item.title.size]"
          />

          <CContentInput
            class="font-normal text-[14px] cursor-text whitespace-pre"
            :model-value="item?.text?.value"
            @updateText="handleText($event, 'text', index)"
            :style="`color: ${item.text.color}`"
            :class="[item.text.align, item.text.size]"
          />
        </div>
        <div class="flex-grow"></div>
      </div>
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
