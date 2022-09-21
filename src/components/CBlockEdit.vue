<template>
  <div class="text-white">
    <div
      @click="$emit('back')"
      class="flex-center gap-3 hover:opacity-80 transition cursor-pointer"
    >
      <Icon name="arrow_back" />
      <span class="text-[25px]">Назад</span>
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
