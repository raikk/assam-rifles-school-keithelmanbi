import { T as jsxRuntimeExports } from "./worker-entry-BXkh9hnW.js";
import { c as createLucideIcon, P as PageShell, a as PageHero, M as MapPin, b as Phone, d as Mail } from "./PageShell-5huhocvi.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BNCU0X4U.js";
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 6v6l4 2", key: "mmk7yg" }]
];
const Clock = createLucideIcon("clock", __iconNode);
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageShell, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact", title: "We'd love to hear from you.", description: "Reach out for admissions, alumni connections or to schedule a campus visit." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5 lg:col-span-2", children: [{
        icon: MapPin,
        title: "Visit",
        body: "Keithelmanbi, Imphal West\nManipur — 795114"
      }, {
        icon: Phone,
        title: "Call",
        body: "+91 98765 43210\n+91 98765 43211"
      }, {
        icon: Mail,
        title: "Email",
        body: "info@arpskeithelmanbi.in\nadmissions@arpskeithelmanbi.in"
      }, {
        icon: Clock,
        title: "Office Hours",
        body: "Monday – Saturday\n8:00 AM – 3:00 PM"
      }].map(({
        icon: Icon,
        title,
        body
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-3xl border border-border bg-card p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-primary/10 p-3 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 20 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-semibold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 whitespace-pre-line text-sm text-muted-foreground", children: body })
        ] })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => e.preventDefault(), className: "rounded-[2rem] border border-border bg-card p-8 shadow-elevated lg:col-span-3 lg:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-semibold text-primary", children: "Send a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We typically respond within one working day." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 grid gap-5 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", placeholder: "Your name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", type: "email", placeholder: "you@email.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", type: "tel", placeholder: "+91" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", placeholder: "Admission enquiry" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, placeholder: "How can we help?", className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "mt-6 inline-flex items-center justify-center rounded-full bg-gradient-gold px-7 py-3.5 text-sm font-semibold text-gold-foreground shadow-gold transition-smooth hover:scale-[1.03]", children: "Send message" })
      ] })
    ] }) })
  ] });
}
function Field({
  label,
  type = "text",
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, placeholder, className: "mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-ring/30" })
  ] });
}
export {
  ContactPage as component
};
