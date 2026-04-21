import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { CONTACT_INTRO, contactMeta, socialLinks } from "@/content/site";
import { submitContactForm } from "@/lib/contactSubmit";
import {
  contactFormSchema,
  contactSubjectOptions,
  type ContactFormValues,
} from "@/lib/schemas/contact";
import { MaterialIcon } from "@/components/ui/MaterialIcon";

export function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      subject: "Project Inquiry",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    setStatus(null);
    const result = await submitContactForm(data);
    setStatus(result.message);
    if (result.ok) reset();
  });

  return (
    <main className="mx-auto max-w-7xl px-6 pb-12">
      <div className="grid items-start gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-4">
            <span className="font-label text-sm font-bold uppercase tracking-[0.2em] text-secondary">
              Get In Touch
            </span>
            <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-white md:text-6xl light:text-slate-900">
              Let&apos;s build something{" "}
              <span className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent">
                alive
              </span>{" "}
              together.
            </h1>
            <p className="max-w-md text-lg leading-relaxed text-on-surface-variant light:text-slate-600">
              {CONTACT_INTRO}
            </p>
          </div>
          <div className="space-y-6 pt-4">
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-on-primary">
                <MaterialIcon name="alternate_email" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Email Me</p>
                <p className="font-medium text-on-surface light:text-slate-900">
                  <a href={`mailto:${contactMeta.email}`} className="hover:text-tertiary light:hover:text-violet-700">
                    {contactMeta.email}
                  </a>
                </p>
              </div>
            </div>
            <div className="group flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface-container-high text-secondary transition-all duration-300 group-hover:bg-secondary group-hover:text-on-secondary">
                <MaterialIcon name="location_on" />
              </div>
              <div>
                <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Base</p>
                <p className="font-medium text-on-surface light:text-slate-900">{contactMeta.location}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 pt-4">
            {socialLinks.slice(0, 3).map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/20 bg-surface-container-low text-on-surface-variant transition-all duration-300 hover:border-tertiary hover:text-tertiary light:border-slate-300 light:bg-white light:hover:border-violet-400"
                aria-label={s.label}
              >
                <MaterialIcon name={s.icon ?? "link"} className="text-[20px]" />
              </a>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-primary/10 via-secondary/10 to-tertiary/10 opacity-50 blur-3xl" />
          <div className="glass-panel rounded-[2rem] border border-white/5 p-8 shadow-2xl md:p-10 light:border-slate-200 light:bg-white/90">
            <form className="space-y-6" onSubmit={onSubmit} noValidate>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="ml-1 font-label text-sm text-on-surface-variant">
                    Full Name
                  </label>
                  <input
                    id="name"
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full rounded-xl border-none bg-surface-container-lowest px-4 py-4 text-on-surface placeholder:text-outline transition-all duration-300 focus:border-b focus:border-primary focus:ring-0 light:bg-slate-100 light:text-slate-900"
                    {...register("name")}
                  />
                  {errors.name ? <p className="text-sm text-error">{errors.name.message}</p> : null}
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="ml-1 font-label text-sm text-on-surface-variant">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    placeholder="your@email.com"
                    className="w-full rounded-xl border-none bg-surface-container-lowest px-4 py-4 text-on-surface placeholder:text-outline transition-all duration-300 focus:border-b focus:border-primary focus:ring-0 light:bg-slate-100 light:text-slate-900"
                    {...register("email")}
                  />
                  {errors.email ? <p className="text-sm text-error">{errors.email.message}</p> : null}
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="ml-1 font-label text-sm text-on-surface-variant">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full appearance-none rounded-xl border-none bg-surface-container-lowest px-4 py-4 text-on-surface transition-all duration-300 focus:border-b focus:border-primary focus:ring-0 light:bg-slate-100 light:text-slate-900"
                  {...register("subject")}
                >
                  {contactSubjectOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
                {errors.subject ? <p className="text-sm text-error">{errors.subject.message}</p> : null}
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="ml-1 font-label text-sm text-on-surface-variant">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your idea, platform, or visual direction..."
                  className="w-full resize-none rounded-xl border-none bg-surface-container-lowest px-4 py-4 text-on-surface placeholder:text-outline transition-all duration-300 focus:border-b focus:border-primary focus:ring-0 light:bg-slate-100 light:text-slate-900"
                  {...register("message")}
                />
                {errors.message ? <p className="text-sm text-error">{errors.message.message}</p> : null}
              </div>
              {status ? (
                <p className={`text-sm ${status.includes("not configured") ? "text-tertiary" : "text-on-surface"}`}>
                  {status}
                </p>
              ) : null}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full overflow-hidden rounded-full p-[2px] transition-transform focus:outline-none focus:ring-2 focus:ring-tertiary active:scale-[0.98] disabled:opacity-60"
              >
                <span className="absolute inset-[-1000%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#b6a0ff_0%,#ff6c95_50%,#81ecff_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-surface-container px-8 py-4 text-lg font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-transparent group-hover:text-on-primary light:bg-slate-100 light:text-slate-900 light:group-hover:bg-white">
                  {isSubmitting ? "Sending…" : "Send Message"}
                  <MaterialIcon name="send" className="ml-2 text-xl transition-transform group-hover:translate-x-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
