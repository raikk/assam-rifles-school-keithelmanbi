import { createFileRoute } from "@tanstack/react-router";
import { PageHero, PageShell } from "@/components/site/PageShell";
import classroomImg from "@/assets/students-classroom.jpg";
import { Compass, Heart, Mountain, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Assam Rifles Public School, Keithelmanbi" },
      { name: "description", content: "Founded in 1985 in the hills of Manipur, ARPS Keithelmanbi is a CBSE-affiliated co-educational school rooted in discipline, scholarship and service." },
      { property: "og:title", content: "About ARPS Keithelmanbi" },
      { property: "og:description", content: "Discipline, scholarship and service — since 1985." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Mountain, title: "Rooted in the Hills", body: "A campus shaped by the landscape and culture of Manipur." },
  { icon: Compass, title: "Disciplined Curiosity", body: "Inherited from our Assam Rifles heritage — order with imagination." },
  { icon: Heart, title: "Care for Every Child", body: "Small classes, attentive mentors, individual learning paths." },
  { icon: Target, title: "Excellence with Purpose", body: "Academics paired with service, sport and the arts." },
];

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title="A school of the hills, for the world."
        description="Founded under the patronage of the Assam Rifles in 1985, ARPS Keithelmanbi has grown into one of Manipur's most trusted institutions of learning."
      />

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-[2rem] shadow-elevated">
            <img src={classroomImg} alt="Students at ARPS Keithelmanbi" loading="lazy" width={1280} height={896} className="h-full w-full object-cover" />
          </div>
          <div className="space-y-5 text-foreground/80">
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Heritage</div>
            <h2 className="font-display text-4xl font-semibold text-primary">Forty years of nurturing futures.</h2>
            <p>
              From a modest beginning with a handful of classrooms, ARPS
              Keithelmanbi has evolved into a full-fledged CBSE senior secondary
              school serving children from Nursery through Class XII across
              Science, Commerce and Humanities streams.
            </p>
            <p>
              Our identity remains the same: a place where discipline is gentle
              but firm, where curiosity is celebrated, and where every child is
              known by name.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-semibold text-primary">What we stand for</h2>
            <p className="mt-3 text-foreground/70">Four values that guide every decision we take.</p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="rounded-3xl border border-border bg-card p-7">
                <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Vision</div>
            <p className="mt-5 font-display text-2xl leading-snug">
              To be a beacon of holistic education in Northeast India — raising
              young citizens of intellect, integrity and quiet courage.
            </p>
          </div>
          <div className="rounded-[2rem] border border-border bg-card p-10">
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Mission</div>
            <p className="mt-5 font-display text-2xl leading-snug text-foreground">
              To deliver a CBSE education of national standard, anchored in
              discipline, sport, service and respect for the heritage and
              communities of Manipur.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
