import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const stages = [{
  name: "Pre-Primary",
  grades: "Nursery – KG II",
  focus: "Play-based learning, language readiness and social skills.",
  color: "from-amber-100 to-amber-50"
}, {
  name: "Primary",
  grades: "Class I – V",
  focus: "Foundational literacy, numeracy and inquiry through CBSE framework.",
  color: "from-emerald-100 to-emerald-50"
}, {
  name: "Middle",
  grades: "Class VI – VIII",
  focus: "Concept-rich learning across science, math, languages and the arts.",
  color: "from-teal-100 to-teal-50"
}, {
  name: "Secondary",
  grades: "Class IX – X",
  focus: "CBSE board preparation with mentoring, mocks and Olympiad coaching.",
  color: "from-stone-100 to-stone-50"
}, {
  name: "Senior Secondary",
  grades: "Class XI – XII",
  focus: "Streams: Science (PCM/PCB), Commerce, Humanities — with career counselling.",
  color: "from-amber-100 to-amber-50"
}];
const subjects = ["English", "Hindi", "Manipuri", "Mathematics", "Physics", "Chemistry", "Biology", "Computer Science", "Accountancy", "Business Studies", "Economics", "History", "Geography", "Political Science", "Physical Education"];
function AcademicsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Academics", title: "A curriculum that climbs steadily, one stage at a time.", description: "CBSE-aligned learning from age 3 to 18, with three streams in senior secondary and dedicated mentoring at every step." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: stages.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br ${s.color} p-8 transition-smooth hover:shadow-elevated md:p-10`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 md:grid-cols-12 md:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-6xl font-semibold text-primary/15 md:col-span-1", children: [
        "0",
        i + 1
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] uppercase tracking-[0.25em] text-primary/70", children: s.grades }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl font-semibold text-primary md:text-3xl", children: s.name })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/80 md:col-span-8", children: s.focus })
    ] }) }, s.name)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-semibold text-primary", children: "Subjects offered" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/70", children: "A breadth of disciplines across the curriculum." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap justify-center gap-3", children: subjects.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground/80 transition-smooth hover:border-primary/30 hover:bg-primary hover:text-primary-foreground", children: s }, s)) })
    ] }) })
  ] });
}
export {
  AcademicsPage as component
};
