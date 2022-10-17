import { defineStore } from "pinia";
import { ref } from "vue";

import axios from "@/plugins/axios";

import { useStore } from "./index";

export const useMediaStore = defineStore("media", {
  state: () => ({}),

  actions: {
    async postMedia(
      data: any,
      progressCallback: Function,
      abortController: any = ref(new AbortController())
    ) {
      return await new Promise((resolve, reject) => {
        axios
          .post("/files/rich-upload", data, {
            signal: abortController.value.signal,
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = Math.floor((loaded * 100) / total);
              progressCallback && progressCallback(percent);
            },
          })
          .then((res) => {
            const result = res?.data;
            result?.success && this.setMediaIdToLocalStorage(result?.data?.id);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async deleteMedia(id) {
      return await new Promise((resolve, reject) => {
        axios
          .delete(`/files/rich-upload/${id}`)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async deleteAllMedia(): void {
      const ids = JSON.parse(await localStorage.getItem("delete"));

      if (ids) {
        let i = 0;
        while (i < ids.length) {
          // eslint-disable-next-line
          await this.deleteMedia(ids[i]).catch((err) => console.log(err));
          i++;
        }
        await localStorage.removeItem("delete");
      }
    },

    async setMediaIdToLocalStorage(id: number): void {
      const ids = JSON.parse(await localStorage.getItem("delete")) || [];
      ids.push(id);
      await localStorage.setItem("delete", JSON.stringify(ids));
    },

    async removeMediaIdFromLocalStorage(index: number): void {
      const contentStore = useStore();
      const { block, table } = contentStore.content[index].content;
      let elements = undefined;
      elements = block ? block : table?.head;

      for (const i in elements) {
        const id = elements[i]?.img?.id || elements[i]?.video?.id;

        if (!id) continue;
        await this.deleteMedia(id).catch((err) => console.log(err));
        await this.removeId(id).catch((err) => console.log(err));
      }
    },

    async removeId(id: number): void {
      const ids = JSON.parse(await localStorage.getItem("delete"));

      if (ids) {
        const index = ids.findIndex((e) => e == id);
        ids.splice(index, 1);
        await localStorage.setItem("delete", JSON.stringify(ids));
      }
    },
  },
});

export default useMediaStore;
