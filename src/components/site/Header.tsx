import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import crest from "@/assets/crest.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/infrastructure", label: "Campus" },
  { to: "/activities", label: "Activities" },
  { to: "/achievements", label: "Achievements" },
  { to: "/notifications", label: "Notices" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "border-b border-border/60 bg-background/85 backdrop-blur-xl"
          : "bg-deep/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 lg:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <img
            src={crest}
            alt="ARPS Keithelmanbi crest"
            className="h-11 w-11 transition-smooth group-hover:scale-105"
            width={44}
            height={44}
          />
          <div className="leading-tight">
            <div className="font-display text-[15px] font-semibold tracking-tight text-primary">
              Assam Rifles Public School
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Keithelmanbi · Manipur
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/75 transition-smooth hover:bg-secondary hover:text-foreground"
              activeProps={{
                className:
                  "rounded-full px-3 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/admissions"
          className="hidden rounded-full bg-gradient-gold px-5 py-2.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03] lg:inline-flex"
        >
          Admission 2026
        </Link>

        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-full border border-border bg-card p-2 text-foreground lg:hidden"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{
                  className:
                    "rounded-xl px-4 py-3 text-sm font-medium bg-primary text-primary-foreground",
                }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-gold px-4 py-3 text-center text-sm font-semibold text-gold-foreground"
            >
              Admission 2026
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
