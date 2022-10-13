// !TODO
// !1 RENAME THE FOLDER AND FUNCTION NAMES TO => MEDIA
// !2 CHANGE THE NAME OF THE FILE AND FUNCTIONS INSIDE EVERY FILE

import { defineStore } from "pinia";
import { ref } from "vue";

import axios from "@/plugins/axios";

import { useStore } from "./index";

export const useImageStore = defineStore("image", {
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
			const ids = JSON.parse(await localStorage.getItem("delete"));

			if (ids) {
				let i = 0;
				while (i < ids.length) {
					// eslint-disable-next-line
					await this.deleteImage(ids[i]).catch((err) => console.log(err));
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

		async removeImgIdFromLocalStorage(index: number): void {
			const contentStore = useStore();
			const blocks = contentStore.content[index].content.block;

			for (const i in blocks) {
				const id = blocks[i]?.img?.id || blocks[i]?.video.id;

				if (id) {
					// eslint-disable-next-line
					await this.deleteImage(id).catch((err) => console.log(err));
					// eslint-disable-next-line
					await this.removeId(id).catch((err) => console.log(err));
				}
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

export default useImageStore;
