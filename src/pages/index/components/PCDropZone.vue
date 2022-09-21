<template>
  <div class="">
    <VueDraggableNext
      class="dragArea list-group w-full"
      :list="templates"
      group="people"
      @change="log"
      :move="checkMove"
    >
      <div class="flex flex-col gap-5" v-if="templates?.length">
        <div v-for="(item, index) in templates" :key="index" class="">
          <img class="w-full h-[708px] object-cover" :src="item.image" />
        </div>
      </div>

      <div v-else>
        <h2 class="font-bold text-[30px]">Конструктор рич-контента</h2>

        <div
          class="border-2 border-[#ccc] border-dotted mt-8 h-[700px] flex-center-center"
        >
          <p class="text-[20px] font-semibold">Drop Here</p>
        </div>
      </div>
    </VueDraggableNext>
    <pre>{{ templates }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

const templates = ref([]);

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
