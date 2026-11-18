/**
 * All portfolio content lives here. Components only render it.
 *
 * Sources used (nothing else was assumed):
 *  - public/Ofgeha-Gelana-CV.pdf
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
  cv: 'Ofgeha-Gelana-CV.pdf', // in /public. review: the CV still says "Python Django developer"; refresh it.
  headline: ['Building intelligent systems.', 'Exploring the science behind AI.'],
  intro:
    'I’m an AI/ML engineer and researcher. Most of my time goes into research infrastructure for AI-driven hypothesis generation in human genetics: the pipelines that take GWAS data through harmonisation, fine-mapping and enrichment, and hand the evidence to language models that propose testable biological hypotheses.',
  current: {
    label: 'Currently',
    text: 'Integrating Open Targets into a hypothesis-generation pipeline at Rejuve Bio',
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
    'Today that means building the plumbing behind AI-assisted research in statistical genetics: harmonising GWAS summary statistics, reusing Open Targets fine-mapped credible sets, removing pipeline bottlenecks, and recording provenance so every generated hypothesis can be traced back to the exact data release it came from.',
    'Alongside that I build smaller systems to understand ideas properly: context-aware LLM applications, human-in-the-loop learning, symbolic reasoning in MeTTa, and model explainability. I write about what I learn, from transformer internals to agent patterns like ReAct.',
  ],
  principles: [
    {
      title: 'Evidence before output',
      body: 'A result is only as useful as the provenance behind it. I record what data, release and method produced each answer.',
    },
    {
      title: 'Reuse what is already known',
      body: 'If a trusted upstream source has already done the computation, use it. Spend compute where it adds information.',
    },
    {
      title: 'Understand, then scale',
      body: 'I rebuild ideas from first principles before I rely on them, and then engineer them to run reliably.',
    },
  ],
  facts: [
    { label: 'Based in', value: 'Addis Ababa, Ethiopia' },
    { label: 'Education', value: 'BSc Computer Science & Engineering, ASTU' },
    { label: 'Focus', value: 'ML systems · LLMs · Statistical genetics' },
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
      'Engineering the data and compute layer of an AI system that generates hypotheses about how genetic variants affect phenotypes, combining GWAS, fine-mapping, enrichment analysis and LLM summarisation.',
    highlights: [
      'Integrated Open Targets so the pipeline reuses published fine-mapped credible sets and pre-harmonised studies, skipping SuSiE fine-mapping and Nextflow harmonisation when upstream results already exist.',
      'Replaced fragile, profile-gated loaders with a bootstrap service that loads a pinned Open Targets release on every deploy, before workers start.',
      'Added per-analysis provenance that records the Open Targets release each result was built on.',
      'Removed a pipeline bottleneck by caching CellxGene Census co-expression matrices per tissue instead of re-downloading them for every gene.',
      'Parallelised the GWAS summary-statistics harmoniser per chromosome, and built GWASLab harmonisation, liftover and rsID-assignment workflows on hg38 references.',
      'Moved the API layer from global mutable state to a dependency-injection container to make it safer to start and easier to test.',
    ],
    stack: ['Python', 'Flask', 'PostgreSQL', 'MongoDB', 'MinIO', 'Docker Compose', 'Nextflow', 'Galaxy'],
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
    org: 'Ethiopian Artificial Intelligence Institute',
    role: 'AI Researcher & Developer',
    period: '2023 — Present',
    review: 'Dates from the CV. If this role has ended, set the end year; add public projects or outcomes if you can.',
    summary:
      'Research and development of AI software, from model work to integrating machine-learning models into production applications.',
    highlights: [
      'Design and implement AI software, integrating ML models into applications.',
      'Develop AI products with TensorFlow and PyTorch.',
      'Deploy ML models to production with attention to reliability and scalability.',
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

export const education = {
  school: 'Adama Science and Technology University',
  degree: 'BSc, Computer Science and Engineering',
  period: '2019 — 2023',
  note: 'GPA 3.8 / 4.0',
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type FigureKind = 'hypothesis' | 'opentargets' | 'harmonise';

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
    id: 'hypothesis-generation',
    index: '01',
    context: 'Rejuve Bio · Research system',
    title: 'AI-powered hypothesis generation',
    summary:
      'A system that proposes causal hypotheses linking genetic variants to phenotypes. It combines GWAS data, fine-mapping, enrichment analysis and a knowledge base, then uses a large language model to summarise the evidence into a hypothesis.',
    problem:
      'Moving from a GWAS association to a plausible mechanism means chaining many slow, heterogeneous tools. A useful hypothesis has to be both fast to produce and traceable to the evidence behind it.',
    contributions: [
      {
        text: 'Found the remaining bottleneck in enrichment, a full CellxGene Census download per gene, and cached co-expression matrices per tissue.',
        ref: pr('hypothesis-generation-demo', 89),
      },
      {
        text: 'Replaced a global dependency pattern with a dependency-injection container using thread-safe singletons.',
        ref: pr('hypothesis-generation-demo', 66),
      },
      {
        text: 'Extracted shared GWAS download and caching helpers so pipeline stages stop duplicating logic.',
        ref: pr('hypothesis-generation-demo', 114),
      },
    ],
    stack: ['Python', 'Flask', 'MongoDB', 'LLMs', 'CellxGene Census', 'Docker'],
    links: [
      { label: 'Repository', href: 'https://github.com/rejuve-bio/hypothesis-generation-demo' },
    ],
    figure: 'hypothesis',
  },
  {
    id: 'opentargets',
    index: '02',
    context: 'Rejuve Bio · Data integration',
    title: 'Open Targets integration & provenance',
    summary:
      'A fast path that lets the pipeline reuse Open Targets’ published credible sets and pre-harmonised studies, a reliable loader for that data, and a record of exactly which release every analysis used.',
    problem:
      'The pipeline always re-ran harmonisation and SuSiE fine-mapping, even for studies Open Targets had already processed. That wasted compute and could disagree with canonical results. Once a new release was deployed, nothing recorded which data older results were built on.',
    contributions: [
      {
        text: 'Query Open Targets credible sets over Postgres and fall back to SuSiE only when none exist.',
        ref: pr('hypothesis-generation-demo', 78),
      },
      {
        text: 'Skip the Nextflow harmoniser for studies confirmed in Open Targets’ study index. The change is purely additive, and downstream validation still runs.',
        ref: pr('hypothesis-generation-demo', 84),
      },
      {
        text: 'A single bootstrap service loads a pinned release on every deploy, restores validated snapshots from MinIO, and gates workers on success.',
        ref: pr('hypothesis-generation-demo', 99),
      },
      {
        text: 'Each project records its Open Targets study, release and load time, exposed through the API.',
        ref: pr('hypothesis-generation-demo', 105),
      },
      {
        text: 'A content-addressed MinIO store for precomputed LDSC results, now the slowest remaining step (in progress).',
        ref: pr('hypothesis-generation-demo', 115),
      },
    ],
    stack: ['Open Targets', 'PostgreSQL', 'MinIO', 'SuSiE', 'LDSC', 'Docker Compose'],
    links: [
      { label: 'Repository', href: 'https://github.com/rejuve-bio/hypothesis-generation-demo' },
    ],
    figure: 'opentargets',
  },
  {
    id: 'gwas-harmonisation',
    index: '03',
    context: 'Rejuve Bio · Statistical genetics',
    title: 'GWAS summary-statistics harmonisation',
    summary:
      'Workflows that bring GWAS summary statistics from different studies onto a common genome build, strand and allele orientation, so downstream fine-mapping and LDSC can trust their inputs.',
    problem:
      'Summary statistics arrive on different builds and conventions. Harmonisation is a prerequisite for everything downstream, and the existing harmoniser processed every chromosome sequentially on one core.',
    contributions: [
      {
        text: 'Restructured the harmoniser so each chromosome runs as an independent, parallel job, and optimised reference matching.',
        ref: pr('gwas-sumstats-harmoniser', 5),
      },
      {
        text: 'Built a GWASLab harmonisation workflow for Galaxy, with tests.',
        ref: pr('galaxy-gwas-tools', 94),
      },
      {
        text: 'Added liftover and rsID assignment against local hg38 population references, and fixed invalid base-pair edge cases.',
        ref: pr('galaxy-gwas-tools', 37),
      },
    ],
    stack: ['Python', 'Nextflow', 'Galaxy', 'GWASLab', 'hg38'],
    links: [
      { label: 'Harmoniser', href: 'https://github.com/rejuve-bio/gwas-sumstats-harmoniser' },
      { label: 'Galaxy tools', href: 'https://github.com/rejuve-bio/galaxy-gwas-tools' },
    ],
    figure: 'harmonise',
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
    title: 'Context-memory LLM chat',
    category: 'LLM systems',
    year: '2025',
    description:
      'Two approaches to conversational memory compared side by side: Redis for session persistence and ChromaDB vector search for semantic recall, with history checks to avoid redundant model calls.',
    stack: ['Gemini', 'ChromaDB', 'Redis', 'SentenceTransformers'],
    repo: 'https://github.com/Ofgeha-Gelana/Ai-chatbot-context',
  },
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
    title: 'Explainable fraud detection',
    category: 'Machine learning',
    year: '2025',
    description:
      'Fraud detection for e-commerce and banking transactions with geolocation features, SHAP and LIME explanations, a Dockerised Flask API with logging, and a Dash dashboard.',
    stack: ['scikit-learn', 'SHAP', 'LIME', 'Flask', 'Docker'],
    repo: 'https://github.com/Ofgeha-Gelana/FraudDetect-AI',
    writeup:
      'https://medium.com/@ofgehagelana2019/fraud-detection-system-for-e-commerce-and-banking-transactions-2d37cf020d51',
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
