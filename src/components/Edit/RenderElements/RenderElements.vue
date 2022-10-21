<template>
  <transition
    v-if="content?.length && getBlock?.length"
    mode="out-in"
    name="fade"
    tag="div"
    class="flex flex-col gap-10"
  >
    <div :key="activeIndex">
      <CSelect
        v-if="objectHas(getContent, 'theme')"
        @selected="handleListTheme"
        v-bind="{
          options: viewList,
          default: getContent?.theme,
          label: 'Вид',
        }"
      />
      <div v-for="(item, index) in getBlock" :key="index">
        <div
          v-if="!['text', 'video'].includes(getContent?.type)"
          class="flex-center-between mb-8 cursor-pointer hover:opacity-70 transition"
        >
          <CAccordion
            @click="
              getBlock[index].asset.toggle = !getBlock[index].asset.toggle
            "
            :title="`Карточка # ${index + 1}`"
            :toggle="getBlock[index].asset.toggle"
          />

          <transition name="fade">
            <Icon
              v-if="getBlock?.length != 1"
              @click="handleDelete(index)"
              class="cursor-pointer hover:opacity-70 transition"
              name="trash_bin"
              color="#BABAC0"
            />
          </transition>
        </div>

        <transition name="fade">
          <div
            v-if="getBlock[index]?.asset?.toggle"
            class="flex flex-col gap-6 transition"
          >
            <div v-if="objectHas(item, 'reverse')">
              <h6 class="label font-medium mb-4">Другое</h6>

              <CSelect
                v-if="objectHas(item, 'reverse')"
                @selected="getBlock[index].reverse = $event"
                v-bind="{
                  options: imagePosition,
                  default: item.reverse,
                  label: 'Положение изображения',
                }"
              />
            </div>

            <div v-if="objectHas(item, 'img')">
              <CUploadImage
                @uploaded="updateImage(index, $event)"
                :index="index"
              />

              <CErrorMeassage
                v-if="getBlock[index]?.asset?.uploadErr"
                v-bind="{
                  message: getBlock[index].asset.uploadErr,
                }"
              />
            </div>

            <div v-if="objectHas(item, 'img')">
              <CInput
                :model-value="getBlock[index].img.src"
                @input="updateImageInput($event, index)"
                v-bind="{
                  label: 'Прямая ссылка на изображение',
                }"
              />

              <CErrorMeassage
                v-if="getBlock[index]?.asset?.imgLinkErr"
                v-bind="{
                  message: getBlock[index].asset.imgLinkErr,
                }"
              />
            </div>

            <div v-if="objectHas(item, 'video')">
              <CVideoControls
                v-bind="{
                  item,
                  videoTypeOptions,
                  mediaStore,
                }"
              />
            </div>

            <CImageView
              v-if="objectHas(item?.img, 'position')"
              @position="getBlock[index].img.position = $event"
              v-bind="{
                currentPosition: getBlock[index].img.position,
                currentImage: item?.img?.src,
              }"
            />

            <div v-if="objectHas(item, 'clickLink')">
              <CInput
                :model-value="getBlock[index].clickLink"
                @input="updateClickLink($event, index)"
                v-bind="{
                  label: 'Ссылка по клику на изображение',
                }"
              />

              <CErrorMeassage
                v-if="getBlock[index]?.asset?.clickLinkErr"
                v-bind="{
                  message: getBlock[index].asset.clickLinkErr,
                }"
              />
            </div>

            <CInput
              :model-value="item.img.alt"
              @input="getBlock[index].img.alt = $event.target.value"
              v-if="objectHas(item, 'img')"
              v-bind="{
                label: 'Текстовое описание изображения(Alt)',
              }"
            />

            <div
              v-if="objectHas(item, 'theme', 'padding', 'gap')"
              class="flex flex-col gap-2"
            >
              <h4 class="font-medium text-[18px] leading-[20px] mb-2">
                Основные
              </h4>
              <CSelect
                @selected="getBlock[index].theme = $event"
                v-bind="{
                  options: view,
                  default: item.theme,
                  label: 'Вид',
                }"
              />
              <CSelect
                @selected="getBlock[index].gap = $event"
                v-bind="{
                  options: gaps,
                  default: item.gap,
                  label: 'Отступ между заголовком и текстом',
                }"
              />
              <CSelect
                @selected="getBlock[index].padding = $event"
                v-bind="{
                  options: padding,
                  default: item.padding,
                  label: 'Отступ',
                }"
              />
            </div>

            <CTextDetails
              @update-text="(e) => (getBlock[index][e.type][e.item] = e.value)"
              v-bind="{ item }"
            /></div
        ></transition>
      </div>
    </div>
  </transition>
  <div v-else-if="getContent?.type == 'table'">
    <CTableController
      v-bind="{
        item: content[activeIndex]?.content,
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";

