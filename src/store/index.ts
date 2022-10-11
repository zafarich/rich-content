import { defineStore } from "pinia";
import { ref } from "vue";

import { useImageStore } from "./image";

export const useStore = defineStore("main", {
  state: () => ({
    content: ref([]),
    activeIndex: ref<null | number>(null),
    isFullScreen: <boolean>false,
    step: ref<"edit" | "drop">("drop"),
    assets: [],
  }),

  actions: {
    toggleIsFullScreen(): void {
      this.isFullScreen = !this.isFullScreen;
    },
    deleteContent(index: number): void {
      const imageStore = useImageStore();
      imageStore.removeImgIdFromLocalStorage(index);

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
    updateText(value: string, type: "title" | "text", index: number): void {
      this.content[this.activeIndex].content.block[index][type].value = value;
    },
  },
});

export default useStore;
