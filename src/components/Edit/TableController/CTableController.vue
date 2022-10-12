<template>
  <div>
    <div class="!mb-7">
      <CAccordion
        class="pb-4"
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
    </div>

    <div v-if='false' class="!mb-7">
      <CAccordion
        class="pb-4"
        @click="lineToggle = !lineToggle"
        v-bind="{
          title: 'Строки',
          toggle: lineToggle,
        }"
      />

      <div class="flex gap-4">
        <div
          class="line-action transition cursor-pointer"
          v-for="i in lineActions"
          :key="i"
          @click="handleLineAction(i)"
        >
          <Icon :name="i" />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-7">
      <div class="" v-for="(item, index) in item?.table?.head" :key="index">
        <CAccordion
          class="pb-4"
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

          <div>
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
          </div>
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
import { ref, computed } from "vue";

import CInput from "@/components/UI/Input/Input/CInput.vue";
import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";
import useImageStore from "@/store/image";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CAccordion from "@/components/Accordion/CAccordion.vue";
import Icon from "@/components/Icon/Icon.vue";

export interface Props {
  item?: object;
}

const titleToggle = ref(true);
const lineToggle = ref(true);
const imageStore = useImageStore();
const ENV_CDN = import.meta.env.VITE_CDN;
const lineActions = ref(["addBodyTop", "addBodyBottom", "removeBody"]);
const defaultBodyText =
  "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.";

const props = withDefaults(defineProps<Props>(), {});

const getHead = computed(() => {
  return props.item.table.head;
});

const ErrorList = {
  lessThan1mb: "Размер файла должен быть меньше 1мб",
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
};

function handleLineAction(current: string): void {
  switch (current) {
    case "addBodyTop":
      addBodyTop();
      break;

    case "addBodyBottom":
      addBodyTop();
      break;
    default:
      break;
  }
  console.log(current);
}

function addBodyTop(): void {
  const body = props.item.table.body
  const row = body[0].length;
  const arr = new Array(body[0].length).fill(defaultBodyText)

  body.unshift(JSON.parse(JSON.stringify(arr)))

console.log(arr ,'arr')
console.log(body.length)


}

function addBodyBottom(): void {
  // const body = props.item.table.body;
  // const arr = new Array(body[0].length).fill(defaultBodyText)
  // body.push(arr)
}

function updateImageInput(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index, "imgLinkErr");
  getHead.value[index].img.src = value;
  getHead.value[index].img.id = undefined;
}

function updateImage(index: number, e: any): void {
  updateErrMessage("", index, "uploadErr");

  if (e?.file?.size > 1024000) {
    updateErrMessage(ErrorList["lessThan1mb"], index, "uploadErr");
    return;
  }

  const formData = new FormData();
  formData.append("upload", e?.file);

  imageStore
    .postImage(formData)
    .then((res) => {
      const result = res.data;
      if (result.success) {
        getHead.value[index].img.src = ENV_CDN + result.data.path;
        getHead.value[index].img.id = result.data.id;
      }
    })
    .catch((err) => {
      updateErrMessage(err?.response?.data?.errors[0], index, "uploadErr");
    });
}

function showErrMessage(value: string, index: number, target: string): void {
  console.log(value, "value");
  updateErrMessage("", index, target);

  if (value.startsWith("data:")) {
    updateErrMessage(ErrorList["base64"], index, target);
  }
  if (!isValidURL(value)) {
    updateErrMessage(ErrorList["invalidUrl"], index, target);
  }
}

function updateErrMessage(
  message: string,
  index: number,
  target: string
): void {
  getHead.value[index].asset[target] = message;
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

<style>
.line-action:hover svg path {
  fill: #fbc100 !important;
  transition: all 0.3s;
}
</style>
