<template>
  <div
    v-if="objectHas(item, 'title') || objectHas(item, 'text')"
    class="flex flex-col gap-6"
  >
    <div v-for="(el, idx) in elements" :key="idx" class="">
      <div v-if="objectHas(item, el.type)" class="flex flex-col gap-4">
        <h4
          v-if="showTitle"
          class="font-medium text-[18px] leading-[20px] mb-2"
        >
          {{ el.label }}
        </h4>
        <v-select
          class="mb-2"
          :searchable="false"
          :clearable="false"
          :options="sizes"
          label="title"
          :reduce="(item) => item.size"
          v-model="elements[idx].size"
          @option:selected="emitValue(idx, 'size', $event.size)"
        >
          <template #no-options>
            Ooops, matn o'lchamlari topilmadi :(
          </template>
          <template #option="{ title, size }">
            <h3 :class="size">{{ title }}</h3>
          </template>
        </v-select>
        <CChooseColor @color="emitValue(idx, 'color', $event)" :color="item[el.type].color" />
        <CTextAlignment
          @align="emitValue(idx, 'align', $event)"
          :align="item[el.type].align"
        />
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
  item?: object;
  showTitle?: boolean;
}

interface Emits {
  (e: "update-text", v: { type: string; item: string; value: string }): void;
}

const props = withDefaults(defineProps<Props>(), {
  showTitle: true,
});
const $emit = defineEmits<Emits>();

const elements = ref([
  {
    type: "title",
    label: "Заголовок",
    size: props.item?.title?.size || "text-xl leading-[28px]",
  },
  {
    type: "text",
    label: "Основной текст",
    size: props.item?.text?.size || "text-sm leading-[24px]",
  },
]);



const sizeClasses = [
  "text-xs leading-[22px]",
  "text-sm leading-[24px]",
  "text-base leading-[24px]",
  "text-lg leading-[26px]",
  "text-xl leading-[28px]",
  "text-2xl leading-[32px]",
  "text-3xl leading-[38px]",
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
