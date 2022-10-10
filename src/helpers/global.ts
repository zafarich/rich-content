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
