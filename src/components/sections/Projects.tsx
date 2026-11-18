import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Github } from 'lucide-react';
import { archive, builds, featured, type Build, type FeaturedProject } from '../../content/site';
import { ProjectFigure } from '../figures/ProjectFigure';
import { Reveal } from '../ui/Reveal';
import { Em, Section } from '../ui/Section';

function FeaturedCard({ p }: { p: FeaturedProject }) {
  return (
    <article
      aria-labelledby={`${p.id}-title`}
      className="group relative overflow-hidden rounded-[1.75rem] border hairline bg-surface/60 transition-[border-color,background-color] duration-500 hover:border-fg/20 hover:bg-surface"
    >
      <figure
        className="border-b hairline bg-bg/40 px-4 py-6 sm:px-9 sm:py-8"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--line) / calc(var(--line-alpha) * 1.4)) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      >
        <div className="mb-3 flex items-center justify-between px-2 sm:px-0">
          <span className="eyebrow">fig. {Number(p.index)}</span>
          <span className="eyebrow">schematic</span>
        </div>
        <div className="mx-auto max-w-[600px]">
          <ProjectFigure kind={p.figure} />
        </div>
      </figure>

      <div className="grid gap-10 p-6 sm:p-9 md:grid-cols-2 md:gap-12">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-accent">{p.index}</span>
            <span className="eyebrow">{p.context}</span>
          </div>
          <h3 id={`${p.id}-title`} className="mt-5 text-balance text-2xl font-medium tracking-tight sm:text-[1.75rem]">
            {p.title}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted">{p.summary}</p>

          <div className="mt-7 border-l-2 border-accent/40 pl-4">
            <p className="eyebrow">Problem</p>
            <p className="mt-2 text-pretty text-[0.95rem] leading-relaxed text-fg/85">{p.problem}</p>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="eyebrow">My contribution</p>
          <ul className="mt-4 space-y-3.5">
            {p.contributions.map((c) => (
              <li key={c.text} className="flex gap-3 text-[0.93rem] leading-relaxed text-muted">
                <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
                <span className="text-pretty">
                  {c.text}
                  {c.ref ? (
                    <>
                      {' '}
                      <a
                        href={c.ref.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="whitespace-nowrap font-mono text-xs text-fg/70 underline decoration-fg/20 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                        aria-label={`Pull request ${c.ref.label}`}
                      >
                        PR {c.ref.label}
                      </a>
                    </>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="mb-8 mt-8 flex flex-wrap gap-2">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 border-t hairline pt-6">
            {p.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
              >
                <Github size={15} aria-hidden />
                {l.label}
                <ArrowUpRight size={14} aria-hidden />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function BuildCard({ b }: { b: Build }) {
  const primary = b.live ?? b.repo ?? b.writeup;
  return (
    <article className="group relative flex h-full flex-col rounded-2xl border hairline bg-surface/40 p-6 transition-[border-color,background-color,transform] duration-300 hover:-translate-y-0.5 hover:border-fg/20 hover:bg-surface">
      <div className="flex items-center justify-between">
        <span className="eyebrow">{b.category}</span>
        <span className="font-mono text-xs text-subtle">{b.year}</span>
      </div>
      <h4 className="mt-4 text-lg font-medium tracking-tight">
        {primary ? (
          <a
            href={primary}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none group-focus-within:after:ring-2 group-focus-within:after:ring-accent"
          >
            {b.title}
          </a>
        ) : (
          b.title
        )}
      </h4>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{b.description}</p>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {b.stack.map((s) => (
          <span key={s} className="chip">
            {s}
          </span>
        ))}
      </div>
      <div className="relative z-10 mt-5 flex flex-wrap gap-x-4 gap-y-1 border-t hairline pt-4 text-xs">
        {b.repo && (
          <a href={b.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
            Code <ArrowUpRight size={12} aria-hidden />
          </a>
        )}
        {b.live && (
          <a href={b.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
            Live demo <ArrowUpRight size={12} aria-hidden />
          </a>
        )}
        {b.writeup && (
          <a href={b.writeup} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted transition-colors hover:text-fg">
            Write-up <ArrowUpRight size={12} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}

const filters = ['All', 'LLM systems', 'Machine learning', 'Data engineering', 'Reasoning'] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [showArchive, setShowArchive] = useState(false);
  const visible = filter === 'All' ? builds : builds.filter((b) => b.category === filter);

  return (
    <Section
      id="work"
      index="03"
      label="Selected work"
      title={
        <>
          Systems built for research, <Em>engineered to be relied on.</Em>
        </>
      }
      intro="Three pieces of research infrastructure I work on, each linked to the pull requests behind it, followed by independent builds where I take an idea apart and put it back together."
    >
      <div className="space-y-6 sm:space-y-8">
        {featured.map((p) => (
          <Reveal key={p.id}>
            <FeaturedCard p={p} />
          </Reveal>
        ))}
      </div>

      <div className="mt-24">
        <Reveal className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h3 className="text-2xl font-medium tracking-tight">Independent builds</h3>
            <p className="mt-2 max-w-md text-sm text-muted">Experiments in LLM engineering, applied ML and reasoning.</p>
          </div>
          <div role="group" aria-label="Filter builds by category" className="-mx-1 flex min-w-0 gap-1 overflow-x-auto px-1 pb-1">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setFilter(f)}
                aria-pressed={filter === f}
                className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                  filter === f ? 'border-fg bg-fg text-bg' : 'hairline-strong text-muted hover:text-fg'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.ul layout className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((b) => (
              <motion.li
                key={b.title}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
              >
                <BuildCard b={b} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        <div className="mt-10">
          <button
            type="button"
            onClick={() => setShowArchive((s) => !s)}
            aria-expanded={showArchive}
            aria-controls="archive-list"
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
          >
            <ChevronDown size={16} aria-hidden className={`transition-transform duration-300 ${showArchive ? 'rotate-180' : ''}`} />
            Earlier analytics work ({archive.length})
          </button>
          <AnimatePresence initial={false}>
            {showArchive && (
              <motion.ul
                id="archive-list"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-4 divide-y divide-hairline overflow-hidden border-y hairline"
              >
                {archive.map((a) => (
                  <li key={a.title}>
                    <a
                      href={a.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group grid grid-cols-[3rem_1fr_auto] items-baseline gap-4 py-4 text-sm transition-colors hover:bg-fg/[0.02] sm:grid-cols-[4rem_1fr_1fr_auto]"
                    >
                      <span className="font-mono text-xs text-subtle">{a.year}</span>
                      <span className="text-fg/90">{a.title}</span>
                      <span className="hidden text-muted sm:block">{a.description}</span>
                      <ArrowUpRight size={14} aria-hidden className="text-subtle transition-colors group-hover:text-fg" />
                    </a>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
