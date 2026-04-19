import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { c as createLucideIcon, P as PageShell, a as PageHero } from "./PageShell-5huhocvi.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const __iconNode$1 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10.268 21a2 2 0 0 0 3.464 0", key: "vwvbt9" }],
  [
    "path",
    {
      d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",
      key: "11g9vi"
    }
  ]
];
const Bell = createLucideIcon("bell", __iconNode);
const notices = [{
  date: "12 Mar 2026",
  tag: "Fees",
  title: "Fee structure for academic session 2026 – 27 published"
}, {
  date: "06 Mar 2026",
  tag: "Recruitment",
  title: "Vacancy: PGT Mathematics & TGT Social Science"
}, {
  date: "28 Feb 2026",
  tag: "Examination",
  title: "Class IX & XI annual examination schedule released"
}, {
  date: "20 Feb 2026",
  tag: "Event",
  title: "Annual Day & prize distribution ceremony — 15 March"
}, {
  date: "10 Feb 2026",
  tag: "Admission",
  title: "Class XI stream selection list — second round"
}, {
  date: "02 Feb 2026",
  tag: "Holiday",
  title: "School closed for Yaoshang celebrations from 5 – 8 March"
}, {
  date: "20 Jan 2026",
  tag: "Circular",
  title: "Revised winter uniform guidelines for Pre-Primary section"
}];
const tagColors = {
  Fees: "bg-amber-100 text-amber-900",
  Recruitment: "bg-emerald-100 text-emerald-900",
  Examination: "bg-rose-100 text-rose-900",
  Event: "bg-sky-100 text-sky-900",
  Admission: "bg-violet-100 text-violet-900",
  Holiday: "bg-orange-100 text-orange-900",
  Circular: "bg-stone-200 text-stone-900"
};
function NotificationsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Notice Board", title: "Latest from the school.", description: "Circulars, announcements and reminders for parents, students and applicants." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-4xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-3xl border border-border bg-card shadow-elevated", children: notices.map((n, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group flex items-start gap-5 border-b border-border px-6 py-6 transition-smooth last:border-b-0 hover:bg-secondary/50 md:px-8 md:py-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 hidden rounded-2xl bg-primary/10 p-3 text-primary md:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { size: 18 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-3 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `rounded-full px-2.5 py-1 font-semibold uppercase tracking-wider ${tagColors[n.tag] ?? "bg-secondary text-foreground"}`, children: n.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: n.date })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-lg font-semibold text-foreground transition-smooth group-hover:text-primary md:text-xl", children: n.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "mt-1 shrink-0 text-muted-foreground transition-smooth group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary", size: 20 })
    ] }, i)) }) })
  ] });
}
export {
  NotificationsPage as component
};
