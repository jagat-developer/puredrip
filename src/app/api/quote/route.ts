import { company } from "@/lib/site-data";
import { buildLeadEmail, buildMailto, leadSchema } from "@/lib/lead";
import { isEmailConfigured, sendEmail } from "@/lib/email";

const RATE_LIMIT = 5;
const WINDOW_MS = 60_000;
const hits = new Map<string, { count: number; reset: number }>();

function clientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "anonymous";
  return ip;
}

function rateLimited(key: string) {
  const now = Date.now();
  const entry = hits.get(key);

  if (!entry || entry.reset < now) {
    hits.set(key, { count: 1, reset: now + WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  const key = clientKey(request);

  if (rateLimited(key)) {
    return Response.json(
      { ok: false, message: "Too many requests. Please try again in a moment." },
      { status: 429 },
    );
  }

  let payload;

  try {
    payload = leadSchema.parse(await request.json());
  } catch (error) {
    console.error("[lead] validation failed", error);
    return Response.json(
      { ok: false, message: "Please check the required fields and try again." },
      { status: 400 },
    );
  }

  if (payload.website && payload.website.length > 0) {
    console.warn("[lead] honeypot tripped", { ip: key });
    return Response.json({ ok: true, message: "Thank you. We'll be in touch within one business day." });
  }

  const recipient = process.env.LEADS_TO_EMAIL || company.email;
  const mailto = buildMailto(payload, recipient);

  if (!isEmailConfigured()) {
    return Response.json({
      ok: true,
      mailto,
      message: "Inquiry prepared. Open the prefilled email to send it directly.",
    });
  }

  const { subject, body } = buildLeadEmail(payload);
  const result = await sendEmail({
    to: recipient,
    replyTo: payload.email,
    subject,
    text: body,
  });

  if (!result.ok) {
    return Response.json(
      {
        ok: true,
        mailto,
        message: "Email delivery could not be confirmed. Open the prepared email fallback.",
      },
      { status: 202 },
    );
  }

  return Response.json({
    ok: true,
    message: "Inquiry sent. We'll follow up within one business day.",
  });
}
