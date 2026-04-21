import type { ContactFormValues } from "@/lib/schemas/contact";

export type ContactSubmitResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

/**
 * POST JSON to your serverless contact endpoint.
 * Set VITE_CONTACT_API_URL in .env (e.g. https://api.example.com/contact).
 * See docs/DEPLOY.md for hosting patterns.
 */
export async function submitContactForm(data: ContactFormValues): Promise<ContactSubmitResult> {
  const url = import.meta.env.VITE_CONTACT_API_URL;
  if (!url) {
    return {
      ok: false,
      message:
        "Contact endpoint is not configured. Set VITE_CONTACT_API_URL or use a form service — see docs/DEPLOY.md.",
    };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return {
        ok: false,
        message: text || `Request failed (${res.status})`,
      };
    }

    return { ok: true, message: "Thanks — your message was sent." };
  } catch {
    return {
      ok: false,
      message: "The message could not be sent right now. Please try again later or email me directly.",
    };
  }
}
