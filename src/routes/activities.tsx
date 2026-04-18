import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Drama, Globe2, Music, Palette, Shield, Trophy } from "lucide-react";

export const Route = createFileRoute("/activities")({
  head: () => ({
    meta: [
      { title: "Co-curricular Activities — ARPS Keithelmanbi" },
      { name: "description", content: "Sports, arts, NCC, Scouts & Guides, music, drama and cultural clubs at ARPS Keithelmanbi." },
      { property: "og:title", content: "Activities at ARPS Keithelmanbi" },
      { property: "og:description", content: "Where students discover what they love beyond the classroom." },
    ],
  }),
  component: ActivitiesPage,
});

const items = [
  { icon: Trophy, title: "Sports", body: "Football, athletics, badminton, table tennis, taekwondo and chess." },
  { icon: Shield, title: "NCC & Scouts", body: "Discipline, service and leadership through India's flagship youth wings." },
  { icon: Music, title: "Music", body: "Western & Indian vocal, guitar, drums and traditional Manipuri instruments." },
  { icon: Drama, title: "Theatre & Debate", body: "Inter-house dramatics, MUN, debating and elocution societies." },
  { icon: Palette, title: "Visual Arts", body: "Painting, pottery, photography and an annual student art exhibition." },
  { icon: Globe2, title: "Eco & Service Club", body: "Tree planting, clean-up drives and community outreach in nearby villages." },
];

const events = [
  { date: "April", name: "Foundation Day" },
  { date: "August", name: "Independence Day Parade" },
  { date: "October", name: "Annual Sports Meet" },
  { date: "December", name: "Cultural Fest — Saroya" },
  { date: "January", name: "Republic Day Celebrations" },
  { date: "February", name: "Science & Innovation Fair" },
];

function ActivitiesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Beyond the Classroom"
        title="A thousand ways to grow."
        description="From the football field to the recital hall, students at ARPS find their voice, their tribe and their craft."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, body }) => (
            <div key={title} className="group rounded-3xl border border-border bg-card p-8 transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary transition-smooth group-hover:bg-gradient-gold group-hover:text-gold-foreground">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold text-primary">Annual calendar</h2>
            <p className="mt-3 text-foreground/70">Marquee events that bring the school together.</p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {events.map((e) => (
              <div key={e.name} className="flex items-baseline justify-between gap-6 px-8 py-6 transition-smooth hover:bg-secondary/60">
                <div className="font-display text-xl font-semibold text-foreground">{e.name}</div>
                <div className="text-xs uppercase tracking-[0.25em] text-primary/70">{e.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
