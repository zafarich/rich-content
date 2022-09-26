<template>
  <div class="">
    <div
      @click="handleBack"
      class="flex-center gap-3 hover:opacity-80 transition cursor-pointer mb-8"
    >
      <Icon name="arrow_back" />
      <span class="tracking-[0.2px] font-medium text-[16px] leading-[24px]"
        >Назад</span
      >
    </div>
    <div class="">
      <h6 class="font-bold text-[20px] leading-[28px] mb-5">Изображения</h6>
      {{ tab }}
      <CTab @change="tab = $event" />
    </div>
    <pre>
        {{ content[activeIndex] }}
    </pre>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";
import CTab from "@/components/Tab/CTab.vue";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, content } = storeToRefs(store);

const tab = ref<"pc" | "phone">("");

function handleBack() {
  step.value = "drop";
  activeIndex.value = null;
}
</script>

<style scoped></style>
