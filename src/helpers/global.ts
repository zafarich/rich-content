export function preventXXS(str: string): string {
  if (!str) {
    return "";
  }
  // remove script tags and other dangerous tags
  return str
    .replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "")
    .replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
}
