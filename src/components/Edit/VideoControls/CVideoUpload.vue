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
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from "vue";
import { useToast } from "vue-toastification";
import Icon from "@/components/Icon/Icon.vue";

interface Props {
  index: number;
}

interface Emits {
  (e: "uploaded", v: string): void;
}

const toast = useToast();

const $emit = defineEmits<Emits>();
withDefaults(defineProps<Props>(), {});

const image = reactive({
  url: null,
  file: null,
});

const handleFile = (event: any) => {
  const file = event.target.files[0];
  if (file.size > 250000000) {
    console.log(file, "event");
    toast.error("Максимальный размер видео 250 мб");
    return;
  }

  if (image.url) {
    image.url = null;
    image.file = null;
  }

  image.file = file;
  image.url = URL.createObjectURL(file);
  $emit("uploaded", image);
};
const getFile = (index: number): void => {
  const input = document.getElementById(`file${index}`);
  input?.click();
};
</script>
