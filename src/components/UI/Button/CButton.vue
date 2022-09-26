<template>
  <button
    class="bg-yellow rounded py-[10px] flex-center cursor-pointer transition relative flex-center-center outline-none hover:opacity-80"
    @click="$emit('click')"
  >
    <slot>
      <span
        class="text-black-grey delay-100 font-medium tracking-[0.5px] !leading-sm text-[14px] select-none"
        :class="textClass"
      >
        {{ text }}
      </span>
    </slot>
  </button>
</template>

<script setup lang="ts">
export interface Props {
  text: string;
  textClass: string;
}
withDefaults(defineProps<Props>(), {
  text: "",
  textClass: "",
});

interface Emits {
  (e: "click"): void;
}
const $emit = defineEmits<Emits>();
</script>
