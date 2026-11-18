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

export type Link = { label: string; href: string };

/** Public address of the site. Set VITE_SITE_URL in `.env` (no trailing slash). */
export const SITE_URL: string = import.meta.env.VITE_SITE_URL;

export const profile = {
  name: 'Ofgeha Gelana',
  role: 'AI/ML Engineer & Researcher',
  location: 'Addis Ababa, Ethiopia',
  email: 'ofgehagelana2019@gmail.com', // from the CV
  cv: 'Ofgeha-Gelana-CV.pdf', // in /public
  headline: ['Building intelligent systems.', 'Exploring the science behind AI.'],
  intro:
    'I’m an AI/ML engineer and researcher. I design, build and deploy machine-learning systems end to end, from data pipelines and model training to APIs in production, with a growing focus on LLMs and generative AI. My work has spanned AI research, banking and the life sciences.',
  current: {
    label: 'Currently',
    text: 'AI/ML Engineer at Rejuve Bio · AI Researcher at SingularityNET',
  },
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
    { label: 'Focus', value: 'MLOps · Scalable systems · Generative AI' },
    { label: 'Languages', value: 'English · Amharic · Afaan Oromo' },
  ],
};

export type Experience = {
  org: string;
  orgNote?: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack?: string[];
  link?: Link;
  review?: string;
};

export const experience: Experience[] = [
  {
    org: 'Rejuve Bio',
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
    role: 'AI/ML Engineer & Backend Developer',
    period: 'Sep 2024 — Jun 2025',
    summary: 'Machine learning for predictive analytics in banking operations, from model design to production backend services.',
    highlights: [
      'Designed and deployed machine-learning models for predictive analytics in production systems.',
      'Built backend services that integrate ML models into operational workflows.',
      'Automated model-driven decision steps to improve system performance.',
      'Implemented regression, tree-based and neural-network models.',
    ],
    stack: ['Python', 'scikit-learn', 'Model serving', 'REST APIs'],
    review: 'Stack chips are inferred from the resume bullets; adjust to the exact tools you used.',
  },
  {
    org: 'Ethiopian Artificial Intelligence Institute',
    role: 'AI Researcher & Developer',
    period: '2023 — Jul 2024',
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
    role: 'Python Django Developer · Intern',
    period: '2022 — 2023',
    summary: 'Backend engineering on Django applications in an Agile team.',
    highlights: [
      'Designed backend systems with Django and RESTful APIs, including database optimisation.',
      'Contributed to large Django applications and worked across functions in an Agile process.',
    ],
    stack: ['Python', 'Django', 'REST'],
  },
  {
    org: 'Ethio Telecom',
    role: 'Cybersecurity Engineer · Intern',
    period: '2021 — 2022',
    summary: 'Security operations for network infrastructure.',
    highlights: [
      'Implemented and managed security controls protecting networks and systems.',
      'Monitored for security incidents and supported incident response.',
    ],
  },
];

export type Education = { school: string; credential: string; period?: string; note?: string };

export const education: Education[] = [
  {
    school: 'Adama Science and Technology University',
    credential: 'BSc, Computer Science and Engineering',
    period: '2019 — 2023',
    note: 'GPA 3.8 / 4.0',
  },
  { school: '10 Academy', credential: 'Kifiya AI Mastery training program' },
  { school: 'WorldQuant University', credential: 'Graduate Certificate, Applied Data Science Lab' },
];

