<template>
  <div class="">
    <h2 class="font-bold text-[24px] leading-[32px] mb-3">
      {{ isFullScreen ? "Предпросмотр рич-контента" : "Конструктор контента" }}
    </h2>
    <p class="text-[14px] leading-[24px]" v-show="!isFullScreen">
      Соберите свой рич-контент из готовых секций. Меняйте их местами,
      редактируйте текст и содержание каждой секции, а также загружайте свои
      фото.
    </p>
    <div class="flex flex-center-between mt-8">
      <CTab
        v-if="isFullScreen"
        class="min-w-[100px]"
        @change="deviceType = $event"
      />
      <CButton
        @click="
          store.toggleIsFullScreen();
          deviceType = 'pc';
        "
        :text="isFullScreen ? 'Назад' : 'Предпросмотр'"
        :class="[
          'px-4  border-2 rounded min-w-[106px]',
          isFullScreen ? 'border-transparent ' : '!bg-white border-yellow',
        ]"
      />
      <CButton
        @click="deleteLocalStorageIds"
        v-if="!isFullScreen"
        text="Сохранить"
        class="px-4 rounded"
      />
    </div>
    <VueDraggableNext
      :class="[
        'dragArea list-group w-full flex flex-col gap-[40px] mt-8',
        deviceType === 'phone' ? '!max-w-[320px] mx-auto' : '',
      ]"
      v-bind="dragOptions"
      v-model="content"
      @add="handleAdd"
    >
      <template v-if="content?.length">
        <transition-group type="transition" name="flip-list">
          <div
            v-for="(item, index) in content"
            :key="index"
            class="list-group-item flex gap-[10px] w-full"
          >
            <div
              class="bg-white border-grey border-[1px] rounded-[12px] p-6 preview__content transition"
              :class="{
                '!border-yellow transition':
                  index == activeIndex && !isFullScreen,
              }"
              @click="!isFullScreen && (activeIndex = index)"
            >
              <component
                :is="ContentComponents[item.content.type]"
                @updateData="handleDynamicComponentEvents($event)"
                v-bind="{
                  content: item.content,
                }"
              />
            </div>
            <div
              v-if="!isFullScreen"
              class="w-8 flex flex-col gap-[18px] cursor-default"
            >
              <div
                class="bg-white-100 rounded w-8 h-8 flex-center-center hover:opacity-75 transition cursor-pointer"
                @click="deleteContent(index)"
              >
                <Icon name="trash_bin" color="#001a34" class="w-5 h-5" />
              </div>
              <div class="flex flex-col gap-1">
                <transition-group name="fade">
                  <div
                    v-if="index"
                    :key="index"
                    class="bg-white-100 rounded w-8 h-8 flex-center-center hover:opacity-60 transition"
                    @click="upContent(index)"
                  >
                    <Icon
                      name="arrow_down"
                      color="#001a34"
                      class="w-5 h-5 rotate-[180deg]"
                    />
                  </div>
                  <div
                    v-if="content.length - 1 != index"
                    :key="index"
                    class="bg-white-100 rounded w-8 h-8 flex-center-center hover:opacity-60 transition"
                    @click="downContent(index)"
                  >
                    <Icon name="arrow_down" color="#001a34" class="w-5 h-5" />
                  </div>
                </transition-group>
              </div>
            </div>
          </div>
        </transition-group>
      </template>

      <div v-else-if="!isFullScreen">
        <div
          class="rounded-[12px] preview__drop p-6 !select-none cursor-default"
        >
          <div
            class="border-2 border-grey border-dashed rounded-[10px] h-[708px] flex-center-center select-none"
          >
            <p class="text-[20px] font-medium leading-[28px] select-none">
              Перетащите блок сюда
            </p>
          </div>
        </div>
      </div>
    </VueDraggableNext>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref, watch } from "vue";
import { VueDraggableNext } from "vue-draggable-next";
import { uuidv4 } from "@/helpers/global";

import CBillboard from "@/components/Content/Billboard/CBillboard.vue";
import CChess from "@/components/Content/Chess/CChess.vue";
import CRoll from "@/components/Content/Roll/CRoll.vue";
import CList from "@/components/Content/List/CList.vue";
import CTable from "@/components/Content/Table/CTable.vue";
import CText from "@/components/Content/Text/CText.vue";
import CThreeRow from "@/components/Content/ThreeRow/CThreeRow.vue";
import CTwoRow from "@/components/Content/TwoRow/CTwoRow.vue";
import CVideo from "@/components/Content/Video/CVideo.vue";
import Icon from "@/components/Icon/Icon.vue";
import CTab from "@/components/Tab/CTab.vue";
import CButton from "@/components/UI/Button/Cbutton.vue";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, content, isFullScreen } = storeToRefs(store);
const { deleteContent, upContent, downContent } = store;
const deviceType = ref("deviceType");

const ContentComponents = {
  roll: CRoll,
  billboard: CBillboard,
  chess: CChess,
  chessReverse: CChess,
  twoRow: CTwoRow,
  threeRow: CThreeRow,
  video: CVideo,
  text: CText,
  list: CList,
  table: CTable,
};

const dragOptions = ref({
  animation: 500,
  disabled: false,
  ghostClass: "ghost",
  group: "contents",
  pull: "clone",
  sort: false,
});

watch(activeIndex, (v): void => {
  if (v != null) {
    step.value = "edit";
  }
});

async function deleteLocalStorageIds() {
  await localStorage.removeItem("delete");
}

function handleDynamicComponentEvents(event: any) {
  switch (event.content_type) {
    case "billboard":
      billboardEvent(event);
      break;
    case "table":
      tableEvent(event);
      break;
    default:
      break;
  }
}
function billboardEvent(e) {
  content.value[activeIndex.value].content.block[e.index][e.target].value =
    e.value;
}

function tableEvent(e): void {
  const { body, head } = content.value[activeIndex.value].content.table;

  if (e.type == "body") {
    body[e.colIdx][e.rowIdx] = e.value;
  } else if(e.type == 'head'){
    head[e.colIdx].text.value = e.value;
  } else {
    content.value[activeIndex.value].content.title = e.value 
  }
}

function handleAdd(e): void {
  activeIndex.value = e?.newIndex;

  // add unique id to video type
  if (content?.value[activeIndex.value]?.content?.type === "video") {
    content.value[activeIndex.value].content.id = uuidv4();
  }
}
</script>

<style scoped>
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

.preview__content {
  /* width: calc(100% - 42px); */
  width: 100%;
}
</style>
