<template>
  <i v-if="name" class="icon" v-html="src" />
</template>

<script setup lang="ts">
import { computed, getCurrentInstance, onMounted, ref, watch } from "vue";

import icons from "@/helpers/icons";

export interface Props {
  name: string;
  color?: string;
}
const props = withDefaults(defineProps<Props>(), { color: undefined });
const component = getCurrentInstance();
const src = computed(() => icons[props.name]);
onMounted(() => {
  setColors();
});
watch(ref(props.color), setColors);
function setColors() {
  if (props.color) {
    component?.vnode.el?.querySelectorAll("path")?.forEach((item: any) => {
      if ([...item.attributes].find((attr) => attr.localName === "stroke")) {
        item.attributes.stroke.value = props.color;
      }
      if ([...item.attributes].find((attr) => attr.localName === "fill")) {
        item.attributes.fill.value = props.color;
      }
    });
  }
}
</script>

<style>
.icon {
  display: inline-flex;
}
.icon svg {
  width: 100%;
  height: 100%;
}
</style>
