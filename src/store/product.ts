
import { defineStore } from "pinia";

import axios from "@/plugins/axios";
import { P } from "@storybook/components";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;


export const useProduct = defineStore("product", {
	state: () => ({
		product: null,
		lang: 'ru'
	}),

	actions: {
		setLanguage(lang: string) {
			this.lang = lang
		},
		fetchProduct(id: number, headers: any) {
			return new Promise((resolve, reject) => {
				return axios(VITE_BASE_URL + `/product/get-overview?product_id=${id}`, {
					headers
				}).then((res) => {
					this.product = res.data
					resolve(res.data)
				}).catch((err) => {
					console.log(err)
				})
			})
		},
		postProductOverview(data: object, headers?: any) {
			return new Promise((resolve, reject) => {
				return axios.post(VITE_BASE_URL + '/product/add-overview', {
					data,
				 headers
				}).then((res: any) => {
					// this.product = res.data
					resolve(res.data)
				}).catch((err) => {
					reject(err)
				})
			})
		},
	},
});

export default useProduct;
