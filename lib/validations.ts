import { z } from "zod";

/**
 * Shared contact-form schema. Used by react-hook-form on the client for
 * instant validation AND re-validated inside the Server Action on the server.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name (at least 2 characters).")
    .max(80, "That name is a little too long."),
  email: z
    .string()
    .trim()
    .min(1, "Email is required.")
    .email("Please enter a valid email address."),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a subject (at least 3 characters).")
    .max(120, "Subject is too long."),
  message: z
    .string()
    .trim()
    .min(10, "Your message should be at least 10 characters.")
    .max(4000, "Message is too long (max 4000 characters)."),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Discriminated result returned by the contact Server Action. */
export type ContactState =
  | { status: "idle" }
  | { status: "success"; message: string }
  | {
      status: "error";
      message: string;
      fieldErrors?: Partial<Record<keyof ContactInput, string[]>>;
    };
