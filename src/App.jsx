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
  TrendingUp,
  BookOpen,
  Target,
  CheckCircle2,
} from "lucide-react";
import AIChatSection from "./components/AIChatSection";

/* ─── Data ─────────────────────────────────────────────────────── */

const profile = {
  name: "Phalguni Vatsa",
  title: "Product Manager",
  subtitle: "Growth · Retention · Monetization",
  blurb:
    "Product leader with 10 years in B2B & B2C SaaS across healthcare, tech, and data science. Proven track record in 0→1 launches, growth, retention, and monetization — with expertise in AI-driven experimentation, CRM, and global payments.",
  location: "San Francisco, CA",
  highlights: [
    "Grew retention 20% for a 30M-user health app via gamification, tiering & A/B experimentation at CVS Health",
    "Drove 10% revenue growth at Autodesk through personalized upsell and Voice of Customer insights",
    "Full-stack PM: roadmaps → execution → metrics · Python · SQL · Amplitude · JIRA · SAFe",
  ],
  email: "phalguni.vats@gmail.com",
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
    period: "Feb 2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Defined 12-month roadmap for a 30M-user health & wellness platform; secured executive buy-in on monetization and retention strategy",
      "Introduced gamified features — Badges & Streaks — improving retention by 20% across 30M users",
      "Launched 'Team Challenges' with team creation logic, ranking systems, and real-time leaderboards → 20% uptick in onboarding among premium users",
      "Orchestrated a multichannel notification strategy to personalize outreach, delivering a 30% lift in interaction rates",
      "Introduced membership tiering system unlocking premium perks → 40% boost in engagement and 10% lift in feature adoption",
      "Drove A/B experiments to diagnose onboarding drop-offs, optimizing the funnel for a projected 20% lift in member activation",
      "Led end-to-end delivery of customizable financial incentives with UX, engineering & account managers → 10% increase in customer adoption",
    ],
  },
  {
    company: "Autodesk",
    role: "Product Owner",
    period: "Jan 2022 – Sep 2023",
    location: "San Francisco, CA",
    bullets: [
      "Partnered with engineering and UX to automate renewals and deliver white-glove services to premium members, improving retention by 7%",
      "Led the Voice of Customer initiative — transforming user feedback into actionable insights that raised NPS by 20 points across key segments",
      "Designed and launched a personalized upsell experience at checkout with integrated promos, driving a 10% revenue increase",
    ],
  },
  {
    company: "Tredence Inc.",
    role: "Data Science Intern",
    period: "Aug 2021 – Nov 2021",
    location: "San Francisco, CA",
    bullets: [
      "Built an ML framework to automate A/B testing for e-commerce clients, reducing analysis turnaround time by 20%",
    ],
  },
  {
    company: "Merck Group",
    role: "Project Lead",
    period: "Jan 2020 – Dec 2020",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed user journey and behavior to identify high-impact features for nurture marketing, growing the customer base by 20%",
      "Led end-to-end sprint delivery across a global team; shipped multi-keyword search and 3rd-party API integrations → 30% increase in average session duration",
    ],
  },
  {
    company: "Yash Technologies",
    role: "Tech Lead → Software Engineer",
    period: "Aug 2015 – Jan 2020",
    location: "Bengaluru, India",
    bullets: [
      "Promoted from Software Engineer to Tech Lead — analyzed purchasing behavior and launched bundle checkout offerings → 15% revenue increase",
      "Led cross-functional code reviews for user onboarding, improving average page response time by 15%",
      "Built User Management with role-based access control (RBAC) and SuperUser support to retain users across org transitions → 25% churn reduction",
      "Introduced live order tracking and automated report generation for customers → 30% reduction in lead time",
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

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "30M", label: "Users on Platform" },
  { value: "20%", label: "Retention Lift" },
  { value: "30%", label: "Interaction Rate Lift" },
  { value: "+20", label: "NPS Improvement" },
  { value: "5", label: "Companies" },
];

