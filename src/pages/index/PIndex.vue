<template>
  <div class="container">
    <div class="grid grid-cols-12 my-10 gap-5">
      <PCBlocks class="col-span-3" />
      <PCDropZone class="col-span-9" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";

import PCBlocks from "./components/PCBlocks.vue";
import PCDropZone from "./components/PCDropZone.vue";

// TODO:
// 1. block style. !!!
// 2. drop zone !!!
// 3. structure of block's json !!
// 4. drag and drop
// 5. json each template
// 6. styles in tailwind
// 7. Gloal types
// 8. Attach json to each templates
// 9. composable drag and drop
</script>

<style lang="scss" scoped></style>
