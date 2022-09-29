export function preventXXS(str: string): string {
  if (!str) {
    return "";
  }

  return str
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
}

export function objectHas(obj: object, item: string): void {
  return item in obj;
}
