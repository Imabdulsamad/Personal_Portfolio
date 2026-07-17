"use client";

import * as React from "react";
import { useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";

import { sendContactEmail } from "@/app/actions/contact";
import {
  contactSchema,
  type ContactInput,
  type ContactState,
} from "@/lib/validations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialState: ContactState = { status: "idle" };

export function ContactForm() {
  // useActionState is React 19's successor to useFormState — tracks the
  // Server Action result and pending state.
  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState
  );
  const [isTransitioning, startTransition] = React.useTransition();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
    defaultValues: { name: "", email: "", subject: "", message: "" },
  });

  // React to the Server Action result: toast + reset on success, and surface
  // any server-side field errors on the matching inputs.
  const lastHandled = React.useRef(state);
  React.useEffect(() => {
    if (state === lastHandled.current) return;
    lastHandled.current = state;

    if (state.status === "success") {
      toast.success(state.message);
      reset();
    } else if (state.status === "error") {
      toast.error(state.message);
      if (state.fieldErrors) {
        for (const [field, messages] of Object.entries(state.fieldErrors)) {
          if (messages?.[0]) {
            setError(field as keyof ContactInput, {
              type: "server",
              message: messages[0],
            });
          }
        }
      }
    }
  }, [state, reset, setError]);

  // Client-side validation passes → hand a FormData payload to the action.
  const onValid = (data: ContactInput) => {
    const formData = new FormData();
    formData.set("name", data.name);
    formData.set("email", data.email);
    formData.set("subject", data.subject);
    formData.set("message", data.message);
    startTransition(() => formAction(formData));
  };

  const pending = isPending || isTransitioning;

  return (
    <form onSubmit={handleSubmit(onValid)} noValidate className="space-y-5">
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
