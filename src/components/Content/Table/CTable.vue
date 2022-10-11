<template>
  <div>
    <table class="table-fixed w-full">
      <thead class="bg-grey-light">
        <tr>
          <th v-for="(item, index) in getHead" :key="index" class="">
            <img
              class="w-24 h-24 my-4 mx-auto object-cover"
              :src="item?.img?.src"
              :alt="item?.img?.alt"
            />
            <CContentInput
              class="mx-3 mb-2 font-medium text-[20px] text-left cursor-text whitespace-pre"
              @updateText="handleText($event, 'text', index)"
              :model-value="item?.text?.value"
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
          <td v-for="(el, idx) in item" :key='idx' class="py-2 px-3 leading-[24px]">
            <CContentInput
              @updateText="handleText($event, 'title', index)"
              :model-value="el"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";
import {computed } from 'vue'

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

const props = withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();
const getHead = computed(() => {
  return props?.content?.table?.head
})
const getBody = computed(() => {
  return props?.content?.table?.body
})

console.log(getBody.value)

console.log(props.content, "content props");

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
