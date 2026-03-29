import { useEffect, useMemo, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Moon,
  Sun,
  Download,
  MapPin,
  Briefcase,
  Trophy,
  MessageSquare,
  ExternalLink,
  Code2,
  GraduationCap,
  Star,
  ChevronDown,
} from "lucide-react";
import AIChatSection from "./components/AIChatSection";

/* ─── Data ─────────────────────────────────────────────────────── */

const profile = {
  name: "Phalguni Vatsa",
  title: "Product Manager",
  subtitle: "Growth & Monetization",
  blurb:
    "10 years building and scaling B2B & B2C SaaS products. I turn ambiguous problems into shipped features and measurable outcomes — through crisp strategy, rigorous experimentation, and cross-functional alignment.",
  location: "San Francisco, CA",
  highlights: [
    "Launched incentives engine driving double-digit lifts in member activation",
    "ML-literate PM: Python · SQL · Amplitude · A/B testing · Agile/SAFe",
    "MS Business Analytics, Purdue Krannert · Certified SAFe® Agilist · AI For Everyone (Coursera)",
  ],
  email: "phalgunivatsa@gmail.com", // ← update with your real email
  social: {
    github: "https://github.com/pvatsa0903",
    linkedin: "https://www.linkedin.com/in/phalgunivatsa/",
    resume: "/phalguni-site/resume.pdf",
  },
};

const experience = [
  {
    company: "CVS Health",
    role: "Product Manager",
    period: "2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Launched gift-card checkout & incentives engine delivering millions in GMV with strong member adoption",
      "Shipped team challenges, streaks, and badges → double-digit lift in member interactions and retention",
      "Defined activation KPIs, instrumented Amplitude dashboards, and ran A/B experiments across onboarding",
      "Led cross-functional squads of engineers, designers, and data scientists in a scaled agile (SAFe) environment",
    ],
  },
  {
    company: "Autodesk",
    role: "Product Owner",
    period: "2021 – 2023",
    location: "San Francisco, CA",
    bullets: [
      "Owned PLG funnel improvements across web onboarding, cutting time-to-value measurably",
      "Partnered with Data Science to design experimentation and measurement frameworks",
      "Drove free-to-paid conversion improvements through iterative product-led growth loops",
    ],
  },
  {
    company: "Merck Group",
    role: "Project Lead",
    period: "2020 – 2020",
    location: "Bengaluru, India",
    bullets: [
      "Built and scaled consumer-facing features for a B2C SaaS platform serving 100k+ users",
      "Managed roadmap, user research, and cross-team stakeholder alignment end-to-end",
      "Received Outstanding Achievement Awards",
    ],
  },
    {
    company: "Yash Technologies",
    role: "Software Engineer",
    period: "2015 – 2020",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed user purchasing behavior for the product and implemented bundle offerings at checkout increasing revenue by 15%",
      "Led a cross-functional team reviewing code for user onboarding assuring improvement in average page response time by 15%",
      "Introduced live tracking for product requests and orders and report generation for customers reducing lead time by 30%",
      "Developed User Management for identity and access management with role-based access control including SuperUsers in the application to retain users transitioning between organizations and reduced churn rate by 25%",
      "Received Employee of the Quarter Awards",
    ],
  },
];

const projects = [
  {
    title: "StockPulse — AI-Powered Sentiment Picks",
    timeline: "2026",
    description:
      "Full-stack web app that uses AI to analyze market sentiment and surface stock recommendations. Conceived, designed, and shipped entirely through prompt engineering — no traditional coding. Proof that the best PMs don't wait for engineers.",
    tags: ["TypeScript", "AI", "Finance", "Full-Stack"],
    link: "https://weekly-stock-ace.lovable.app",
    linkLabel: "Live App",
    github: "https://github.com/pvatsa0903/weekly-stock-ace",
    featured: true,
  },
  {
    title: "Sentiment Analysis for Trading",
    timeline: "2021",
    description:
      "ML pipeline analyzing financial news & social media sentiment to predict price movements. Achieved 84.37% accuracy using NLP and ensemble methods.",
    tags: ["Python", "NLP", "Machine Learning"],
    link: "https://github.com/pvatsa0903/sentiment-analysis-for-trading-strategy",
    linkLabel: "GitHub",
    featured: false,
  },
  {
    title: "Purchase Intent Classification",
    timeline: "2021",
    description:
      "Trained classifiers to predict user purchase intent from online session data — 85.45% accuracy, directly applicable to personalization strategy.",
    tags: ["Python", "ML", "E-commerce"],
    link: "https://github.com/pvatsa0903/purchase-intent-for-every-online-session",
    linkLabel: "GitHub",
    featured: false,
  },
  {
    title: "City Bus Route Optimization",
    timeline: "2021",
    description:
      "Data-driven analysis identifying 40% overhead reduction potential through smart route consolidation and scheduling optimization.",
    tags: ["Python", "Data Analytics", "Optimization"],
    link: "#",
    linkLabel: "View",
    featured: false,
  },
];

