<template>
  <div class="flex flex-col gap-12 !cursor-default">
    <div v-for="(item, index) in content.block" :key="index">
      <template v-if="item.video.loadState.isLoading">
        <div class="w-full aspect-video flex justify-center items-center">
          <CProgressBar :progress="item.video.loadState.progress" />
        </div>
      </template>
      <template v-else>
        <YouTube
          width="100%"
          height="100%"
          :id="'youtube' + contentIndex"
          v-if="item.video.type === 'youtube'"
          :src="
            youTubeLinkToEmbed(
              item.video.videoUrl || 'https://youtu.be/xffp8p-vyMY'
            )
          "
          class="w-full aspect-video"
          ref="youtube"
        />
        <div v-else class="relative">
          <div
            v-if="finished"
            class="absolute top-0 left-0 bg-[#00000020] video-background w-full h-full z-20 flex-center-center"
          >
            <div
              @click="handleRepeat"
              class="bg-[#00000040] w-[80px] h-[80px] rounded-[24px] p-4 cursor-pointer"
            >
              <Icon name="repeatVideo" />
            </div>
          </div>

          <video
            :key="item.video.videoUrl"
            controls
            lazy="true"
            :id="'video' + contentIndex"
            class="w-full aspect-video"
          >
            <source type="video/mp4" :src="getVideo(item)" />
          </video>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Content } from "@/helpers/scheme_types";
import CProgressBar from "@/components/UI/CProgressBar.vue";
import { checkSrc } from "@/helpers/global";
import Icon from "@/components/Icon/Icon.vue";
import {
  ref,
  computed,
  watchEffect,
  defineComponent,
  watchPostEffect,
} from "vue";
import YouTube from "vue3-youtube";

defineComponent({
  components: { YouTube },
});

export interface Props {
  content: Content;
  contentIndex: number;
}

const props = withDefaults(defineProps<Props>(), {});
let finished = ref(false);
const youtube = ref(null);

const getVideoType = computed(() => {
  return props.content.block[0].video.type;
});

watchEffect(async () => {
  if (getVideoType.value == "youtube") return;
  let video = await document.getElementsByTagName("video");
  let item = video.item(0);
  if (!item) return;
  item.addEventListener("ended", () => (finished.value = true), false);
});

watchPostEffect(() => {
  const youtube = document.querySelector("#youtube" + props.contentIndex);
  const video = document.querySelector("#video" + props.contentIndex);

  const observer = new window.IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        return;
      }
      if(getVideoType.value == 'youtube') {
              stopVideo();
      } else {
        video.pause()
      }
    },
    {
      root: null,
      threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
    }
  );

  youtube && observer.observe(youtube);
  video && observer.observe(video)
});

function youTubeLinkToEmbed(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[2].length === 11
    ? "https://www.youtube.com/embed/" +
        match[2] +
        "&origin=" +
        window.location.href
    : null;
}

function getVideo(item: object): string {
  if (item.video.localVideoUrl) return item.video.localVideoUrl;
  return checkSrc(
    item.video.videoUrl || "/900/flower_6346b2fa4ae62.mp4.mp4?view"
  );
}

async function handleRepeat(): void {
  let video = await document.getElementsByTagName("video");
  let item = video.item(0);
  if (!item) return;
  item.play();
  finished.value = false;
}

function stopVideo(index = 0) {
  youtube.value?.[index]?.pauseVideo();
}
</script>

<style scoped>
.video-background {
  -webkit-backdrop-filter: saturate(180%) blur(2px);
  backdrop-filter: saturate(180%) blur(2px);
}
</style>
