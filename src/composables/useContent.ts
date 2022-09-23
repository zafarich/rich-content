import { ref } from "vue";

export default function useContent(): object {
  const content = ref([]);
  const activeIndex = ref(null);

  function addContent(item: object): void {
    content.value.push(item);
  }

  function deleteContent(index: number): void {
    content.value.splice(index, 1);
    if (activeIndex.value == index) {
      activeIndex.value = null;
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
    activeIndex,
  };
}
