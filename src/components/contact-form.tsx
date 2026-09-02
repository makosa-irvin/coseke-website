"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema } from "@/lib/contact-schema";
import { solutions } from "@/content/solutions";

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-indigo";

type Props = {
  defaultInterest?: string;
  isDemoRequest?: boolean;
};

export function ContactForm({ defaultInterest, isDemoRequest = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());

    const parsed = contactFormSchema.safeParse(values);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(parsed.error.issues[0]?.message ?? "Please check the form and try again.");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("success");
      event.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="border-line bg-paper border p-8">
        <p className="font-display text-indigo text-2xl font-semibold">Message sent.</p>
        <p className="text-ink-soft mt-2">
          Thanks for reaching out. Someone from our team will get back to you within one business
          day.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-indigo hover:text-clay mt-6 text-sm font-medium"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-ink text-sm font-medium">
            Full name
          </label>
          <input id="name" name="name" required className={`mt-2 ${fieldClasses}`} />
        </div>
        <div>
          <label htmlFor="email" className="text-ink text-sm font-medium">
            Email
          </label>
          <input id="email" name="email" type="email" required className={`mt-2 ${fieldClasses}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="organization" className="text-ink text-sm font-medium">
            Organization
          </label>
          <input id="organization" name="organization" className={`mt-2 ${fieldClasses}`} />
        </div>
        <div>
          <label htmlFor="country" className="text-ink text-sm font-medium">
            Country
          </label>
          <select id="country" name="country" defaultValue="" className={`mt-2 ${fieldClasses}`}>
            <option value="">Select a country</option>
            <option>Kenya</option>
            <option>Uganda</option>
            <option>Tanzania</option>
            <option>Rwanda</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="interest" className="text-ink text-sm font-medium">
          What are you looking into?
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={defaultInterest ?? ""}
          className={`mt-2 ${fieldClasses}`}
        >
          <option value="">Select a solution area</option>
          {solutions.map((s) => (
            <option key={s.slug} value={s.tabLabel}>
              {s.tabLabel}
            </option>
          ))}
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <input type="hidden" name="requestType" value={isDemoRequest ? "demo" : "general"} />

      <div>
        <label htmlFor="message" className="text-ink text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder={
            isDemoRequest
              ? "A rough idea of your current volumes and what you'd want to see in a walkthrough."
              : "Tell us about the process, archive, or system you're working with."
          }
          className={`mt-2 ${fieldClasses}`}
        />
      </div>

      {/* Honeypot: hidden from real users, left empty by them, often filled in by bots */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_website">Leave this field blank</label>
        <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && errorMessage ? (
        <p role="alert" className="text-clay text-sm">
          {errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-clay text-paper hover:bg-clay-soft px-6 py-3 text-sm font-medium transition-colors disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : isDemoRequest ? "Request demo" : "Send message"}
      </button>
    </form>
  );
}
