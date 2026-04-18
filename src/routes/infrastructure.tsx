import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import labImg from "@/assets/science-lab.jpg";
import libraryImg from "@/assets/library.jpg";
import sportsImg from "@/assets/sports-field.jpg";
import classroomImg from "@/assets/students-classroom.jpg";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Campus & Facilities — ARPS Keithelmanbi" },
      { name: "description", content: "Smart classrooms, science and computer labs, library, sports field and hostel facilities at ARPS Keithelmanbi." },
      { property: "og:title", content: "Campus & Facilities — ARPS Keithelmanbi" },
      { property: "og:description", content: "A learning environment built for curiosity and growth." },
    ],
  }),
  component: InfraPage,
});

const facilities = [
  { img: classroomImg, title: "Smart Classrooms", body: "Air-light learning spaces with interactive boards across every grade." },
  { img: labImg, title: "Science & Computer Labs", body: "Dedicated Physics, Chemistry, Biology and IT labs equipped to CBSE standards." },
  { img: libraryImg, title: "Central Library", body: "Over 12,000 titles, periodicals and digital resources in a quiet reading hall." },
  { img: sportsImg, title: "Sports Complex", body: "Football field, athletics track, indoor games hall and martial arts dojo." },
];

function InfraPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Campus & Facilities"
        title="A campus built for learning, sport and the soul."
        description="From smart classrooms to a hill-side sports field, every corner of ARPS Keithelmanbi is designed to help young minds flourish."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="space-y-20">
          {facilities.map((f, i) => (
            <div key={f.title} className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className={`overflow-hidden rounded-[2rem] shadow-elevated ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <img src={f.img} alt={f.title} loading="lazy" width={1280} height={896} className="aspect-[4/3] h-full w-full object-cover transition-smooth hover:scale-105" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.3em] text-primary/70">0{i + 1} · Facility</div>
                <h2 className="mt-3 font-display text-4xl font-semibold text-primary">{f.title}</h2>
                <p className="mt-4 text-lg text-foreground/75">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {[
            ["12 acres", "Green campus"],
            ["50+", "Classrooms"],
            ["6", "Specialist labs"],
            ["3", "Sports grounds"],
          ].map(([v, l]) => (
            <div key={l} className="bg-card px-6 py-10 text-center">
              <div className="font-display text-4xl font-semibold text-primary">{v}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
