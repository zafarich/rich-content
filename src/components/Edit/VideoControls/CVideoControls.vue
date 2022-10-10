<template>
  <div class="flex flex-col gap-6">
    <div>
      <h6 class="mb-4 font-medium text-[14px] leading-[20px]">Тип</h6>
      <CSelect
        @selected="
          getBlock[index].video.type = $event;
          delete getBlock[index].video.youtubeId;
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
        @input="getBlock[index].video.youtubeId = $event.target.value"
        v-bind="{
          label: 'Youtube Video ID',
          placeholder: 'tgbNymZ7vqY',
        }"
      />
    </div>
    <div v-else>
      <CUploadImage />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";

import CUploadImage from "../UploadImage/CUploadImage.vue";

const props = defineProps({
  item: Object,
  getBlock: Function,
  index: Number,
  videoTypeOptions: Array,
});
</script>
