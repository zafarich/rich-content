<template>
  <div class="">
    <h2 class="font-bold text-[30px]">Рич контент</h2>
    <VueDraggableNext
      class="dragArea list-group w-full flex flex-col gap-5 mt-8"
      v-bind="dragOptions"
      tag="div"
      :list="content"
    >
      <!-- :list="handleContent.value" -->
      <template v-if="content?.length">
        <transition-group type="transition" name="flip-list">
          <div
            class="list-group-item flex gap-5"
            v-for="(item, index) in content"
            :key="index"
          >
            <img
              class="w-full h-[708px] object-cover select-none"
              :src="item.content.block.img.src"
            />
            <div class="inline">
              <Icon
                @click="deleteContent(index)"
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
    <pre>{{ content }}</pre>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { VueDraggableNext } from "vue-draggable-next";

import Icon from "@/components/Icon/Icon.vue";
import useContent from "@/composables/useContent";

const dragOptions = ref({
  animation: 500,
  disabled: false,
  ghostClass: "ghost",
  group: "people",
});

const { content, deleteContent } = useContent();
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
