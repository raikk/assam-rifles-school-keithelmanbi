import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import { l as labImg, a as libraryImg, s as sportsImg } from "./sports-field-rzHYrvWx.js";
import { c as classroomImg } from "./students-classroom-2SNJ32vO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const facilities = [{
  img: classroomImg,
  title: "Smart Classrooms",
  body: "Air-light learning spaces with interactive boards across every grade."
}, {
  img: labImg,
  title: "Science & Computer Labs",
  body: "Dedicated Physics, Chemistry, Biology and IT labs equipped to CBSE standards."
}, {
  img: libraryImg,
  title: "Central Library",
  body: "Over 12,000 titles, periodicals and digital resources in a quiet reading hall."
}, {
  img: sportsImg,
  title: "Sports Complex",
  body: "Football field, athletics track, indoor games hall and martial arts dojo."
}];
function InfraPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Campus & Facilities", title: "A campus built for learning, sport and the soul.", description: "From smart classrooms to a hill-side sports field, every corner of ARPS Keithelmanbi is designed to help young minds flourish." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-20", children: facilities.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `overflow-hidden rounded-[2rem] shadow-elevated ${i % 2 === 1 ? "md:order-2" : ""}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: f.img, alt: f.title, loading: "lazy", width: 1280, height: 896, className: "aspect-[4/3] h-full w-full object-cover transition-smooth hover:scale-105" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs uppercase tracking-[0.3em] text-primary/70", children: [
          "0",
          i + 1,
          " · Facility"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-semibold text-primary", children: f.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-foreground/75", children: f.body })
      ] })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 pb-20 lg:px-8 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4", children: [["12 acres", "Green campus"], ["50+", "Classrooms"], ["6", "Specialist labs"], ["3", "Sports grounds"]].map(([v, l]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card px-6 py-10 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-4xl font-semibold text-primary", children: v }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: l })
    ] }, l)) }) })
  ] });
}
export {
  InfraPage as component
};
