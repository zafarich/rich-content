<template>
  <div class="flex flex-col gap-6">
    <div>
      <h6 class="mb-4 font-medium text-[14px] leading-[20px]">Тип</h6>
      <CSelect
        @selected="
          item.video.type = $event;
          item.video.videoUrl = '';
        "
        v-bind="{
          options: videoTypeOptions,
          default: item.video.type,
        }"
      />
    </div>
    <template v-if="item.video.type === 'youtube'">
      <CInput
        :model-value="item.video.youtubeId"
        @input="item.video.videoUrl = $event.target.value"
        v-bind="{
          label: 'Ссылка на видео на YouTube',
          placeholder: 'https://youtu.be/tgbNymZ7vqY',
        }"
      />
    </template>

    <template v-else>
      <CVideoUpload @uploaded="handleVideoUpload" />
      <CInput
        :model-value="item.video.videoUrl"
        @input="item.video.videoUrl = $event.target.value"
        v-bind="{
          label: 'Прямая ссылка на видео',
        }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";

import CVideoUpload from "./CVideoUpload.vue";
import { useStore } from "@/store/index";
const store = useStore();

const props = defineProps({
  item: Object,
  videoTypeOptions: Array,
  imageStore: Object,
});

function handleVideoUpload(e) {
  props.item.video.videoUrl = e?.url;
  const formData = new FormData();
  formData.append("upload", e?.file);
  props.imageStore.postImage(formData, handleProgressBar).then((res) => {
    const result = res.data;
    console.log(result);
  });
}

function handleProgressBar(progress: number) {
  console.log(store.updateVideoProgress({ progress, isLoading: true }));
  if (progress === 100) {
    store.updateVideoProgress({ isLoading: false });
  }
}
</script>
