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
      await localStorage.setItem("saved", false);

      return await new Promise((resolve, reject) => {
        axios
          .post("/files/rich-upload", data, {
            signal: abortController.value.signal,
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              let percent = Math.floor((loaded * 99) / total);
              progressCallback && progressCallback(percent);
            },
          })
          .then((res) => {
            const result = res?.data;
            result?.success && this.setUpload(result?.data?.id);
            progressCallback && progressCallback(100);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async deleteMedia(id) {
      await localStorage.setItem("saved", false);
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

    async setUpload(id: number): void {
      const ids = JSON.parse(await localStorage.getItem("upload")) || [];
      ids.push(id);
      await localStorage.setItem("upload", JSON.stringify(ids));
    },

    async deleteUpload(id: number): void {
      const ids = JSON.parse(await localStorage.getItem("upload"));

      if (ids) {
        const index = ids.findIndex((e) => e == id);
        ids.splice(index, 1);
        await localStorage.setItem("upload", JSON.stringify(ids));
      }
    },

    async setDelete(id: number): void {
      this.deleteUpload(id)
      const ids = JSON.parse(await localStorage.getItem("remove")) || [];
      !ids.includes(id) && ids.push(id);
      await localStorage.setItem("remove", JSON.stringify(ids));
    },

    async deleteItems(type: "remove" | "upload"): void {
      const ids = JSON.parse(await localStorage.getItem(type));

      if (ids) {
        let i = 0;
        while (i < ids.length) {
          await this.deleteMedia(ids[i]).catch((err) => console.log(err));
          i++;
        }
        await localStorage.removeItem(type);
      }
    },

    async addMediaLocalStorage(index: number): void {
      localStorage.setItem("saved", false);
      const contentStore = useStore();
      const { block, table } = contentStore.content[index].content;
      let elements = undefined;
      elements = block ? block : table?.head;

      for (const i in elements) {
        const id = elements[i]?.img?.id || elements[i]?.video?.id;
        if (!id) continue;
        await this.setDelete(id)
      }
    },

    async inRemove() {
      const contentStore = useStore();
      const removes = JSON.parse(localStorage.getItem("remove"));
      const content = contentStore.content

      for(let i in  content) {
        const { block, table } = content[i].content;
        let elements = undefined;
        elements = block ? block : table?.head;

        for(let k in elements) {
          const id = elements[k]?.img?.id || elements[k]?.video?.id;

          if(removes?.includes(id)) {
            let idx = removes.findIndex(e => e == id)
            await removes.splice(idx, 1)
          } 
        }
      }

      await localStorage.setItem("remove", JSON.stringify(removes));
    },
  },
});

export default useMediaStore;