import CAccordion from "@/components/Accordion/CAccordion.vue";
import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import CVideoControls from "@/components/Edit/VideoControls/CVideoControls.vue";
import CTableController from "@/components/Edit/TableController/CTableController.vue";
import Icon from "@/components/Icon/Icon.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { objectHas, isValidURL } from "@/helpers/global";
import useMediaStore from "@/store/media";
import useStore from "@/store/index";
import { useToast } from "vue-toastification";
import {
  imagePosition,
  videoTypeOptions,
  view,
  gaps,
  padding,
  viewList,
} from "./data";

const store = useStore();
const mediaStore = useMediaStore();
const { activeIndex, content } = storeToRefs(store);
const ENV_CDN = import.meta.env.VITE_CDN;
const toast = useToast();

const ErrorList = {
  lessThan1mb: "Размер файла должен быть меньше 200КБ",
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
};

const getBlock = computed(() => {
  return content?.value[activeIndex?.value]?.content?.block;
});

const getContent = computed(() => {
  return content?.value[activeIndex?.value]?.content;
});

function updateImageInput(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index, "imgLinkErr");
  getBlock.value[index].img.src = value;
  getBlock.value[index].img.id = undefined;
}

function updateClickLink(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index, "clickLinkErr");
  getBlock.value[index].clickLink = value;
}

function updateErrMessage(
  message: string,
  index: number,
  target: string
): void {
  getBlock.value[index].asset[target] = message;
}

function showErrMessage(value: string, index: number, target: string): void {
  updateErrMessage("", index, target);

  if (value.startsWith("data:")) {
    updateErrMessage(ErrorList["base64"], index, target);
  }

  if (!isValidURL(value)) {
    console.log("invaluid");
    updateErrMessage(ErrorList["invalidUrl"], index, target);
  }
}

function updateImage(index: number, e: any): void {
  updateErrMessage("", index, "uploadErr");
  if (e?.file?.size > 200000) {
    updateErrMessage(ErrorList["lessThan1mb"], index, "uploadErr");
    return;
  }
  if (getBlock.value[index].img.id) {
    mediaStore.setDelete(getBlock.value[index].img.id);
  }

  const formData = new FormData();
  formData.append("upload", e?.file);

  mediaStore
    .postMedia(formData)
    .then((res) => {
      const result = res.data;
      if (result.success) {
        updateErrMessage("", index, "imgLinkErr");
        getBlock.value[index].img.src = ENV_CDN + result.data.path;
        getBlock.value[index].img.id = result.data.id;
      }
    })
    .catch((err) => {
      updateErrMessage(err?.response?.data?.errors[0], index, "uploadErr");
    });
}

function handleListTheme(event: object): void {
  getContent.value.theme = event;

  if (event == "image") {
    for (let i of getBlock.value) {
      i.img = {
        id: undefined,
        src: "https://files.techno-mart.uz/storage/uploads/rich/content/default1416x708_633d63646f747.png",
        alt: "Текстовое описание изображения",
      };
    }
  } else {
    for (let i of getBlock.value) {
      delete i.img;
    }
  }
}

function handleDelete(index: number): void {
  mediaStore.setDelete(getBlock.value[index].img.id)
  getBlock.value.splice(index, 1) 
}
</script>
