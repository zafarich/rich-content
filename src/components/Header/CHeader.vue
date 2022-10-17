<template>
  <div
    class="bg-white border-b-[1px] border-b-[#ECECEC] border-solid header !h-[78px] pt-3 pb-6"
  >
    <div class="container">
      <div class="flex-center-between">
        <Icon name="texnomart_logo" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";
</script>

<style scoped>
.header {
  box-shadow: 0px 4px 12px 1px rgba(0, 0, 0, 0.06);
}
</style>
