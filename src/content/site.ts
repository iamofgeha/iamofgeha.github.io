/**
 * All portfolio content lives here. Components only render it.
 *
 * Sources used (nothing else was assumed):
 *  - public/Ofgeha-Gelana-CV.pdf (current resume) and an earlier CV
 *  - Role dates confirmed directly by Ofgeha
 *  - GitHub profile README, repository READMEs and pull requests on github.com/Ofgeha-Gelana
 *    and github.com/rejuve-bio
 *  - Medium articles at medium.com/@ofgehagelana2019
 *  - The previous version of this portfolio
 *
 * Fields carrying a `review` note need confirmation from Ofgeha before publishing.
 * Search the codebase for "review:" to find them all. Review notes are never rendered.
 */

import coopBankLogo from '../assets/logos/coop-bank-oromia.webp';
import eaiiLogo from '../assets/logos/eaii.webp';
import ethioTelecomLogo from '../assets/logos/ethio-telecom.webp';
import insaLogo from '../assets/logos/insa.webp';
import rejuveLogo from '../assets/logos/rejuve-bio.webp';
import singularityLogo from '../assets/logos/singularitynet.webp';

export type Link = { label: string; href: string };

/** Public address of the site. Set VITE_SITE_URL in `.env` (no trailing slash). */
export const SITE_URL: string = import.meta.env.VITE_SITE_URL;

export const profile = {
  name: 'Ofgeha Gelana',
  role: 'AI/ML Engineer & Researcher',
  location: 'Addis Ababa, Ethiopia',
  email: 'ofgehagelana2019@gmail.com', // from the CV
  cv: 'Ofgeha-Gelana-CV.pdf', // in /public
  // Line 1 is the page's <h1>. Line 2 renders muted, under it.
  headline: [
    'I build AI systems that make it to production.',
    'LLM applications, ML pipelines, and the infrastructure that keeps their answers traceable.',
  ],
  intro:
    'I design, build and deploy machine-learning systems end to end: data pipelines, model training, LLM applications and the APIs that serve them. Today that means data and ML infrastructure for an AI system that generates biological hypotheses at Rejuve Bio, and AI research at SingularityNET. Before that: production ML in banking, and research at Ethiopia’s national AI institute.',
  /** "At a glance" panel in the hero: the facts a recruiter scans for. */
  glance: [
    { label: 'Currently', value: 'AI/ML Engineer, Rejuve Bio · AI Researcher, SingularityNET' },
    { label: 'Focus', value: 'LLM applications · ML infrastructure & MLOps · AI for science' },
    { label: 'In AI/ML since', value: '2023, after backend engineering in Django' },
    { label: 'Based in', value: 'Addis Ababa, Ethiopia (UTC+3)' },
    { label: 'Open to', value: 'AI engineering, ML engineering and ML research roles' },
    { label: 'Work setup', value: '[ADD: remote / hybrid / open to relocation]' },
  ],
  social: {
    github: 'https://github.com/Ofgeha-Gelana',
    linkedin: 'https://www.linkedin.com/in/ofgeha-gelana/',
    medium: 'https://medium.com/@ofgehagelana2019',
  },
};

export const about = {
  paragraphs: [
    'I came to AI through software engineering: backend systems in Django, then machine learning, then the harder question of how intelligent systems actually work. That path shaped how I work. I care about the model, and just as much about the data it sees, the infrastructure that runs it, and whether its output can be traced back to evidence.',
    'I’ve applied that across very different settings: predictive models and ML-backed services at a bank, research on learning algorithms at a national AI institute, and data and compute infrastructure for AI-assisted research in the SingularityNET ecosystem. The domain changes; the discipline of clean data, honest evaluation and reliable deployment doesn’t.',
    'Alongside that I build smaller systems to understand ideas properly: context-aware LLM applications, human-in-the-loop learning, explainable models and symbolic reasoning. I write about what I learn, from transformer internals to agent patterns like ReAct.',
  ],
  principles: [
    {
      title: 'Evidence before output',
      body: 'A prediction is only as useful as what it can be traced back to. I keep data, versions and evaluation explicit.',
    },
    {
      title: 'Production is the point',
      body: 'A model that never leaves the notebook hasn’t solved anything. I design for serving, monitoring and change from the start.',
    },
    {
      title: 'Understand, then scale',
      body: 'I rebuild ideas from first principles before I rely on them, and then engineer them to run reliably.',
    },
  ],
  facts: [
    { label: 'Based in', value: 'Addis Ababa, Ethiopia' },
    { label: 'Education', value: 'BSc Computer Science & Engineering, ASTU · 3.8 GPA' },
    { label: 'Focus', value: 'LLM applications · ML infrastructure & MLOps · AI for science' },
    { label: 'Languages', value: 'English · Amharic · Afaan Oromo' },
  ],
};

