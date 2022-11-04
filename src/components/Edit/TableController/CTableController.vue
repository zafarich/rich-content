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

    <div class="!mb-7">
      <CAccordion
        class="pb-4"
        @click="lineToggle = !lineToggle"
        v-bind="{
          title: 'Строки',
          toggle: lineToggle,
        }"
      />

      <div v-if="lineToggle" class="flex gap-4">
        <div
          class="line-action transition cursor-pointer"
          v-for="i in lineActions"
          :key="i"
          @click="handleLineAction(i)"
          :class="{
            'line-action__disabled':
              activeTableRowIdx === null && i == 'removeBody',
          }"
        >
          <Icon :name="i" />
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-7">
      <div class="" v-for="(item, index) in getHead" :key="index">
        <div class="flex justify-between items-start">
          <CAccordion
            class="pb-4"
            @click="item.asset.toggle = !item.asset.toggle"
            v-bind="{
              title: `Колонка #${index + 1}`,
              toggle: item.asset.toggle,
            }"
          />
          <transition name="fade">
            <Icon
              v-if="getHead?.length != 1"
              @click="handleDeleteColumn(index)"
              class="cursor-pointer hover:opacity-70 transition"
              name="trash_bin"
              color="#BABAC0"
            />
          </transition>
        </div>

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
              :model-value="checkSrc(item.img.src)"
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
import { storeToRefs } from "pinia";
import { ref, computed, inject } from "vue";

import CInput from "@/components/UI/Input/Input/CInput.vue";
import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";
import useMediaStore from "@/store/media";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CAccordion from "@/components/Accordion/CAccordion.vue";
import Icon from "@/components/Icon/Icon.vue";
import useStore from "@/store/index";
import { checkSrc, isValidURL } from "@/helpers/global";

export interface Props {
  item?: object;
}

const $CDN = inject("cdn");
const store = useStore();
const titleToggle = ref(true);
const lineToggle = ref(true);
const mediaStore = useMediaStore();
const lineActions = ref(["addBodyTop", "addBodyBottom", "removeBody"]);
const props = withDefaults(defineProps<Props>(), {});

const { activeTableRowIdx } = storeToRefs(store);

const getHead = computed(() => {
  return props?.item?.table?.head;
});

const getBody = computed(() => {
  return props?.item?.table?.body;
});

const ErrorList = {
  lessThan1mb: "Размер файла должен быть меньше 200КБ",
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
};

function handleDeleteColumn(index: number): void {
  const [deleted] = getHead.value.splice(index, 1);
  console.log(deleted);
  mediaStore.setDelete(deleted.img.id);
  for (let i of getBody.value) {
    i.splice(index, 1);
  }
}

function handleLineAction(current: string): void {
  const defaultBodyText =
    "Пожалуйста, замените этот текст Вашим собственным. Просто кликните по тексту, чтобы добавить свой текст. Настройте стиль текста в левой колонке.";
  const { body, head } = props.item.table;
  const arr = new Array(head.length).fill(defaultBodyText);
  let rowIdx = activeTableRowIdx.value;

  if (current == "addBodyTop") {
    body.splice(rowIdx || 0, 0, arr);
  } else if (current == "addBodyBottom") {
    rowIdx && body.splice(rowIdx + 1, 0, arr);
    rowIdx == null && body.splice(body.length, 0, arr);
  } else {
    body.splice(rowIdx, 1);
    rowIdx = null;
  }
}

function updateImageInput(event: any, index: number): void {
  let value = event?.target?.value || "";
  if (value.startsWith($CDN)) value = value.replace($CDN, "");
  showErrMessage(value, index, "imgLinkErr");
  getHead.value[index].img.src = value;
  getHead.value[index].img.id = undefined;
}

function updateImage(index: number, e: any): void {
  updateErrMessage("", index, "uploadErr");

  if (getHead.value[index].img.id) {
    mediaStore.setDelete(getHead.value[index].img.id);
  }

  const formData = new FormData();
  formData.append("file", e?.file);

  mediaStore
    .postMedia(formData)
    .then((res) => {
      const result = res.data;
      if (result.success) {
        updateErrMessage("", index, "imgLinkErr");
        getHead.value[index].img.src = "/" + result.data.url;
        getHead.value[index].img.id = result.data.id;
      }
    })
    .catch((err) => {
      updateErrMessage(err?.response?.data?.errors[0], index, "uploadErr");
    });
}

function showErrMessage(value: string, index: number, target: string): void {
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
</script>

<style>
.line-action:hover svg path {
  @apply !fill-yellow transition-all duration-300;
}

.line-action__disabled {
  @apply opacity-50 pointer-events-none;
}
</style>
