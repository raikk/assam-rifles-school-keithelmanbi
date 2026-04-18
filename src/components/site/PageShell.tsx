import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-gradient-forest py-20 text-primary-foreground lg:py-28">
      <div className="absolute inset-0 paper-grain opacity-15" aria-hidden />
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        {eyebrow && (
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </div>
        )}
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-base text-primary-foreground/80 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
