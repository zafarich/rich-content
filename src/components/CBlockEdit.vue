<template>
  <div class="">
    <div
      @click="$emit('back')"
      class="flex-center gap-3 hover:opacity-80 transition cursor-pointer mb-8"
    >
      <Icon name="arrow_back" />
      <span
        class="tracking-[0.2px] font-medium text-[16px] leading-[24px] "
        >Назад</span
      >
    </div>
    <div class="">
      <h6>Изображения</h6>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";

interface Emits {
  (e: "back"): void;
}

const $emit = defineEmits<Emits>();
</script>

<style scoped></style>