const testimonials = [
  {
    quote: "I had the pleasure to work with Phalguni for several months and found her to be a highly capable and collaborative partner. She is curious and takes the time to fully understand problems before moving on to the next step. Phalguni made it easy for me to understand the technical side of issues we were working together to resolve. Her effective communication, along with the depth of her expertise and optimistic attitude, made me look forward to our regular meetings. I hope to have the opportunity to work alongside Phalguni again and highly recommend her for any role.",
    name: "Bree L.",
    title: "[ Add Bree's title from LinkedIn ]",
    company: "[ Add company ]",
  },
  {
    quote: "I had the pleasure to work with Phalguni in a group project towards the end of my time at Purdue. And not only did I find a good teammate in her, but also a great friend! Phalguni is extremely reliable and always produced high quality work for our team. I never felt the need to review any work that she had done for the team because I always knew that what she completed was going to be great! In addition, Phalguni holds herself in a professional manner with great communication skills, always keeping teammates in the know on task progress. I truly believe she would be a great addition to any analytics teams!",
    name: "Stefanie Walsh",
    title: "[ Add Stefanie's title from LinkedIn ]",
    company: "[ Add company ]",
  },
  {
    quote: "[ You have 2 more LinkedIn recommendations — paste one here. Go to linkedin.com/in/phalgunivatsa → Recommendations to copy the text. ]",
    name: "[ Name ]",
    title: "[ Title ]",
    company: "[ Company ]",
  },
];

