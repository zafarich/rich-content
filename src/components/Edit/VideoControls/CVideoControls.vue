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
import { defineProps, onBeforeUnmount } from "vue";

import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";

import CVideoUpload from "./CVideoUpload.vue";

const props = defineProps({
  videoTypeOptions: Array,
  item: {
    type: Object,
    required: true,
  },
  imageStore: {
    type: Object,
    required: true,
  },
});

const controller = new AbortController();

onBeforeUnmount(() => {
  controller.abort();
});

function handleVideoUpload(e: any) {
  handleProgressBar(0);
  props.item.video.videoUrl = e.url;
  const formData = new FormData();
  formData.append("upload", e?.file);
  props.imageStore
    .postImage(formData, handleProgressBar, controller)
    .then((res: any) => {
      const result = res.data;
      console.log(result);
    })
    .finally(() => handleProgressBar(100));
}

function handleProgressBar(progress: number) {
  props.item.video.loadState.updateState({ progress, isLoading: true });
  if (progress === 100) {
    props.item.video.loadState.updateState({ isLoading: false });
  }
}
</script>
