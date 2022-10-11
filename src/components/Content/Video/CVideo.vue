<template>
  <div class="flex flex-col gap-12">
    <div v-for="(item, index) in content.block" :key="index">
      <template v-if="videoUploadState.isLoading"> </template>
      <template v-else>
        <iframe
          v-if="item.video.type === 'youtube'"
          class="w-full aspect-video"
          :src="
            youTubeLinkToEmbed(
              item.video.videoUrl || 'https://youtu.be/iKBs9l8jS6Q'
            )
          "
        >
        </iframe>

        <video
          v-else
          :key="item.video.videoUrl"
          controls="controls"
          muted="muted"
          lazy="true"
          class="w-full aspect-video"
        >
          <source
            :src="
              item.video.videoUrl ||
              `https://cdn1.ozone.ru/s3/rich-content/video-examples/flower.webm`
            "
          />
        </video>
      </template>
      <pre>
				hello
				{{ videoUploadState }}
			</pre
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

import { storeToRefs } from "pinia";
import CContentInput from "@/components/UI/Input/ContentInput/CContentInput.vue";
import { Content } from "@/helpers/scheme_types";
import { useStore } from "@/store/index";
const store = useStore();

const { videoUploadState } = storeToRefs(store);

export interface Props {
  content: Content;
}

interface Emits {
  (e: "updateData", data: object);
}

withDefaults(defineProps<Props>(), {});

function youTubeLinkToEmbed(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? "https://www.youtube.com/embed/" + match[2]
    : null;
}
</script>
