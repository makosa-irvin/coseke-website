import { NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactFormSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid submission." },
      { status: 422 },
    );
  }

  // Honeypot tripped — silently report success so bots don't learn anything.
  if (parsed.data.company_website) {
    return NextResponse.json({ ok: true });
  }

  const submission = { ...parsed.data };
  delete submission.company_website;

  // NOTE for whoever wires this up for production:
  // This currently only logs the submission server-side. Before launch, replace
  // this block with a call to your email/CRM provider (e.g. Resend, SendGrid,
  // HubSpot) using an API key read from an environment variable — see
  // .env.example. Never send the key to the browser; keep this logic in this
  // route handler, which only ever runs on the server.
  console.info("[contact] new submission", {
    ...submission,
    receivedAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true });
}
