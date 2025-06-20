import type { NextRequest } from "next/server";

/**
 * POST /api/contact – handle contact form submissions.
 *
 * Basic spam protection via honeypot ("website" field) and required-field validation.
 * Extend this handler to forward the message to a ticketing system, email, or
 * database as needed.
 */
export async function POST(req: NextRequest) {
  try {
    const data = (await req.json()) as Record<string, string | undefined>;
    const { name, email, company, message, website } = data;

    // Honeypot – if the hidden "website" field is filled, treat as spam.
    if (website) {
      return new Response(JSON.stringify({ success: false, error: "Spam detected." }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Basic validation.
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Name, email and message are required." }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // TODO: Integrate with email service, CRM or store in DB.
    console.info("📩 New contact form submission:", { name, email, company, message });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("/api/contact error", error);
    return new Response(JSON.stringify({ success: false, error: "Server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// Opt into the Node.js runtime – allows console logging and larger payloads.
export const runtime = "nodejs";

// Disable caching.
export const revalidate = 0;
