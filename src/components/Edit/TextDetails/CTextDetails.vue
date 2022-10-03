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
        {{ elements[idx].size }}
        <v-select
          class="mb-2"
          :searchable="false"
          :clearable="false"
          :options="sizes"
          label="title"
          :reduce="(item) => item.size"
          v-model="elements[idx].size"
        >
          <template #no-options> This is the no options slot. </template>
          <template #option="{ title, size }">
            <h3 :class="size">{{ title }}</h3>
          </template>
        </v-select>
        <CChooseColor @color="emitValue(idx, 'color', $event)" />
        <CTextAlignment @align="emitValue(idx, 'align', $event)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import vSelect from "vue-select";

import CChooseColor from "@/components/Edit/ChooseColor/CChooseColor.vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";
import { objectHas } from "@/helpers/global";
import { TextSizes } from "@/helpers/scheme_types";

export interface Props {
  item: object;
}

interface Emits {
  (e: "update-text", v: { type: string; item: string; value: string }): void;
}

withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

const elements = ref([
  {
    type: "title",
    label: "Заголовок",
    size: "text-lg",
  },
  {
    type: "text",
    label: "Основной текст",
    size: "text-sm",
  },
]);

const sizeClasses = [
  "text-xs",
  "text-sm",
  "text-base",
  "text-lg",
  "text-xl",
  "text-2xl",
  "text-3xl",
];

const sizes: { title: string; size: TextSizes }[] = [];
let i = 0;
while (i < 7) {
  sizes.push({ title: `Размер ${i + 1}`, size: sizeClasses[i] });
  i++;
}

function emitValue(idx: number, item: string, e: any): void {
  const obj = {
    type: elements.value[idx].type,
    item,
    value: e,
  };
  $emit("update-text", obj);
}
</script>

<style scoped></style>