export type Experience = {
  org: string;
  /** Shorter name for compact places such as the "Worked with" strip. */
  short?: string;
  /** Initials shown in the badge where a logo would go. */
  mark: string;
  /** Company logo from its official website (falls back to the initials). */
  logo?: string;
  /** e.g. 'Full-time', 'Contract'. Only shown when set. */
  type?: string;
  /** e.g. 'Addis Ababa · On-site', 'Remote'. Only shown when set. */
  location?: string;
  orgNote?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack?: string[];
  link?: Link;
  review?: string;
};

// review: add `type` (Full-time, Contract…) and `location` (Addis Ababa · On-site, Remote…) for each role.
export const experience: Experience[] = [
  {
    org: 'Rejuve Bio',
    mark: 'RB',
    logo: rejuveLogo,
    orgNote: 'SingularityNET ecosystem',
    role: 'AI/ML Engineer',
    period: 'May 2025 — Present',
    // Highlights are taken from pull requests to github.com/rejuve-bio.
    summary:
      'Data and ML infrastructure for an AI system that generates biological hypotheses from genetic data and summarises the evidence with LLMs.',
    highlights: [
      'Integrated Open Targets as a pre-computed data source, so the pipeline skips expensive fine-mapping and harmonisation when results already exist.',
      'Made deployments reproducible: a bootstrap service loads a pinned data release before workers start, and every analysis records the release it used.',
      'Removed pipeline bottlenecks with per-tissue caching, per-chromosome parallelism and a dependency-injection refactor of the API layer.',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'MinIO', 'Docker Compose', 'Nextflow'],
    link: { label: 'github.com/rejuve-bio', href: 'https://github.com/rejuve-bio' },
  },
  {
    org: 'SingularityNET',
    mark: 'SN',
    logo: singularityLogo,
    role: 'AI Researcher',
    period: 'Nov 2024 — Present',
    summary:
      'Research in the SingularityNET ecosystem, which builds toward beneficial, decentralised AGI on the OpenCog Hyperon stack, with a focus on AI for biology.',
    highlights: [
      'Statistical analysis of GWAS and genotype datasets for gene–trait analysis.',
      'Collaborate with cross-functional teams to integrate ML outputs into research systems.',
      'Explore symbolic and neuro-symbolic reasoning in MeTTa, the language of OpenCog Hyperon, including forward- and backward-chaining inference.',
    ],
    stack: ['Python', 'Statistical genetics', 'MeTTa', 'OpenCog Hyperon'],
    link: { label: 'MettaLogic', href: 'https://github.com/Ofgeha-Gelana/MettaLogic' },
  },
  {
    org: 'Cooperative Bank of Oromia',
    mark: 'CBO',
    logo: coopBankLogo,
    role: 'AI/ML Engineer & Backend Developer',
    period: 'Sep 2024 — Jun 2025',
    summary: 'Machine learning for predictive analytics in banking operations, from model design to production backend services.',
    highlights: [
      'Designed and deployed machine-learning models for predictive analytics in production systems.',
      'Built backend services that integrate ML models into operational workflows.',
      'Automated model-driven decision steps to improve system performance.',
      'Implemented regression, tree-based and neural-network models.',
      '[ADD METRIC HERE: what the models predicted, and the measured impact (accuracy, time or cost saved)]',
    ],
    stack: ['Python', 'scikit-learn', 'Model serving', 'REST APIs'],
    review: 'Stack chips are inferred from the resume bullets; adjust to the exact tools you used.',
  },
  {
    org: 'Ethiopian Artificial Intelligence Institute',
    mark: 'EAII',
    logo: eaiiLogo,
    short: 'Ethiopian AI Institute',
    role: 'AI Researcher & Developer',
    period: 'Feb 2023 — Jul 2024',
    summary:
      'Research on machine-learning algorithms and AI systems, and development of experimental models for complex datasets.',
    highlights: [
      'Conducted research on ML algorithms and AI systems, and contributed to technical research discussions.',
      'Developed experimental models with TensorFlow and PyTorch.',
      'Collaborated on AI solutions for complex datasets and on integrating models into applications.',
    ],
    stack: ['Python', 'PyTorch', 'TensorFlow'],
  },
  {
    org: 'Information Network Security Agency',
    mark: 'INSA',
    logo: insaLogo,
    short: 'INSA',
    role: 'Python Django Developer · Intern',
    period: 'Jul 2022 — Jan 2023',
    summary: 'Backend engineering on Django applications in an Agile team.',
    highlights: [
      'Designed backend systems with Django and RESTful APIs, including database optimisation.',
      'Contributed to large Django applications and worked across functions in an Agile process.',
    ],
    stack: ['Python', 'Django', 'REST'],
  },
  {
    org: 'Ethio Telecom',
    mark: 'ET',
    logo: ethioTelecomLogo,
    role: 'Cybersecurity Engineer · Intern',
    period: 'Feb 2022 — Jun 2022',
    summary: 'Security operations for network infrastructure.',
    highlights: [
      'Implemented and managed security controls protecting networks and systems.',
      'Monitored for security incidents and supported incident response.',
    ],
  },
];

