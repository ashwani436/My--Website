import { Resend } from "resend";
import { z } from "zod";

const phoneRegex = /^[+]?[0-9\s\-()]{7,20}$/;
const serverContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((value) => !value || phoneRegex.test(value), "Invalid phone number"),
  subject: z.enum(["General Inquiry", "Project Request", "Partnership", "Support"]),
  message: z.string().min(20).max(500),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = serverContactSchema.safeParse(body);

    if (!parsed.success) {
      return Response.json(
        { success: false, error: "Validation failed", issues: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        { success: false, error: "Missing RESEND_API_KEY environment variable." },
        { status: 500 },
      );
    }

    const { name, email, phone, subject, message } = parsed.data;
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "contact@yourdomain.com",
      to: "your@email.com",
      subject: `[${subject}] from ${name}`,
      html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "N/A"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