const skillGroups = [
  {
    label: "Product Management",
    color: "violet",
    items: [
      "Product Strategy", "Roadmap and Prioritization", "User Research",
      "A/B Testing", "OKR Definition", "Stakeholder Management",
      "Agile / SAFe", "PRD Writing",
    ],
  },
  {
    label: "Technical",
    color: "blue",
    items: [
      "Python","JAVA" ,"SQL", "Machine Learning", "Data Analytics",
      "Amplitude", "Jupyter Notebook", "TypeScript",
    ],
  },
  {
    label: "Growth & Analytics",
    color: "emerald",
    items: [
      "Growth Loops", "Funnel Optimization", "Activation / Retention",
      "Experimentation Design", "Cohort Analysis", "PLG",
    ],
  },
];

const colorMap = {
  violet: {
    badge: "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
    dot: "bg-violet-500",
  },
  blue: {
    badge: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
    dot: "bg-blue-500",
  },
  emerald: {
    badge: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
    dot: "bg-emerald-500",
  },
};

const education = [
  {
    degree: "Master of Science",
    field: "Business Analytics & Information Management",
    school: "Purdue University, Krannert School of Management",
    year: "2021",
  },
  {
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    school: "Rajiv Gandhi Technical University",
    year: "2015",
  },
];

const certifications = [
  { name: "Certified SAFe® 4 Agilist", issuer: "Scaled Agile" },
  { name: "AI For Everyone", issuer: "Coursera · DeepLearning.AI · 2019" },
  { name: "Vibe Coding", issuer: "Lovable" },
];

const awards = [
  "Employee of the Quarter Award",
  "Outstanding Achievement Award",
  "Spot Award",
  "Team Award",
  "Krannert GSA Case Competition Winner (2021)",
];

/* ─── Sub-components ────────────────────────────────────────────── */

function Tag({ children, className = "" }) {
  return (
    <span
      className={`px-2 py-0.5 rounded-full border text-xs font-medium ${className}`}
    >
      {children}
    </span>
  );
}

