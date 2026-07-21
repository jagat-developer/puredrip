import "server-only";
import { Resend } from "resend";

export type SendEmailArgs = {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
  from?: string;
  replyTo?: string;
};

const DEFAULT_FROM = "Pure Drip <onboarding@resend.dev>";

let client: Resend | null = null;

function getClient(): Resend | null {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  if (!client) {
    client = new Resend(apiKey);
  }
  return client;
}

/** Whether a Resend API key is configured in the environment. */
export function isEmailConfigured(): boolean {
  return Boolean(process.env.RESEND_API_KEY);
}

/**
 * Send a transactional email through the Resend API.
 * Returns { ok: false } (without throwing) when Resend is not configured or the
 * send fails, so callers can fall back gracefully (e.g. a mailto link).
 */
export async function sendEmail(args: SendEmailArgs): Promise<{ ok: boolean; error?: string }> {
  const resend = getClient();
  if (!resend) {
    return { ok: false, error: "RESEND_API_KEY is not configured" };
  }

  try {
    const { error } = await resend.emails.send({
      from: args.from || process.env.LEADS_FROM_EMAIL || DEFAULT_FROM,
      to: Array.isArray(args.to) ? args.to : [args.to],
      replyTo: args.replyTo,
      subject: args.subject,
      text: args.text ?? "",
      html: args.html,
    });

    if (error) {
      console.error("[email] resend error", error);
      return { ok: false, error: error.message };
    }

    return { ok: true };
  } catch (error) {
    console.error("[email] resend threw", error);
    return { ok: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
