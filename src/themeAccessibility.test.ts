/// <reference types="node" />
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
const css = readFileSync("src/index.css", "utf8");
const luminance = (hex: string) => {
  const channels = hex
    .match(/[a-f0-9]{2}/gi)!
    .map((c) => parseInt(c, 16) / 255)
    .map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
};
const contrast = (a: string, b: string) => {
  const x = luminance(a),
    y = luminance(b);
  return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05);
};
describe("analytics theme contrast", () => {
  for (const selector of [":root", ".light"])
    it(selector + " has readable text/actions and visible focus", () => {
      const block = css.slice(css.indexOf(selector + " {")).split("}")[0];
      const tokens = Object.fromEntries(
        [...block.matchAll(/--([\w-]+):\s*(#[a-f0-9]{6});/gi)].map((m) => [
          m[1],
          m[2],
        ]),
      );
      for (const text of ["text-100", "text-300", "accent-300"])
        for (const bg of ["bg-900", "surface-900", "surface-800", "control-bg"])
          expect(
            contrast(tokens[text], tokens[bg]),
            text + " / " + bg,
          ).toBeGreaterThanOrEqual(selector === ".light" ? 7 : 4.5);
      for (const bg of ["primary-bg", "primary-hover-bg"])
        expect(
          contrast(tokens["primary-text"], tokens[bg]),
        ).toBeGreaterThanOrEqual(4.5);
      if (selector === ".light") {
        for (const bg of [
          "bg-900",
          "surface-900",
          "surface-800",
          "control-bg",
        ]) {
          expect(
            contrast(tokens["line-500"], tokens[bg]),
            "control border / " + bg,
          ).toBeGreaterThanOrEqual(3);
        }
      }
      for (const bg of ["bg-900", "surface-900"])
        expect(
          contrast(tokens["focus-border"], tokens[bg]),
        ).toBeGreaterThanOrEqual(3);
    });
});
