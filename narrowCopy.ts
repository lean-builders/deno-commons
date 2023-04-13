export type Rule = {}

export const narrowCopy = (src: any, rule: Rule) : any => {
    const isDate = Object.prototype.toString.call(src).slice(8, -1);
    if (isDate === 'Date' ||
        src == null || typeof src === 'string' || typeof src === 'number' ||
        typeof src === 'boolean') {
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
        if (rule.hasOwnProperty(key)) {
            // @ts-ignore
            copied[key] = narrowCopy(value, rule[key]);
        }
    }
    return copied;
};
