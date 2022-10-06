<template>
  <transition
    v-if="content?.length && content[activeIndex]?.content?.block.length"
    mode="out-in"
    name="fade"
    tag="div"
    class="flex flex-col gap-10"
  >
    <div :key="activeIndex">
      <div
        v-for="(item, index) in content[activeIndex].content.block"
        :key="index"
      >
        <div
          @click="toggleBlock(index)"
          class="flex-center-between mb-8 cursor-pointer hover:opacity-70 transition"
        >
          <div class="flex-center gap-[10px]">
            <h6 class="tracking-[0.2px] text-[18px] leading-[20px] font-bold">
              Карточка # {{ index + 1 }}
            </h6>
            <Icon
              :class="[
                {
                  'rotate-[180deg] transition':
                    content[activeIndex].content.block[index].asset.toggle,
                },
                'transition',
              ]"
              name="arrow_down"
            />
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

        <transition name="fade">
          <div
            v-if="content[activeIndex].content.block[index].asset.toggle"
            class="flex flex-col gap-6 transition"
          >
            <div class="">
              <CUploadImage
                v-if="objectHas(item, 'img')"
                @uploaded="updateImage(index, $event)"
                :index="index"
              />

              <transition name="fade">
                <p
                  v-if="
                    content[activeIndex].content.block[index].asset.uploadErr
                  "
                  class="mt-1.5 text-xs text-red"
                >
                  {{
                    content[activeIndex].content.block[index].asset.uploadErr
                  }}
                </p>
              </transition>
            </div>

            <div class="">
              <CInput
                v-if="objectHas(item, 'img')"
                :model-value="content[activeIndex].content.block[index].img.src"
                @input="updateImageInput($event, index)"
                v-bind="{
                  label: 'Прямая ссылка на изображение',
                }"
              />

              <transition name="fade">
                <p
                  v-if="
                    content[activeIndex].content.block[index].asset.imgLinkErr
                  "
                  class="mt-1.5 text-xs text-red"
                >
                  {{
                    content[activeIndex].content.block[index].asset.imgLinkErr
                  }}
                </p>
              </transition>
            </div>

            <CImageView
              v-if="objectHas(item, 'img')"
              @position="updateImgPosition(index, $event)"
              v-bind="{
                currentPosition: getPosition(index),
                currentImage: item?.img?.src,
              }"
            />

            <CInput
              v-if="objectHas(item, 'clickLink')"
              :model-value="content[activeIndex].content.block[index].clickLink"
              @input="updateClickLink($event, index)"
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

            <CTextDetails
              @update-text="updateTextDetails(index, $event)"
              v-bind="{ item }"
            /></div
        ></transition>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";

import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CUploadImage from "@/components/Edit/UploadImage/CUploadImage.vue";
import Icon from "@/components/Icon/Icon.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { objectHas } from "@/helpers/global";
import useImageStore from "@/store/image";
import useStore from "@/store/index";

const store = useStore();
const imageStore = useImageStore();
const { activeIndex, content } = storeToRefs(store);
const invalidSize = ref<boolean>(false);
const ENV_CDN = import.meta.env.VITE_CDN;

function getPosition(index: number): void {
  return content.value[activeIndex.value].content.block[index].img.position;
}

function deleteBlock(index: number): void {
  content.value[activeIndex.value].content.block.splice(index, 1);
}

function updateImgPosition(index, event): void {
  content.value[activeIndex.value].content.block[index].img.position = event;
}

function updateImgAlt(e: any, index: number): void {
  content.value[activeIndex.value].content.block[index].img.alt =
    e.target.value;
}

function updateTextDetails(index: number, e: any): void {
  content.value[activeIndex.value].content.block[index][e.type][e.item] =
    e.value;
}

function updateImage(index: number, e: any): void {
  updateErrMessage("", index, "uploadErr");
  if (e?.file?.size > 1024000) {
    updateErrMessage("Размер файла должен быть меньше 1мб", index, "uploadErr");
    invalidSize.value = true;
    return;
  }

  invalidSize.value = false;
  const formData = new FormData();
  formData.append("upload", e?.file);

  imageStore
    .postImage(formData)
    .then((res) => {
      const result = res.data;
      if (result.success) {
        content.value[activeIndex.value].content.block[index].img.src =
          ENV_CDN + result.data.path;

        content.value[activeIndex.value].content.block[index].img.id =
          result.data.id;
      }
    })
    .catch((err) => {
      updateErrMessage(err?.response?.data?.errors[0], index, "uploadErr");
      // eslint-disable-next-line
      console.log("ERROR is occured while uploading:", err);
    });
}

function updateImageInput(event: any, index: number): void {
  updateErrMessage("", index, "imgLinkErr");

  if (event?.target?.value.startsWith("data:")) {
    let message = "Тип изображения base64 не допускается";
    updateErrMessage(message, index, "imgLinkErr");
    return false;
  }

  if (isValidURL(event?.target?.value)) {
    content.value[activeIndex.value].content.block[index].img.src =
      event.target.value;
    content.value[activeIndex.value].content.block[index].img.id = undefined;
  } else {
    updateErrMessage(
      "URL изображения должен быть действительным",
      index,
      "imgLinkErr"
    );
  }
}

function updateClickLink(event: any, index: number): void {
  if (event?.target?.value.startsWith("data:")) {
    return false;
  }
  let setVal = "";

  if (isValidURL(event?.target?.value)) {
    setVal = event.target.value;
  } else {
    setVal = "";
  }
  content.value[activeIndex.value].content.block[index].clickLink = setVal;
}

function isValidURL(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

function updateErrMessage(
  message: string,
  index: number,
  target: string
): void {
  content.value[activeIndex.value].content.block[index].asset[target] = message;
}

function toggleBlock(index: number): void {
  content.value[activeIndex.value].content.block[index].asset.toggle =
    !content.value[activeIndex.value].content.block[index].asset.toggle;
}
</script>

<style scoped></style>
