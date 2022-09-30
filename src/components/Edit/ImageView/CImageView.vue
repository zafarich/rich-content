<template>
  <div>
    <h6 class="mb-2 font-medium text-[14px] leading-[20px]">
      Положение изображения для настольного представления
    </h6>
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
          class="flex-center-center rounded border-[2px] border-solid border-grey w-14 h-14 transition"
        >
          <img :class="item.position" :src="item.img" />
        </div>
        <p class="text-center text-[12px] leading-[16px] mt-1">
          {{ item.text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

import { ImgPosition } from "@/helpers/scheme_types";

interface Emits {
  (e: "position", v: ImgPosition): void;
}

const $emit = defineEmits<Emits>();

const activePosition = ref<ImgPosition>("w-full");
const views = reactive([
  {
    img: "/src/assets/images/default/1416x708.png",
    text: "на всю ширину",
    position: "w-full",
  },
  {
    text: "1/2 ширины",
    img: "/src/assets/images/default/1416x708.png",
    position: "w-3/4",
  },
  {
    img: "/src/assets/images/default/1416x708.png",
    text: "1/3 ширины",
    position: "w-2/4",
  },
  {
    img: "/src/assets/images/default/1416x708.png",
    text: "1/4 ширины",
    position: "w-1/4",
  },
]);

function handlePosition(val: ImgPosition) {
  activePosition.value = val;
  $emit("position", val);
}
</script>
