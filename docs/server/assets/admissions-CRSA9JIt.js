import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { L as Link } from "./router-BNCU0X4U.js";
import { c as createLucideIcon, P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import { A as ArrowRight } from "./arrow-right-BW9LqXxs.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$1);
const __iconNode = [
  ["path", { d: "M12 15V3", key: "m9g1x1" }],
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
];
const Download = createLucideIcon("download", __iconNode);
const steps = [{
  n: "01",
  title: "Online registration",
  body: "Fill in the registration form with your child's details."
}, {
  n: "02",
  title: "Document submission",
  body: "Upload birth certificate, previous report cards and transfer certificate."
}, {
  n: "03",
  title: "Interaction / assessment",
  body: "Age-appropriate interaction for younger classes; written test for Class VI and above."
}, {
  n: "04",
  title: "Offer & confirmation",
  body: "Receive admission offer; confirm the seat by paying the admission fee."
}];
const docs = ["Birth certificate (original + photocopy)", "Previous school's transfer certificate", "Last two years' progress reports", "Aadhaar card of student & parents", "Caste / category certificate (if applicable)", "Four passport-size photographs"];
function AdmissionsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Admissions 2026 – 27", title: "Apply now. Begin in April.", description: "Online registration is open for Nursery through Class XI. Limited seats — early applicants are given priority for the campus interaction." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/admissions", className: "group relative overflow-hidden rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground shadow-elevated transition-smooth hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-2xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Class Nursery – IX & XI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl font-semibold", children: "Online Registration" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-primary-foreground/80", children: "Begin the application — takes about 10 minutes." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold", children: [
            "Start application ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 16, className: "transition-smooth group-hover:translate-x-1" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group relative overflow-hidden rounded-[2rem] border border-border bg-card p-10 transition-smooth hover:-translate-y-1 hover:shadow-elevated", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-gold opacity-0 transition-smooth group-hover:opacity-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary/70", children: "Class XI Stream Selection" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl font-semibold text-foreground", children: "Senior Secondary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground", children: "Science · Commerce · Humanities. Limited seats." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { size: 16 }),
            " Download brochure"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-20 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl font-semibold text-primary", children: "The process" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-foreground/70", children: "Four simple steps from enquiry to enrolment." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-5xl font-semibold text-gold/40", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-lg font-semibold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-primary/70", children: "Documents Required" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl font-semibold text-primary", children: "What to bring" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: docs.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-foreground/85", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 shrink-0 text-primary", size: 18 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: d })
        ] }, d)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs uppercase tracking-[0.3em] text-gold", children: "Important Dates" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl font-semibold", children: "2026 – 27 Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "mt-8 divide-y divide-primary-foreground/15", children: [["Online registration opens", "15 Nov 2025"], ["Last date to apply", "31 Jan 2026"], ["Interaction / assessment", "Feb 2026"], ["Results & confirmation", "Mar 2026"], ["Session begins", "01 Apr 2026"]].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between py-3.5 text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-primary-foreground/75", children: k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "font-display text-base font-semibold text-gold", children: v })
        ] }, k)) })
      ] })
    ] }) })
  ] });
}
export {
  AdmissionsPage as component
};
