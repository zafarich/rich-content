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
      <div class="flex flex-col gap-10">
        <!-- V_FOR -->
        <div class="">
          <div class="flex-center-between mb-8">
            <div class="flex-center gap-[10px]">
              <h6 class="tracking-[0.2px] text-[18px] leading-[20px] font-bold">
                Карточка #1
              </h6>
              <Icon name="arrow_down" />
            </div>
            <Icon name="trash_bin" color="#BABAC0" />
          </div>

          <div class="flex flex-col gap-6">
            <CUploadImage />
            <CImageView />
            <CInput
              v-bind="{
                label: 'Ссылка по клику на изображение',
              }"
            />
            <CInput
              v-bind="{
                label: 'Текстовое описание изображения(Alt)',
              }"
            />
            <CChooseColor />
            <CTextAlignment />
          </div>
        </div>

        <CButton class="bg-[#FBC1004D] !px-4 flex-center gap-2">
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
import { ref } from "vue";

import CChooseColor from "@/components/Edit/ChooseColor/CChooseColor.vue";
import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import Icon from "@/components/Icon/Icon.vue";
import CTab from "@/components/Tab/CTab.vue";
import CButton from "@/components/UI/Button/Cbutton.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, content } = storeToRefs(store);

const tab = ref<"pc" | "phone">("");

function handleBack() {
  step.value = "drop";
  activeIndex.value = null;
}
</script>

<style scoped></style>
