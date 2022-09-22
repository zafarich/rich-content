<template>
  <div class="">
    <h2 class="text-[24px] text-black-grey font-bold leading-[32px]">Блоки</h2>

    <div
      class="border-[2px] border-[#ECECEC] rounded-[8px] py-2 pr-2 pl-[10px] flex mt-5 mb-6 gap-[10px] w-full"
    >
      <Icon name="alert" class="!w-6 !h-6" />
      <p
        class="text-[12px] leading-[20px] text-black-grey block-list__text font-normal"
      >
        Перетащите блок на страницу рич-контента, зажав левую кнопку мыши
      </p>
    </div>

    <VueDraggableNext
      class="dragArea list-group w-full flex flex-col gap-8 mt-8"
      :list="blocks"
      :group="{ name: 'people', pull: 'clone', put: false }"
      :sort="false"
    >
      <div v-for="(item, index) in blocks" :key="index" class="selectDisable">
        <img
          draggable="true"
          :src="item.block_img"
          class="!max-w-full !w-full select-none"
        />
        <p class="mt-2 text-white text-[14px] leading-[18px]">
          {{ item.block_text }}
        </p>
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";

import Icon from "@/components/Icon/Icon.vue";
import blocks from "@/helpers/blocks";
</script>

<style scoped>
.block-list__text {
  width: calc(100% - 24px);
}
</style>
