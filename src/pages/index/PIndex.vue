<template>
  <div class="container">
    <div class="grid grid-cols-12 my-10 gap-5">
      <PCBlocks class="col-span-3 " />
      <div class="col-span-9">b</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";

import PCBlocks from "./components/PCBlocks.vue";

// TODO:
//  1. block style.
// 2. drop zone
// 3. structure of block's json
// 4. drag and drop
// 5. json each template
</script>

<style lang="scss" scoped></style>
