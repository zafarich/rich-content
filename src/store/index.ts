import { defineStore } from "pinia";
import { ref } from "vue";

import useMediaStore from "./media";
import { toggleMobileMode } from "@/helpers/global";

interface QueryParams {
  readonly: boolean;
  product_id: number;
  token: string;
  lang: string;
}

const mediaStore = useMediaStore();

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
    queryParams: <QueryParams>{
      readonly: false,
    },
  }),

  actions: {
    setQueryParams({ readonly, product_id, lang, token }) {
      if (readonly) {
        const bool = readonly === "true";
        this.queryParams.readonly = bool;

        if (bool) {
          this.isFullScreen = true;
        }
      }
      if (product_id) {
        this.queryParams.product_id = Number(product_id);
      }

      if (token) {
        this.queryParams.token = String(token);
      }

      if (lang) {
        this.queryParams.lang = String(lang);
      }
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

      mediaStore.addMediaLocalStorage(index);

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
    addContent(content) {
      this.content = content;
      mediaStore.inRemove();
    },
  },
});

export default useStore;