function SectionHeader({ icon, title }) {
  return (
    <div className="flex items-center gap-2 mb-5">
      <span className="text-violet-600 dark:text-violet-400">{icon}</span>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm p-5 ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Main App ──────────────────────────────────────────────────── */

export default function App() {
  const [dark, setDark] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#chat", label: "AI Chat" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-bold tracking-tight text-base">
            {profile.name}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-5 text-sm font-medium">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="opacity-70 hover:opacity-100 transition-opacity"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle theme"
              onClick={() => setDark((d) => !d)}
              className="h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            {/* Mobile menu toggle */}
            <button
              aria-label="Menu"
              className="md:hidden h-9 w-9 flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-700"
              onClick={() => setNavOpen((o) => !o)}
            >
              <ChevronDown size={16} className={navOpen ? "rotate-180" : ""} />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {navOpen && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 px-4 py-3 flex flex-col gap-3 text-sm font-medium">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setNavOpen(false)}
                className="opacity-70 hover:opacity-100"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <main id="home" className="max-w-5xl mx-auto px-4">

        {/* ── Hero ── */}
        <section className="py-14 md:py-20">
          <div className="grid md:grid-cols-5 gap-10 items-center">
            <div className="md:col-span-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-3">
                {profile.subtitle}
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {profile.name}
              </h1>
              <p className="mt-1 text-2xl md:text-3xl font-bold text-slate-400 dark:text-slate-500">
                {profile.title}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-full">
                <MapPin size={13} /> {profile.location}
              </div>
              <p className="mt-5 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">
                {profile.blurb}
              </p>
              <ul className="mt-5 space-y-2">
                {profile.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <Star size={14} className="mt-0.5 shrink-0 text-violet-500" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  <Code2 size={15} /> See Projects
                </a>
                <a
                  href="#chat"
                  className="inline-flex items-center gap-2 rounded-full border border-violet-600 text-violet-600 dark:text-violet-400 dark:border-violet-500 hover:bg-violet-50 dark:hover:bg-violet-950 px-5 py-2.5 text-sm font-semibold transition-colors"
                >
                  <MessageSquare size={15} /> Chat with AI
                </a>
              </div>
            </div>

            {/* Quick links card */}
            <div className="md:col-span-2">
              <Card>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400 mb-4">
                  Quick Links
                </h3>
                <div className="flex flex-col gap-3 text-sm">
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Github size={18} /> GitHub
                  </a>
                  <a
                    href="#chat"
                    className="flex items-center gap-3 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <MessageSquare size={18} /> AI Portfolio Chat
                  </a>
                  <a
                    href={profile.social.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <Download size={18} /> Resume (PDF)
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section id="about" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Briefcase size={20} />} title="About" />
          <Card>
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
              I&apos;m a Product Manager who bridges the gap between business strategy and technical execution.
              My sweet spot is <strong>growth and monetization</strong> — designing the right incentives,
              experiments, and product loops that move activation, retention, and revenue metrics.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              What makes me different: I don&apos;t just PM — I <strong>build</strong>. I write Python,
              train ML models, and have shipped live web apps. That technical depth lets me work faster
              with engineers, define sharper requirements, and build products infused with AI from the ground up.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Outside of work I&apos;m exploring how AI can transform product workflows — experimenting with
              LLMs, vibe-coding side projects, and thinking about what the next generation of PM tools looks like.
            </p>
          </Card>
        </section>

        {/* ── Experience ── */}
        <section id="experience" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Briefcase size={20} />} title="Experience" />
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200 dark:bg-slate-800 hidden md:block" />
            <div className="flex flex-col gap-6">
              {experience.map((job, i) => (
                <div key={i} className="md:pl-12 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-5 w-3 h-3 rounded-full bg-violet-500 border-2 border-white dark:border-slate-950 hidden md:block" />
                  <Card>
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                      <div>
                        <div className="font-bold text-base">{job.company}</div>
                        <div className="text-sm text-violet-600 dark:text-violet-400 font-medium">{job.role}</div>
                      </div>
                      <div className="text-right shrink-0">
                        <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">{job.period}</div>
                        <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 justify-end mt-0.5">
                          <MapPin size={11} /> {job.location}
                        </div>
                      </div>
                    </div>
                    <ul className="list-disc ml-4 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Projects ── */}
        <section id="projects" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Code2 size={20} />} title="Selected Projects" />
          <div className="grid gap-5">
            {/* Featured project */}
            {projects.filter((p) => p.featured).map((p) => (
              <Card key={p.title} className="border-violet-200 dark:border-violet-900/50 bg-violet-50/50 dark:bg-violet-950/20">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400 bg-violet-100 dark:bg-violet-900/40 px-2 py-0.5 rounded-full mb-2">
                      Featured
                    </span>
                    <h3 className="font-bold text-lg">{p.title}</h3>
                  </div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0">{p.timeline}</span>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
                <div className="flex gap-3">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-violet-600 hover:bg-violet-700 px-3 py-1.5 rounded-full transition-colors"
                  >
                    <ExternalLink size={12} /> {p.linkLabel}
                  </a>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold border rounded-full px-3 py-1.5 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      <Github size={12} /> GitHub
                    </a>
                  )}
                </div>
              </Card>
            ))}

            {/* Regular projects grid */}
            <div className="grid sm:grid-cols-3 gap-5">
              {projects.filter((p) => !p.featured).map((p) => (
                <Card key={p.title} className="flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-bold text-sm leading-snug">{p.title}</h3>
                    <span className="text-xs text-slate-400 shrink-0">{p.timeline}</span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-3 grow">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-violet-600 dark:text-violet-400 hover:underline inline-flex items-center gap-1"
                  >
                    <ExternalLink size={11} /> {p.linkLabel}
                  </a>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section id="skills" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Star size={20} />} title="Skills & Expertise" />
          <div className="grid md:grid-cols-3 gap-5">
            {skillGroups.map((g) => (
              <Card key={g.label}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`w-2.5 h-2.5 rounded-full ${colorMap[g.color].dot}`} />
                  <span className="text-sm font-semibold">{g.label}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className={`px-2.5 py-1 rounded-full text-xs font-medium ${colorMap[g.color].badge}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Education + Certifications + Awards */}
          <div className="grid sm:grid-cols-3 gap-5 mt-5">
            <Card>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-violet-500" />
                <span className="text-sm font-semibold">Education</span>
              </div>
              <ul className="space-y-3">
                {education.map((e) => (
                  <li key={e.degree + e.school} className="text-sm">
                    <div className="font-semibold">{e.degree}</div>
                    <div className="font-medium text-violet-600 dark:text-violet-400">{e.field}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{e.school}</div>
                    <div className="text-xs text-slate-400 dark:text-slate-500">{e.year}</div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={16} className="text-blue-500" />
                <span className="text-sm font-semibold">Certifications</span>
              </div>
              <ul className="space-y-2">
                {certifications.map((c) => (
                  <li key={c.name} className="text-sm">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{c.issuer}</div>
                  </li>
                ))}
              </ul>
            </Card>

            <Card>
              <div className="flex items-center gap-2 mb-3">
                <Trophy size={16} className="text-amber-500" />
                <span className="text-sm font-semibold">Awards & Recognition</span>
              </div>
              <ul className="space-y-2">
                {awards.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm">
                    <Trophy size={12} className="mt-0.5 shrink-0 text-amber-400" />
                    {a}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        {/* ── AI Chat ── */}
        <section id="chat" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<MessageSquare size={20} />} title="Chat with My AI Assistant" />
          <AIChatSection />
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="scroll-mt-24 mb-16">
          <SectionHeader icon={<Mail size={20} />} title="Get in Touch" />
          <Card>
            <p className="text-base text-slate-700 dark:text-slate-200 mb-5">
              I&apos;m always open to interesting conversations about product, growth, AI, or new opportunities.
              The best way to reach me is LinkedIn.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                <Mail size={16} /> {profile.email}
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm font-semibold transition-colors"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </Card>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <span>© {year} {profile.name} · Vibe coded with Claude AI ✦ React + Tailwind</span>
          <div className="flex items-center gap-5">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-slate-900 dark:hover:text-slate-100 transition-colors">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
