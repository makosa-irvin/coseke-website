import { afterEach, describe, expect, it, vi } from "vitest";
import { resolveSiteUrl, partners, clients, accreditations } from "@/content/site";

const ENV_KEY = "NEXT_PUBLIC_SITE_URL";
const originalValue = process.env[ENV_KEY];

function setEnv(value: string | undefined) {
  if (value === undefined) {
    delete process.env[ENV_KEY];
  } else {
    process.env[ENV_KEY] = value;
  }
}

describe("resolveSiteUrl", () => {
  afterEach(() => {
    setEnv(originalValue);
    vi.restoreAllMocks();
  });

  it("falls back to the default when the env var is unset", () => {
    setEnv(undefined);
    expect(resolveSiteUrl()).toBe("https://www.coseke.com");
  });

  it("falls back to the default when the env var is an empty string", () => {
    // This is the actual bug: a hosting dashboard var added but left
    // blank is "" (set, not unset), which a bare `?? default` does not
    // catch. It previously reached `new URL("")` in the root layout's
    // metadataBase and crashed the entire production build.
    setEnv("");
    expect(resolveSiteUrl()).toBe("https://www.coseke.com");
  });

  it("falls back to the default when the env var is whitespace only", () => {
    setEnv("   ");
    expect(resolveSiteUrl()).toBe("https://www.coseke.com");
  });

  it("falls back to the default when the env var isn't a well-formed absolute URL", () => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
    setEnv("coseke.com");
    expect(resolveSiteUrl()).toBe("https://www.coseke.com");
    expect(console.warn).toHaveBeenCalledOnce();
  });

  it("uses the env var when it's a valid absolute URL", () => {
    setEnv("https://staging.coseke.com");
    expect(resolveSiteUrl()).toBe("https://staging.coseke.com");
  });

  it("trims surrounding whitespace from an otherwise valid URL", () => {
    setEnv("  https://staging.coseke.com  ");
    expect(resolveSiteUrl()).toBe("https://staging.coseke.com");
  });
});

describe("partners, clients, and accreditations data integrity", () => {
  it("every partner across all groups has a unique slug", () => {
    const all = [...partners.platforms, ...partners.infrastructure, ...partners.storage];
    const slugs = all.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every partner has a non-empty name, note, and description", () => {
    const all = [...partners.platforms, ...partners.infrastructure, ...partners.storage];
    for (const partner of all) {
      expect(partner.name.length).toBeGreaterThan(0);
      expect(partner.note.length).toBeGreaterThan(0);
      expect(partner.description.length).toBeGreaterThan(0);
    }
  });

  it("every client has a unique slug", () => {
    const slugs = clients.map((c) => c.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("every client url that is set is a well-formed absolute URL", () => {
    for (const client of clients) {
      if (!client.url) continue;
      expect(() => new URL(client.url as string)).not.toThrow();
    }
  });

  it("every accreditation has a unique slug", () => {
    const slugs = accreditations.map((a) => a.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
