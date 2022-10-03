<template>
  <div class="">
    <CHeader />
    <div class="container">
      <div class="my-10 flex gap-8 w-full">
        <div
          v-if="!isFullScreen"
          class="bg-[#001a34] min-w-[290px] w-[290px] p-6 border-[1px] border-[#ECECEC] border-solid rounded-[12px] blocks sticky h-screen overflow-auto top-0"
        >
          <transition name="fade" mode="out-in">
            <CBlockList v-if="step == 'drop'" />
            <CBlockEdit v-else-if="step == 'edit'" />
          </transition>
        </div>
        <CPreviewContent class="preview-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { ref } from "vue";

import CBlockEdit from "@/components/CBlockEdit.vue";
import CBlockList from "@/components/CBlockList.vue";
import CPreviewContent from "@/components/CPreviewContent.vue";
import CHeader from "@/components/Header/CHeader.vue";
import Icon from "@/components/Icon/Icon.vue";
import useStore from "@/store/index";

const store = useStore();
const { step, activeIndex, isFullScreen } = storeToRefs(store);

// TODO:
// 1. fix text update reactive
// 4. update edits
</script>

<style scoped>
.blocks {
  box-shadow: 0px 4px 30px 1px rgba(0, 0, 0, 0.08);
  background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f7;
}

.preview-content {
  /* width: calc(100% - 322px) !important; */
  width: 100%;
}
</style>
