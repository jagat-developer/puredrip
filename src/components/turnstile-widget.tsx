"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

const SCRIPT_ID = "cloudflare-turnstile";
const SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

/** Height of Cloudflare's "normal" widget, reserved up front to avoid layout shift. */
const WIDGET_HEIGHT = 65;

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

/**
 * False when no site key is configured (local dev without keys), so forms can
 * skip the token requirement instead of leaving the submit button disabled.
 */
export const isTurnstileEnabled = SITE_KEY.length > 0;

type TurnstileOptions = {
  sitekey: string;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
  "timeout-callback": () => void;
  theme: "light" | "dark" | "auto";
  action?: string;
};

declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: TurnstileOptions) => string | undefined;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
  }
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
  /** Bump this to reset the widget — tokens are single-use, so reset after every submit. */
  resetSignal?: number;
  action?: string;
};

export function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  resetSignal = 0,
  action,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  // Keep the latest callbacks in a ref so the widget renders exactly once and
  // does not tear down whenever the parent re-renders.
  const callbacksRef = useRef({ onVerify, onExpire, onError });

  useEffect(() => {
    callbacksRef.current = { onVerify, onExpire, onError };
  }, [onVerify, onExpire, onError]);

  // next/script calls this once the API has loaded and again on every remount,
  // and the widgetId guard keeps a second widget from being injected.
  const renderWidget = useCallback(() => {
    const container = containerRef.current;

    if (!container || !window.turnstile || widgetIdRef.current) {
      return;
    }

    widgetIdRef.current =
      window.turnstile.render(container, {
        sitekey: SITE_KEY,
        callback: (token) => callbacksRef.current.onVerify(token),
        "expired-callback": () => callbacksRef.current.onExpire?.(),
        "error-callback": () => callbacksRef.current.onError?.(),
        "timeout-callback": () => callbacksRef.current.onExpire?.(),
        theme: "light",
        ...(action ? { action } : {}),
      }) ?? null;
  }, [action]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current) {
        window.turnstile?.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!resetSignal || !widgetIdRef.current) {
      return;
    }

    window.turnstile?.reset(widgetIdRef.current);
  }, [resetSignal]);

  if (!isTurnstileEnabled) {
    return null;
  }

  return (
    <>
      <Script
        id={SCRIPT_ID}
        src={SCRIPT_SRC}
        strategy="lazyOnload"
        onReady={renderWidget}
        onError={() => callbacksRef.current.onError?.()}
      />
      <div ref={containerRef} style={{ minHeight: WIDGET_HEIGHT }} />
    </>
  );
}
