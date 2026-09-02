import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Enter your full name").max(120),
  email: z.string().trim().email("Enter a valid email address").max(200),
  organization: z.string().trim().max(160).optional().or(z.literal("")),
  country: z.string().trim().max(80).optional().or(z.literal("")),
  interest: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Add a few details about what you need").max(4000),
  // Honeypot field: real visitors never fill this in. Bots frequently do.
  company_website: z.string().max(0, "Spam check failed").optional().or(z.literal("")),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
