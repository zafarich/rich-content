<template>
  <div class="">
    <h6 class="label">Изображение</h6>
    <div class="h-[44px] rounded relative border-2 border-yellow">
      <input
        :id="'file' + index"
        accept="image/*"
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
        <p class="font-medium text-[14px] leading-[20px]">Добавить фото</p>
      </div>
    </div>
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
  if (image.url) {
    image.url = null;
    image.file = null;
  }

  image.file = event.target.files[0];
  imageName.value = image.file?.name;
  const reader = new FileReader();
  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      image.url = e.target?.result;
    };
    $emit("uploaded", image);
  }
};
const getFile = (index: number): void => {
  const input = document.getElementById(`file${index}`);
  input?.click();
};
</script>