export type Education = {
  school: string;
  credential: string;
  period?: string;
  note?: string;
  href?: string; // proof of completion, from the CV
};

export const education: Education[] = [
  {
    school: 'Adama Science and Technology University',
    credential: 'BSc, Computer Science and Engineering',
    period: '2019 — 2023',
    note: 'GPA 3.8 / 4.0',
    href: 'https://drive.google.com/file/d/1NnDgvF8u_Qdx6CgBe7GJHZALNka1dc2H/view',
  },
  {
    school: '10 Academy',
    credential: 'Kifiya AI Mastery training program',
    href: 'https://drive.google.com/file/d/1ygqWWRvqlEJDRlGyzdxu_l-nIRZmA_ZZ/view',
  },
  {
    school: 'WorldQuant University',
    credential: 'Graduate Certificate, Applied Data Science Lab',
    href: 'https://www.credly.com/badges/4b184318-9836-4cac-9d39-623ceb995869/public_url',
  },
];

export type Certification = { name: string; issuer: string; href?: string };

/** Links are the verification URLs embedded in the CV. */
export const certifications: Certification[] = [
  {
    name: 'Machine Learning Specialization',
    issuer: 'Coursera',
    href: 'https://www.coursera.org/account/accomplishments/specialization/WXQMCVERK4C0',
  },
  {
    name: 'Deep Learning Specialization',
    issuer: 'Coursera',
    href: 'https://www.coursera.org/account/accomplishments/specialization/0JH2XRVCSFKS',
  },
  {
    name: 'Mathematics for Machine Learning and Data Science Specialization',
    issuer: 'Coursera',
    href: 'https://www.coursera.org/account/accomplishments/specialization/BN71F27PA84T',
  },
  // review: no verification link in the CV yet
  { name: 'Natural Language Processing Specialization', issuer: 'Coursera' },
];

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type FigureKind = 'fraud' | 'memory' | 'opentargets';

export type Contribution = { text: string; ref?: Link };

export type FeaturedProject = {
  id: string;
  index: string;
  context: string;
  title: string;
  summary: string;
  /** My role and scope on the project. */
  role: string;
  problem: string;
  /** Approach: what I built, in order. */
  contributions: Contribution[];
  /** Outcomes. Use "[ADD METRIC HERE: …]" until a real number exists; never estimate. */
  results: string[];
  stack: string[];
  links: Link[];
  figure: FigureKind;
  review?: string;
};

