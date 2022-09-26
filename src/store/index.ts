import { defineStore } from "pinia";
import { ref } from "vue";

export const useStore = defineStore("main", {
  state: () => ({
    activeIndex: ref<null | number>(null),
    step: ref<"edit" | "drop">("drop"),
    content: ref([]),
  }),

  actions: {
    addContent(item: object): void {
      this.content.value.push(item);
    },

    deleteContent(index: number): void {
      this.content.value.splice(index, 1);
      if (this.activeIndex.value == index) {
        this.activeIndex.value = null;
        this.step.value = "drop";
      }
    },
    upContent(index: number): void {
      const spliced = this.content.value.splice(index, 1);
      this.content.value.splice(index - 1, 0, spliced[0]);
      if (this.activeIndex.value == index) {
        this.activeIndex.value--;
      }
    },
    downContent(index: number): void {
      const spliced = this.content.value.splice(index, 1);
      this.content.value.splice(index + 1, 0, spliced[0]);
      if (this.activeIndex.value == index) {
        this.activeIndex.value++;
      }
    },
  },
});

export default useStore;
