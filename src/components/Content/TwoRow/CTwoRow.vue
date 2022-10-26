<template>
  <div class="grid grid-cols-2 gap-12 mobile:grid-cols-1 mobile:gap-6">
    <div class="" v-for="(item, index) in content.block" :key="index">
      <div class="">
        <a
          :href="item.clickLink || ''"
          target="_blank"
          class="w-full h-[200px] flex-center-center"
          :class="{ 'pointer-events-none': !item.clickLink }"
        >
          <img
            class="w-full h-full object-contain select-none mb-4"
            :src="$CDN + item.img.src"
            :alt="item.img.alt"
            :class="item.img.position"
          />
        </a>

        <CContentInput
          class="mb-2 font-medium text-black-grey text-[20px] cursor-text whitespace-pre"
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
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";
import { inject } from "vue";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();
const $CDN = inject("cdn");

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
