import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import portrait from "@/assets/nikki_portrait.jpg.asset.json";
import zapierFormsLeads from "@/assets/zapier_forms_leads.png.asset.json";
import zapierLeadEnrichment from "@/assets/zapier_lead_enrichment.png.asset.json";
import zapierAsanaFollowup from "@/assets/zapier_asana_followup.png.asset.json";
import makeGmailAttachments from "@/assets/make_gmail_attachments.png.asset.json";
import makeXeroAsana from "@/assets/make_xero_asana_csv.png.asset.json";
import n8nJobScraper from "@/assets/n8n_ai_job_scraper.png.asset.json";
import {
  Bot, Workflow, CalendarCheck, Database, FileText, Users, Headphones, Mail, Phone, MapPin,
  Linkedin, Facebook, Instagram, ArrowRight, Download, Quote, Zap, Briefcase, Menu, X,
  Maximize2, ChevronRight, Send, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikki Bassit — Operations VA & Workflow Automation Specialist" },
      { name: "description", content: "Operations support and no-code automation with Zapier, Make, n8n and GoHighLevel." },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "home"], ["About", "about"], ["Services", "services"], ["Experience", "experience"],
  ["Portfolio", "portfolio"], ["Testimonials", "testimonials"], ["Contact", "contact"],
] as const;

function ripple(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const s = document.createElement("span");
  s.className = "ripple";
  s.style.width = s.style.height = `${size}px`;
  s.style.left = `${e.clientX - r.left - size / 2}px`;
  s.style.top = `${e.clientY - r.top - size / 2}px`;
  el.appendChild(s);
  setTimeout(() => s.remove(), 650);
}

function Btn({ children, href, outline }: { children: ReactNode; href: string; outline?: boolean }) {
  return (
    <a href={href} onClick={ripple}
      className={`relative inline-flex items-center gap-2 overflow-hidden rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-95 ${outline ? "border border-muted-foreground/40 text-foreground hover:border-primary hover:text-primary" : "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_10px_30px_-10px_var(--primary)]"}`}>
      {children}
    </a>
  );
}

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return <div className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>{children}</div>;
}

function Heading({ kicker, title }: { kicker: string; title: string }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{kicker}</p>
      <h2 className="mt-3 text-3xl font-bold md:text-4xl">{title}</h2>
    </Reveal>
  );
}

const services = [
  { icon: Workflow, t: "Workflow Automation", d: "Custom Zapier, Make and n8n scenarios for lead routing, notifications and database updates — less manual work, fewer errors." },
  { icon: Zap, t: "GoHighLevel CRM & Funnels", d: "Sub-accounts, pipelines, funnels, calendars, workflows and SMS/email nurture sequences built to capture and convert leads." },
  { icon: Bot, t: "AI Assistance with Claude", d: "Claude-powered drafting, summarizing, SOP writing and inbox triage, wired into your Google Workspace, Notion and Slack." },
  { icon: CalendarCheck, t: "Inbox & Calendar Management", d: "Inbox-zero systems, priority filtering and conflict-free scheduling across time zones." },
  { icon: Database, t: "Data & Record Keeping", d: "Clean, accurate and private databases in Google Sheets, Airtable and Notion." },
  { icon: FileText, t: "SOP & Process Design", d: "Clear Standard Operating Procedures that train teams and standardize daily operations." },
  { icon: Users, t: "Client & Team Onboarding", d: "Intake forms, welcome kits, tool access and organized Drive folders — onboarding on autopilot." },
  { icon: Headphones, t: "Customer & Vendor Support", d: "Professional client communication, supplier coordination and quick resolution of order or billing issues." },
];

