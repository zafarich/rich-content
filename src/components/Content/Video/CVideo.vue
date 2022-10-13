<template>
  <div class="flex flex-col gap-12">
    <div v-for="(item, index) in content.block" :key="index">
      <template v-if="item.video.loadState.isLoading">
        <div class="w-full aspect-video flex justify-center items-center">
          <CProgressBar :progress="item.video.loadState.progress" />
        </div>
      </template>

      <template v-else>
        <iframe
          v-if="item.video.type === 'youtube'"
          class="w-full aspect-video"
          :src="
            youTubeLinkToEmbed(
              item.video.videoUrl || 'https://youtu.be/xffp8p-vyMY'
            )
          "
        >
        </iframe>

        <video
          v-else
          :key="item.video.videoUrl"
          controls
          lazy="true"
          class="w-full aspect-video"
        >
          <source
            :src="
              item.video.localVideoUrl ||
              item.video.videoUrl ||
              'https://files.techno-mart.uz/storage/uploads/rich/content/flower_6346b2fa4ae62.mp4'
            "
          />
        </video>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  content: Content;
}

import { Content } from "@/helpers/scheme_types";
import CProgressBar from "@/components/UI/CProgressBar.vue";

withDefaults(defineProps<Props>(), {});

function youTubeLinkToEmbed(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? "https://www.youtube.com/embed/" + match[2]
    : null;
}
</script>
