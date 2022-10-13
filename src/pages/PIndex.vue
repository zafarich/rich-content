<template>
  <div class="">
    <CHeader />
    <div class="container">
      <div class="my-10 flex gap-8 w-full">
        <div
          v-if="!isFullScreen"
          class="bg-[#001a34] min-w-[290px] w-[290px] p-6 border-[1px] border-[#ECECEC] border-solid rounded-[12px] blocks sticky h-[95vh] overflow-auto top-5"
        >
          <transition name="fade" mode="out-in">
            <div>
              <CBlockList v-show="step == 'drop'" />
              <CBlockEdit v-show="step == 'edit'" />
            </div>
          </transition>
        </div>
        <CPreviewContent class="preview-content" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onBeforeUnmount, onMounted } from "vue";

import CBlockEdit from "@/components/CBlockEdit.vue";
import CBlockList from "@/components/CBlockList.vue";
import CPreviewContent from "@/components/CPreviewContent.vue";
import CHeader from "@/components/Header/CHeader.vue";
import useStoreImage from "@/store/image";
import useStore from "@/store/index";

const store = useStore();
const storeImage = useStoreImage();
const { step, isFullScreen } = storeToRefs(store);

onMounted(() => {
  window.addEventListener("beforeunload", showAlertBeforeMount);
  storeImage.deleteAllImage();
});

onBeforeUnmount(() => {
  window.removeEventListener("beforeunload", showAlertBeforeMount);
});

function showAlertBeforeMount(event: object) {
  event.returnValue = `Are you sure you want to leave?`;
}

// TODO:
// 2. image & video id & video delete & table delete
// 7. active indexx
// chess left right
// table delete imgs when content deleted 
// preview pointer evnets none
// block edit if no activeIndex return step to 'drop'
// hide toggle if

// 4. backend
// 3. storybook
// 5. texnomart front
// 6. edit
// refactor depends on mood :)
</script>

<style scoped>
.blocks {
  box-shadow: 0px 4px 30px 1px rgba(0, 0, 0, 0.08);
  background: linear-gradient(0deg, #ffffff, #ffffff), #f7f7f7;
}

.preview-content {
  width: 100%;
}
</style>
