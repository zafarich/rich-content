export function preventXXS(str: string): string {
	if (!str) {
		return "";
	}

	return str
		.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
		.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
}

export function objectHas(obj: object, item: string, ...args: string[]): any {
	if (!obj) {
		return false;
	}
	if (args?.length) {
		args.push(item);

		for (let i of args) {
			if (!(i in obj)) {
				return false;
			}
		}
	}

	return item in obj;
}
export function uuidv4() {
	return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
		(
			c ^
			(crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
		).toString(16)
	);
}

export function toggleMobileMode(item) {
	if (item === 'phone') {
		document.documentElement.classList.add("mobile");
	} else {
		document.documentElement.classList.remove("mobile");
	}
}