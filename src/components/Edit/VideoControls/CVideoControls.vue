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
    <div v-if="item.video.type === 'youtube'">
      <CInput
        :model-value="item.video.youtubeId"
        @input="item.video.videoUrl = $event.target.value"
        v-bind="{
          label: 'Youtube Video ID',
          placeholder: 'tgbNymZ7vqY',
        }"
      />
    </div>
    <div v-else>
      <CVideoUpload @uploaded="handleVideoUpload" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";

import CVideoUpload from "./CVideoUpload.vue";

const props = defineProps({
  item: Object,
  getBlock: Function,
  index: Number,
  videoTypeOptions: Array,
});

function handleVideoUpload(e) {
  props.item.video.videoUrl = e.url;
  console.log(e, "hello");
}
</script>
