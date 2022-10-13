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
      <CVideoUpload
        @uploaded="handleVideoUpload"
        :index="Math.random() * 1000"
      />
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
// !TODO
// 1. Disable uploading another video while pending is true

import { watch, ref } from "vue";

import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { useToast } from "vue-toastification";
import CVideoUpload from "./CVideoUpload.vue";
import { storeToRefs } from "pinia";
import useStore from "@/store/index";
const store = useStore();
const { activeIndex, content } = storeToRefs(store);

const toast = useToast();
const ENV_CDN = import.meta.env.VITE_CDN;
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

const controller = ref();

watch(
  () => props.item.video.type,
  (value) => {
    if (value === "youtube") {
      controller.value?.abort();
    }
  }
);

function handleVideoUpload(e: any) {
  if (
    content.value[activeIndex.value].content.block[0].video.loadState.isLoading
  ) {
    return;
  }

  if (props.item.video.id) {
    props.imageStore.deleteImage(props.item.video.id);
    props.imageStore.removeId(props.item.video.id);
  }

  handleProgressBar(0);
  storeControllerToStore();
  controller.value = new AbortController();
  const formData = new FormData();
  formData.append("upload", e?.file);
  props.item.video.localVideoUrl = e?.url;

  props.imageStore
    .postImage(formData, handleProgressBar, controller)
    .then((res: any) => {
      const result = res.data;
      if (result.success) {
        props.item.video.videoUrl = ENV_CDN + result.data.path;
        props.item.video.id = result.data.id;
      }
    })
    .catch((err: object) => {
      if (err.code === "ERR_CANCELED") return;
      toast.error("Что-то пошло не так");
    })
    .finally(() => handleProgressBar(100));
}

function handleProgressBar(progress: number) {
  props.item.video.loadState.updateState({ progress, isLoading: true });
  if (progress === 100) {
    props.item.video.loadState.updateState({ isLoading: false });
  }
}

function storeControllerToStore(): void {
  store.addController(content.value[activeIndex.value].content.id, controller);
}
</script>
