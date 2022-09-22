<template>
  <div class="">
    <h2 class="font-bold text-[24px] leading-[32px] text-black-grey mb-3">
      Конструктор контента
    </h2>
    <p class="text-[14px] leading-[24px] text-black-grey mb-8">
      Соберите свой рич-контент из готовых секций. Меняйте их местами,
      редактируйте текст и содержание каждой секции, а также загружайте свои
      фото.
    </p>
    <VueDraggableNext
      class="dragArea list-group w-full flex flex-col gap-[40px] mt-8"
      v-bind="dragOptions"
      tag="div"
      :list="content"
    >
      <!-- :list="handleContent.value" -->
      <template v-if="content?.length">
        <transition-group type="transition" name="flip-list">
          <div
            class="list-group-item flex bg-white border-grey border-[1px] rounded-[12px] p-6"
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
        <div class="rounded-[12px] preview__drop p-6">
          <div
            class="border-2 select-none border-grey border-dashed rounded-[10px] h-[708px] flex-center-center"
          >
            <p class="text-[20px] font-medium leading-[28px] text-black-grey">
              Перетащите блок сюда
            </p>
          </div>
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

.preview__drop {
  background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f7;
  box-shadow: 0px 4px 24px 1px rgba(0, 0, 0, 0.08);
}
</style>