export const certifications = {
  issuer: 'Coursera',
  items: [
    'Machine Learning Specialization',
    'Deep Learning Specialization',
    'Mathematics for Machine Learning and Data Science Specialization',
    'Natural Language Processing Specialization',
  ],
};

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
  problem: string;
  contributions: Contribution[];
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
    id: 'fraud-detection',
    index: '01',
    context: 'Independent project · Applied ML & MLOps',
    title: 'Explainable fraud detection service',
    summary:
      'An end-to-end fraud-detection system for e-commerce and banking transactions: feature engineering, model selection, per-prediction explanations, and a containerised API with a monitoring dashboard.',
    problem:
      'Fraud is rare and costly. A model that flags transactions also has to explain each decision so analysts can trust and act on it, and it has to run as a service, not as a notebook.',
    contributions: [
      { text: 'Merged transaction data with IP-to-country mapping and engineered geolocation and transaction-pattern features.' },
      { text: 'Trained and compared several model families, then interpreted them globally and per prediction with SHAP and LIME.' },
      { text: 'Served the model through a Flask API in Docker, with logging for monitoring.' },
      { text: 'Built a Dash dashboard that turns predictions into fraud insights for non-technical users.' },
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
  {
    id: 'llm-memory',
    index: '02',
    context: 'Independent project · Generative AI',
    title: 'Context-memory LLM assistant',
    summary:
      'A Gemini-powered chat assistant with two memory strategies: Redis for fast session history, and ChromaDB vector search for semantic recall of earlier conversations.',
    problem:
      'LLM calls are stateless and billed per token. An assistant needs memory that is fast, relevant to the current question, and doesn’t pay twice for answers it has already given.',
    contributions: [
      { text: 'Session memory in Redis for immediate recall of the full conversation.' },
      { text: 'Semantic memory with SentenceTransformers embeddings in ChromaDB, retrieving only the context relevant to the new question.' },
      { text: 'Checks conversation history before calling the model, avoiding redundant Gemini calls.' },
      { text: 'Two Streamlit apps that make the trade-offs between the strategies easy to compare.' },
    ],
    stack: ['Python', 'Gemini', 'Redis', 'ChromaDB', 'SentenceTransformers', 'Streamlit'],
    links: [{ label: 'Repository', href: 'https://github.com/Ofgeha-Gelana/Ai-chatbot-context' }],
    figure: 'memory',
  },
  {
    id: 'research-infra',
    index: '03',
    context: 'Rejuve Bio · ML infrastructure',
    title: 'Data infrastructure for AI-driven hypothesis generation',
    summary:
      'Reliability and performance work on a research system that turns genetic association data into evidence-backed hypotheses, summarised by LLMs.',
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
    stack: ['Python', 'PostgreSQL', 'MinIO', 'Docker Compose', 'Nextflow', 'Open Targets'],
    links: [
      { label: 'Repository', href: 'https://github.com/rejuve-bio/hypothesis-generation-demo' },
      { label: 'Harmoniser', href: 'https://github.com/rejuve-bio/gwas-sumstats-harmoniser' },
    ],
    figure: 'opentargets',
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
    area: 'AI for scientific discovery',
    question: 'How do we make machine-generated hypotheses traceable, reproducible and worth testing?',
    evidence: { label: 'Hypothesis generation', href: '#work' },
  },
  {
    area: 'Statistical genetics',
    question: 'Fine-mapping, heritability partitioning and the data engineering that makes them trustworthy.',
    evidence: { label: 'GWAS harmonisation', href: '#work' },
  },
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
    area: 'Human-in-the-loop learning',
    question: 'Where human judgement adds the most information per label.',
    evidence: {
      label: 'On HITL',
      href: 'https://medium.com/@ofgehagelana2019/what-is-human-in-the-loop-hitl-0bd1a3d2d889',
    },
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
    area: 'Neuro-symbolic reasoning',
    question: 'Combining learned representations with explicit logic, as explored in MeTTa.',
    evidence: { label: 'MettaLogic', href: 'https://github.com/Ofgeha-Gelana/MettaLogic' },
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
    group: 'LLM engineering',
    items: ['Gemini API', 'OpenAI & Anthropic APIs', 'ChromaDB', 'SentenceTransformers', 'CrewAI', 'Streamlit'],
  },
  {
    group: 'Backend & infrastructure',
    items: ['Flask', 'FastAPI', 'Django', 'Docker Compose', 'PostgreSQL', 'MongoDB', 'Redis', 'MinIO'],
  },
  {
    group: 'Scientific computing',
    items: ['Nextflow', 'Galaxy', 'GWASLab', 'SuSiE', 'LDSC', 'Open Targets', 'CellxGene Census', 'BioCypher'],
  },
  { group: 'Data & tooling', items: ['Pandas', 'NumPy', 'DBT', 'Jupyter', 'Git', 'Linux'] },
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
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const;
