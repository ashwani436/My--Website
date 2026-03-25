"use client";

// Client Component — needed for interactive form validation, submission state, and toast feedback.
import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), "Please enter a valid phone number."),
  subject: z.enum(["General Inquiry", "Project Request", "Partnership", "Support"]),
  message: z
    .string()
    .min(20, "Message must be at least 20 characters.")
    .max(500, "Message must be at most 500 characters."),
});
type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [toast, setToast] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "General Inquiry",
      message: "",
    },
  });

  async function onSubmit(values: ContactFormValues) {
    setToast(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      reset();
      setToast({
        type: "success",
        message: "Message sent! We'll get back to you soon.",
      });
    } catch {
      setToast({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-2xl border border-border bg-surface p-6"
      aria-label="Contact us form"
    >
      <div className="grid gap-4">
        <label className="grid gap-2 text-sm text-slate-200" htmlFor="name">
          Name
          <input
            id="name"
            {...register("name")}
            className="rounded-xl border border-border bg-black px-3 py-2 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        {errors.name ? (
          <p className="text-xs text-red-400" role="alert">
            {errors.name.message}
          </p>
        ) : null}

        <label className="grid gap-2 text-sm text-slate-200" htmlFor="email">
          Email
          <input
            id="email"
            type="email"
            {...register("email")}
            className="rounded-xl border border-border bg-black px-3 py-2 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        {errors.email ? (
          <p className="text-xs text-red-400" role="alert">
            {errors.email.message}
          </p>
        ) : null}

        <label className="grid gap-2 text-sm text-slate-200" htmlFor="phone">
          Phone (optional)
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="rounded-xl border border-border bg-black px-3 py-2 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        {errors.phone ? (
          <p className="text-xs text-red-400" role="alert">
            {errors.phone.message}
          </p>
        ) : null}

        <label className="grid gap-2 text-sm text-slate-200" htmlFor="subject">
          Subject
          <select
            id="subject"
            {...register("subject")}
            className="rounded-xl border border-border bg-black px-3 py-2 text-foreground outline-none transition-colors focus:border-accent"
          >
            <option value="General Inquiry">General Inquiry</option>
            <option value="Project Request">Project Request</option>
            <option value="Partnership">Partnership</option>
            <option value="Support">Support</option>
          </select>
        </label>
        {errors.subject ? (
          <p className="text-xs text-red-400" role="alert">
            {errors.subject.message}
          </p>
        ) : null}

        <label className="grid gap-2 text-sm text-slate-200" htmlFor="message">
          Message
          <textarea
            id="message"
            rows={5}
            {...register("message")}
            className="rounded-xl border border-border bg-black px-3 py-2 text-foreground outline-none transition-colors focus:border-accent"
          />
        </label>
        {errors.message ? (
          <p className="text-xs text-red-400" role="alert">
            {errors.message.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent bg-accent px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? (
            <>
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/40 border-t-black" />
              Sending...
            </>
          ) : (
            "Send Message"
          )}
        </button>

        {toast ? (
          <p
            className={`text-sm ${toast.type === "success" ? "text-emerald-400" : "text-red-400"}`}
            role="status"
            aria-live="polite"
          >
            {toast.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
