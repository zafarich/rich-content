<template>
  <div class="flex flex-col gap-6">
    <div>
      <h6 class="mb-4 font-medium text-[14px] leading-[20px]">Тип</h6>
      <CSelect
        @selected="handleVideoTypeChange"
        v-bind="{
          options: videoTypeOptions,
          default: item.video.type,
        }"
      />
    </div>
    <template v-if="item.video.type === 'youtube'">
			<div>
				<CInput
					:model-value="item.video.youtubeId"
					@input="updateClickLink($event, index)"
					v-bind="{
						label: 'Ссылка на видео на YouTube',
						placeholder: 'https://youtu.be/tgbNymZ7vqY',
					}"
				/>
				<CErrorMeassage
					v-if="item?.asset?.imgLinkErr"
					v-bind="{
						message: item?.asset.imgLinkErr,
					}"
				/>
			</div>
    </template>

    <template v-else>
      <CVideoUpload
        @uploaded="handleVideoUpload"
        :index="Math.random() * 1000"
      />
      <CInput
        :model-value="item.video.videoUrl"
        @input="handleLinkEnter"
        v-bind="{
          label: 'Прямая ссылка на видео',
          placeholder:
            'https://files.techno-mart.uz/storage/uploads/rich/content/flower_6346b2fa4ae62.mp4',
        }"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";

import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { useToast } from "vue-toastification";
import CVideoUpload from "./CVideoUpload.vue";
import { isValidURL } from "@/helpers/global";
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
  mediaStore: {
    type: Object,
    required: true,
  },
});

const controller = ref();

const ErrorList = {
  lessThan1mb: "Размер файла должен быть меньше 1мб",
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
};

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
    deleteCurrentMedia();
  }

  handleProgressBar(0);
  storeControllerToStore();
  controller.value = new AbortController();
  const formData = new FormData();
  formData.append("upload", e?.file);
  props.item.video.localVideoUrl = e?.url;

  props.mediaStore
    .postMedia(formData, handleProgressBar, controller)
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

function handleVideoTypeChange(event: any) {
  if (props.item.video.id) {
    deleteCurrentMedia();
  }

  props.item.video.type = event;
  props.item.video.videoUrl = "";
  props.item.video.localVideoUrl = "";
  props.item.video.id = "";
}

function handleLinkEnter($event: any) {
  if (props.item.video.id) {
    deleteCurrentMedia();
    props.item.video.id = "";
    props.item.video.localVideoUrl = "";
  }
  props.item.video.videoUrl = $event.target.value;
}

function deleteCurrentMedia() {
  props.mediaStore.deleteMedia(props.item.video.id);
  props.mediaStore.removeId(props.item.video.id);
}

function updateClickLink(event: any) {
  const value = event?.target?.value || "";
  showErrMessage(value, 0, "imgLinkErr");
  props.item.video.videoUrl = value;
}

function showErrMessage(value: string, index: number, target: string): void {
  updateErrMessage("", target);

  if (value.startsWith("data:")) {
    updateErrMessage(ErrorList["base64"],target);
  }

  if (!isValidURL(value)) {
    updateErrMessage(ErrorList["invalidUrl"], target);
  }
}

function updateErrMessage(message: string, target: string): void {
  props.item.asset[target] = message;
}
</script>
