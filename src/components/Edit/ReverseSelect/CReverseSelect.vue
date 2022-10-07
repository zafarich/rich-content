<template>
  <div>
    <h6 class="mb-4 font-medium text-[14px] leading-[20px]">
      Положение изображения
    </h6>
    <v-select
      class="mb-2"
      :searchable="false"
      :clearable="false"
      :options="imagePosition"
      label="title"
      :reduce="(item) => item.value"
      v-model="getSelected"
    >
      <template #no-options> Ooops, rasim joylashuvlari topilmadi :( </template>
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
  item: object;
  reverse?: boolean;
}

interface Emits {
  (e: "selected", v: boolean): void;
}

const props = withDefaults(defineProps<Props>(), {});
const $emit = defineEmits<Emits>();

const getSelected = computed({
  get() {
    return props.item.reverse;
  },
  set(v) {
    $emit("selected", v);
  },
});

const imagePosition = [
  {
    title: "Справа",
    value: true,
  },
  {
    title: "Слева",
    value: false,
  },
];
</script>

<style scoped></style>
