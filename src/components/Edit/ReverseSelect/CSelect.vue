<template>
  <div>
    <h6 v-if="label" class="mb-4 font-medium text-[14px] leading-[20px]">
      {{ label }}
    </h6>
    <v-select
      class="mb-2"
      :searchable="false"
      :clearable="false"
      :options="options"
      label="title"
      :reduce="(item) => item.value"
      v-model="getSelected"
    >
      <template #no-options> Ooops, malumot topilmadi :( </template>
        <template #option="{ title }">
          <h3>{{ title }}</h3>
        </template>
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import vSelect from "vue-select";

export interface Props {
  default: any;
  options: any;
  label?: string;
}

interface Emits {
  (e: "selected", v: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

const getSelected = computed({
  get() {
    return props.default;
  },
  set(v) {
    $emit("selected", v);
  },
});
</script>

<style scoped></style>
