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
      <CTab @change="tab = $event" />
    </div>
    <pre v-if="false">
        {{ content[activeIndex] }}
    </pre>
    <div class="mt-8">
      <div class="flex flex-col gap-10" v-if="isContentValid">
        <!-- V_FOR -->
        <div
          class=""
          v-for="(item, index) in content[activeIndex].content.block"
          :key="index"
        >
          <div class="flex-center-between mb-8">
            <div class="flex-center gap-[10px]">
              <h6 class="tracking-[0.2px] text-[18px] leading-[20px] font-bold">
                Карточка # {{ index + 1 }}
              </h6>
              <Icon name="arrow_down" />
            </div>
            <transition name="fade">
              <Icon
                v-if="content[activeIndex]?.content?.block?.length != 1"
                @click="deleteBlock(index)"
                class="cursor-pointer hover:opacity-70 transition"
                name="trash_bin"
                color="#BABAC0"
              />
            </transition>
          </div>

          <div class="flex flex-col gap-6">
            <CUploadImage v-if="objectHas(item, 'img')" />
            <CImageView v-if="objectHas(item, 'img')" />
            <CInput
              v-if="objectHas(item, 'imgLink')"
              v-bind="{
                label: 'Ссылка по клику на изображение',
              }"
            />
            <CInput
              v-if="objectHas(item, 'alt')"
              v-bind="{
                label: 'Текстовое описание изображения(Alt)',
              }"
            />

            <CTextDetails v-bind="{ item }" />
          </div>
        </div>

        <CButton
          @click="addBlock"
          class="!bg-[#FBC1004D] !px-4 flex-center gap-2"
        >
          <Icon name="add" />
          <span
            class="text-black-grey delay-100 font-medium tracking-[0.5px] !leading-sm text-[14px] select-none"
            :class="textClass"
          >
            Добавить
          </span>
        </CButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CollapseTransition } from "@ivanv/vue-collapse-transition";
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import Icon from "@/components/Icon/Icon.vue";
import CTab from "@/components/Tab/CTab.vue";
import CButton from "@/components/UI/Button/Cbutton.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { objectHas } from "@/helpers/global";
import Scheme from "@/helpers/scheme";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, content } = storeToRefs(store);

const tab = ref<"pc" | "phone">("");

const isContentValid = computed(() => {
  if (!content?.value[activeIndex.value]?.content?.block?.length) {
    return false;
  }

  return true;
});

function handleBack() {
  step.value = "drop";
  activeIndex.value = null;
}

function addBlock(): void {
  let current = content.value[activeIndex.value].content;
  let add = Scheme[current.type].block[0];
  current.block.push(add);
}

function deleteBlock(index: number): void {
  const length = content.value[activeIndex.value].content.block.length;
  if (length > 1) {
    content.value[activeIndex.value].content.block.splice(index, 1);
  }
  if (!length) {
    content.value.splice(activeIndex.value, 1);
    activeIndex.value = null;
    step.value = "drop";
  }
}
</script>

<style scoped></style>
