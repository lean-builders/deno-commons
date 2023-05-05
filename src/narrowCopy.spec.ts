import { narrowCopy, Rule } from "./narrowCopy";

const emptyRule: Rule = {};
describe("narrowCopy", () => {
  it("null => null", (): void => {
    const copied = narrowCopy(null, emptyRule);
    expect(copied).toBeNull();
  });
  it("undefined => undefined", (): void => {
    const copied = narrowCopy(undefined, emptyRule);
    expect(copied).toBeUndefined();
  });
  it("string => string", (): void => {
    const copied = narrowCopy("Bob", emptyRule);
    expect(copied).toBe("Bob");
  });
  it("number => number", (): void => {
    const copied = narrowCopy(1, emptyRule);
    expect(copied).toBe(1);
  });
  it("boolean => boolean", (): void => {
    const copied = narrowCopy(true, emptyRule);
    expect(copied).toBe(true);
  });
  it("Date => Date", (): void => {
    const now = new Date();
    const copied: Date = narrowCopy(now, emptyRule);
    expect(copied.getTime()).toBe(now.getTime());
  });
  it("[1, '2'] => [1, '2']", (): void => {
    const copied = narrowCopy([1, "2"], emptyRule);
    expect(Array.isArray(copied)).toBeTruthy();
    expect(copied[0]).toBe(1);
    expect(copied[1]).toBe("2");
  });
  it("{ name: 'Bob', age: 54 } w/ rule { name: true } => { name: 'Bob' }", () => {
    const src = {
      name: "Bob",
      age: 54,
    };
    const rule: Rule = {
      name: true,
    };
    const copied = narrowCopy(src, rule);
    expect(copied.name).toBe("Bob");
    // eslint-disable-next-line no-prototype-builtins
    expect(copied.hasOwnProperty("age")).toBeFalsy();
  });
});
