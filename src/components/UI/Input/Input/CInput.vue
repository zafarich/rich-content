<template>
  <div class="">
    <h6 v-if="label" class="mb-2 font-medium text-[14px] leading-[20px]">
      {{ label }}
    </h6>
    <div
      :class="[
        'inline-flex items-center relative transition-all duration-500 rounded border-2 !border-grey outline-none border-solid overflow-hidden w-full',
        error ? 'border-red' : 'border-transparent focus-within:!border-yellow',
        disabled ? '!border-transparent' : '',
      ]"
    >
      <span :class="prefixClass">
        <slot name="prefix" />
      </span>
      <input
        :value="modelValue"
        v-bind="{ type, minlength, maxlength, max, min, disabled }"
        :class="[
          inputClass,
          'text-grey-400 text-base placeholder:text-grey-100 bg-transparent flex-grow py-2.5 px-4 outline-none',
        ]"
        :placeholder="placeholder"
        @input="handleInput"
        @blur="handleBlur"
      />

      <span :class="suffixClass">
        <slot name="suffix" />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  type?: string;
  placeholder: string;
  modelValue: number | string;
  disabled?: boolean;
  error?: boolean;
  maxlength?: number;
  minlength?: number;
  max?: number;
  min?: number;
  inputClass?: string;
  prefixClass?: string;
  suffixClass?: string;
  label?: string;
}
withDefaults(defineProps<Props>(), {
  type: "text",
  maxlength: undefined,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
});
const emit = defineEmits<{
  (e: "update:modelValue", value: any): void;
  (e: "blur", value: Event): void;
}>();
const handleInput = (e: any) => {
  emit("update:modelValue", e.target.value);
};
const handleBlur = (e: Event) => {
  emit("blur", e);
};
</script>
