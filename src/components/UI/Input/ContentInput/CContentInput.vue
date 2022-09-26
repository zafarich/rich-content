<template>
  <div
    v-bind="$attrs"
    class="outline-none hover:bg-white-200 focus-within:!bg-white transition"
    @click="makeEditable"
  >
    <p
      :class="style"
      class="h-full w-full border-[1px] border-transparent transition focus:border-black-grey focus:border-dotted outline-none break-words"
      ref="textbox"
      :contenteditable="editable"
      @input="handleInput($event)"
      :value="props.modelValue"
      v-text="inputText"
      @blur="makeNormal"
    ></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { preventXXS } from "@/helpers/global";

export interface Props {
  placeholder: string;
  modelValue: string;
}

interface Emits {
  (e: "update:modelValue", modelValue: string): void;
  (e: "updateText", v: string): void;
}

const props = defineProps<Props>();
const $emit = defineEmits<Emits>();

const editable = ref<boolean>(false);
const textbox = ref<HTMLParagraphElement>();
const inputText = ref<string>(
  props.modelValue ? props.modelValue : props.placeholder
);

function makeEditable(): void {
  editable.value = true;

  setTimeout(() => {
    (textbox.value as HTMLParagraphElement).focus();
  }, 100);
  inputText.value = preventXXS(props.modelValue) || "";
}

function makeNormal(): void {
  editable.value = false;

  inputText.value =
    props.modelValue == ""
      ? preventXXS(props.placeholder)
      : preventXXS(props.modelValue);
}

function handleInput(event) {
  $emit("update:modelValue", event.target.innerText);
  $emit("updateText", event.target.innerText);
}
</script>
