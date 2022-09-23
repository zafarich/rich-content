import { defineStore } from "pinia";
import { ref, watch } from "vue";

export const useStore = defineStore("main", {
  state: () => ({
    activeIndex: ref<null | numbwe>(null),
    step: ref<"edit" | "drop">("drop"),
  }),

  actions: {
    
  },
});

export default useStore;