const pr = (repo: string, n: number): Link => ({
  label: `#${n}`,
  href: `https://github.com/rejuve-bio/${repo}/pull/${n}`,
});

export const featured: FeaturedProject[] = [
  {
    id: 'research-infra',
    index: '01',
    context: 'Rejuve Bio · ML infrastructure',
    title: 'Data infrastructure for an AI hypothesis-generation system',
    summary:
      'Reliability and performance work on a research system that turns genetic association data into evidence-backed hypotheses, summarised by LLMs.',
    role: 'AI/ML Engineer on the Rejuve Bio team. Each item below is my own work, linked to its pull request.',
    problem:
      'The pipeline recomputed expensive steps that a trusted public source had already published, and results couldn’t be traced back to the data release they were built on.',
    contributions: [
      {
        text: 'Reuse published Open Targets results and fall back to in-house fine-mapping only when none exist.',
        ref: pr('hypothesis-generation-demo', 78),
      },
      {
        text: 'A bootstrap service loads a pinned data release on every deploy and gates workers on success.',
        ref: pr('hypothesis-generation-demo', 99),
      },
      {
        text: 'Every analysis records the data release it used, exposed through the API.',
        ref: pr('hypothesis-generation-demo', 105),
      },
      {
        text: 'Per-tissue caching and per-chromosome parallelism removed the main pipeline bottlenecks.',
        ref: pr('hypothesis-generation-demo', 89),
      },
    ],
    results: [
      'Analyses are reproducible: each records the pinned data release it was built on, exposed through the API.',
      '[ADD METRIC HERE: pipeline runtime before → after caching and per-chromosome parallelism]',
      '[ADD METRIC HERE: share of loci served from Open Targets instead of recomputed]',
    ],
    stack: ['Python', 'PostgreSQL', 'MinIO', 'Docker Compose', 'Nextflow', 'Open Targets'],
    links: [
      { label: 'Repository', href: 'https://github.com/rejuve-bio/hypothesis-generation-demo' },
      { label: 'Harmoniser', href: 'https://github.com/rejuve-bio/gwas-sumstats-harmoniser' },
    ],
    figure: 'opentargets',
  },
  {
    id: 'llm-memory',
    index: '02',
    context: 'Independent project · Generative AI',
    title: 'Context-memory LLM assistant',
    summary:
      'A Gemini-powered chat assistant with two memory strategies: Redis for fast session history, and ChromaDB vector search for semantic recall of earlier conversations.',
    role: 'Solo project: architecture, both memory strategies and the two demo apps.',
    problem:
      'LLM calls are stateless and billed per token. An assistant needs memory that is fast, relevant to the current question, and doesn’t pay twice for answers it has already given.',
    contributions: [
      { text: 'Session memory in Redis for immediate recall of the full conversation.' },
      { text: 'Semantic memory with SentenceTransformers embeddings in ChromaDB, retrieving only the context relevant to the new question.' },
      { text: 'Checks conversation history before calling the model, avoiding redundant Gemini calls.' },
      { text: 'Two Streamlit apps that make the trade-offs between the strategies easy to compare.' },
    ],
    results: [
      '[ADD METRIC HERE: share of Gemini calls avoided by the history check]',
      '[ADD METRIC HERE: recall latency, Redis session memory vs ChromaDB semantic memory]',
    ],
    stack: ['Python', 'Gemini', 'Redis', 'ChromaDB', 'SentenceTransformers', 'Streamlit'],
    links: [{ label: 'Repository', href: 'https://github.com/Ofgeha-Gelana/Ai-chatbot-context' }],
    figure: 'memory',
  },
  {
    id: 'fraud-detection',
    index: '03',
    context: 'Independent project · Applied ML & MLOps',
    title: 'Explainable fraud detection service',
    summary:
      'An end-to-end fraud-detection system for e-commerce and banking transactions: feature engineering, model selection, per-prediction explanations, and a containerised API with a monitoring dashboard.',
    role: 'Solo project: data preparation, modelling, explainability, API and dashboard.',
    problem:
      'Fraud is rare and costly. A model that flags transactions also has to explain each decision so analysts can trust and act on it, and it has to run as a service, not as a notebook.',
    contributions: [
      { text: 'Merged transaction data with IP-to-country mapping and engineered geolocation and transaction-pattern features.' },
      { text: 'Trained and compared several model families, then interpreted them globally and per prediction with SHAP and LIME.' },
      { text: 'Served the model through a Flask API in Docker, with logging for monitoring.' },
      { text: 'Built a Dash dashboard that turns predictions into fraud insights for non-technical users.' },
    ],
    results: [
      'Each flagged transaction comes with a SHAP or LIME explanation an analyst can read.',
      '[ADD METRIC HERE: precision / recall or PR-AUC of the selected model on held-out data]',
      '[ADD: which model family was selected, and why]',
    ],
    stack: ['Python', 'scikit-learn', 'SHAP', 'LIME', 'Flask', 'Docker', 'Dash'],
    links: [
      { label: 'Repository', href: 'https://github.com/Ofgeha-Gelana/FraudDetect-AI' },
      {
        label: 'Write-up',
        href: 'https://medium.com/@ofgehagelana2019/fraud-detection-system-for-e-commerce-and-banking-transactions-2d37cf020d51',
      },
    ],
    figure: 'fraud',
  },
];

