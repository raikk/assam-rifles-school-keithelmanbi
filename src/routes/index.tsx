import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, BookOpen, GraduationCap, Microscope, Sparkles, Users } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { HeroSlideshow } from "@/components/site/HeroSlideshow";
import heroImg from "@/assets/hero-campus.jpg";
import classroomImg from "@/assets/students-classroom.jpg";
import sportsImg from "@/assets/sports-field.jpg";
import labImg from "@/assets/science-lab.jpg";
import libraryImg from "@/assets/library.jpg";

const heroSlides = [
  { src: heroImg, alt: "ARPS Keithelmanbi campus at golden hour" },
  { src: classroomImg, alt: "Students in a smart classroom" },
  { src: labImg, alt: "Science laboratory in session" },
  { src: sportsImg, alt: "Hill-side sports field" },
  { src: libraryImg, alt: "School library" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Assam Rifles Public School, Keithelmanbi — Excellence in Education" },
      {
        name: "description",
        content:
          "A CBSE-affiliated English-medium co-educational school in Keithelmanbi, Manipur. Nurturing scholarship, character and discipline from Nursery to Class XII.",
      },
      { property: "og:title", content: "Assam Rifles Public School, Keithelmanbi" },
      {
        property: "og:description",
        content: "Where discipline meets curiosity. Admissions open for 2026–27.",
      },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "1985", label: "Established" },
  { value: "1,800+", label: "Students" },
  { value: "85+", label: "Faculty" },
  { value: "98%", label: "CBSE Pass Rate" },
];

const pillars = [
  { icon: BookOpen, title: "Academic Rigour", body: "CBSE curriculum from Nursery to XII with Science, Commerce & Humanities streams." },
  { icon: Microscope, title: "Inquiry & Labs", body: "Modern science, computer and language labs that turn curiosity into discovery." },
  { icon: Users, title: "Character Building", body: "House system, NCC, Scouts & Guides forge leaders rooted in service and integrity." },
  { icon: Award, title: "Holistic Sport", body: "Football, athletics, indoor games and martial arts on a hill-side campus." },
  { icon: GraduationCap, title: "Career Ready", body: "Counselling, Olympiads and college mentorship from Class IX onwards." },
  { icon: Sparkles, title: "Arts & Culture", body: "Music, dance, theatre and Manipuri heritage celebrated year-round." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative -mt-20 min-h-[100svh] overflow-hidden">
        <HeroSlideshow slides={heroSlides} />
        <div className="absolute inset-0 bg-gradient-hero" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-transparent to-transparent" aria-hidden />

        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-20 pt-32 text-primary-foreground lg:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-[11px] uppercase tracking-[0.3em] text-gold backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Admissions Open · 2026 – 27
            </div>
            <h1 className="font-display text-5xl font-semibold leading-[1.05] md:text-6xl lg:text-7xl">
              Where the hills of Manipur meet
              <span className="block text-gradient-gold">a life of learning.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/85 md:text-lg">
              Assam Rifles Public School, Keithelmanbi — a CBSE-affiliated
              English-medium institution shaping disciplined, curious and
              compassionate young Indians since 1985.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/admissions"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]"
              >
                Apply for Admission
                <ArrowRight size={16} className="transition-smooth group-hover:translate-x-1" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-6 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-smooth hover:bg-primary-foreground/20"
              >
                Discover the School
              </Link>
            </div>
          </div>

          {/* stats */}
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 backdrop-blur md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-deep/30 px-6 py-6 text-center">
                <div className="font-display text-3xl font-semibold text-gold md:text-4xl">{s.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-primary-foreground/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Principal&apos;s Welcome</div>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-primary md:text-5xl">
              An education that travels with them for life.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-foreground/80 lg:col-span-7">
            <p>
              At ARPS Keithelmanbi, we believe a school is more than its
              classrooms. It is the laboratory where character is formed, the
              field where resilience is earned, and the stage where confidence
              learns to speak.
            </p>
            <p>
              Set against the green hills of Manipur, our campus offers
              English-medium CBSE education from Nursery to Class XII. With
              dedicated mentors, modern facilities and a deeply personal
              approach, we prepare every child for the world they will
              inherit — and the one they will help build.
            </p>
            <div className="flex items-center gap-4 pt-4">
              <div className="h-12 w-12 rounded-full bg-gradient-gold" />
              <div>
                <div className="font-display text-lg font-semibold">Col. (Retd.) S. Rangkhao</div>
                <div className="text-sm text-muted-foreground">Principal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="bg-secondary/40 py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs uppercase tracking-[0.3em] text-primary/70">Six Pillars</div>
            <h2 className="mt-3 font-display text-4xl font-semibold text-primary md:text-5xl">
              The ARPS way
            </h2>
            <p className="mt-4 text-foreground/70">
              Our framework for raising thoughtful, capable, kind young people.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated"
              >
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gold/0 transition-smooth group-hover:bg-gold/15" />
                <div className="relative">
                  <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid gap-6 md:grid-cols-12">
          <div className="group relative overflow-hidden rounded-[2rem] md:col-span-7 md:row-span-2">
            <img src={classroomImg} alt="Students in a smart classroom" loading="lazy" width={1280} height={896} className="aspect-[5/4] h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Inside the classroom</div>
              <h3 className="mt-2 font-display text-3xl font-semibold">Smart, small, personal.</h3>
              <p className="mt-2 max-w-md text-sm text-primary-foreground/80">
                Digital boards, low student-teacher ratios and project-based learning across every grade.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[2rem] md:col-span-5">
            <img src={labImg} alt="Science lab" loading="lazy" width={1280} height={896} className="aspect-[4/3] h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/85" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Science</div>
              <h3 className="mt-1 font-display text-2xl font-semibold">Hands-on labs</h3>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-[2rem] md:col-span-5">
            <img src={sportsImg} alt="Sports field" loading="lazy" width={1280} height={896} className="aspect-[4/3] h-full w-full object-cover transition-smooth group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-deep/85" />
            <div className="absolute bottom-6 left-6 right-6 text-primary-foreground">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Sport</div>
              <h3 className="mt-1 font-display text-2xl font-semibold">Hill-side ground</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8 lg:pb-32">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-forest p-10 text-primary-foreground md:p-16">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute inset-0 paper-grain opacity-10" />
          <div className="relative grid gap-10 md:grid-cols-5 md:items-center">
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-[0.3em] text-gold">Admissions 2026 – 27</div>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-5xl">
                Begin your child&apos;s ARPS journey.
              </h2>
              <p className="mt-4 max-w-lg text-primary-foreground/80">
                Limited seats available for Nursery through Class XI. Online
                registration is now open — schedule a campus visit with our
                admissions team.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-2 md:items-end">
              <Link to="/admissions" className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-gold px-7 py-4 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]">
                Apply Online <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-4 text-sm font-semibold backdrop-blur transition-smooth hover:bg-primary-foreground/20">
                Visit the Campus
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
