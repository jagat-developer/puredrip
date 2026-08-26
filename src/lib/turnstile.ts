const VERIFY_ENDPOINT = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

type SiteVerifyResponse = {
  success?: boolean;
  "error-codes"?: string[];
};

/**
 * Verifies a Cloudflare Turnstile token server-side.
 *
 * Returns false for a missing token, a non-200 response, or `success: false`.
 * Cloudflare error codes are logged but never returned to the caller, so they
 * cannot leak into a client response.
 */
export async function verifyTurnstile(token: string, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    // Fail closed in production, but keep local dev usable without keys.
    if (process.env.NODE_ENV === "production") {
      throw new Error("TURNSTILE_SECRET_KEY is not set.");
    }
    console.warn("[turnstile] TURNSTILE_SECRET_KEY is not set — skipping verification in development.");
    return true;
  }

  if (!token) {
    return false;
  }

  const body = new URLSearchParams({ secret, response: token });

  if (ip) {
    body.set("remoteip", ip);
  }

  try {
    const response = await fetch(VERIFY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
      cache: "no-store",
    });

    if (!response.ok) {
      console.error("[turnstile] siteverify returned", response.status);
      return false;
    }

    const result = (await response.json()) as SiteVerifyResponse;

    if (!result.success) {
      console.warn("[turnstile] verification rejected", result["error-codes"]);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[turnstile] verification request failed", error);
    return false;
  }
}
