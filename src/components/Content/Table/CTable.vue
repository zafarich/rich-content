<template>
  <div class="overflow-auto">
    <div class="min-w-[600px]">
      <CContentInput
        class="mb-4 font-medium text-[20px] leading-[28px] text-left cursor-text whitespace-pre"
        :model-value="content?.title?.value"
        @updateText="handleBodyText($event, 'title')"
        :style="`color: ${content.title.color}`"
        :class="[content.title.align, content.title.size]"
      />
      <table class="table-fixed w-full">
        <thead class="bg-grey-light">
          <tr>
            <th
              v-for="(item, index) in getHead"
              :key="index"
              class="!min-w-[120px] w-full"
            >
              <img
                class="w-24 h-24 my-4 mx-auto object-cover"
                :src="item?.img?.src"
                :alt="item?.img?.alt"
              />
              <CContentInput
                class="mx-3 mb-2 font-medium text-[20px] text-left cursor-text whitespace-pre"
                :class="getHead[index]?.contentAlign"
                :model-value="item?.text?.value"
                @updateText="handleBodyText($event, 'head', index)"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in getBody"
            :key="index"
            :class="{ 'bg-grey-light': index % 2 != 0 }"
          >
            <td
              v-for="(el, idx) in item"
              :key="idx"
              class="py-2 px-3 leading-[24px] min-w-[920px] w-full"
              :class="getHead[idx]?.contentAlign"
            >
              <CContentInput
                @updateText="handleBodyText($event, 'body', index, idx)"
                :model-value="el"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";
import { computed } from "vue";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

const props = withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

const getHead = computed(() => {
  return props?.content?.table?.head;
});

const getBody = computed(() => {
  return props?.content?.table?.body;
});

function handleBodyText(
  event: any,
  type: "head" | "body" | "title",
  colIdx: number,
  rowIdx: number
): void {
  const data = {
    content_type: "table",
    type,
    value: event,
    colIdx,
    rowIdx,
  };

  $emit("updateData", data);
}
</script>

<style scoped></style>
