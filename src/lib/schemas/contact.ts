import { z } from "zod";

export const contactSubjectOptions = [
  "Project Inquiry",
  "General Freelance",
  "Collaboration",
  "Just Saying Hi",
] as const;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is too short").max(120),
  email: z.string().email("Enter a valid email"),
  subject: z.enum(contactSubjectOptions),
  message: z.string().min(10, "Message is too short").max(5000),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
