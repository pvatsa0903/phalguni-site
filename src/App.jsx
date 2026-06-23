import { useEffect, useMemo, useRef, useState } from "react";
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
  Zap,
  Headphones,
  Lightbulb,
  Tv,
} from "lucide-react";
import AIChatSection from "./components/AIChatSection";

/* ─── Data ─────────────────────────────────────────────────────── */

const profile = {
  name: "Phalguni Vatsa",
  title: "Product Manager – AI & Digital Products",
  subtitle: "AI Products · Growth · Monetization",
  blurb:
    "Product Manager with 10+ years of experience and a foundation in software engineering and data — building and scaling B2B & B2C SaaS products serving 13M+ users and generating $17M+ in annual revenue. Expertise in growth, monetization, activation, experimentation, AI-powered products, CRM, global payments, and 0→1 product development.",
  location: "San Francisco, CA",
  highlights: [
    "Built a multi-layer ML health-scoring engine and led a 0→1 onboarding redesign for a 13M+ user Health & Wellness app — 15% faster activation, 20% activation lift",
    "Led product strategy for a $17M+ wallet & incentives platform — ~30% YoY revenue growth across a 13M+ user platform",
    "Drove 10% revenue growth at Autodesk ($5B+ ARR) via personalized checkout and VoC-led NPS improvement of +20 pts",
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
    role: "Product Manager – AI & Digital Products",
    period: "Feb 2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      {
        label: "Predictive Analytics & ML Engine",
        text: "Built a multi-layer ML health scoring system, leveraging behavioral and wearable data to deliver real-time health scores and next-best-action recommendations, accelerating member activation by 15%",
      },
      {
        label: "Metrics & KPIs",
        text: "Introduced a membership tiering system unlocking premium perks, boosting feature adoption by 10%",
      },
      {
        label: "Customer-Centric Mindset",
        text: "Designed, scaled and launched gamified features (Badges, Streaks, Team Challenges) to drive social motivation and increase user engagement by 30% for a Health & Wellness app",
      },
      {
        label: "Data-Driven Decision Making",
        text: "Led A/B experimentation and 0→1 onboarding platform redesign for a Health & Wellness app serving 13M+ users, improving identity flows and instrumentation to increase activation by 20%",
      },
      {
        label: "Product Vision & Strategy",
        text: "Led product strategy and scale-up of a wallet and incentives platform powering $17M+ GMV; strengthened fraud-resilient redemption and fulfillment systems (12-hour SLA), contributing to ~30% YoY revenue growth",
      },
    ],
  },
  {
    company: "Autodesk",
    role: "GTM Product Manager",
    period: "Jan 2022 – Sep 2023",
    location: "San Francisco, CA",
    bullets: [
      {
        label: "Cross-Functional Collaboration",
        text: "Partnered with UX and engineering to make trade-offs and drive automation of renewal and premium account workflows within Autodesk's $5B+ ARR subscription system; improved retention by 7% through lifecycle optimization",
      },
      {
        label: "Customer-Centric Mindset",
        text: "Launched a Voice-of-Customer (VoC) Dashboard for Customer Success, aggregating social, survey, and call data to surface at-risk users, prioritize detractor re-engagement — lifting NPS by 20 points",
      },
      {
        label: "Decision Making under Uncertainty",
        text: "Led a pilot to expand into emerging markets, testing an outsourced customer success model; built A/B experiments with data science to validate cost and revenue impact and inform a go/no-go decision",
      },
      {
        label: "Data-Driven Decision Making",
        text: "Designed a personalized checkout experience, leveraging targeted upsell promotions to drive 10% revenue growth",
      },
    ],
  },
  {
    company: "Tredence Inc.",
    role: "Data Science Intern",
    period: "Aug 2021 – Nov 2021",
    location: "San Francisco, CA",
    bullets: [
      "Built a machine learning framework to automate A/B testing for e-commerce clients, reducing turnaround time by 20%",
    ],
  },
  {
    company: "Merck KGaA",
    role: "Project Lead",
    period: "Jan 2020 – Dec 2020",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed user journey and behavior to identify features for nurture marketing, growing the customer base by 20%",
      "Planned and led end-to-end sprint delivery across a global team; shipped multi-keyword search and 3rd-party API integrations → 30% increase in average session duration",
    ],
  },
  {
    company: "Yash Technologies",
    role: "Senior Software Engineer",
    period: "Apr 2018 – Jan 2020",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed user purchasing behavior and implemented bundle offerings at checkout, increasing revenue by 15%",
      "Led a cross-functional team reviewing code for user onboarding, ensuring a 25% improvement in average page response time",
      "Designed and implemented seamless login, registration, and onboarding flows with role-based access (SuperUsers) to retain users transitioning between organizations, improving continuity and reducing churn by 25%",
      "Introduced live tracking for product requests and orders, and report generation for customers, reducing lead time by 30%",
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
    label: "Product & Systems",
    color: "violet",
    items: [
      "Onboarding & Activation", "Monetization & Incentives", "Personalization & Insights",
      "Retention Systems", "AI-Assisted Prototyping",
      "Go-to-Market (GTM)", "Product Roadmap", "Cross-functional Leadership",
    ],
  },
  {
    label: "Tools & Technical",
    color: "blue",
    items: [
      "A/B Testing", "Experimentation", "OKRs & KPIs",
      "Amplitude", "Google Analytics", "SQL", "APIs",
      "Claude", "Lovable",
    ],
  },
  {
    label: "Growth & Monetization",
    color: "emerald",
    items: [
      "Funnel Optimization", "Activation / Retention", "Personalization",
      "CRM", "Monetization Strategy", "Global Payments",
      "AI-driven Experimentation", "PLG",
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
    degree: "Master of Science (M.S.)",
    field: "Business Analytics & Information Management",
    school: "Purdue University, Krannert School of Management",
    year: "2021",
  },
  {
    degree: "Bachelor of Engineering (B.E.)",
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
  { value: "13M", label: "Users on Platform" },
  { value: "15%", label: "Faster Member Activation" },
  { value: "30%", label: "YoY Revenue Growth" },
  { value: "+20", label: "NPS Improvement" },
  { value: "5", label: "Companies" },
];

const currently = [
  { icon: BookOpen,   label: "Reading",        value: "Inspired — Marty Cagan" },
  { icon: Zap,        label: "Learning",        value: "AI agents, markdown files & AI orchestration" },
  { icon: Code2,      label: "Building",        value: "OpenClaw for Phalguni | PRD Engine" },
  { icon: Headphones, label: "Listening to",    value: "Lenny's Podcast" },
  { icon: Lightbulb,  label: "Thinking about",  value: "How prototyping through AI will 10× a PM's productivity" },
  { icon: Target,     label: "Open to",         value: "Full-time PM roles" },
  { icon: Tv,         label: "Recently Watched",        value: "Project Hail Mary" },
];

const testimonials = [
  {
    quote: "I had the pleasure to work with Phalguni for several months and found her to be a highly capable and collaborative partner. She is curious and takes the time to fully understand problems before moving on to the next step. Phalguni made it easy for me to understand the technical side of issues we were working together to resolve. Her effective communication, along with the depth of her expertise and optimistic attitude, made me look forward to our regular meetings. I hope to have the opportunity to work alongside Phalguni again and highly recommend her for any role.",
    name: "Bree Lotter",
  },
  {
    quote: "I had the pleasure to work with Phalguni in a group project towards the end of my time at Purdue. And not only did I find a good teammate in her, but also a great friend! Phalguni is extremely reliable and always produced high quality work for our team. I never felt the need to review any work that she had done for the team because I always knew that what she completed was going to be great! In addition, Phalguni holds herself in a professional manner with great communication skills, always keeping teammates in the know on task progress. I truly believe she would be a great addition to any analytics teams!",
    name: "Stefanie Walsh",
  },
  {
    quote: "It's rare that you come across standout talent like Phalguni. I had the pleasure of starting my career and working with her for five years at Merck, collaborating on several projects — she always thinks out of the box and completes responsibilities well within the time frame. She makes sure she is always there for her team when needed. What really impressed me most is just how polished she is when presenting to large groups of people. Her communication skills are really impressive.",
    name: "Prakhar Jain",
    title: "Software Engineer",
    company: "Merck KGaA",
  },
  {
    quote: "Phalguni has been a great asset to the team. Collaborative and communicative, she connects teams with information they need to be more efficient. With an analytical eye, she is able to diagnose the root cause of inefficiencies. With her problem solving skills and initiative, she removes friction by moderating and coordinating efforts in an orderly and professional way. Her efforts ultimately benefit the team, the product, and the customer.",
    name: "Sophie Daudenarde",
    title: "Product Management Executive · AI Solutions Practitioner",
    company: "Life Science Innovator",
  },
];

const caseStudies = [
  {
    title: "Scaling a $17M+ Wallet & Incentives Platform",
    company: "CVS Health",
    role: "Product Manager – AI & Digital Products",
    timeline: "2024 – Present",
    tags: ["Monetization", "Wallet & Incentives", "Fraud Prevention", "Growth", "Healthcare"],
    summary:
      "How I led product strategy and scale-up of a wallet and incentives platform powering $17M+ GMV — strengthening fraud-resilient redemption and fulfillment systems while driving ~30% YoY revenue growth for a 13M+ user health platform.",
    problem:
      "CVS's wallet and incentives platform had real GMV flowing through it, but fraud exposure and slow fulfillment SLAs were capping how aggressively the business could scale redemption volume. The challenge: grow the platform's revenue contribution without growing fraud risk or fulfillment backlog in lockstep.",
    roleDetail:
      "As the PM owning product strategy for the wallet and incentives platform, I defined the roadmap for fraud-resilient redemption, partnered with engineering and risk teams on fulfillment SLAs, and aligned stakeholders across UX, Data Science, Engineering, and Operations on the rollout.",
    approach: [
      {
        step: "Discovery",
        detail:
          "Audited fraud patterns and fulfillment bottlenecks in the existing redemption flow, and quantified how much revenue growth was being left on the table by overly conservative fraud controls.",
      },
      {
        step: "Define",
        detail:
          "Framed the goal as a twin constraint: cut fulfillment time aggressively while making redemption more fraud-resilient, not trading one off against the other.",
      },
      {
        step: "Design",
        detail:
          "Designed fraud-resilient redemption logic and a fulfillment pipeline targeting a 12-hour SLA, in partnership with engineering and risk.",
      },
      {
        step: "Deliver",
        detail:
          "Rolled out the redemption and fulfillment improvements incrementally, monitoring fraud rates and SLA performance at each stage before scaling further.",
      },
    ],
    decision:
      "The hardest call was how aggressively to loosen fraud controls to unlock revenue growth. I pushed to ship fraud-resilient redemption logic first and prove it held under real volume, before committing to the more aggressive 12-hour fulfillment SLA — sequencing risk reduction ahead of speed rather than chasing both at once.",
    metrics: [
      { value: "$17M+", label: "GMV Powered" },
      { value: "~30%", label: "YoY Revenue Growth" },
      { value: "12hr", label: "Fulfillment SLA" },
      { value: "13M+", label: "Users on Platform" },
      { value: "20%", label: "Activation Lift" },
      { value: "30%", label: "Engagement Lift" },
    ],
    outcome:
      "The wallet and incentives platform scaled to power $17M+ in GMV with fraud-resilient redemption and a 12-hour fulfillment SLA, contributing to ~30% YoY revenue growth. Combined with the onboarding redesign (20% activation lift) and gamified engagement features (30% engagement lift) across a 13M+ user platform, the work moved the business's core monetization metrics without compromising trust or fulfillment speed.",
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
    <div className="flex items-center gap-3 mb-6 pl-4 border-l-4 border-violet-500">
      <span className="text-violet-600 dark:text-violet-400">{icon}</span>
      <h2 className="text-xl font-bold tracking-tight">{title}</h2>
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md ${className}`}
    >
      {children}
    </div>
  );
}

/* ─── Stat Counter ─────────────────────────────────────────────── */

function StatCounter({ value, started }) {
  const match = value.match(/^([+]?)(\d+)([+MkK%]?)$/);
  const prefix = match ? match[1] : "";
  const suffix = match ? match[3] : "";
  const target = match ? parseInt(match[2]) : 0;
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started || !match) return;
    let raf;
    let startTime = null;
    const duration = 1600;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(animate);
      else setCount(target);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!match) return <span>{value}</span>;
  return <span>{prefix}{count}{suffix}</span>;
}

/* ─── Main App ──────────────────────────────────────────────────── */

export default function App() {
  const [dark, setDark] = useState(true);
  const [navOpen, setNavOpen] = useState(false);
  const year = useMemo(() => new Date().getFullYear(), []);

  // Stat counter animation
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  // Typewriter for subtitle
  const typewriterTarget = profile.subtitle;
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // Always start at the top — prevent browser scroll restoration on reload
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const check = () => {
      const el = statsRef.current || document.querySelector('[data-stats-section]');
      if (!el) return;
      const { top, bottom } = el.getBoundingClientRect();
      if (top < window.innerHeight && bottom > 0) {
        setStatsStarted(true);
        window.removeEventListener('scroll', check);
      }
    };
    // Small delay so ref is definitely set after first paint
    const t = setTimeout(() => {
      check();
      window.addEventListener('scroll', check, { passive: true });
    }, 100);
    return () => {
      clearTimeout(t);
      window.removeEventListener('scroll', check);
    };
  }, []);

  useEffect(() => {
    let i = 0;
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        i++;
        setTypedText(typewriterTarget.slice(0, i));
        if (i >= typewriterTarget.length) clearInterval(interval);
      }, 55);
      return () => clearInterval(interval);
    }, 900);
    return () => clearTimeout(delay);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#currently", label: "Currently" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#case-studies", label: "Case Study" },
    { href: "#skills", label: "Skills" }, 
    { href: "#chat", label: "AI Chat" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-200">

      {/* ── Nav ── */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-extrabold tracking-tight text-base bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
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
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 text-xs font-semibold px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Open to Conversations
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight bg-gradient-to-br from-violet-600 via-purple-500 to-blue-500 bg-clip-text text-transparent pb-1">
                {profile.name}
              </h1>
              <p className="mt-2 text-xl md:text-2xl font-semibold text-slate-500 dark:text-slate-400 tracking-tight">
                {profile.title}
              </p>
              <p className="mt-1 h-6 text-sm font-medium text-violet-500 dark:text-violet-400 tracking-widest uppercase">
                {typedText}
                <span className={`inline-block w-0.5 h-4 bg-violet-500 ml-0.5 align-middle ${typedText.length < typewriterTarget.length ? "animate-pulse" : "opacity-0"}`} />
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
                    href="https://weekly-stock-ace.lovable.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    <ExternalLink size={18} /> StockPulse App
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
        <section className="mb-14 -mt-4" ref={statsRef} data-stats-section="true">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="relative flex flex-col items-center justify-center text-center rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 pt-5 pb-4 px-2 shadow-sm overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 to-blue-500" />
                <div className="text-2xl md:text-3xl font-extrabold text-violet-600 dark:text-violet-400 leading-none tabular-nums">
                  <StatCounter value={s.value} started={statsStarted} />
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
              Product leader with 10 years of experience in <strong>B2B and B2C SaaS</strong> across healthcare, tech, and data science.
              I specialize in turning user behavior into <strong>scalable growth systems</strong> — with proven success in <strong>0→1 launches</strong>,
              growth, retention, and monetization. My sweet spot is designing the right incentives, habit loops, and experiments that
              deliver measurable impact.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Most teams don&apos;t struggle with ideas — they struggle with structure. I take ambiguous spaces and break them into
              clear problem definitions, sharp hypotheses, and focused execution paths. My approach: start with how users <em>actually</em> behave,
              identify the highest-leverage moments in the journey, then build systems that compound over time.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              What makes me different: I don&apos;t just PM — I <strong>build</strong>. I have deep expertise in <strong>AI-driven experimentation</strong>,
              CRM, and global payments, and I use AI as a thinking partner across the full product lifecycle.
              I write Python, train ML models, and ship live products — giving me the technical depth to collaborate faster with engineers
              and define sharper, user-centric requirements.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">Areas I&apos;m drawn to</p>
              <ul className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />Activation and onboarding systems</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />Subscription and monetization strategy</li>
                <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />Expanding access to products at scale</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* ── Currently ── */}
        <section id="currently" className="scroll-mt-24 mb-14">
          <SectionHeader icon={<Zap size={20} />} title="Currently" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {currently.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mt-0.5 shrink-0 text-violet-500 dark:text-violet-400">
                  <Icon size={16} />
                </span>
                <div className="min-w-0">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-0.5">
                    {label}
                  </div>
                  <div className="text-sm font-medium text-slate-800 dark:text-slate-100 leading-snug">
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>
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
                        {job.note && (
                          <div className="text-xs text-slate-400 dark:text-slate-500">{job.note}</div>
                        )}
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
                        <li key={j}>
                          {typeof b === "object" ? (
                            <>
                              <strong className="text-slate-900 dark:text-slate-100">{b.label}:</strong> {b.text}
                            </>
                          ) : (
                            b
                          )}
                        </li>
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
          <div className="grid sm:grid-cols-2 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60 shadow-sm p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    {(t.title || t.company) && (
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        {[t.title, t.company].filter(Boolean).join(" · ")}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed grow">
                  &ldquo;{t.quote}&rdquo;
                </p>
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
