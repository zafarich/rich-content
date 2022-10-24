<template>
  <div class="">
    <div
      @click="handleBack"
      class="flex-center gap-3 hover:opacity-80 transition cursor-pointer mb-8"
    >
      <Icon name="arrow_back" />
      <span class="tracking-[0.2px] font-medium text-[16px] leading-[24px]"
        >Назад</span
      >
    </div>
    <div class="">
      <h6 class="font-bold text-[20px] leading-[28px] mb-5">Изображения</h6>
      <CTab />
    </div>
    <div class="mt-8">
      <div class="">
        <RenderElements />
        <CButton
          v-if="showAddBlock"
          @click="handleAddBlock"
          class="!bg-[#FBC1004D] !px-4 flex-center gap-2 mt-10"
        >
          <Icon name="add" />
          <span
            class="text-black-grey delay-100 font-medium tracking-[0.5px] !leading-sm text-[14px] select-none"
          >
            Добавить
          </span>
        </CButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

import RenderElements from "@/components/Edit/RenderElements/RenderElements.vue";
import Icon from "@/components/Icon/Icon.vue";
import CTab from "@/components/Tab/CTab.vue";
import CButton from "@/components/UI/Button/Cbutton.vue";
import Scheme from "@/helpers/scheme";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, content } = storeToRefs(store);
const addBlockBtn = ref(false);

function handleBack() {
  step.value = "drop";
  activeIndex.value = null;
}

function handleAddBlock(): void {
  let current = content?.value[activeIndex?.value].content;
  if(!current) return; 

  switch (current.type) {
    case "list":
      addList(current);
      break;
    case "table":
      addTable(current);
      break;
    default:
      addOthers(current);
      break;
  }
}

function addOthers(current: object): void {
  const add = JSON.parse(JSON.stringify(Scheme[current.type].block[0]));
  current.block.push(add);
}

function addList(current: object): object {
  let add = JSON.parse(JSON.stringify(Scheme[current.type].block[0]));

  if (current.theme == "image") {
    add.img = {
      id: undefined,
      src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
      alt: "Текстовое описание изображения",
    };
  }

  current.block.push(add);
}

function addTable(current: object): object {
  const { head, body } = current.table;

  if (head.length == 5) addBlockBtn.value = true;

  const defaultBody =
    "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.";
  const defaultHead = {
    img: {
      id: undefined,
      src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
      alt: "Текстовое описание изображения",
    },
    text: {
      value: "Заголовок",
    },
    contentAlign: "text-left",
    asset: {
      toggle: true,
      imgLinkErr: "",
      uploadErr: "",
    },
  };

  head.push(defaultHead);

  for (let i of body) {
    i.push(defaultBody);
  }
}

const showAddBlock = computed(() => {
  if (
    ["text", "video"].includes(content.value[activeIndex.value]?.content?.type)
  ) {
    return false;
  }

  if (addBlockBtn.value) return false;

  return true;
});
</script>

<style scoped></style>
