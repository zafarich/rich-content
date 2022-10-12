<template>
  <div class="bg-white-300 grid grid-cols-2 p-1 gap-[5px] rounded">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="rounded-[7px] w-full h-[38px] flex-center-center cursor-pointer"
      @click="handleActive(item)"
      :class="{ 'tab-item ': activeItem == item }"
    >
      <Icon :name="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";

interface Emits {
  (e: "change", v: string): void;
}

const $emit = defineEmits<Emits>();
const items = ref<string[]>(["pc", "phone"]);
const activeItem = ref<string>("pc");
$emit("change", activeItem.value);

function handleActive(item: string): void {
  activeItem.value = item;
  $emit("change", item);

  if (item === "phone") {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}
</script>

<style scoped>
.tab-item {
  background: linear-gradient(0deg, #ffffff, #ffffff), #fbc100;
}
</style>
