import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import { Trophy } from "lucide-react";

export const Route = createFileRoute("/achievements")({
  head: () => ({
    meta: [
      { title: "Achievements — ARPS Keithelmanbi" },
      { name: "description", content: "Academic toppers, sports champions and cultural laurels at ARPS Keithelmanbi." },
      { property: "og:title", content: "Achievements — ARPS Keithelmanbi" },
      { property: "og:description", content: "Celebrating our students, year after year." },
    ],
  }),
  component: AchievementsPage,
});

const toppers = [
  { name: "Linthoingambi Devi", class: "Class XII · Science", score: "98.4%", year: "2025" },
  { name: "Rakesh Singh", class: "Class XII · Commerce", score: "97.6%", year: "2025" },
  { name: "Bidyarani Chanu", class: "Class X", score: "97.0%", year: "2025" },
  { name: "Tomba Meitei", class: "Class XII · Humanities", score: "96.2%", year: "2025" },
];

const accolades = [
  { area: "Sports", text: "State champions — U-17 Football, three years running." },
  { area: "Olympiad", text: "12 national medalists across SOF Maths & Science Olympiads in 2025." },
  { area: "Culture", text: "Best Choir award — North-East Inter-school Music Festival 2024." },
  { area: "Service", text: "Eco Club won the Manipur State Green School recognition, 2024." },
];

function AchievementsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hall of Honour"
        title="Excellence, quietly earned."
        description="A snapshot of our students' achievements in academics, sports, the arts and service."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <h2 className="font-display text-3xl font-semibold text-primary">CBSE Toppers · 2025</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {toppers.map((t) => (
            <div key={t.name} className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:shadow-elevated">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-gold opacity-20 blur-xl transition-smooth group-hover:opacity-50" />
              <Trophy className="text-gold" size={28} />
              <div className="mt-5 font-display text-2xl font-semibold text-primary">{t.score}</div>
              <div className="mt-3 font-display text-base font-semibold text-foreground">{t.name}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{t.class}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-primary">Recent laurels</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {accolades.map((a) => (
              <div key={a.area} className="rounded-3xl border border-border bg-card p-8">
                <div className="text-xs uppercase tracking-[0.25em] text-gold">{a.area}</div>
                <p className="mt-3 font-display text-xl text-foreground">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
