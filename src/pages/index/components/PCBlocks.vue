<template>
  <div class="bg-[#001a34] h-full text-white p-4">
    <h2 class="font-semibold text-[25px]">Блоки</h2>
    <div class="flex flex-col gap-8 mt-8">
      <VueDraggableNext
        class="dragArea list-group w-full"
        :list="templates"
        :group="{ name: 'people', pull: 'clone', put: false }"
        :sort="false"
        @change="log"
        :move="checkMove"
      >
        <div
          v-for="(item, index) in templates"
          :key="index"
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
      </VueDraggableNext>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VueDraggableNext } from "vue-draggable-next";

import templates from "../datas/template";

function checkMove(event) {
  console.log("checkMove", event.draggedContext);
  console.log("Future index: " + event.draggedContext.futureIndex);
}
function log(event) {
  const { moved, added } = event;
  if (moved) {
    console.log("moved", moved);
  }
  if (added) {
    console.log("added", added, added.element);
  }
}
</script>

<style scoped></style>
