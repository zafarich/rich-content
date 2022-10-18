import { defineStore } from "pinia";
import { ref } from "vue";

import { useMediaStore } from "./media";
import { toggleMobileMode } from "@/helpers/global";

export const useStore = defineStore("main", {
  state: () => ({
    content: ref([]),
    activeIndex: ref<null | number>(null),
    isFullScreen: <boolean>false,
    step: ref<"edit" | "drop">("drop"),
    axiosControllers: <any>{},
    deviceViewType: <"pc" | "phone">"pc",
    activeTableRowIdx: ref<number | null>(null),
		invalid: true,
		queryParams: {}
  }),

  actions: {
		setQueryParams(obj: object) {
			this.queryParams = obj 

		},
    toggleDeviceView(val: any) {
      this.deviceViewType = val;
      toggleMobileMode(val);
    },
    addController(id: string, controller: any) {
      this.axiosControllers[id] = controller;
    },
    toggleIsFullScreen(): void {
      this.isFullScreen = !this.isFullScreen;

      if (!this.isFullScreen) {
        this.toggleDeviceView("pc");
      }
    },
    deleteContent(index: number): void {
      if (this.content[index].content.type === "video") {
        this.axiosControllers[this.content[index].content.id]?.abort();
      }

      const mediaStore = useMediaStore();
      mediaStore.removeMediaIdFromLocalStorage(index);

      this.content.splice(index, 1);
      if (this.activeIndex == index) {
        this.activeIndex = null;
        this.step = "drop";
      }
    },
    upContent(index: number): void {
      const spliced = this.content.splice(index, 1);
      this.content.splice(index - 1, 0, spliced[0]);

      if (this.activeIndex == index - 1) {
        this.activeIndex++;
      } else if (this.activeIndex == index) {
        this.activeIndex--;
      }
    },
    downContent(index: number): void {
      const spliced = this.content.splice(index, 1);
      this.content.splice(index + 1, 0, spliced[0]);

      if (this.activeIndex == index + 1) {
        this.activeIndex--;
      } else if (this.activeIndex == index) {
        this.activeIndex++;
      }
    },
  },
});

export default useStore;
