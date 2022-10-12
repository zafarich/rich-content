<template>
  <div>
    <CAccordion
      class='mb-8'
      @click="titleToggle = !titleToggle"
      v-bind="{
        title: 'Заголовок',
        toggle:titleToggle 
      }"
    />
      <CTextDetails
        v-if='titleToggle'
        @update-text="(e) => (item[e.type][e.item] = e.value)"
        v-bind="{ 
          item,
          showTitle: false
        }"
      />
      <!-- {{ item }} -->
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CAccordion from "@/components/Accordion/CAccordion.vue";

export interface Props {
  item?: object;
}
const titleToggle = ref(true);

const props = withDefaults(defineProps<Props>(), {});

console.log(props.item);

function handleUpdateText(e: obj): void {
  console.log(e, " Eheee");
}
</script>

<style scoped></style>
