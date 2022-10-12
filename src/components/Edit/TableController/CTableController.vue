<template>
  <div>
    <CTextDetails
      @update-text="(e) => (item[e.type][e.item] = e.value)"
      v-bind="{ item }"
    />
    {{ item }}
  </div>
</template>

<script setup lang="ts">
export interface Props {
  item?: object;
}

import CTextDetails from "@/components/Edit/TextDetails/CTextDetails.vue";
const props = withDefaults(defineProps<Props>(), {});

console.log(props.item);

function handleUpdateText(e: obj): void {
  console.log(e, " Eheee");
}
</script>

<style scoped></style>
