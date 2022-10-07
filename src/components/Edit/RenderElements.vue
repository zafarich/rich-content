<template>
  <transition
    v-if="content?.length && content[activeIndex]?.content?.block.length"
    mode="out-in"
    name="fade"
    tag="div"
    class="flex flex-col gap-10"
  >
    <div :key="activeIndex">
      <div v-for="(item, index) in getBlock" :key="index">
        <div
          @click="getBlock[index].asset.toggle = !getBlock[index].asset.toggle"
          class="flex-center-between mb-8 cursor-pointer hover:opacity-70 transition"
        >
          <div class="flex-center gap-[10px]">
            <h6 class="tracking-[0.2px] text-[18px] leading-[20px] font-bold">
              Карточка # {{ index + 1 }}
            </h6>
            <Icon
              :class="{
                'rotate-[180deg] transition': getBlock[index].asset.toggle,
              }"
              class="transition"
              name="arrow_down"
            />
          </div>
          <transition name="fade">
            <Icon
              v-if="content[activeIndex]?.content?.block?.length != 1"
              @click="getBlock.splice(index, 1)"
              class="cursor-pointer hover:opacity-70 transition"
              name="trash_bin"
              color="#BABAC0"
            />
          </transition>
        </div>

        <transition name="fade">
          <div
            v-if="getBlock[index].asset.toggle"
            class="flex flex-col gap-6 transition"
          >
            <!-- TODO: change if check  -->
            <div class="" v-if="objectHas(item, 'reverse')">
              <h6 class="mb-4 font-medium text-[14px] leading-[20px]">
                Другое
              </h6>
              <CReverseSelect
                v-if="objectHas(item, 'reverse')"
                @selected="getBlock[index].reverse = $event"
                v-bind="{ item }"
              />
            </div>

            <div class="">
              <CUploadImage
                v-if="objectHas(item, 'img')"
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

            <div class="">
              <CInput
                v-if="objectHas(item, 'img')"
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

            <CImageView
              v-if="objectHas(item?.img, 'position')"
              @position="getBlock[index].img.position = $event"
              v-bind="{
                currentPosition: getBlock[index].img.position,
                currentImage: item?.img?.src,
              }"
            />

            <div class="">
              <CInput
                v-if="objectHas(item, 'clickLink')"
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

            <CTextDetails
              @update-text="(e) => (getBlock[index][e.type][e.item] = e.value)"
              v-bind="{ item }"
            /></div
        ></transition>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed, ref } from "vue";

import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CImageView from "@/components/Edit/ImageView/CImageView.vue";
import CReverseSelect from "@/components/Edit/ReverseSelect/CReverseSelect.vue";
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

const ErrorList = {
  lessThan1mb: "Размер файла должен быть меньше 1мб",
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
};

const getBlock = computed(() => {
  return content.value[activeIndex.value].content.block;
});

function updateImageInput(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index);
  getBlock.value[index].img.src = value;
  getBlock.value[index].img.id = undefined;
}

function updateClickLink(event: any, index: number): void {
  const value = event?.target?.value || "";
  showErrMessage(value, index);
  getBlock.value[index].clickLink = value;
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
  getBlock.value[index].asset[target] = message;
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

function updateImage(index: number, e: any): void {
  updateErrMessage("", index, "uploadErr");
  if (e?.file?.size > 1024000) {
    updateErrMessage(ErrorList["lessThan1mb"], index, "uploadErr");
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
        getBlock.value[index].img.src = ENV_CDN + result.data.path;
        getBlock.value[index].img.id = result.data.id;
      }
    })
    .catch((err) => {
      updateErrMessage(err?.response?.data?.errors[0], index, "uploadErr");
    });
}
</script>

<style scoped></style>
