import { NextResponse } from "next/server";

/**
 * ─────────────────────────────────────────────────────────────
 *  CONTACT FORM HANDLER
 * ─────────────────────────────────────────────────────────────
 *  Right now this validates the submission and logs it. To make
 *  enquiries actually reach the firm, add an email provider below.
 *
 *  Recommended: Resend (https://resend.com) — free tier is plenty
 *  for a law firm's enquiry volume.
 *
 *    1. npm install resend
 *    2. Add RESEND_API_KEY in Vercel → Settings → Environment Variables
 *    3. Uncomment the block marked SEND EMAIL below
 *
 *  Never commit an API key to this repository.
 * ─────────────────────────────────────────────────────────────
 */

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, matter, message, website } = body;

    // Honeypot: silently accept and discard bot submissions.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !matter || !message) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "That email address does not look right." },
        { status: 400 }
      );
    }

    // ── SEND EMAIL ──────────────────────────────────────────
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "Website <enquiries@yourdomain.com>",
    //   to: process.env.ENQUIRY_INBOX!,
    //   replyTo: email,
    //   subject: `New enquiry — ${matter}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "—"}\nMatter: ${matter}\n\n${message}`,
    // });
    // ────────────────────────────────────────────────────────

    console.log("New enquiry:", { name, email, phone, matter });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "We could not send that just now." },
      { status: 500 }
    );
  }
}
