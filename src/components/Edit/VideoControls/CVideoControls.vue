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
          :model-value="item.video.videoUrl"
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
      <div>
        <!-- @input="updateClickLink($event, index)" -->
        <CInput
          :model-value="checkSrc(item.video.videoUrl)"
          @input="handleLinkEnter"
          v-bind="{
            label: 'Прямая ссылка на видео',
            placeholder: 'https://texnomart.com/bBh/default_image.webp.webp?view',
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
  </div>
</template>

<script setup lang="ts">
import { watch, ref, computed, inject } from "vue";

import CErrorMeassage from "@/components/Edit/ErrorMessage/CErrorMessage.vue";
import CSelect from "@/components/Edit/ReverseSelect/CSelect.vue";
import CInput from "@/components/UI/Input/Input/CInput.vue";
import { useToast } from "vue-toastification";
import CVideoUpload from "./CVideoUpload.vue";
import { isValidURL, isValidYoutubeUrl, checkSrc } from "@/helpers/global";
import { storeToRefs } from "pinia";
import useStore from "@/store/index";

const store = useStore();
const { activeIndex, content } = storeToRefs(store);

const toast = useToast();
const $CDN = inject('cdn');
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
  base64: "Тип изображения base64 не допускается",
  invalidUrl: "URL изображения должен быть действительным",
  videoLoading: "Подождите, видео загружается",
};

const getVideo = computed(() => {
  return props.item.video;
});

watch(
  () => getVideo.value.type,
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

  if (getVideo.value.id) {
    deleteCurrentMedia();
  }

  updateErrMessage(ErrorList["videoLoading"], "imgLinkErr");

  handleProgressBar(0);
  storeControllerToStore();
  controller.value = new AbortController();
  const formData = new FormData();
  formData.append("file", e?.file);
  getVideo.value.localVideoUrl = e?.url;

  props.mediaStore
    .postMedia(formData, handleProgressBar, controller)
    .then((res: any) => {
      const result = res.data;

      updateErrMessage("", "imgLinkErr");

      if (result.success) {
        getVideo.value.videoUrl = '/' + result.data.url;
        getVideo.value.id = result.data.id;
      }
    })
    .catch((err: object) => {
      if (err.code === "ERR_CANCELED") return;
      toast.error("Что-то пошло не так");
    })
    .finally(() => handleProgressBar(100));
}

function handleProgressBar(progress: number) {
  getVideo.value.loadState.updateState({ progress, isLoading: true });
  if (progress === 100) {
    getVideo.value.loadState.updateState({ isLoading: false });
  }
}

function storeControllerToStore(): void {
  store.addController(content.value[activeIndex.value].content.id, controller);
}

function handleVideoTypeChange(event: any) {
  if (getVideo.value.id) {
    deleteCurrentMedia();
  }

  getVideo.value.type = event;
  getVideo.value.videoUrl = "";
  getVideo.value.localVideoUrl = "";
  getVideo.value.id = "";
}

function handleLinkEnter($event: any) {
  if (getVideo.value.id) {
    deleteCurrentMedia();
    getVideo.value.id = "";
    getVideo.value.localVideoUrl = "";
  }
  let value = $event.target.value;
  if(value.startsWith($CDN)) value = value.replace($CDN, '')
  getVideo.value.videoUrl = value;
  updateClickLink($event);
}

function deleteCurrentMedia() {
  props.mediaStore.setDelete(getVideo.value.id);
}

function updateClickLink(event: any) {
  const value = event?.target?.value || "";
  showErrMessage(value, 0, "imgLinkErr");
  getVideo.value.videoUrl = value;
}

function showErrMessage(value: string, target: string): void {
  updateErrMessage("", target);

  if (value.startsWith("data:")) {
    updateErrMessage(ErrorList["base64"], target);
  }

  if (
    (getVideo.value.type === "youtube" && !isValidYoutubeUrl(value)) ||
    (getVideo.value.type !== "youtube" && !isValidURL(value))
  ) {
    updateErrMessage(ErrorList["invalidUrl"], target);
  }
}

function updateErrMessage(message: string, target: string): void {
  props.item.asset[target] = message;
}
</script>
