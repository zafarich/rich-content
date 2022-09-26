import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("main", {
  state: () => ({
    content: ref([]),
    activeIndex: ref<null | number>(null),
    step: ref<"edit" | "drop">("drop"),
  }),

  actions: {
    deleteContent(index: number): void {
      this.content.splice(index, 1);
      if (this.activeIndex == index) {
        this.activeIndex = null;
        this.step = "drop";
      }
    },
    upContent(index: number): void {
      const spliced = this.content.splice(index, 1);
      this.content.splice(index - 1, 0, spliced[0]);
      if (this.activeIndex == index) {
        this.activeIndex--;
      }
    },
    downContent(index: number): void {
      const spliced = this.content.splice(index, 1);
      this.content.splice(index + 1, 0, spliced[0]);
      if (this.activeIndex == index) {
        this.activeIndex++;
      }
    },
  },
});

export default useStore;
