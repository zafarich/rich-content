import { storeToRefs } from "pinia";
import { ref } from "vue";

import useStore from "@/store/index";

export default function useContent(): object {
  const store = useStore();

  const content = ref([]);
  const { activeIndex, step } = storeToRefs(store);

  function addContent(item: object): void {
    content.value.push(item);
  }

  function deleteContent(index: number): void {
    content.value.splice(index, 1);
    if (activeIndex.value == index) {
      activeIndex.value = null;
      step.value = 'drop'
    }
  }

  function upContent(index: number): void {
    const spliced = content.value.splice(index, 1);
    content.value.splice(index - 1, 0, spliced[0]);
    if (activeIndex.value == index) {
      activeIndex.value--;
    }
  }

  function downContent(index: number): void {
    const spliced = content.value.splice(index, 1);
    content.value.splice(index + 1, 0, spliced[0]);
    if (activeIndex.value == index) {
      activeIndex.value++;
    }
  }

  return {
    content,
    addContent,
    deleteContent,
    upContent,
    downContent,
  };
}
