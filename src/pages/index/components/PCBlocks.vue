<template>
  <div class="bg-[#001a34] h-full text-white p-4">
    <h2 class="font-semibold text-[25px]">Блоки</h2>
    <div class="flex flex-col gap-8 mt-8">
      <CTemplates
        v-for="(item, index) in templates"
        :key="index"
        v-bind="{
          image: item.image,
          desc: item.desc,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CTemplates from "@/components/templates/CTemplates.vue";

import templates from "../datas/template";
</script>

<style scoped></style>
