<template>
  <transition mode="out-in" name="fade" tag="div" class="flex flex-col gap-10">
    <div :key="activeIndex" class="">
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
          <CUploadImage v-if="objectHas(item, 'img')" @upload="hanldeUpload" />
          <CImageView
            v-if="objectHas(item, 'img')"
            @position="updateImgPosition(index, $event)"
            v-bind="{
              currentPosition: getPosition(index),
              currentImage: item?.img?.src,
            }"
          />
          <CInput
            v-if="objectHas(item, 'imgLink')"
            v-bind="{
              label: 'Ссылка по клику на изображение',
            }"
          />
          <CInput
            :model-value="item.img.alt"
            @input="updateImgAlt($event, index)"
            v-if="objectHas(item, 'img')"
            v-bind="{
              label: 'Текстовое описание изображения(Alt)',
            }"
          />

          <CTextDetails v-bind="{ item }" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { CollapseTransition } from "@ivanv/vue-collapse-transition";
import { storeToRefs } from "pinia";
import { computed, inject, ref } from "vue";

import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import Icon from "@/components/Icon/Icon.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { objectHas } from "@/helpers/global";
import useStore from "@/store/index";

const store = useStore();
const { activeIndex, content } = storeToRefs(store);
const $axios: any = inject("axios");

function getPosition(index: number): void {
  return content.value[activeIndex.value].content.block[index].img.position;
}

function deleteBlock(index: number): void {
  content.value[activeIndex.value].content.block.splice(index, 1);
}

function updateImgPosition(index, event) {
  content.value[activeIndex.value].content.block[index].img.position = event;
}

function updateImgAlt(e: any, index: number) {
  content.value[activeIndex.value].content.block[index].img.alt =
    e.target.value;
}
</script>

<style scoped></style>
