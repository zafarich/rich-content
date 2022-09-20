<template>
  <div>
    <p class="text-green-700">
      Blank template, write your code here.
      <a href="https://github.com/UIC-Group/vue3-powerbuild">GitHub repo</a>
      <Icon name="logout" />
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Icon from "@/components/Icon/Icon.vue";

const drag = ref(false);
const myArray = ref([
  {
    name: "John",
    id: 0,
  },
  {
    name: "Joao",
    id: 1,
  },
  {
    name: "Jean",
    id: 2,
  },
]);
</script>

<style lang="scss" scoped></style>
