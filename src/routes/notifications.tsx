import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { ArrowUpRight, Bell } from "lucide-react";

export const Route = createFileRoute("/notifications")({
  head: () => ({
    meta: [
      { title: "Notice Board — ARPS Keithelmanbi" },
      { name: "description", content: "Latest notices, circulars and announcements from Assam Rifles Public School, Keithelmanbi." },
      { property: "og:title", content: "Notice Board — ARPS Keithelmanbi" },
      { property: "og:description", content: "Stay updated with the latest school news and circulars." },
    ],
  }),
  component: NotificationsPage,
});

const notices = [
  { date: "12 Mar 2026", tag: "Fees", title: "Fee structure for academic session 2026 – 27 published" },
  { date: "06 Mar 2026", tag: "Recruitment", title: "Vacancy: PGT Mathematics & TGT Social Science" },
  { date: "28 Feb 2026", tag: "Examination", title: "Class IX & XI annual examination schedule released" },
  { date: "20 Feb 2026", tag: "Event", title: "Annual Day & prize distribution ceremony — 15 March" },
  { date: "10 Feb 2026", tag: "Admission", title: "Class XI stream selection list — second round" },
  { date: "02 Feb 2026", tag: "Holiday", title: "School closed for Yaoshang celebrations from 5 – 8 March" },
  { date: "20 Jan 2026", tag: "Circular", title: "Revised winter uniform guidelines for Pre-Primary section" },
];

const tagColors: Record<string, string> = {
  Fees: "bg-amber-100 text-amber-900",
  Recruitment: "bg-emerald-100 text-emerald-900",
  Examination: "bg-rose-100 text-rose-900",
  Event: "bg-sky-100 text-sky-900",
  Admission: "bg-violet-100 text-violet-900",
  Holiday: "bg-orange-100 text-orange-900",
  Circular: "bg-stone-200 text-stone-900",
};

function NotificationsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Notice Board"
        title="Latest from the school."
        description="Circulars, announcements and reminders for parents, students and applicants."
      />

      <section className="mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-elevated">
          {notices.map((n, i) => (
            <a
              key={i}
              href="#"
              className="group flex items-start gap-5 border-b border-border px-6 py-6 transition-smooth last:border-b-0 hover:bg-secondary/50 md:px-8 md:py-7"
            >
              <div className="mt-1 hidden rounded-2xl bg-primary/10 p-3 text-primary md:block">
                <Bell size={18} />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className={`rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider ${tagColors[n.tag] ?? "bg-secondary text-foreground"}`}>{n.tag}</span>
                  <span className="text-muted-foreground">{n.date}</span>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold text-foreground transition-smooth group-hover:text-primary md:text-xl">
                  {n.title}
                </h3>
              </div>
              <ArrowUpRight className="mt-1 shrink-0 text-muted-foreground transition-smooth group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" size={20} />
            </a>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
