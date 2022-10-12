<template>
  <div>{{ item }}</div>
</template>

<script setup lang="ts">
export interface Props {
  item?: object;
}

const props = withDefaults(defineProps<Props>(), {});

console.log(props.item);
</script>

<style scoped></style>
