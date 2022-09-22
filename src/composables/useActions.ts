import { ref } from "vue";

function useActions(): object {
  const step = ref<"edit" | "drop">("edit");

  return {
    step
  };
}

export default useActions()