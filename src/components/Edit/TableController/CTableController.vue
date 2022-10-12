<template>
  <div>
    <CAccordion
      class="mb-8"
      @click="titleToggle = !titleToggle"
      v-bind="{
        title: 'Заголовок',
        toggle: titleToggle,
      }"
    />
    <CTextDetails
      v-if="titleToggle"
      @update-text="(e) => (item[e.type][e.item] = e.value)"
      v-bind="{
        item,
        showTitle: false,
      }"
    />

    <div class="flex flex-col gap-6">
      <div class="" v-for="(item, index) in item?.table?.head" :key="index">
        <CAccordion
          class="mb-8"
          @click="item.asset.toggle = !item.asset.toggle"
          v-bind="{
            title: `Колонка #${index + 1}`,
            toggle: item.asset.toggle,
          }"
        />

        <div v-if="item.asset.toggle" class="flex flex-col gap-5">
          <CTextAlignment
            @align="item.contentAlign = $event"
            :align="item?.contentAlign"
          />

          <div>
            <CUploadImage
              @uploaded="updateImage(index, $event)"
              :index="index"
            />

            <CErrorMeassage
              v-if="item.asset?.uploadErr"
              v-bind="{
                message: item.asset.uploadErr,
              }"
            />
          </div>

          <!-- <div>
            <CInput
              :model-value="item.img.src"
              @input="updateImageInput($event, index)"
              v-bind="{
                label: 'Прямая ссылка на изображение',
              }"
            />

            <CErrorMeassage
              v-if="item.asset?.imgLinkErr"
              v-bind="{
                message: item.asset.imgLinkErr,
              }"
            />
          </div> -->
          <CInput
            :model-value="item.img.alt"
            @input="item.img.alt = $event.target.value"
            v-bind="{
              label: 'Текстовое описание изображения(Alt)',
            }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CInput from "@/components/UI/Input/Input/CInput.vue";
import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import { ref } from "vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";

import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CAccordion from "@/components/Accordion/CAccordion.vue";

export interface Props {
  item?: object;
}

const titleToggle = ref(true);
const lineToggle = ref(true);

const props = withDefaults(defineProps<Props>(), {});

function updateImageInput(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index);
  item.img.src = value;
  item.img.id = undefined;
}


function showErrMessage(value: string, index): void {
  updateErrMessage("", index, "clickLinkErr");

  if (value.startsWith("data:")) {
    updateErrMessage(ErrorList["base64"], index, "clickLinkErr");
  }
  if (!isValidURL(value)) {
    updateErrMessage(ErrorList["invalidUrl"], index, "clickLinkErr");
  }
}

function updateErrMessage(
  message: string,
  index: number,
  target: string
): void {
  getBlock.value[index].asset[target] = message;
}


function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

</script>

<style scoped></style>
