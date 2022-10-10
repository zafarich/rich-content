<template>
  <div class="flex flex-col gap-12">
    <div v-for="(item, index) in content.block" :key="index">
      <iframe
        v-if="item.video.type === 'youtube'"
        class="w-full aspect-video"
        :src="`https://www.youtube.com/embed/${
          item.video.youtubeId || 'tgbNymZ7vqY'
        }`"
      >
      </iframe>

      <video
        v-else
        controls="controls"
        muted="muted"
        lazy="true"
        class="w-full aspect-video"
      >
        <source
          src="https://cdn1.ozone.ru/s3/rich-content/video-examples/flower.mp4"
        />
      </video>
    </div>
  </div>
</template>

<script setup lang="ts">
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

function handleText(e: any, target: string, index: number): void {
  const data = {
    content_type: "billboard",
    value: e,
    target,
    index,
  };
  $emit("updateData", data);
}
</script>
