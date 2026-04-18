import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import crest from "@/assets/crest.png";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-gradient-forest text-primary-foreground">
      <div className="absolute inset-0 paper-grain opacity-10" aria-hidden />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <img src={crest} alt="" className="h-12 w-12" width={48} height={48} />
            <div className="font-display text-lg font-semibold">
              ARPS<br />Keithelmanbi
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            A CBSE-affiliated English-medium institution nurturing discipline,
            curiosity and character in the heart of Manipur.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold">
            Explore
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/about" className="hover:text-gold">About the School</Link></li>
            <li><Link to="/academics" className="hover:text-gold">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gold">Admissions</Link></li>
            <li><Link to="/infrastructure" className="hover:text-gold">Campus & Facilities</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold">
            School Life
          </h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/80">
            <li><Link to="/activities" className="hover:text-gold">Co-curricular</Link></li>
            <li><Link to="/achievements" className="hover:text-gold">Achievements</Link></li>
            <li><Link to="/notifications" className="hover:text-gold">Notice Board</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 font-display text-sm uppercase tracking-[0.2em] text-gold">
            Reach Us
          </h4>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
              Keithelmanbi, Imphal West<br />Manipur — 795114
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="mt-0.5 shrink-0 text-gold" />
              +91 98765 43210
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-gold" />
              info@arpskeithelmanbi.in
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-primary-foreground/60 lg:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Assam Rifles Public School, Keithelmanbi. All rights reserved.</p>
          <p>CBSE Affiliation · English Medium · Co-educational</p>
        </div>
      </div>
    </footer>
  );
}
