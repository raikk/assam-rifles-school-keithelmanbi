import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import { T as Trophy } from "./trophy-DQ2eXeof.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const toppers = [{
  name: "Linthoingambi Devi",
  class: "Class XII · Science",
  score: "98.4%",
  year: "2025"
}, {
  name: "Rakesh Singh",
  class: "Class XII · Commerce",
  score: "97.6%",
  year: "2025"
}, {
  name: "Bidyarani Chanu",
  class: "Class X",
  score: "97.0%",
  year: "2025"
}, {
  name: "Tomba Meitei",
  class: "Class XII · Humanities",
  score: "96.2%",
  year: "2025"
}];
const accolades = [{
  area: "Sports",
  text: "State champions — U-17 Football, three years running."
}, {
  area: "Olympiad",
  text: "12 national medalists across SOF Maths & Science Olympiads in 2025."
}, {
  area: "Culture",
  text: "Best Choir award — North-East Inter-school Music Festival 2024."
}, {
  area: "Service",
  text: "Eco Club won the Manipur State Green School recognition, 2024."
}];
function AchievementsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Hall of Honour", title: "Excellence, quietly earned.", description: "A snapshot of our students' achievements in academics, sports, the arts and service." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-primary", children: "CBSE Toppers · 2025" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: toppers.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative overflow-hidden rounded-3xl border border-border bg-card p-7 transition-smooth hover:-translate-y-1 hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-gold opacity-20 blur-xl transition-smooth group-hover:opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Trophy, { className: "text-gold", size: 28 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 font-display text-2xl font-semibold text-primary", children: t.score }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-base font-semibold text-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground", children: t.class })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-primary", children: "Recent laurels" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-5 md:grid-cols-2", children: accolades.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.25em] text-gold", children: a.area }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-display text-xl text-foreground", children: a.text })
      ] }, a.area)) })
    ] }) })
  ] });
}
export {
  AchievementsPage as component
};
