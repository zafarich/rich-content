<template>
  <div class="flex flex-col transition gap-6">
    <div v-for="(item, index) in content.block" :key="index">
      <div class="flex gap-2">
        <div class="">
          <div
            v-if="content?.theme == 'bullet'"
            class="w-2 h-2 bg-black-grey rounded-full relative top-[10px] transition left-0"
          ></div>
          <span
            v-else-if="content?.theme == 'number'"
            class="font-medium transition text-[20px] cursor-text whitespace-pre"
            :class="[item.title.size]"
            >{{ index + 1 }}.</span
          >
          <div
            class="min-w-[50px] w-[50px]"
            v-else-if="content?.theme == 'image'"
          >
            <img
              class="object-cover select-none mb-4 w-[50px] h-[50px]"
              :src="item.img.src"
              :alt="item.img.alt"
            />
          </div>
        </div>
        <div class="">
          <CContentInput
            class="font-medium text-[20px] cursor-text whitespace-pre"
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

<style scoped></style>
