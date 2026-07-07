import { z } from "zod";
import type { LeadSubmission } from "@/lib/types";

export const INTENT_OPTIONS = [
  { id: "iv-therapy", label: "IV Therapy" },
  { id: "private-event", label: "Private Event / Group" },
  { id: "membership", label: "Pure Drip Club Membership" },
  { id: "general", label: "General Inquiry" },
] as const;

export const leadSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email().max(160),
  phone: z.string().min(7).max(40),
  intent: z.enum(["iv-therapy", "private-event", "membership", "general"]),
  message: z.string().max(1200).optional(),
  preferredDate: z.string().max(40).optional(),
  caslConsent: z.literal(true),
  website: z.string().optional(),
});

export function buildLeadEmail(payload: LeadSubmission) {
  const intentLabel =
    INTENT_OPTIONS.find((option) => option.id === payload.intent)?.label ?? payload.intent;
  const subject = `New Pure Drip inquiry — ${intentLabel}`;

  const body = [
    `New Pure Drip inquiry (${intentLabel})`,
    "",
    `Name: ${payload.name}`,
    `Phone: ${payload.phone}`,
    `Email: ${payload.email}`,
    "",
    `Preferred date: ${payload.preferredDate || "Flexible"}`,
    "",
    "Notes:",
    payload.message || "(none)",
    "",
    `CASL consent: ${payload.caslConsent ? "yes" : "no"}`,
  ].join("\n");

  return { subject, body };
}

export function buildMailto(payload: LeadSubmission, recipient: string) {
  const { subject, body } = buildLeadEmail(payload);
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
