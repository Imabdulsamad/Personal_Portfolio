"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { contactSchema, type ContactInput } from "@/lib/validations";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

// Public, domain-restricted key from https://web3forms.com — safe to expose.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export function ContactForm() {
  const [pending, setPending] = React.useState(false);
  // Simple honeypot — bots fill hidden fields, humans don't.
  const honeypotRef = React.useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  const onValid = async (data: ContactInput) => {
    // Silently drop bot submissions.
    if (honeypotRef.current?.checked) {
      reset();
      return;
    }

    if (!ACCESS_KEY) {
      toast.error(
        "The contact form isn't configured yet. Please email me directly instead."
      );
      return;
    }

    setPending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `[Portfolio] ${data.subject}`,
          from_name: `${siteConfig.name} Portfolio`,
          replyto: data.email,
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        toast.success("Thanks for reaching out — I'll get back to you soon!");
        reset();
      } else {
        console.error("[contact] Web3Forms error:", result);
        toast.error(
          result.message ?? "Something went wrong sending your message. Please try again."
        );
      }
    } catch (err) {
      console.error("[contact] Network error:", err);
      toast.error("Network error — please check your connection and try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onValid)} noValidate className="space-y-5">
      {/* Honeypot: hidden from users, catches bots. */}
      <input
        ref={honeypotRef}
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="sr-only"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Jane Doe"
            autoComplete="name"
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="jane@example.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Subject</Label>
        <Input
          id="subject"
          placeholder="Let's work together"
          aria-invalid={!!errors.subject}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-sm text-destructive">{errors.subject.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          rows={6}
          placeholder="Tell me about your project or opportunity…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={pending}
        className="w-full bg-violet-500 text-white hover:bg-violet-600 sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
