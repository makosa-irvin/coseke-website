import { describe, expect, it } from "vitest";
import { contactFormSchema } from "@/lib/contact-schema";

const validSubmission = {
  name: "Amina Otieno",
  email: "amina@example.com",
  organization: "Example Bank",
  country: "Kenya",
  interest: "EDRMS",
  message: "We have about 40,000 loan files we'd like to digitize and index.",
  company_website: "",
};

describe("contactFormSchema", () => {
  it("accepts a fully valid submission", () => {
    const result = contactFormSchema.safeParse(validSubmission);
    expect(result.success).toBe(true);
  });

  it("accepts a submission without the optional fields", () => {
    const minimal = {
      name: validSubmission.name,
      email: validSubmission.email,
      message: validSubmission.message,
      company_website: validSubmission.company_website,
    };
    const result = contactFormSchema.safeParse(minimal);
    expect(result.success).toBe(true);
  });

  it("rejects a missing name", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, name: "" });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email address", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, email: "not-an-email" });
    expect(result.success).toBe(false);
  });

  it("rejects a message that is too short to be useful", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, message: "Hi" });
    expect(result.success).toBe(false);
  });

  it("rejects a submission where the honeypot field has been filled in", () => {
    const result = contactFormSchema.safeParse({
      ...validSubmission,
      company_website: "http://spam.example",
    });
    expect(result.success).toBe(false);
  });

  it("defaults requestType to general when not provided", () => {
    const result = contactFormSchema.safeParse(validSubmission);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.requestType).toBe("general");
    }
  });

  it("accepts requestType 'demo'", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, requestType: "demo" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.requestType).toBe("demo");
    }
  });

  it("rejects an unrecognized requestType", () => {
    const result = contactFormSchema.safeParse({ ...validSubmission, requestType: "urgent" });
    expect(result.success).toBe(false);
  });
});
