
import { defineStore } from "pinia";

import axios from "@/plugins/axios";
const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;


export const useProduct = defineStore("product", {
	state: () => ({}),

	actions: {
		fetchProduct(id: number) {
			return new Promise((resolve, reject) => {
				return axios(VITE_BASE_URL + '/product/get-overview?product_id=104883', {
					headers: {
						token: 'bkOuj37tRSe0f9uhRkN5-aVcFEebPnJM61',
						'Accept-Language': 'uz'
					}
				}).then((res) => {
					console.log(res, 'resons;lk')
				}).catch((err) => {
					console.log(err)
				})

			})
		},
		postProduct() {

		}
	},
});

export default useProduct;
