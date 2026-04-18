import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { ArrowRight, CheckCircle2, Download } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions 2026–27 — ARPS Keithelmanbi" },
      { name: "description", content: "Online admission registration for Nursery through Class XI at Assam Rifles Public School, Keithelmanbi for the 2026–27 academic session." },
      { property: "og:title", content: "Admissions 2026–27 — ARPS Keithelmanbi" },
      { property: "og:description", content: "Limited seats available. Apply online today." },
    ],
  }),
  component: AdmissionsPage,
});

const steps = [
  { n: "01", title: "Online registration", body: "Fill in the registration form with your child's details." },
  { n: "02", title: "Document submission", body: "Upload birth certificate, previous report cards and transfer certificate." },
  { n: "03", title: "Interaction / assessment", body: "Age-appropriate interaction for younger classes; written test for Class VI and above." },
  { n: "04", title: "Offer & confirmation", body: "Receive admission offer; confirm the seat by paying the admission fee." },
];

const docs = [
  "Birth certificate (original + photocopy)",
  "Previous school's transfer certificate",
  "Last two years' progress reports",
  "Aadhaar card of student & parents",
  "Caste / category certificate (if applicable)",
  "Four passport-size photographs",
];

function AdmissionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Admissions 2026 – 27"
        title="Apply now. Begin in April."
        description="Online registration is open for Nursery through Class XI. Limited seats — early applicants are given priority for the campus interaction."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-5 md:grid-cols-2">
          <Link
            to="/admissions"
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground shadow-elevated transition-smooth hover:-translate-y-1"
          >
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-2xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Class Nursery – IX & XI</div>
              <h3 className="mt-3 font-display text-3xl font-semibold">Online Registration</h3>
              <p className="mt-3 text-primary-foreground/80">Begin the application — takes about 10 minutes.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                Start application <ArrowRight size={16} className="transition-smooth group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
          <a
            href="#"
            className="group relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-smooth hover:-translate-y-1 hover:shadow-elevated"
          >
            <div className="absolute inset-0 bg-gradient-gold opacity-0 transition-smooth group-hover:opacity-10" />
            <div className="relative">
              <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Class XI Stream Selection</div>
              <h3 className="mt-3 font-display text-3xl font-semibold text-foreground">Senior Secondary</h3>
              <p className="mt-3 text-muted-foreground">Science · Commerce · Humanities. Limited seats.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Download size={16} /> Download brochure
              </div>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold text-primary">The process</h2>
            <p className="mt-3 text-foreground/70">Four simple steps from enquiry to enrolment.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-3xl border border-border bg-card p-7">
                <div className="font-display text-5xl font-semibold text-gold/40">{s.n}</div>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Documents Required</div>
            <h2 className="mt-3 font-display text-4xl font-semibold text-primary">What to bring</h2>
            <ul className="mt-8 space-y-3">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-foreground/85">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Important Dates</div>
            <h3 className="mt-3 font-display text-3xl font-semibold">2026 – 27 Calendar</h3>
            <dl className="mt-8 divide-y divide-primary-foreground/15">
              {[
                ["Online registration opens", "15 Nov 2025"],
                ["Last date to apply", "31 Jan 2026"],
                ["Interaction / assessment", "Feb 2026"],
                ["Results & confirmation", "Mar 2026"],
                ["Session begins", "01 Apr 2026"],
              ].map(([k, v]) => (
                <div key={k} className="flex items-center justify-between py-3.5 text-sm">
                  <dt className="text-primary-foreground/75">{k}</dt>
                  <dd className="font-display text-base font-semibold text-gold">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
