import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import portrait from "@/assets/nikki_portrait.jpg.asset.json";
import {
  Bot, Workflow, CalendarCheck, Database, FileText, Users, Headphones, Mail, Phone, MapPin,
  Linkedin, Facebook, Instagram, ArrowRight, Download, Quote, Zap, Briefcase, Menu, X,
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

const works = [
  { tag: "n8n · Google Sheets", t: "Gym Lead Routing System", d: "New inquiries automatically logged, assigned and followed up by email within minutes." },
  { tag: "GoHighLevel", t: "Client Nurture Funnel", d: "Lead-capture funnel with pipeline stages and automated SMS/email nurture sequence." },
  { tag: "Make · Google Drive", t: "Automated Client Onboarding", d: "Intake form triggers welcome kit, folder creation and tool access setup." },
  { tag: "Zapier · Slack · AI", t: "Smart Inbox Triage", d: "AI-assisted inbox routing that flags priorities and drafts replies into Slack." },
  { tag: "Notion · ClickUp", t: "Operations SOP Hub", d: "A searchable SOP library that cut training time for new team members." },
  { tag: "Google Calendar · Zapier", t: "Booking Conflict Guard", d: "Syncs shifts and appointments so double bookings simply can't happen." },
];

const testimonials = [
  { q: "Nikki took our messy admin and turned it into systems that run themselves. Our follow-ups never slip anymore.", n: "Gym Owner", r: "Fitness Business" },
  { q: "Our GoHighLevel setup finally works the way we imagined — pipelines, reminders, all of it. Fast and detail-oriented.", n: "Agency Founder", r: "Marketing Agency" },
  { q: "Reliable, proactive and quick to learn any tool. Onboarding new clients is now a one-click process.", n: "Small Business Owner", r: "Consulting" },
];

const tools = ["Zapier", "Make", "n8n", "GoHighLevel", "ChatGPT", "Claude", "Notion", "Airtable", "Google Workspace", "Slack", "Asana", "Trello", "ClickUp", "Canva", "CapCut", "WordPress"];

function Index() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {works.map((w, i) => (
              <Reveal key={w.t} delay={i * 80}>
                <div onClick={ripple} className="group relative h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-2">
                  <div className="relative grid h-36 place-items-center overflow-hidden bg-gradient-to-br from-primary/30 to-secondary">
                    <Workflow className="h-14 w-14 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-125" />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-primary">{w.tag}</p>
                    <h3 className="mt-2 text-lg font-semibold">{w.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-card/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Heading kicker="Kind words" title="Testimonials" />
          <div className="grid gap-6 md:grid-cols-3">
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
          <div className="grid gap-8 md:grid-cols-5">
            <Reveal className="space-y-4 md:col-span-2">
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
            <Reveal delay={150} className="md:col-span-3">
              <form className="space-y-4 rounded-xl border border-border bg-card p-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const f = new FormData(e.currentTarget);
                  window.location.href = `mailto:nikkibassit018@gmail.com?subject=${encodeURIComponent(`Inquiry from ${f.get("name")}`)}&body=${encodeURIComponent(`${f.get("message")}\n\n— ${f.get("name")} (${f.get("email")})`)}`;
                }}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input required name="name" placeholder="Your name" className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-hidden focus:border-primary" />
                  <input required type="email" name="email" placeholder="Your email" className="rounded-md border border-input bg-background px-4 py-3 text-sm outline-hidden focus:border-primary" />
                </div>
                <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm outline-hidden focus:border-primary" />
                <button type="submit" onClick={ripple} className="relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 active:scale-95">
                  Send Message <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <Headphones className="mx-auto mb-2 h-5 w-5 text-primary" />
        © {new Date().getFullYear()} Nikki<span className="text-primary">.</span>Bassit — Operations VA & Workflow Automation Specialist
      </footer>
    </div>
  );
}
