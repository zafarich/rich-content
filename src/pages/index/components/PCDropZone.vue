<template>
  <div class="">
    <h2 class="font-bold text-[30px]">Конструктор рич-контента</h2>
    <VueDraggableNext
      class="dragArea list-group w-full flex flex-col gap-5"
      v-bind="dragOptions"
      @change="log"
    >
      <template v-if="templates?.length">
        <transition-group type="transition" name="flip-list">
          <div v-for="(item, index) in templates" :key="index" class="">
            <img
              class="w-full h-[708px] object-cover select-none"
              :src="item.image"
            />
          </div>
        </transition-group>
      </template>

      <div v-else>
        <div
          class="border-2 select-none border-[#ccc] border-dotted mt-8 h-[700px] flex-center-center"
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

const dragOptions = ref({
  animation: 0,
  disabled: false,
  ghostClass: "ghost",
  group: "people",
  list: templates,
  move: checkMove,
});

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

<style>
.flip-list-move {
  transition: transform 0.5s;
}
.no-move {
  transition: transform 0s;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
.list-group {
  min-height: 20px;
}
.list-group-item {
  cursor: move;
}
.list-group-item i {
  cursor: pointer;
}
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue-500 text-white;
}
.btn-blue:hover {
  @apply bg-blue-700;
}
</style>
