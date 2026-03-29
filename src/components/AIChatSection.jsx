import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";

/* ─── Knowledge Base ────────────────────────────────────────────── */
const KB = [
  {
    keywords: ["hello", "hi", "hey", "howdy", "greetings", "sup", "good morning", "good afternoon", "good evening"],
    response:
      "Hi there! 👋 I'm Phalguni's AI portfolio assistant. I can tell you about her PM background, projects, skills, career highlights, and more.\n\nTry one of the suggested questions below, or just ask away!",
  },
  {
    keywords: ["who is phalguni", "tell me about phalguni", "about phalguni", "who are you", "introduce yourself", "brief intro", "overview", "summary of phalguni"],
    response:
      "Phalguni Vatsa is a Senior Product Manager with 10 years of experience building and scaling B2B & B2C SaaS products.\n\nCurrently at CVS Health / Personify Health in San Francisco, she specializes in growth, monetization, and activation strategies. Her superpower is combining sharp PM craft with genuine technical depth — she writes Python, builds ML models, and ships live products.\n\nShe studied at Purdue's Krannert School of Management, holds a SAFe Agilist certification, and completed AI For Everyone (Coursera) back in 2019.",
  },
  {
    keywords: ["current role", "cvs", "cvs health", "personify", "personify health", "current job", "current company", "where does she work", "what does she do now"],
    response:
      "At CVS Health / Personify Health (2022–Present), Phalguni is a Senior PM focused on Growth & Monetization:\n\n• Launched a gift-card checkout & incentives engine driving millions in GMV\n• Shipped team challenges, streaks, and badges → double-digit lift in member interactions\n• Defines activation KPIs, instruments Amplitude dashboards, and runs A/B experiments across onboarding\n• Leads cross-functional squads of engineers, designers, and data scientists in a SAFe agile environment",
  },
  {
    keywords: ["experience", "work history", "career", "previous jobs", "past roles", "career path", "career journey", "how many years", "years of experience"],
    response:
      "Phalguni has 10 years of PM experience across three stages:\n\n📍 CVS Health / Personify Health (2022–Present)\nSenior PM, Growth & Monetization — incentives engine, member engagement, A/B testing\n\n📍 B2B SaaS (2019–2022)\nPM — PLG funnel optimization, reduced time-to-value, experimentation frameworks\n\n📍 B2C SaaS, Bengaluru → SF (2015–2019)\nPM — consumer features for 100k+ users, roadmap ownership, team awards\n\nShe's consistently driven measurable outcomes — activation lifts, retention gains, and revenue growth across wellness, enterprise, and consumer platforms.",
  },
  {
    keywords: ["projects", "side projects", "built", "created", "portfolio projects", "what has she built", "personal projects", "show me projects"],
    response:
      "Phalguni has built some standout technical projects:\n\n🚀 StockPulse (2024) — AI-powered stock sentiment app. Live at weekly-stock-ace.lovable.app. TypeScript, full-stack.\n\n📊 Sentiment Analysis for Trading (2024) — ML pipeline predicting stock moves from news/social sentiment. 84.37% accuracy.\n\n🛒 Purchase Intent Classification (2023) — Classifiers predicting e-commerce purchase intent from session data. 85.45% accuracy.\n\n🚌 City Bus Route Optimization (2022) — Data analysis identifying 40% overhead reduction potential.\n\nHer projects show she doesn't just manage products — she ships them.",
  },
  {
    keywords: ["stockpulse", "stock pulse", "weekly stock ace", "stock app", "stock sentiment", "stock project", "ai stock", "sentiment stock picks"],
    response:
      "StockPulse is Phalguni's flagship side project! 🚀\n\nIt's a live web app (weekly-stock-ace.lovable.app) that uses AI to analyze market sentiment and surface stock recommendations. Built with TypeScript.\n\nThe project demonstrates her ability to take an idea end-to-end — from user problem (investors drowning in noise) through design, development, and a live deployed product. That full-stack thinking is exactly what great PMs bring.",
  },
  {
    keywords: ["sentiment analysis", "trading strategy", "sentiment trading", "stock ml", "ml trading", "trading model"],
    response:
      "The Sentiment Analysis for Trading project is one of Phalguni's most technically impressive ML builds.\n\nUsing Python, NLP, and ensemble methods, she built a pipeline that:\n• Ingests financial news and social media data\n• Extracts sentiment signals\n• Correlates them with price movements\n• Achieved 84.37% accuracy on test data\n\nFor a PM, this kind of technical credibility is rare — and makes her a far stronger collaborator with data science teams.",
  },
  {
    keywords: ["purchase intent", "intent classification", "e-commerce ml", "session data", "purchase prediction", "online session"],
    response:
      "The Purchase Intent Classification project trained ML models to predict whether a user will purchase based on their online session behavior.\n\n• Dataset: anonymized e-commerce session data\n• Best accuracy: 85.45%\n• Models tested: logistic regression, random forests, gradient boosting\n• Built in Python with scikit-learn\n\nThis project is directly applicable to PM work around personalization, targeting, and conversion optimization — exactly the kind of outcomes Phalguni drives professionally.",
  },
  {
    keywords: ["skills", "technical skills", "what can she do", "expertise", "tools", "technologies", "tech stack", "proficiency"],
    response:
      "Phalguni's skills span PM craft + technical depth:\n\n🎯 Product Management\nProduct strategy, roadmapping, user research, A/B testing, OKRs, stakeholder management, agile/SAFe, PRD writing\n\n💻 Technical\nPython, SQL, Machine Learning, Data Analytics, Amplitude, Jupyter, TypeScript\n\n📈 Growth & Analytics\nGrowth loops, funnel optimization, activation/retention, experimentation design, cohort analysis, PLG\n\nThis combo is rare — she earns engineering team trust by being able to speak their language.",
  },
  {
    keywords: ["education", "degree", "purdue", "krannert", "mba", "school", "university", "studied", "college", "academic"],
    response:
      "Phalguni studied at Purdue University's Krannert School of Management (2021), completing advanced coursework in:\n\n• Business Analytics\n• Data Mining\n• Machine Learning\n• Strategic Management\n\nShe also won the Krannert Graduate Student Association Case Competition in 2021 — under real-world business pressure, she delivered winning strategy.\n\nEarlier, she completed undergraduate studies in engineering, giving her the technical foundation for her data-driven PM work.",
  },
  {
    keywords: ["awards", "achievements", "recognition", "honors", "accomplishments", "won", "prizes", "accolades"],
    response:
      "Phalguni has earned consistent recognition throughout her career:\n\n🏆 Employee of the Quarter Award\n🌟 Outstanding Achievement Award\n⚡ Spot Award\n👥 Team Award\n🎓 Krannert GSA Case Competition Winner (2021)\n\nThese reflect not just individual output, but collaborative impact — the kind of teammate who makes everyone around her better.",
  },
  {
    keywords: ["ai", "artificial intelligence", "machine learning", "ml background", "deep learning", "llm", "nlp", "data science", "technical depth"],
    response:
      "Phalguni's AI/ML background goes well beyond the buzzword level:\n\n• Completed AI For Everyone (Coursera, 2019) — early adopter before it was trendy\n• Built real ML models: sentiment analysis (84.37% acc), purchase intent (85.45% acc)\n• Shipped a live AI-powered product: StockPulse\n• Applies ML thinking to PM work: experimentation design, instrumentation, model output interpretation\n• Currently exploring LLMs and vibe-coding AI-native products\n\nFor a PM, this technical AI fluency is genuinely rare and valuable.",
  },
  {
    keywords: ["contact", "hire", "reach out", "email", "get in touch", "how to contact", "available", "recruiting", "open to work", "connect"],
    response:
      "Want to connect with Phalguni? Here's how:\n\n💼 LinkedIn: linkedin.com/in/phalgunivatsa\n💻 GitHub: github.com/pvatsa0903\n\nShe's always open to conversations about product, growth, AI, or new opportunities. LinkedIn is the best place to start!",
  },
  {
    keywords: ["why hire", "why phalguni", "strengths", "value add", "what makes her special", "different from other pms", "unique", "stand out"],
    response:
      "What makes Phalguni stand out as a PM:\n\n🎯 Data-first — She instruments everything and lets data drive decisions, not gut feel alone\n\n💻 Technical depth — Codes in Python, trains ML models, ships live products. Engineers respect her.\n\n🚀 Proven outcomes — Double-digit lifts in activation/retention, millions in GMV from the incentives engine\n\n🤝 Cross-functional leadership — 10 years aligning engineers, designers, and business stakeholders\n\n🧠 AI-native — Understands AI deeply enough to product-ize it effectively\n\nShe's the rare PM who can both write the PRD and review the model performance.",
  },
  {
    keywords: ["agile", "safe", "scrum", "sprint", "methodology", "certified", "process", "scaled agile"],
    response:
      "Phalguni is a Certified SAFe® 4 Agilist — well-versed in Scaled Agile Framework for large enterprise environments.\n\nIn practice at CVS Health she:\n• Runs tight two-week sprints with clear user stories and acceptance criteria\n• Facilitates PI planning across multiple teams\n• Manages cross-team dependencies and blockers\n• Writes crisp PRDs that engineering teams love\n\nHer agile chops mean she ships — not just plans.",
  },
  {
    keywords: ["where", "location", "based", "city", "remote", "office", "san francisco", "sf"],
    response:
      "Phalguni is based in San Francisco, California. She's worked in SF throughout most of her career and previously spent several years in Bengaluru, India.",
  },
  {
    keywords: ["python", "sql", "code", "coding", "programming", "technical", "engineer", "developer"],
    response:
      "Yes — Phalguni codes! 💻\n\nPrimary tools: Python (data analysis, ML modeling, automation) and SQL (querying, analytics, experiment analysis).\n\nShe's also worked with TypeScript (her StockPulse app) and uses tools like Jupyter Notebook, Amplitude, and various data/analytics platforms daily.\n\nThis technical grounding means she can define better requirements, debug edge cases with engineers, and build ML-powered features from concept to production.",
  },
  {
    keywords: ["growth", "monetization", "plg", "product led growth", "activation", "retention", "funnel", "conversion"],
    response:
      "Growth & Monetization is Phalguni's core domain:\n\n• Designed and launched incentives engines and rewards flows\n• Built activation KPI frameworks and instrumented analytics\n• Ran rigorous A/B experiments across onboarding funnels\n• Worked on PLG loops that drove free-to-paid conversion\n• Applied cohort analysis to understand retention and churn patterns\n\nShe approaches growth with the precision of a scientist — define the metric, run the experiment, ship what works.",
  },
  {
    keywords: ["help", "what can you do", "options", "questions", "what can i ask", "what do you know", "capabilities"],
    response:
      "I can answer questions about Phalguni on topics like:\n\n• Her PM experience and career history\n• Current role at CVS Health / Personify Health\n• Technical projects (StockPulse, ML models)\n• Skills (PM craft + Python/SQL/ML)\n• Education (Purdue Krannert)\n• Awards & achievements\n• AI/ML background and depth\n• Growth & monetization expertise\n• How to contact her\n• Why she might be a great hire or collaborator\n\nJust ask naturally — I understand conversational questions!",
  },
];

