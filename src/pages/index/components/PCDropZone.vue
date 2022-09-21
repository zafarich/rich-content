<template>
  <div>
    <h2 class="font-bold text-[30px]">Конструктор рич-контента</h2>

    <div
      class="border-2 border-[#ccc] border-dotted mt-8 h-[700px] flex-center-center"
    >
      <p class="text-[20px] font-semibold">Drop Here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const content = [
  {
    widgetName: "raShowcase",
    type: "roll",
    blocks: [
      {
        imgLink: "https://ozon.ru/",
        img: {
          src: "https://cdn1.ozone.ru/s3/rich-content/placeholder/1416x708.png",
          srcMobile:
            "https://cdn1.ozone.ru/s3/rich-content/placeholder/640x640.png",
          alt: "ALT TEXT",
          width: 1416,
          height: 708,
          widthMobile: 640,
          heightMobile: 640,
          position: "width_one_fourth",
        },
      },
    ],
  },
];
</script>

<style scoped></style>
