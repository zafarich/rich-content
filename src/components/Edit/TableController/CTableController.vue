<template>
  <div>
    <CAccordion
      class="mb-8"
      @click="titleToggle = !titleToggle"
      v-bind="{
        title: 'Заголовок',
        toggle: titleToggle,
      }"
    />
    <CTextDetails
      v-if="titleToggle"
      @update-text="(e) => (item[e.type][e.item] = e.value)"
      v-bind="{
        item,
        showTitle: false,
      }"
    />
    {{ item?.table?.head }}

    <div class="" v-for="(item, index) in item?.table?.head" :key="index">
      <CAccordion
        class="mb-8"
        @click="item.asset.toggle = !item.asset.toggle"
        v-bind="{
          title: 'Строки',
          toggle: item.asset.toggle,
        }"
      />

      <div v-if="item.asset.toggle" class="">
        <CTextAlignment @align="item.contentAlign = $event" />
        {{ item?.asset?.toggle }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CTextAlignment from "@/components/Edit/TextAlignment/CTextAlignment.vue";

import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
import CAccordion from "@/components/Accordion/CAccordion.vue";

export interface Props {
  item?: object;
}

const titleToggle = ref(true);
const lineToggle = ref(true);

const props = withDefaults(defineProps<Props>(), {});

console.log(props.item);

function handleAlign(e) {
  console.log(e, "EEEE");
}
</script>

<style scoped></style>
