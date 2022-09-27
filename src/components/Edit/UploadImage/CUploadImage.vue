<template>
  <div class="h-[44px] rounded relative border-2 border-yellow">
    <input
      id="file"
      type="file"
      name="file"
      class="w-0 h-0 absolute"
      @change="handleFile"
    />
    <div
      class="w-full h-full flex-center-center gap-2 cursor-pointer"
      @click="getFile"
    >
      <Icon name="add_photo" />
      <p class="font-medium text-[14px] leading-[20px]">Добавить фото</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";

const emit = defineEmits(["upload"]);
export interface Props {
  item: any;
}
const props = withDefaults(defineProps<Props>(), {
  item: "",
});
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
  imageName.value = image.file.name;
  const reader = new FileReader();
  if (event.target.files[0]) {
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (e) => {
      image.url = e.target?.result;
    };
    send();
  }
};
const getFile = () => {
  const input = document.getElementById("file");
  input?.click();
};
const removeImage = () => {
  image.file = null;
  image.url = null;
  send();
};
const send = () => {
  emit("upload", image);
};

onMounted(() => {
  if (props.item) {
    image.url = props.item;
  }
});
</script>
