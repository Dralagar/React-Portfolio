import { NextRequest, NextResponse } from "next/server";

// Minimal contact-form endpoint.
//
// This validates and accepts the submission, then logs it server-side.
// To go live, wire this up to a real notification/email path — e.g.:
//   - an email provider (Resend, Postmark, SendGrid, or SMTP via Nodemailer), or
//   - a webhook into Slack/WhatsApp/CRM.
// Keep the same request/response contract below so the form on
// /contact keeps working once you plug in the real integration.

type ContactPayload = {
  name?: string;
  email?: string;
  organisation?: string;
  message?: string;
  subject?: string;
};

export async function POST(request: NextRequest) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email address." }, { status: 400 });
  }

  // TODO: replace this log with a real email/notification integration.
  console.log("[contact-form] New enquiry:", body);

  return NextResponse.json({ ok: true });
}