export type Build = {
  title: string;
  category: 'LLM systems' | 'Machine learning' | 'Data engineering' | 'Reasoning';
  year: string;
  description: string;
  stack: string[];
  repo?: string;
  live?: string;
  writeup?: string;
};

/** Year = last active year of the repository on GitHub. */
export const builds: Build[] = [

  {
    title: 'Amharic NER for e-commerce',
    category: 'Machine learning',
    year: '2025',
    description:
      'Fine-tuning a language model for Amharic named-entity recognition (products, prices, locations) on messages ingested in real time from Ethiopian Telegram channels and labelled in CoNLL format.',
    stack: ['Transformers', 'NER', 'Telethon', 'Python'],
    repo: 'https://github.com/Ofgeha-Gelana/Amharic-NER-for-Telegram-E-commerce-Messages',
  },
  {
    title: 'Human-in-the-loop spam classifier',
    category: 'Machine learning',
    year: '2025',
    description:
      'Active learning in practice: the model asks for human labels on uncertain predictions, updates from corrections, and tracks HITL performance against a baseline.',
    stack: ['scikit-learn', 'Active learning', 'Streamlit'],
    repo: 'https://github.com/Ofgeha-Gelana/HITL-Spam-Classifier',
    writeup: 'https://medium.com/@ofgehagelana2019/what-is-human-in-the-loop-hitl-0bd1a3d2d889',
  },

  {
    title: 'AI Study Genie',
    category: 'LLM systems',
    year: '2025',
    description:
      'A learning assistant that generates study material and quizzes tailored to a learner’s chosen style, level and pace.',
    stack: ['Gemini API', 'Streamlit', 'Python'],
    repo: 'https://github.com/Ofgeha-Gelana/Generative-AI-App',
    live: 'https://generative-ai-app.streamlit.app/',
    writeup:
      'https://medium.com/@ofgehagelana2019/building-an-ai-powered-personalized-learning-assistant-with-streamlit-and-gemini-api-cebe9d9f19dc',
  },
  {
    title: 'Medical data warehouse',
    category: 'Data engineering',
    year: '2025',
    description:
      'An end-to-end warehouse for Ethiopian medical-business data: Telegram scraping, DBT transformations, YOLOv5 object detection on images, PostgreSQL storage and a FastAPI query layer.',
    stack: ['DBT', 'PostgreSQL', 'YOLOv5', 'FastAPI'],
    repo: 'https://github.com/Ofgeha-Gelana/Ethiopian-Medical-Data-Warehouse',
  },
  {
    title: 'Logic-based inference in MeTTa',
    category: 'Reasoning',
    year: '2025',
    description:
      'Forward- and backward-chaining inference over knowledge and rule bases in MeTTa, the language of the OpenCog Hyperon framework.',
    stack: ['MeTTa', 'Symbolic AI'],
    repo: 'https://github.com/Ofgeha-Gelana/MettaLogic',
  },
  {
    title: 'Credit scoring service',
    category: 'Machine learning',
    year: '2025',
    description:
      'A buy-now-pay-later risk model using RFMS features with Weight-of-Evidence binning, gradient boosting, and a Dockerised FastAPI prediction service.',
    stack: ['scikit-learn', 'WoE', 'FastAPI', 'Docker'],
    repo: 'https://github.com/Ofgeha-Gelana/CreditScoreAI',
  },
  {
    title: 'Document search engine',
    category: 'LLM systems',
    year: '2025',
    description:
      'Search across PDFs, Word files and web pages using lemmatised TF-IDF vectors and cosine similarity.',
    stack: ['NLP', 'TF-IDF', 'Streamlit'],
    repo: 'https://github.com/Ofgeha-Gelana/search-system-core',
    live: 'https://search-system-core.streamlit.app/',
  },
];

