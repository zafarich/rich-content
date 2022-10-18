<template>
  <div class="container">
    <div
      class="py-5 bg-[#F7F7F7] rounded-[12px] px-6 flex justify-between text-[#333333] text-[20px] leading-[28px] font-medium"
    >
      <div>
        <h3>
          {{ title }}
        </h3>
      </div>
      <div class="flex gap-5 text-[18px]">
        <div class="flex items-center gap-[6px]">
          <span class="font-normal">ID:</span>
          <span class="font-bold">{{ id }}</span>
        </div>
        <div class="flex items-center gap-[6px]">
          <span class="font-normal">Язык:</span>
          <span class="font-bold">{{ lang }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  id: number;
  lang: string;
}

withDefaults(defineProps<Props>(), {
  title: "Наушники вставные беспроводные LG HBS-FN6 ",
  id: 12,
  lang: "stuff",
});
</script>

<style lang="scss" scoped></style>
