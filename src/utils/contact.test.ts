import { describe, expect, it } from "vitest";
import {
  buildMailtoUrl,
  isUsableContactEmail,
  isUsableProfileLink,
} from "./contact";
describe("contact destinations", () => {
  it("keeps placeholders inactive while permitting real configured destinations", () => {
    for (const email of [
      "student@example.com",
      "student@mail.example.org",
      "invalid",
      "",
    ])
      expect(isUsableContactEmail(email)).toBe(false);
    expect(isUsableContactEmail("student@school.edu", true)).toBe(false);
    expect(isUsableContactEmail("student@school.edu")).toBe(true);
    expect(isUsableProfileLink("https://example.com/student")).toBe(false);
    expect(isUsableProfileLink("javascript:alert(1)")).toBe(false);
    expect(isUsableProfileLink("https://github.com/student", true)).toBe(false);
    expect(isUsableProfileLink("https://github.com/student")).toBe(true);
  });
  it("encodes special characters and multiline mail drafts", () => {
    const url = buildMailtoUrl(
      {
        name: "A & B",
        email: "sender@school.edu",
        subject: "Research & learning?",
        message: "First line\nSecond line",
      },
      "student@school.edu",
    );
    expect(url).toContain("subject=Research%20%26%20learning%3F");
    expect(decodeURIComponent(url)).toContain("First line\nSecond line");
  });
});