/** Earlier analytics work, kept from the previous portfolio. */
export const archive: Build[] = [
  {
    title: 'Financial news sentiment & stock movement',
    category: 'Machine learning',
    year: '2024',
    description: 'Correlating news sentiment with stock price movements.',
    stack: ['NLP', 'Pandas'],
    repo: 'https://github.com/Ofgeha-Gelana/Nova-Financial-Solution',
  },
  {
    title: 'Rossmann sales forecasting',
    category: 'Machine learning',
    year: '2024',
    description: 'Store-level sales prediction.',
    stack: ['scikit-learn'],
    repo: 'https://github.com/Ofgeha-Gelana/rossmann-sales-prediction-ml',
  },
  {
    title: 'Solar radiation analysis dashboard',
    category: 'Data engineering',
    year: '2024',
    description: 'Exploring solar radiation and environmental data.',
    stack: ['Streamlit'],
    repo: 'https://github.com/Ofgeha-Gelana/MoonLight-Energy-Solutions',
  },
  {
    title: 'Determinants of housing prices in Mexico',
    category: 'Machine learning',
    year: '2024',
    description: 'Location versus size across 21,000+ property listings.',
    stack: ['Regression', 'Geospatial'],
    repo: 'https://github.com/Ofgeha-Gelana/Housing-in-Mexico',
  },
];

/* ------------------------------------------------------------------ */
/* Research interests                                                  */
/* ------------------------------------------------------------------ */

export type Interest = { area: string; question: string; evidence?: Link };

export const interests: Interest[] = [
  {
    area: 'Large language models',
    question: 'How attention, context and memory shape what a model can reason about.',
    evidence: {
      label: 'On transformers',
      href: 'https://medium.com/@ofgehagelana2019/understanding-the-transformer-architecture-be21e16e7f96',
    },
  },
  {
    area: 'Agents & tool use',
    question: 'Interleaving reasoning with action, and knowing when an agent should stop and ask.',
    evidence: { label: 'On ReAct', href: 'https://medium.com/@ofgehagelana2019/react-fed1fc167694' },
  },
  {
    area: 'ML systems & MLOps',
    question: 'What it takes to keep a model useful after deployment: reproducibility, monitoring and cost.',
    evidence: { label: 'Fraud detection service', href: '#fraud-detection' },
  },
  {
    area: 'Model evaluation & tuning',
    question: 'Principled search over hyperparameters, and explanations that hold up to scrutiny.',
    evidence: {
      label: 'On Bayesian optimisation',
      href: 'https://medium.com/@ofgehagelana2019/the-paper-practical-bayesian-optimization-of-machine-learning-algorithms-by-jasper-snoek-hugo-8819a2981f79',
    },
  },
  {
    area: 'Human-in-the-loop learning',
    question: 'Where human judgement adds the most information per label.',
    evidence: {
      label: 'On HITL',
      href: 'https://medium.com/@ofgehagelana2019/what-is-human-in-the-loop-hitl-0bd1a3d2d889',
    },
  },
  {
    area: 'Neuro-symbolic reasoning',
    question: 'Combining learned representations with explicit logic, as explored in MeTTa.',
    evidence: { label: 'MettaLogic', href: 'https://github.com/Ofgeha-Gelana/MettaLogic' },
  },
  {
    area: 'AI for science',
    question: 'How to make machine-generated hypotheses traceable, reproducible and worth testing.',
    evidence: { label: 'Research infrastructure', href: '#research-infra' },
  },
  {
    area: 'Brain-inspired learning',
    question: 'Predictive coding and local, Hebbian-style learning as alternatives to backpropagation.',
  },
];

