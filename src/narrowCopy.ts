/* @typescript-eslint/ban-types: 0 */

// eslint-disable-next-line @typescript-eslint/ban-types
export interface Rule {
  [name: string]: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const narrowCopy = (src: any, rule: Rule): any => {
  const isDate = Object.prototype.toString.call(src).slice(8, -1);
  if (
    isDate === "Date" ||
    src == null ||
    typeof src === "string" ||
    typeof src === "number" ||
    typeof src === "boolean"
  ) {
    return src;
  }
  if (Array.isArray(src)) {
    const copied = [];
    for (const e of src) {
      copied.push(narrowCopy(e, rule));
    }
    return copied;
  }
  const copied = {};
  for (const [key, value] of Object.entries(src)) {
    // eslint-disable-next-line no-prototype-builtins
    if (rule.hasOwnProperty(key)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      copied[key] = narrowCopy(value, rule[key]);
    }
  }
  return copied;
};
