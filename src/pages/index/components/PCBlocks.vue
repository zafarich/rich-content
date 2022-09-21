<template>
  <div class="bg-[#001a34] h-full text-white p-4">
    <h2 class="font-semibold text-[25px]">Блоки</h2>
    <div class="flex flex-col gap-8 mt-8">
      <div
        v-for="(item, index) in templates"
        :key="index"
        @click="handleClick(item.content)"
        class="selectDisable"
      >
        <img
          draggable="true"
          :src="item.image"
          class="!max-w-full !w-full select-none"
        />
        <p class="mt-2 text-white text-[14px] leading-[18px]">
          {{ item.desc }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import templates from "../datas/template";

function handleClick(item) {
  console.log(item);
}
</script>

<style scoped></style>