/* ------------------------------------------------------------------ */
/* Stack: only tools evidenced by the CV, repositories or PRs          */
/* ------------------------------------------------------------------ */

export const stack: { group: string; items: string[] }[] = [
  { group: 'Languages', items: ['Python', 'SQL', 'TypeScript', 'Java'] },
  {
    group: 'Machine learning',
    items: ['PyTorch', 'TensorFlow', 'scikit-learn', 'Hugging Face Transformers', 'SHAP / LIME', 'YOLOv5'],
  },
  {
    group: 'Generative AI & LLMs',
    items: ['Gemini API', 'OpenAI & Anthropic APIs', 'ChromaDB', 'SentenceTransformers', 'CrewAI', 'Streamlit'],
  },
  {
    group: 'MLOps & backend',
    items: ['Docker & Compose', 'CI/CD', 'FastAPI', 'Flask', 'Django', 'Model serving', 'MinIO'],
  },
  {
    group: 'Data engineering',
    items: ['ETL pipelines', 'PostgreSQL', 'MongoDB', 'Redis', 'DBT', 'Nextflow', 'Pandas & NumPy'],
  },
  { group: 'Tooling', items: ['Git', 'Linux', 'Jupyter'] },
];

/* ------------------------------------------------------------------ */
/* Writing: add new entries at the top                                 */
/* ------------------------------------------------------------------ */

export type Post = {
  title: string;
  date: string; // ISO yyyy-mm-dd
  kind: 'Article' | 'Paper notes' | 'Project write-up' | 'LinkedIn';
  topic: string;
  href: string;
};

export const writing: Post[] = [
  {
    title: 'What is Human-in-the-Loop (HITL)?',
    date: '2025-04-30',
    kind: 'Article',
    topic: 'Machine learning',
    href: 'https://medium.com/@ofgehagelana2019/what-is-human-in-the-loop-hitl-0bd1a3d2d889',
  },
  {
    title: 'Understanding the Transformer Architecture',
    date: '2025-04-16',
    kind: 'Article',
    topic: 'LLMs',
    href: 'https://medium.com/@ofgehagelana2019/understanding-the-transformer-architecture-be21e16e7f96',
  },
  {
    title: 'How Entanglement and Superposition Enable Quantum Speedups',
    date: '2025-04-09',
    kind: 'Article',
    topic: 'Quantum computing',
    href: 'https://medium.com/@ofgehagelana2019/how-entanglement-and-superposition-enable-quantum-speedups-09e7028671cf',
  },
  {
    title: 'ReAct: Reasoning and Acting in Language Models',
    date: '2025-03-12',
    kind: 'Article',
    topic: 'Agents',
    href: 'https://medium.com/@ofgehagelana2019/react-fed1fc167694',
  },
  {
    title: 'Practical Bayesian Optimization of Machine Learning Algorithms',
    date: '2025-02-24',
    kind: 'Paper notes',
    topic: 'Model tuning',
    href: 'https://medium.com/@ofgehagelana2019/the-paper-practical-bayesian-optimization-of-machine-learning-algorithms-by-jasper-snoek-hugo-8819a2981f79',
  },
  {
    title: 'Fraud Detection for E-commerce and Banking Transactions',
    date: '2025-02-07',
    kind: 'Project write-up',
    topic: 'Explainable ML',
    href: 'https://medium.com/@ofgehagelana2019/fraud-detection-system-for-e-commerce-and-banking-transactions-2d37cf020d51',
  },
  {
    title: 'How AI Study Genie Works: An Interactive Learning Assistant',
    date: '2025-02-04',
    kind: 'Project write-up',
    topic: 'LLM apps',
    href: 'https://medium.com/@ofgehagelana2019/building-an-ai-powered-personalized-learning-assistant-with-streamlit-and-gemini-api-cebe9d9f19dc',
  },
];

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Projects' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const;
