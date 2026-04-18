import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ARPS Keithelmanbi" },
      { name: "description", content: "Get in touch with Assam Rifles Public School, Keithelmanbi — address, phone, email and office hours." },
      { property: "og:title", content: "Contact ARPS Keithelmanbi" },
      { property: "og:description", content: "We are here to answer your questions." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="We&apos;d love to hear from you."
        description="Reach out for admissions, alumni connections or to schedule a campus visit."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="space-y-5 lg:col-span-2">
            {[
              { icon: MapPin, title: "Visit", body: "Keithelmanbi, Imphal West\nManipur — 795114" },
              { icon: Phone, title: "Call", body: "+91 98765 43210\n+91 98765 43211" },
              { icon: Mail, title: "Email", body: "info@arpskeithelmanbi.in\nadmissions@arpskeithelmanbi.in" },
              { icon: Clock, title: "Office Hours", body: "Monday – Saturday\n8:00 AM – 3:00 PM" },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-3xl border border-border bg-card p-6">
                <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="font-display text-lg font-semibold">{title}</div>
                  <p className="mt-1 whitespace-pre-line text-sm text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="rounded-[2rem] border border-border bg-card p-8 shadow-elevated lg:col-span-3 lg:p-10"
          >
            <h2 className="font-display text-3xl font-semibold text-primary">Send a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We typically respond within one working day.</p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Email" type="email" placeholder="you@email.com" />
              <Field label="Phone" type="tel" placeholder="+91" />
              <Field label="Subject" placeholder="Admission enquiry" />
            </div>
            <div className="mt-5">
              <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Message</label>
              <textarea
                rows={5}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30"
      />
    </div>
  );
}
