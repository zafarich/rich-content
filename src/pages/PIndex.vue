<template>
  <div class="container">
    <!-- <DragTest /> -->
    <div class="grid grid-cols-12 my-10 gap-5">
      <div class="col-span-3">
        <div class="bg-[#001a34] p-4">
          <h2 class="font-semibold text-[25px] text-white">Блоки</h2>
          <CBlockEdit v-if="step" />
          <CBlockList v-else @back="step = 0" />
        </div>
      </div>
      <CPreviewContent class="col-span-9" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CBlockEdit from "@/components/CBlockEdit.vue";
import CBlockList from "@/components/CBlockList.vue";
import CPreviewContent from "@/components/CPreviewContent.vue";
import DragTest from "@/components/DragTest.vue";
import Icon from "@/components/Icon/Icon.vue";

const step = ref(0);

// TODO:
// 1. block style. !!!
// 2. drop zone !!!
// 3. structure of block's json !!
// 4. drag and drop !!
// style edit left
//  show brand new json with default items, by type
// 5. json each template
// 6. styles in tailwind
// 7. Gloal types
// 8. Attach json to each blocks
// 9. composable drag and drop
</script>

<style lang="scss" scoped></style>
