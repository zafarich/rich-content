import { ref } from "vue";

export default function useContent(): object {
  const content = ref([]);

  function addContent(item: object) {
    content.value.push(item);
  }

  function deleteContent(index: number) {
    content.value.splice(index, 1);
  }

  return {
    content,
    addContent,
    deleteContent,
  };
}
