<template>
  <div class="">
    <div
      class="flex-center gap-[10px] cursor-pointer hover:opacity-70 transition"
    >
      <h6 class="tracking-[0.2px] text-[18px] leading-[20px] font-bold">
        {{ title }}
      </h6>
        <Icon
          :class="{
            'rotate-[180deg] transition': toggle,
          }"
          class="transition"
          name="arrow_down"
        />
    </div>

  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon/Icon.vue";

export interface Props {
  title?: string;
  toggle?: boolean;
}

withDefaults(defineProps<Props>(), {});
</script>

<style scoped></style>
