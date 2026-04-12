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
  title: "Product Manager",
  subtitle: "Growth · Retention · Monetization",
  blurb:
    "Product leader with 10 years in B2B & B2C SaaS across healthcare, tech, and data science. Proven track record in 0→1 launches, growth, retention, and monetization — with expertise in AI-driven experimentation, CRM, and global payments.",
  location: "San Francisco, CA",
  highlights: [
    "Scaled a $17M+ monetization platform at CVS Health — 30% YoY revenue growth, 50% retention lift, 30M+ users",
    "Launched AI-powered personalization dashboard accelerating time-to-value by 35% and improving DAU by 18%",
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
    role: "Product Manager",
    period: "Feb 2024 – Present",
    location: "San Francisco, CA",
    bullets: [
      "Scaled a $17M+ monetization platform (gift card checkout + incentives), delivering ~30% YoY revenue growth, increasing user acquisition by 10% and user engagement by 30%",
      "Led 0→1 re-architecture and experimentation strategy for onboarding across a 30M+ member platform — using funnel analysis, A/B testing, and behavioral analytics to improve first-session activation by 20%",
      "Led product strategy and launch of an AI-powered personalization dashboard surfacing actionable health insights via wearable data and recommendation models — accelerating time-to-value by 35% and improving DAU by 18%",
      "Designed and owned product strategy for gamified habit loops and retention loops (Badges, Streaks, Team Challenges), translating behavioral analytics into scalable engagement systems that drive stickiness — increasing retention by 50%",
      "Introduced a membership tiering system unlocking premium perks → 40% boost in engagement and 10% lift in feature adoption",
      "Orchestrated a multichannel notification strategy to personalize outreach based on user behavior signals, delivering a 30% lift in interaction rates",
      "Defined a 12-month product strategy and roadmap for a 30M-user health platform, evaluating build vs partner tradeoffs and securing executive buy-in on long-term monetization and retention strategy",
    ],
  },
  {
    company: "Autodesk",
    role: "Product Owner",
    period: "Jan 2022 – Sep 2023",
    location: "San Francisco, CA",
    bullets: [
      "Drove cross-functional delivery across engineering, design, and GTM to automate renewal and premium account workflows within Autodesk's $5B+ ARR subscription business, improving customer retention by 7%",
      "Launched a Voice-of-Customer (VoC) Dashboard for Customer Success, aggregating social, survey, and call data across enterprise and mid-market accounts to surface at-risk users and prioritize detractor re-engagement — lifting NPS by 20 points",
      "Designed a personalized checkout experience leveraging targeted upsell and cross-sell promotions to drive 10% revenue growth",
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
    role: "Tech Lead",
    period: "Apr 2018 – Jan 2020",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed user purchasing behavior and implemented bundle checkout offerings at checkout → 15% revenue increase",
      "Led cross-functional team reviewing code for user onboarding, improving average page response time by 15%",
    ],
  },
  {
    company: "Yash Technologies",
    role: "Software Engineer",
    period: "Aug 2015 – Apr 2018",
    location: "Bengaluru, India",
    bullets: [
      "Designed and implemented seamless login, registration, and onboarding flows with role-based access (SuperUsers) to retain users across org transitions → 25% churn reduction",
      "Introduced live tracking for product requests and orders and automated report generation for customers → 30% reduction in lead time",
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
      "Product Roadmap", "Product Strategy", "Stakeholder Management",
      "Cross-functional Leadership", "Go-to-Market (GTM)", "OKRs & KPIs",
      "Experimentation", "User Behavior Insights",
    ],
  },
  {
    label: "Tools & Analytics",
    color: "blue",
    items: [
      "JIRA", "Asana", "Rally", "Amplitude", "SQL", "Data Analysis",
      "Python", "Machine Learning",
    ],
  },
  {
    label: "Growth & Monetization",
    color: "emerald",
    items: [
      "Funnel Optimization", "Activation / Retention", "A/B Testing",
      "Personalization", "CRM", "Monetization Strategy", "PLG",
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
  { value: "30M", label: "Users on Platform" },
  { value: "50%", label: "Retention Lift" },
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
    title: "Gamification & Retention at Scale",
    company: "CVS Health",
    role: "Product Manager",
    timeline: "2024 – Present",
    tags: ["Growth", "Gamification", "Retention", "A/B Testing", "30M Users"],
    summary:
      "How I drove a 50% retention lift for a 30M+ member health platform by owning the full engagement system — gamification, AI-powered personalization, membership tiering, and A/B experimentation — while scaling a $17M+ monetization platform to 30% YoY revenue growth.",
    problem:
      "The health & wellness platform had strong acquisition numbers but struggled with long-term retention and premium user activation. Members would sign up, explore a few features, and disengage — never reaching the habits that make a health app genuinely valuable. Meanwhile, the monetization surface was underperforming relative to the scale of the user base. The challenge: how do you make healthy behaviour feel rewarding and profitable at 30M+ users?",
    roleDetail:
      "As the PM owning the engagement, retention, and monetization surface, I defined the 12-month strategy and roadmap, secured executive buy-in, wrote all PRDs, partnered with UX and engineering on delivery, and owned the experimentation programme end-to-end — including an AI-powered personalization dashboard using wearable data and recommendation models.",
    approach: [
      {
        step: "Discovery",
        detail:
          "Analysed drop-off cohorts in Amplitude, ran user interviews, and mapped the full member journey to identify where and why users disengaged. Also audited monetization funnel for expansion gaps.",
      },
      {
        step: "Define",
        detail:
          "Framed the problem as a dual challenge: a motivation gap (no visible progress or social accountability) and a monetization gap ($17M+ platform underperforming). Set retention and revenue as co-equal north star metrics.",
      },
      {
        step: "Design",
        detail:
          "Explored gamification frameworks, AI personalization models, and monetization levers. Prioritised Badges, Streaks, Team Challenges, and an AI dashboard based on signal strength and engineering feasibility.",
      },
      {
        step: "Deliver",
        detail:
          "Shipped in phases — Badges & Streaks first, then Team Challenges, then the AI personalization dashboard, then membership tiering and a multichannel notification strategy.",
      },
    ],
    decision:
      "The hardest call was sequencing. Engineering wanted to build the full tiering system first; I pushed to ship Badges & Streaks in six weeks to get retention signal early. Simultaneously, I prioritised the AI personalization dashboard over lower-confidence features — wearable-driven recommendations proved they could accelerate time-to-value by 35% and improve DAU by 18%, justifying the investment.",
    metrics: [
      { value: "50%", label: "Retention Lift" },
      { value: "30%", label: "YoY Revenue Growth" },
      { value: "35%", label: "Faster Time-to-Value" },
      { value: "40%", label: "Engagement Boost" },
      { value: "20%", label: "Activation Improvement" },
      { value: "18%", label: "Return Visit Increase" },
    ],
    outcome:
      "The gamification and personalization systems became flagship features. Gamified retention loops drove a 50% retention lift. The AI-powered personalization dashboard accelerated time-to-value by 35% and improved DAU by 18%. The $17M+ monetization platform delivered ~30% YoY revenue growth with 10% higher user acquisition. Membership tiering boosted engagement by 40%. Combined, these initiatives moved every top-line engagement and monetization KPI.",
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
              I&apos;m a product manager focused on bringing clarity to complex problems and turning <strong>user behavior</strong> into <strong>scalable growth systems</strong>.
              My sweet spot is <strong>activation, subscriptions, and monetization</strong> — designing the right incentives,
              habit loops, and product experiments that compound over time.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              Most teams don&apos;t struggle with ideas — they struggle with structure. I specialize in taking ambiguous spaces and breaking them down into
              clear problem definitions, sharp hypotheses, and focused execution paths. My approach: start with how users <em>actually</em> behave,
              identify the highest-leverage moments in their journey, then design habit loops and systems that scale.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-700 dark:text-slate-200">
              What makes me different: I don&apos;t just PM — I <strong>build</strong>. I use AI as a thinking partner across the full product lifecycle —
              from early-stage exploration to validation and stakeholder communication — to increase both speed and quality of decision-making.
              I write Python, train ML models, and ship live web apps. That technical depth means faster collaboration with engineers and sharper requirements.
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
