<template>
  <div class="bg-white-300 grid grid-cols-2 p-1 gap-[5px] rounded">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="rounded-[7px] w-full h-[38px] flex-center-center cursor-pointer"
      @click="handleActive(item)"
      :class="{ 'tab-item ': deviceViewType == item }"
    >
      <Icon :name="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";
import useStore from "@/store/index";
import { storeToRefs } from "pinia";

interface Emits {
  (e: "change", v: string): void;
}
const store = useStore();
const { deviceViewType } = storeToRefs(store)

const $emit = defineEmits<Emits>();
const items = ref<string[]>(["pc", "phone"]);

function handleActive(item: string): void {
  $emit("change", item);
  store.toggleDeviceView(item);
}
</script>

<style scoped>
.tab-item {
  background: linear-gradient(0deg, #ffffff, #ffffff), #fbc100;
}
</style>
