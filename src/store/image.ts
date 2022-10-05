import { defineStore } from "pinia";
import { ref } from "vue";

import axios from "@/plugins/axios";

export const useImageStore = defineStore("image", {
  state: () => ({}),

  actions: {
    async postImage(data) {
      return await new Promise((resolve, reject) => {
        axios
          .post("/files/rich-upload", data)
          .then((res) => {
            const result = res?.data;
            result?.success && this.setImgIdToLocalStorage(result?.data?.id);
            resolve(res);
          })
          .catch((err) => {
            reject(err);
          });
      });
    },

    async deleteImage(id) {
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

    async deleteAllImage(): void {
      const ids = JSON.parse(await localStorage.getItem("delete")) || 0;
      if (ids) {
        let i = 0;
        while (i < ids.length) {
          await this.deleteImage(ids[i]);
          i++;
        }
        await localStorage.removeItem("delete");
      }
    },

    async setImgIdToLocalStorage(id: number): void {
      const ids = JSON.parse(await localStorage.getItem("delete")) || [];
      ids.push(id);
      await localStorage.setItem("delete", JSON.stringify(ids));
    },
  },
});

export default useImageStore;
