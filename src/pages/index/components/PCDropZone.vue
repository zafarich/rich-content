<template>
  <div class="">
    <h2 class="font-bold text-[30px]">Рич контент</h2>
    <VueDraggableNext
      class="dragArea list-group w-full flex flex-col gap-5 mt-8"
      v-bind="dragOptions"
      tag="div"
    >
      <template v-if="templates?.length">
        <transition-group type="transition" name="flip-list">
          <div
            class="list-group-item flex gap-5"
            v-for="(item, index) in templates"
            :key="index"
          >
            <img
              class="w-full h-[708px] object-cover select-none"
              :src="item.image"
            />
            <div class="inline">
              <Icon
                @click="deleteTemplate(index)"
                name="trash_bin"
                color="#001a34"
                class="w-8 h-8 hover:opacity-75 transition"
              />
            </div>
          </div>
        </transition-group>
      </template>

      <div v-else>
        <div
          class="border-2 select-none border-[#ccc] border-dotted h-[708px] flex-center-center"
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

import Icon from "@/components/Icon/Icon.vue";

const templates = ref([]);

const dragOptions = ref({
  animation: 500,
  disabled: false,
  ghostClass: "ghost",
  group: "people",
  list: templates,
});

function deleteTemplate(index: number) {
  templates.value.splice(index, 1);
}
</script>

<style scoped>
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
</style>