const SUGGESTED_QUESTIONS = [
  "What's her PM background?",
  "Tell me about StockPulse",
  "What technical skills does she have?",
  "What are her career highlights?",
  "Why should I hire her?",
  "How can I contact Phalguni?",
];

const INITIAL_MESSAGE = {
  id: 0,
  role: "assistant",
  text: "Hi! 👋 I'm Phalguni's AI portfolio assistant.\n\nAsk me anything about her experience, projects, skills, or background — or tap a suggested question below.",
};

/* ─── Chatbot logic ─────────────────────────────────────────────── */
function getBotResponse(input) {
  const lower = input.toLowerCase().trim();
  if (!lower) return null;

  let bestEntry = null;
  let bestScore = 0;

  for (const entry of KB) {
    const score = entry.keywords.reduce(
      (acc, kw) => acc + (lower.includes(kw) ? 1 : 0),
      0
    );
    if (score > bestScore) {
      bestScore = score;
      bestEntry = entry;
    }
  }

  if (bestScore === 0) {
    return "Hmm, I'm not sure about that one! Try asking about Phalguni's experience, projects, skills, or education.\n\nType **help** to see everything I can answer.";
  }
  return bestEntry.response;
}

/* ─── Markdown-lite renderer ────────────────────────────────────── */
function MessageText({ text }) {
  // Render **bold** and bullet lines nicely
  const lines = text.split("\n");
  return (
    <div className="space-y-0.5">
      {lines.map((line, i) => {
        // Bold: **text**
        const parts = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return <strong key={j}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        return (
          <p key={i} className={line === "" ? "h-2" : ""}>
            {parts}
          </p>
        );
      })}
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────────────── */
export default function AIChatSection() {
  const [messages, setMessages] = useState([INITIAL_MESSAGE]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg = { id: Date.now(), role: "user", text: trimmed };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    const delay = 700 + Math.random() * 500;
    setTimeout(() => {
      const response = getBotResponse(trimmed);
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, role: "assistant", text: response },
      ]);
    }, delay);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-4 bg-violet-600 text-white">
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
          <Sparkles size={18} />
        </div>
        <div>
          <div className="font-semibold text-sm">Phalguni's AI Assistant</div>
          <div className="text-xs text-violet-200">Ask me anything about her background</div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-violet-200">Online</span>
        </div>
      </div>

      {/* Message area */}
      <div className="h-80 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50 dark:bg-slate-900/40">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {/* Avatar */}
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-white text-xs ${
                msg.role === "assistant"
                  ? "bg-violet-600"
                  : "bg-slate-600 dark:bg-slate-500"
              }`}
            >
              {msg.role === "assistant" ? <Bot size={14} /> : <User size={14} />}
            </div>

            {/* Bubble */}
            <div
              className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                msg.role === "assistant"
                  ? "bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-100"
                  : "bg-violet-600 text-white"
              } ${msg.role === "assistant" ? "rounded-bl-sm" : "rounded-br-sm"}`}
            >
              <MessageText text={msg.text} />
            </div>
          </div>
        ))}

        {/* Typing indicator */}
        {isTyping && (
          <div className="flex items-end gap-2">
            <div className="w-7 h-7 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
              <Bot size={14} className="text-white" />
            </div>
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-4">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dot-1" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dot-2" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dot-3" />
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggested questions */}
      <div className="px-4 py-2.5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60">
        <p className="text-[11px] text-slate-400 dark:text-slate-500 mb-2 font-medium uppercase tracking-wide">
          Suggested
        </p>
        <div className="flex flex-wrap gap-1.5">
          {SUGGESTED_QUESTIONS.map((q) => (
            <button
              key={q}
              onClick={() => sendMessage(q)}
              disabled={isTyping}
              className="text-xs px-3 py-1 rounded-full border border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 hover:bg-violet-50 dark:hover:bg-violet-950 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-2 px-4 py-3 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60"
      >
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me about Phalguni…"
          disabled={isTyping}
          className="flex-1 text-sm bg-slate-100 dark:bg-slate-800 rounded-full px-4 py-2 outline-none placeholder-slate-400 dark:placeholder-slate-500 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!input.trim() || isTyping}
          className="w-9 h-9 rounded-full bg-violet-600 hover:bg-violet-700 text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <Send size={15} />
        </button>
      </form>
    </div>
  );
}