const experience = [
  {
    role: "Freelance Virtual Assistant", org: "Remote Clients",
    pts: [
      "Automated lead capture, CRM updates, scheduling and client intake with Make, Zapier and n8n.",
      "Built and managed GoHighLevel sub-accounts, custom pipelines, calendars, lead-capture forms, funnels and automated SMS/email nurture workflows.",
      "Used Claude and ChatGPT for content drafting, SOP writing and inbox routing, integrated into Google Workspace, Notion and Slack.",
      "Drafted and proofread professional email correspondence on behalf of management.",
      "Managed executive schedules, email correspondence and end-to-end client onboarding.",
    ],
  },
  {
    role: "Operations & Administrative Coordinator", org: "Rojins Fitness Gym",
    pts: [
      "Built automated workflows for email notifications, lead routing and database updates with Zapier, Make and n8n.",
      "Used Claude to draft SOPs, member communications and daily reports faster.",
      "Created and maintained SOPs to train staff and standardize admin workflows.",
      "Kept membership databases at 100% accuracy; coordinated calendars and shift schedules.",
      "Handled sales reports, expenses, invoice reconciliation and vendor coordination.",
    ],
  },
];

type Tool = "Zapier" | "Make" | "n8n" | "GoHighLevel";

type Work = {
  tool: Tool;
  title: string;
  desc: string;
  img?: string;
  steps: string[];
  mock?: boolean;
  note?: string;
};

const works: Work[] = [
  {
    tool: "Zapier", title: "Google Forms Leads Router",
    desc: "Every new form response is cleaned, summarized by AI, logged to Sheets, then split — hot leads ping Slack, the rest get a Gmail reply.",
    img: zapierFormsLeads.url,
    steps: [
      "Google Forms — new lead response",
      "Formatter — clean and standardize the text",
      "AI by Zapier — summarize the lead's pain points",
      "Google Sheets — create the lead record",
      "Paths — sort leads by priority",
      "Slack — alert the team on hot leads",
      "Gmail — send the client a reply",
    ],
  },
  {
    tool: "Zapier", title: "Lead Enrichment & Priority Routing",
    desc: "A lead lands in through a webhook, gets enriched with Apollo, and is routed by priority — the sales team is notified and a reply is drafted before anyone touches it.",
    img: zapierLeadEnrichment.url,
    steps: [
      "Webhook — new lead comes in",
      "Formatter — pull the company URL",
      "Apollo — enrich the lead via webhook",
      "Paths — split into high and low priority",
      "High: Google Sheets — save the lead",
      "High: Slack — notify the sales team",
      "High: AI + Gmail — reply drafted and ready",
      "Low: Gmail — notify sales to follow up",
    ],
  },
  {
    tool: "Zapier", title: "Asana CRM Follow-Up Engine",
    desc: "One Asana project drives the whole pipeline. Task updates branch into five stages, each with its own follow-up, delay and reply check — nothing goes silent.",
    img: zapierAsanaFollowup.url,
    steps: [
      "Asana — task updated in the CRM project",
      "Paths — split into five pipeline stages",
      "Ready to Start: Drive folder + content tasks created",
      "No Response: follow-up email, wait, check reply, second nudge",
      "Quoted: quote follow-up, wait, check reply, second nudge",
      "Approved: AI-personalized welcome email + onboarding file",
      "Paid & Closed: AI service recommendation email",
    ],
  },
  {
    tool: "Make", title: "Gmail Attachments → Drive & Sheets",
    desc: "Incoming attachments are read by AI, given a clean file name, filed in Drive, logged in Sheets and copied for reference — no more \"scan_0023.pdf\".",
    img: makeGmailAttachments.url,
    steps: [
      "Gmail — watch for new emails",
      "Gmail — list attachments and media",
      "Google AI — analyze the file",
      "Google AI — generate a clean file name",
      "Google Drive — upload the renamed file",
      "Google Sheets — log a reference row",
      "Gmail — send a copy for reference",
    ],
  },
  {
    tool: "Make", title: "Xero Transactions → Asana CSV",
    desc: "Completed tasks trigger a Xero API pull, stage every transaction row into Sheets, then build a CSV and attach it back to the task automatically.",
    img: makeXeroAsana.url,
    steps: [
      "Asana — watch completed tasks",
      "Xero — GET transactions via API",
      "Router + Iterator — split the transaction rows",
      "Google Sheets — append each row",
      "Sleep 1m, then read the filled range",
      "Text aggregator + CSV — build the file",
      "Asana — upload the CSV to the task",
      "Google Sheets — clear the temporary range",
    ],
  },
  {
    tool: "n8n", title: "AI Job Scraper & Resume Builder",
    desc: "A Slack message kicks off a scrape, then an AI agent writes a tailored resume for each posting, updates the Drive template and drafts the application email.",
    img: n8nJobScraper.url,
    steps: [
      "Slack — trigger from a message",
      "Check the search query is valid",
      "HTTP request — scrape the job listings",
      "Split out + loop over each job",
      "Google Docs — read the resume template",
      "AI agent — write a tailored resume section",
      "Google Drive — copy and update the template",
      "Gmail — create the application draft",
      "Slack — post results to the jobs channel",
    ],
  },
  {
    tool: "GoHighLevel", title: "Lead Capture & Follow-Up Funnel",
    desc: "A funnel form feeds a tagged pipeline contact, then an automated SMS/email sequence keeps the lead warm until they book — no inquiry goes cold.",
    mock: true,
    note: "Built as a funnel design and follow-up map — ready to wire up live in your GoHighLevel sub-account.",
    steps: [
      "Funnel form — name, email and phone captured",
      "Contact created, tagged and dropped into the pipeline",
      "Pipeline: New → Contacted → Qualified → Booked → Won",
      "Instant SMS + email with the next steps",
      "Day 1 value email with a booking link",
      "Day 3 SMS reminder",
      "Day 7 final email, then tagged into Nurture",
      "Booking lands on the calendar and the stage updates",
    ],
  },
];

