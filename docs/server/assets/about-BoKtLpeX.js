import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { c as createLucideIcon, P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import { c as classroomImg } from "./students-classroom-2SNJ32vO.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    {
      d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",
      key: "9ktpf1"
    }
  ]
];
const Compass = createLucideIcon("compass", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$2);
const __iconNode$1 = [["path", { d: "m8 3 4 8 5-5 5 15H2L8 3z", key: "otkl63" }]];
const Mountain = createLucideIcon("mountain", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
const values = [{
  icon: Mountain,
  title: "Rooted in the Hills",
  body: "A campus shaped by the landscape and culture of Manipur."
}, {
  icon: Compass,
  title: "Disciplined Curiosity",
  body: "Inherited from our Assam Rifles heritage — order with imagination."
}, {
  icon: Heart,
  title: "Care for Every Child",
  body: "Small classes, attentive mentors, individual learning paths."
}, {
  icon: Target,
  title: "Excellence with Purpose",
  body: "Academics paired with service, sport and the arts."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Our Story", title: "A school of the hills, for the world.", description: "Founded under the patronage of the Assam Rifles in 1985, ARPS Keithelmanbi has grown into one of Manipur's most trusted institutions of learning." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-16 lg:grid-cols-2 lg:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-[2rem] shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: classroomImg, alt: "Students at ARPS Keithelmanbi", loading: "lazy", width: 1280, height: 896, className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-foreground/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary/70", children: "Heritage" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-semibold text-primary", children: "Forty years of nurturing futures." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "From a modest beginning with a handful of classrooms, ARPS Keithelmanbi has evolved into a full-fledged CBSE senior secondary school serving children from Nursery through Class XII across Science, Commerce and Humanities streams." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Our identity remains the same: a place where discipline is gentle but firm, where curiosity is celebrated, and where every child is known by name." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-semibold text-primary", children: "What we stand for" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/70", children: "Four values that guide every decision we take." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: values.map(({
        icon: Icon,
        title,
        body
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-2xl bg-primary/10 p-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: body })
      ] }, title)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Vision" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-2xl leading-snug", children: "To be a beacon of holistic education in Northeast India — raising young citizens of intellect, integrity and quiet courage." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] border border-border bg-card p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary/70", children: "Mission" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 font-display text-2xl leading-snug text-foreground", children: "To deliver a CBSE education of national standard, anchored in discipline, sport, service and respect for the heritage and communities of Manipur." })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
