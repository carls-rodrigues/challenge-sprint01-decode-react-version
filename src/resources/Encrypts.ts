export function encrypt(str: string) {
  const key: any = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
  }
  let result = '';
  result = str.replace(/[aeiou]/g, (match) => key[match]);
  return result;
}
export function decrypt(str: string) {
  const key = {
    "enter": "e",
    "imes": "i",
    "ai": "a",
    "ober": "o",
    "ufat": "u"
  }
  let result = str;
  result = result.replace(/enter/g, key["enter"]);
  result = result.replace(/imes/g, key["imes"]);
  result = result.replace(/ai/g, key["ai"]);
  result = result.replace(/ober/g, key["ober"]);
  result = result.replace(/ufat/g, key["ufat"]);
  return result;
}
