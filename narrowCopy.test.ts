import { narrowCopy, Rule } from "./narrowCopy.ts";
import {
    assert,
    assertEquals,
} from "https://deno.land/std@0.65.0/testing/asserts.ts";

const emptyRule: Rule = {};
Deno.test("narrowCopy(null)", () : void => {
    const copied = narrowCopy(null, emptyRule);
    assertEquals(copied, null);
});

Deno.test("narrowCopy(undefined)", () : void => {
    const copied = narrowCopy(undefined, emptyRule);
    assertEquals(copied, undefined);
});

Deno.test("narrowCopy(string)", () : void => {
    const copied = narrowCopy("Bob", emptyRule);
    assertEquals(copied, "Bob");
});

Deno.test("narrowCopy(number)", () : void => {
    const copied = narrowCopy(1, emptyRule);
    assertEquals(copied, 1);
});

Deno.test("narrowCopy(boolean)", () : void => {
    const copied = narrowCopy(true, emptyRule);
    assertEquals(copied, true);
});

Deno.test("narrowCopy(Date)", () : void => {
    const now = new Date();
    const copied = narrowCopy(now, emptyRule);
    assertEquals(copied, now);
});

Deno.test("narrowCopy(Array)", () : void => {
    const copied = narrowCopy([1, "2"], emptyRule);
    assert(Array.isArray(copied));
    assertEquals(copied[0], 1);
    assertEquals(copied[1], "2");
});

Deno.test("narrowCopy(Object)", () => {
    const src = {
        name: "Bob",
        age: 54
    };
    const rule: Rule = {
        name: true
    };
    const copied = narrowCopy(src, rule);
    assertEquals(copied.name, "Bob");
    assert(! copied.hasOwnProperty("age"));
});
