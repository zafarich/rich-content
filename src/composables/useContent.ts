import { ref } from "vue";

export default function useContent(): object {
  const content = ref([]);

  function addContent(item: object) {
    content.value.push(item);
  }

  function deleteContent(index: number) {
    content.value.splice(index, 1);
  }

  function upContent(index: number): void {
    const spliced = content.value.splice(index, 1);
    content.value.splice(index - 1, 0, spliced[0]);
  }

  function downContent(index: number): void {
    const spliced = content.value.splice(index, 1);
    content.value.splice(index + 1, 0, spliced[0]);
  }

  return {
    content,
    addContent,
    deleteContent,
    upContent,
    downContent,
  };
}