const filters = ["All", "Zapier", "Make", "n8n", "GoHighLevel"] as const;

const testimonials = [
  { q: "Nikki took our messy admin and turned it into systems that run themselves. Our follow-ups never slip anymore.", n: "Gym Owner", r: "Fitness Business" },
  { q: "Our GoHighLevel setup finally works the way we imagined — pipelines, reminders, all of it. Fast and detail-oriented.", n: "Agency Founder", r: "Marketing Agency" },
  { q: "Reliable, proactive and quick to learn any tool. Onboarding new clients is now a one-click process.", n: "Small Business Owner", r: "Consulting" },
  { q: "Nikki took over our candidate tracking and new-hire onboarding, and not one follow-up slipped. Interview scheduling used to eat my whole week — now it just happens.", n: "Thania L.", r: "HR Manager" },
];

const tools = ["Zapier", "Make", "n8n", "GoHighLevel", "ChatGPT", "Claude", "Notion", "Airtable", "Google Workspace", "Google Forms", "Google Drive", "Slack", "Asana", "Xero", "Apollo", "Trello", "ClickUp", "Canva", "CapCut", "WordPress"];

function GhlThumb() {
  return (
    <div className="flex h-full w-full flex-wrap items-center justify-center gap-1.5 px-4">
      {["Form", "Tag", "Follow-up", "Booked"].map((s, i) => (
        <span key={s} className="flex items-center gap-1.5">
          <span className="rounded-full border border-primary/40 bg-primary/15 px-2.5 py-1 text-[10px] font-medium text-primary">{s}</span>
          {i < 3 && <ChevronRight className="h-3 w-3 text-primary/60" />}
        </span>
      ))}
    </div>
  );
}

