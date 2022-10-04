import { defineStore } from "pinia";
import { ref } from "vue";

import axios from "@/plugins/axios";

export const useImageStore = defineStore("image", {
  state: () => ({
    imageDeleteIds: ref<number[]>([]),
  }),

  actions: {
    async postImage(data) {
      return await new Promise((resolve, reject) => {
        axios
          .post("/files/rich-upload", data)
          .then((res) => {
            res?.data?.success && this.imageDeleteIds.push(res?.data?.data?.id);
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

    async deleteAllImage() {
      let i = 0;
      while (i < this.imageDeleteIds.length) {
        await this.deleteImage(this.imageDeleteIds[i]);
        i++;
      }
    },
  },
});

export default useImageStore;
