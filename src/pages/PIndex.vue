<template>
  <div class="">
    <CHeader />
    <div class="container">
      <div class="my-10 flex gap-8 w-full">
        <div
          class="bg-[#001a34] w-[290px] p-6 border-[1px] border-[#ECECEC] border-solid rounded-[12px] blocks"
        >
          <transition name="fade" mode="out-in">
            <CBlockList v-if="step == 'drop'" />
            <CBlockEdit v-else-if="step == 'edit'" @back="step = 'drop'" />
          </transition>
        </div>
        <CPreviewContent class="preview-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CBlockEdit from "@/components/CBlockEdit.vue";
import CBlockList from "@/components/CBlockList.vue";
import CPreviewContent from "@/components/CPreviewContent.vue";
import CHeader from "@/components/Header/CHeader.vue";
import Icon from "@/components/Icon/Icon.vue";
import useActions from "@/composables/useActions";

const { step } = useActions;

// TODO:
// style edit left
//  show brand new json with default items, by type
// 5. json each template
// 6. styles in tailwind
// 7. Gloal type
// 8. Attach json to each blocks
// 9. composable drag and drop
// 10. storybook
</script>

<style scoped>
.blocks {
  box-shadow: 0px 4px 30px 1px rgba(0, 0, 0, 0.08);
  background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f7;
}

.preview-content {
  width: calc(100% - 322px) !important;
}
</style>