const caseStudies = [
  {
    title: "Gamification & Retention at Scale",
    company: "CVS Health",
    role: "Product Manager",
    timeline: "2024 – Present",
    tags: ["Growth", "Gamification", "Retention", "A/B Testing", "30M Users"],
    summary:
      "How I drove a 20% retention lift for a 30M-user health & wellness platform by introducing a gamification system, membership tiering, and personalised outreach — backed by rigorous A/B experimentation.",
    problem:
      "The health & wellness platform had strong acquisition numbers but struggled with long-term retention and premium user activation. Members would sign up, explore a few features, and disengage — never reaching the habits that make a health app genuinely valuable. The challenge: how do you make healthy behaviour feel rewarding enough that 30 million people keep coming back?",
    roleDetail:
      "As the sole PM owning the engagement and retention surface, I defined the 12-month roadmap, secured executive buy-in, wrote all PRDs, partnered with UX and engineering on delivery, and owned the experimentation programme end-to-end.",
    approach: [
      {
        step: "Discovery",
        detail:
          "Analysed drop-off cohorts in Amplitude, ran user interviews, and mapped the full member journey to identify where and why users disengaged.",
      },
      {
        step: "Define",
        detail:
          "Framed the core problem as a motivation gap — users lacked visible progress and social accountability. Set retention rate as the north star metric.",
      },
      {
        step: "Design",
        detail:
          "Explored gamification frameworks and ran concept tests. Prioritised Badges, Streaks, and Team Challenges based on signal strength and engineering feasibility.",
      },
      {
        step: "Deliver",
        detail:
          "Shipped in phases — Badges & Streaks first, then Team Challenges with real-time leaderboards, then membership tiering and a personalised multichannel notification strategy.",
      },
    ],
    decision:
      "The hardest call was sequencing. Engineering wanted to build the full tiering system first; I pushed to ship Badges & Streaks in six weeks to get retention signal early. That bet paid off — early data justified the larger tiering investment and gave us a clear direction before committing significant engineering resources.",
    metrics: [
      { value: "20%", label: "Retention Lift" },
      { value: "30%", label: "Interaction Rate Lift" },
      { value: "40%", label: "Engagement Boost" },
      { value: "20%", label: "Premium Onboarding Uptick" },
      { value: "10%", label: "Feature Adoption Lift" },
      { value: "10%", label: "Customer Adoption Increase" },
    ],
    outcome:
      "The gamification system became a flagship feature of the platform. Badges & Streaks improved retention by 20% across 30M users. Team Challenges drove a 20% uptick in premium onboarding. The membership tiering system boosted engagement by 40%. The multichannel notification strategy delivered a 30% lift in interaction rates. Combined, these initiatives made measurable dents in all top-line engagement and monetisation KPIs.",
  },
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
    { href: "#case-studies", label: "Case Study" },
    { href: "#skills", label: "Skills" },
    { href: "#testimonials", label: "Testimonials" },
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

        {/* ── Impact Stats ── */}
        <section className="mb-14 -mt-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 py-4 px-2 shadow-sm"
              >
                <div className="text-2xl md:text-3xl font-extrabold text-violet-600 dark:text-violet-400 leading-none">
                  {s.value}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 leading-snug">
                  {s.label}
                </div>
              </div>
            ))}
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

        {/* ── Case Studies ── */}
        <section id="case-studies" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<BookOpen size={20} />} title="Case Studies" />
          <div className="flex flex-col gap-10">
            {caseStudies.map((cs) => (
              <div key={cs.title} className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">

                {/* Case study header */}
                <div className="bg-violet-600 px-6 py-5 text-white">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <p className="text-violet-200 text-xs font-semibold uppercase tracking-widest mb-1">
                        {cs.company} · {cs.role} · {cs.timeline}
                      </p>
                      <h3 className="text-xl md:text-2xl font-bold">{cs.title}</h3>
                      <p className="text-violet-100 text-sm mt-2 max-w-2xl">{cs.summary}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cs.tags.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-white/20 text-white text-xs font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6 flex flex-col gap-6 bg-white dark:bg-slate-900/60">

                  {/* Problem + Role */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                      <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
                        <Target size={15} className="text-rose-500" /> The Problem
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cs.problem}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                      <div className="flex items-center gap-2 mb-2 font-semibold text-sm">
                        <Star size={15} className="text-violet-500" /> My Role
                      </div>
                      <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cs.roleDetail}</p>
                    </div>
                  </div>

                  {/* Approach */}
                  <div className="rounded-xl border border-slate-200 dark:border-slate-700 p-4">
                    <div className="flex items-center gap-2 mb-4 font-semibold text-sm">
                      <TrendingUp size={15} className="text-emerald-500" /> Approach
                    </div>
                    <div className="grid sm:grid-cols-4 gap-4">
                      {cs.approach.map((a, i) => (
                        <div key={a.step}>
                          <div className="w-7 h-7 rounded-full bg-violet-600 text-white text-xs font-bold flex items-center justify-center mb-2">
                            {i + 1}
                          </div>
                          <div className="font-semibold text-sm mb-1">{a.step}</div>
                          <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{a.detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Decision */}
                  <div className="rounded-xl border border-violet-200 dark:border-violet-900/50 bg-violet-50/50 dark:bg-violet-950/20 p-4">
                    <div className="flex items-center gap-2 mb-2 font-semibold text-sm text-violet-700 dark:text-violet-300">
                      <CheckCircle2 size={15} /> Key Decision
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cs.decision}</p>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <div className="flex items-center gap-2 mb-4 font-semibold text-sm">
                      <Trophy size={15} className="text-amber-500" /> Outcomes
                    </div>
                    <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center rounded-xl border border-slate-200 dark:border-slate-700 py-3 px-2">
                          <div className="text-lg font-extrabold text-violet-600 dark:text-violet-400">{m.value}</div>
                          <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">{m.label}</div>
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{cs.outcome}</p>
                  </div>

                </div>
              </div>
            ))}
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

        {/* ── Testimonials ── */}
        <section id="testimonials" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Star size={20} />} title="Testimonials" />
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm p-5 flex flex-col"
              >
                <div className="text-4xl font-serif text-violet-300 dark:text-violet-700 leading-none mb-3">"</div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic grow">{t.quote}</p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">{t.title} · {t.company}</div>
                </div>
              </div>
            ))}
          </div>
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
