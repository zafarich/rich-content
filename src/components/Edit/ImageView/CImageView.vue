<template>
  <div>
    <h6 class="label">Положение изображения для настольного представления</h6>
    <div class="flex-center gap-[5px]">
      <div
        class="w-14 cursor-pointer"
        v-for="(item, index) in views"
        :key="index"
        @click="handlePosition(item.position)"
      >
        <div
          :class="{
            '!border-yellow transition': activePosition == item.position,
          }"
          class="flex-center-center rounded border-[2px] border-solid border-grey w-14 h-14 transition !overflow-hidden"
        >
          <img
            :class="item.position"
            class="transition"
            :src="$CDN + currentImage"
          />
        </div>
        <p class="text-center text-[12px] leading-[16px] mt-1">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, inject } from "vue";

import { ImgPosition } from "@/helpers/scheme_types";

interface Emits {
  (e: "position", v: ImgPosition): void;
}

export interface Props {
  currentPosition: ImgPosition;
  currentImage: string;
}

const $emit = defineEmits<Emits>();
const props = withDefaults(defineProps<Props>(), {});
const $CDN = inject("cdn");

const activePosition = ref<ImgPosition>("");
activePosition.value = props.currentPosition || "w-full h-full";

const views = reactive([
  {
    text: "на всю ширину",
    position: "w-full h-full",
  },
  {
    text: "1/2 ширины",
    position: "w-3/4 h-3/4",
  },
  {
    text: "1/3 ширины",
    position: "w-2/4 !h-2/4",
  },
  {
    text: "1/4 ширины",
    position: "w-1/4 !h-1/4",
  },
]);

function handlePosition(val: ImgPosition) {
  activePosition.value = val;
  $emit("position", val);
}
</script>
