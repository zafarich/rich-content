<template>
  <div
    class="bg-white border-b-[1px] border-b-[#ECECEC] border-solid header !h-[78px] pt-3 pb-6"
  >
    <div class="container">
      <div class="flex-center-between">
        <Icon name="texnomart_logo" />
        <CSelect
          @selected="currentLang = $event"
          class="!pb-0"
          v-bind="{
            options: langs,
            default: currentLang,
          }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";
import { ref } from "vue";
import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";

const langs = [
  {
    title: 'uz',
    value: 'uz',
  },
  {
    title: 'ru',
    value: 'ru',
  },
  {
    title: 'en',
    value: 'en',
  },
];
const currentLang = ref("uz");
</script>

<style scoped>
.header {
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.06);
}
</style>
