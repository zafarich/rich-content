<template>
  <div
    v-bind="$attrs"
    class="outline-none hover:bg-white-200 focus-within:!bg-white transition"
    @click="makeEditable"
  >
    <p
      class="h-full min-h-[28px] w-full border-[1px] border-transparent transition focus:border-black-grey focus:border-dotted outline-none whitespace-pre-wrap break-words cursor-text"
      style="word-break: break-word !important"
      ref="textbox"
      @paste="handlePaste"
      :contenteditable="editable"
      @input="handleInput"
      :value="props.modelValue"
      v-text="inputText"
      @blur="makeNormal"
    ></p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import { preventXSS } from "@/helpers/global";

export interface Props {
  modelValue?: string;
}

interface Emits {
  (e: "update:modelValue", modelValue: string): void;
  (e: "updateText", v: string): void;
}

const props = defineProps<Props>();
const $emit = defineEmits<Emits>();

const editable = ref<boolean>(false);
const textbox = ref<HTMLParagraphElement>();
const inputText = ref<string>("");
inputText.value = props.modelValue || "";

function makeEditable(): void {
  editable.value = true;

  setTimeout(() => {
    (textbox.value as HTMLParagraphElement).focus();
  }, 100);
  inputText.value = preventXSS(props.modelValue) || "";
}

function handlePaste(e): void {
  e.preventDefault();
  var text = e.clipboardData.getData("text/plain");
  document.execCommand("insertHTML", false, text);
}

function makeNormal(): void {
  editable.value = false;
  inputText.value = preventXSS(props.modelValue);
}

function handleInput(event): void {
  $emit("update:modelValue", event.target.innerText);
  $emit("updateText", event.target.innerText);
}
</script>
