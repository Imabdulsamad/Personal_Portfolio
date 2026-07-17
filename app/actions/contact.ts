"use server";

import { Resend } from "resend";

import { contactSchema, type ContactState } from "@/lib/validations";
import { siteConfig } from "@/lib/site";

/**
 * Server Action for the contact form. Re-validates input with zod, then sends
 * an email via Resend. Compatible with `useActionState` — receives the previous
 * state and the submitted FormData, returns the next state.
 */
export async function sendContactEmail(
  _prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      fieldErrors: parsed.error.flatten().fieldErrors,
    };
  }

  const { name, email, subject, message } = parsed.data;

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // Fail loudly-but-gracefully if the integration isn't configured yet.
  if (!apiKey || !toEmail) {
    console.error(
      "[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL environment variables."
    );
    return {
      status: "error",
      message:
        "The contact form isn't configured yet. Please email me directly instead.",
    };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `${siteConfig.name} Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio contact form\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, sans-serif; line-height: 1.6; color: #18181b;">
          <h2 style="margin: 0 0 16px;">New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 16px 0;" />
          <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message: "Something went wrong sending your message. Please try again.",
      };
    }

    return {
      status: "success",
      message: "Thanks for reaching out — I'll get back to you soon!",
    };
  } catch (err) {
    console.error("[contact] Unexpected error:", err);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }
}

/** Minimal HTML escaping for values interpolated into the email template. */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