function GhlFunnelMock() {
  const stages = [["New Lead", 100], ["Contacted", 78], ["Qualified", 52], ["Booked", 31], ["Won", 18]] as const;
  const seq = [
    ["Instant", "SMS + email — thanks and what happens next"],
    ["Day 1", "Email — value nudge with a booking link"],
    ["Day 3", "SMS — quick reminder"],
    ["Day 7", "Email — final follow-up, then tagged Nurture"],
  ] as const;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      <div className="rounded-xl border border-border bg-background/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">Step 1 · Lead capture</p>
        <h4 className="mt-2 text-base font-semibold">Get Your Free Ops Audit</h4>
        <div className="mt-4 space-y-2.5">
          {["Name", "Email", "Phone"].map((f) => (
            <div key={f} className="rounded-md border border-input bg-card px-3 py-2 text-xs text-muted-foreground">{f}</div>
          ))}
          <div className="grid place-items-center rounded-md bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground">
            <Send className="mr-1.5 h-3 w-3" /> Submit
          </div>
        </div>
        <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
          Every response creates a contact, applies a tag and drops it into the pipeline automatically.
        </p>
      </div>
      <div className="space-y-5">
        <div className="rounded-xl border border-border bg-background/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Step 2 · Pipeline stages</p>
          <div className="mt-3 space-y-2">
            {stages.map(([s, w]) => (
              <div key={s} className="flex items-center gap-3">
                <span className="w-20 shrink-0 text-xs">{s}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
                  <span className="block h-full rounded-full bg-primary" style={{ width: `${w}%` }} />
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-background/60 p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Step 3 · Automated follow-up</p>
          <ol className="mt-3 space-y-2.5">
            {seq.map(([d, t]) => (
              <li key={d} className="flex items-center gap-3 text-xs">
                <span className="w-14 shrink-0 rounded-full bg-primary/15 px-2 py-0.5 text-center font-semibold text-primary">{d}</span>
                <span className="text-muted-foreground">{t}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

function Lightbox({ work, onClose }: { work: Work; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-background/85 p-4 backdrop-blur-sm md:p-8" onClick={onClose} role="dialog" aria-modal="true" aria-label={work.title}>
      <div className="max-h-full w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl md:p-8" onClick={(e) => e.stopPropagation()}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-primary">{work.tool}</p>
            <h3 className="mt-1 text-xl font-bold md:text-2xl">{work.title}</h3>
          </div>
          <button onClick={onClose} aria-label="Close" className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-background/60">
          {work.img ? (
            <img src={work.img} alt={`${work.title} — full workflow diagram`} className="max-h-[58vh] w-full object-contain" />
          ) : (
            <div className="p-4 md:p-6"><GhlFunnelMock /></div>
          )}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{work.desc}</p>

        {work.note && (
          <p className="mt-4 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-foreground">{work.note}</p>
        )}

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-primary">How it flows</p>
        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
          {work.steps.map((s, i) => (
            <li key={s} className="flex items-start gap-3 rounded-lg border border-border bg-background/40 px-3 py-2 text-sm">
              <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/15 text-[11px] font-bold text-primary">{i + 1}</span>
              <span className="text-muted-foreground">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function Index() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [lightbox, setLightbox] = useState<Work | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      for (const [, id] of [...nav].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 140) { setActive(id); break; }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && e.target.classList.add("in")), { threshold: 0.15 });
    document.querySelectorAll(".reveal:not(.in)").forEach((el) => io.observe(el));
    return () => { io.disconnect(); };
  }, [filter]);

  const shown = filter === "All" ? works : works.filter((w) => w.tool === filter);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <div className="fixed left-0 top-0 z-[60] h-0.5 bg-primary transition-[width]" style={{ width: `${progress}%` }} />
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/85 py-3 shadow-lg backdrop-blur-md" : "py-5"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            Nikki<span className="text-primary">.</span>Bassit
          </a>
          <nav className="hidden gap-8 md:flex">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className={`relative text-sm transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${active === id ? "text-primary after:w-full" : "text-muted-foreground hover:text-foreground after:w-0"}`}>{l}</a>
            ))}
          </nav>
          <div className="hidden md:block"><Btn href="#contact">Hire Me</Btn></div>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <div className="flex flex-col gap-4 bg-background px-6 py-4 md:hidden">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="text-muted-foreground">{l}</a>)}
          </div>
        )}
      </header>

      {/* Home */}
      <section id="home" className="relative flex min-h-screen items-center pt-24">
        <div className="pointer-events-none absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <div>
            <Reveal><p className="text-lg text-muted-foreground">Hi, I'm</p></Reveal>
            <Reveal delay={100}><p className="mt-1 text-2xl font-semibold">Nikki B. Bassit</p></Reveal>
            <Reveal delay={200}>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight text-primary md:text-5xl">Operations VA & Workflow Automation Specialist</h1>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-5 max-w-lg text-muted-foreground">I streamline daily business operations and build no-code automations with Zapier, Make, n8n and GoHighLevel — powered by AI like Claude — so you can stop doing busywork and focus on growth.</p>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-6 flex gap-3">
                {[Linkedin, Facebook, Instagram, Mail].map((I, i) => (
                  <a key={i} href={i === 3 ? "mailto:nikkibassit018@gmail.com" : "#contact"} className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary hover:text-primary"><I className="h-4 w-4" /></a>
                ))}
              </div>
            </Reveal>
            <Reveal delay={500}>
              <div className="mt-8 flex flex-wrap gap-4">
                <Btn href="#contact">Hire Me <ArrowRight className="h-4 w-4" /></Btn>
                <Btn href="#portfolio" outline><Download className="h-4 w-4" /> View My Work</Btn>
              </div>
            </Reveal>
            <Reveal delay={600}>
              <div className="mt-10 grid max-w-md grid-cols-3 divide-x divide-border rounded-lg bg-card p-5">
                {[["2+", "Roles"], ["15+", "Tools"], ["100%", "Data Accuracy"]].map(([n, l]) => (
                  <div key={l} className="px-3 first:pl-0"><p className="text-xl font-bold text-primary">{n}</p><p className="text-xs font-medium">{l}</p></div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={300} className="relative mx-auto aspect-square w-full max-w-md">
            <div className="absolute inset-6 rounded-full bg-card" />
            <div className="absolute inset-16 overflow-hidden rounded-full bg-gradient-to-br from-primary to-primary/40 p-1.5 shadow-[0_30px_80px_-20px_var(--primary)]">
              <img src={portrait.url} alt="Nikki B. Bassit" width={960} height={958} className="h-full w-full rounded-full object-cover object-[50%_35%]" />
            </div>
            {[["Zapier", "left-0 top-10"], ["n8n", "right-0 top-24"], ["Make", "bottom-24 left-0"], ["GoHighLevel", "bottom-6 right-6"], ["Claude", "top-0 right-16"]].map(([t, pos], i) => (
              <span key={t} className={`floaty absolute ${pos} rounded-full border border-border bg-card px-4 py-2 text-sm font-medium shadow-lg`} style={{ animationDelay: `${i * 0.7}s` }}>
                <span className="mr-2 inline-block h-2 w-2 rounded-full bg-primary" />{t}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">About me</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Turning busywork into smooth, automated systems</h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-muted-foreground">I'm a Business Administration undergraduate turned Operations Virtual Assistant and Workflow Automation Specialist. I streamline daily business operations, manage client communications and build no-code automations with Zapier, Make and n8n.</p>
            <p className="mt-4 text-muted-foreground">I set up and manage <span className="text-foreground">GoHighLevel</span> pipelines, funnels and nurture workflows, and I use <span className="text-foreground">Claude</span> and other AI tools to work faster and smarter. Organized, proactive and detail-oriented — I'm ready to bring strong operational and technical support to your remote team.</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Organized", "Proactive", "Fast Learner", "Detail-Oriented", "Clear Communicator"].map((t) => <span key={t} className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary">{t}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading kicker="What I do" title="Services" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <Reveal key={s.t} delay={i * 80}>
                <div onClick={ripple} className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></div>
                  <h3 className="text-lg font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-card/40 py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Heading kicker="My journey" title="Work Experience" />
          <div className="relative border-l-2 border-border pl-8">
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 120} className="relative mb-12 last:mb-0">
                <span className="absolute -left-[42px] top-1 grid h-5 w-5 place-items-center rounded-full bg-primary"><span className="h-2 w-2 rounded-full bg-background" /></span>
                <div className="rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/60">
                  <div className="flex items-center gap-2 text-primary"><Briefcase className="h-4 w-4" /><span className="text-sm font-medium">{e.org}</span></div>
                  <h3 className="mt-2 text-xl font-semibold">{e.role}</h3>
                  <ul className="mt-4 space-y-2">
                    {e.pts.map((p) => <li key={p} className="flex gap-3 text-sm text-muted-foreground"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{p}</li>)}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-16">
            <h3 className="mb-5 text-center text-lg font-semibold">Tools I work with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tools.map((t) => <span key={t} className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-all hover:scale-105 hover:border-primary hover:text-primary">{t}</span>)}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading kicker="Previous works" title="Portfolio" />
          <p className="-mt-8 mb-8 text-center text-sm text-muted-foreground">
            A small sample of the workflows I've built — click any card to open the full diagram.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-2">
            {filters.map((t) => (
              <button key={t} onClick={(e) => { ripple(e); setFilter(t); }}
                className={`relative overflow-hidden rounded-full border px-4 py-1.5 text-sm transition-all ${filter === t ? "border-primary bg-primary/15 text-primary" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}>
                {t}
              </button>
            ))}
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((w, i) => (
              <Reveal key={w.title} delay={i * 70}>
                <button onClick={(e) => { ripple(e); setLightbox(w); }}
                  className="group relative h-full w-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card text-left transition-all duration-300 hover:-translate-y-2 hover:border-primary/60">
                  <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-to-br from-primary/25 to-secondary">
                    {w.img ? (
                      <img src={w.img} alt={`${w.title} workflow diagram`} loading="lazy"
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <GhlThumb />
                    )}
                    <span className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-background/80 text-foreground opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                      <Maximize2 className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{w.tool}</p>
                    <h3 className="mt-2 text-lg font-semibold">{w.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10">
            <div className="flex flex-col items-center gap-4 rounded-xl border border-primary/30 bg-primary/5 px-6 py-6 text-center sm:flex-row sm:text-left">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Sparkles className="h-5 w-5" />
              </span>
              <div className="flex-1">
                <p className="font-semibold">These are just samples.</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  I've built many more automations than fit on this page — lead capture, follow-up
                  sequences, invoicing and reporting, AI drafting, and custom CRM setups. Tell me
                  what's slowing you down and I'll show you something similar.
                </p>
              </div>
              <a href="#contact" onClick={ripple}
                className="relative inline-flex shrink-0 items-center gap-2 overflow-hidden rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground">
                Ask about a workflow <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading kicker="Kind words" title="Testimonials" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 120}>
                <figure className="h-full rounded-xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/60">
                  <Quote className="h-8 w-8 text-primary" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">"{t.q}"</blockquote>
                  <figcaption className="mt-6"><p className="font-semibold">{t.n}</p><p className="text-xs text-primary">{t.r}</p></figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Heading kicker="Let's work together" title="Contact Me" />
          <Reveal className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              [Phone, "Phone", "+63 994 849 5667", "tel:+639948495667"],
              [Mail, "Email", "nikkibassit018@gmail.com", "mailto:nikkibassit018@gmail.com"],
              [Mail, "Business Email", "blutechva@gmail.com", "mailto:blutechva@gmail.com"],
              [MapPin, "Location", "Baguio, Philippines", "#contact"],
            ].map(([I, l, v, h]) => {
              const Icon = I as typeof Phone;
              return (
                <a key={l as string} href={h as string} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:translate-x-1 hover:border-primary/60">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary/15 text-primary"><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0"><span className="block text-xs text-muted-foreground">{l as string}</span><span className="block truncate text-sm font-medium">{v as string}</span></span>
                </a>
              );
            })}
          </Reveal>
        </div>
      </section>

      {lightbox && <Lightbox work={lightbox} onClose={() => setLightbox(null)} />}

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <Headphones className="mx-auto mb-2 h-5 w-5 text-primary" />
        © {new Date().getFullYear()} Nikki<span className="text-primary">.</span>Bassit — Operations VA & Workflow Automation Specialist
      </footer>
    </div>
  );
}
