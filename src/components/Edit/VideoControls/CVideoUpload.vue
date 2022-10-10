<template>
  <div class="">
    <h6 class="mb-2 font-medium text-[14px] leading-[20px]">Загрузить видео</h6>
    <div class="h-[44px] rounded relative border-2 border-yellow">
      <input
        :id="'file' + index"
        accept="video/*"
        type="file"
        name="file"
        class="w-0 h-0 absolute"
        @change="handleFile"
      />
      <div
        class="w-full h-full flex-center-center gap-2 cursor-pointer"
        @click="getFile(index)"
      >
        <Icon name="add_photo" />
        <p class="font-medium text-[14px] leading-[20px]">Загрузить видео</p>
      </div>
    </div>
    <p class="mt-2">
      {{ imageName }}
    </p>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";

interface Emits {
  (e: "uploaded", v: string): void;
}
export interface Props {
  index: number;
}

const $emit = defineEmits<Emits>();
withDefaults(defineProps<Props>(), {});

const image = reactive({
  url: null,
  file: null,
});
let imageName = ref("");

const handleFile = (event: any) => {
  console.log(event.target.files[0]);
  if (image.url) {
    image.url = null;
    image.file = null;
  }

  image.file = event.target.files[0];
  imageName.value = image.file?.name;
  image.url = URL.createObjectURL(event.target.files[0]);
  $emit("uploaded", image);
};
const getFile = (index: number): void => {
  const input = document.getElementById(`file${index}`);
  input?.click();
};
</script>
