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
          :src="youTubeLinkToEmbed(item.video.videoUrl)"
        >
        </iframe>

        <video
          v-else
          :key="item.video.videoUrl"
          controls
          lazy="true"
          class="w-full aspect-video"
        >
          <source :src="getVideoUrl(item)" />
        </video>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";

export interface Props {
  content: Content;
}

import { Content } from "@/helpers/scheme_types";
import CProgressBar from "@/components/UI/CProgressBar.vue";

withDefaults(defineProps<Props>(), {});
const $CDN = inject("cdn");

function getVideoUrl(item: obj): string {
  if (item.video.localVideoUrl) return item.video.localVideoUrl;
  if (item.video.videoUrl) return $CDN + item.video.videoUrl;
  return $CDN + "/uploads/rich/content/flower_6346b2fa4ae62.mp4";
}

function youTubeLinkToEmbed(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? "https://www.youtube.com/embed/" + match[2]
    : null;
}
</script>
