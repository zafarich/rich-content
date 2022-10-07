<template>
  <div>
    <h6 class="mb-4 font-medium text-[14px] leading-[20px]">
      Положение изображения
    </h6>
    {{ item.reverse }}
    <v-select
      class="mb-2"
      :searchable="false"
      :clearable="false"
      :options="imagePosition"
      label="title"
      :reduce="(item) => item.value"
      v-model="getSelected"
    >
      <!-- @option:selected="emitValue(idx, 'size', $event.size)" -->
      <template #no-options> Ooops, matn o'lchamlari topilmadi :( </template>
      <template #option="{ title }">
        <h3>{{ title }}</h3>
      </template>
    </v-select>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
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

console.log(props.item.reverse, "props");

const getSelected = computed({
  get() {
    return props.item.reverse;
  },
  set(v) {
    $emit("selected", v);
    console.log(v, "in set");
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
