import { ArrowUpRight, Brain, Database, MessagesSquare, Network } from 'lucide-react';
import { archive, builds, featured, type Build, type FeaturedProject, type Link } from '../../content/site';
import { ProjectFigure } from '../figures/ProjectFigure';
import { Details } from '../ui/Details';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

function ExtLink({ link }: { link: Link }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
    >
      {link.label}
      <ArrowUpRight size={13} aria-hidden />
    </a>
  );
}

function FeaturedCard({ p }: { p: FeaturedProject }) {
  return (
    <article
      aria-labelledby={`${p.id}-title`}
      className="overflow-hidden rounded-xl border hairline bg-surface/40 transition-colors hover:border-fg/20"
    >
      <figure
        className="border-b hairline bg-bg/50 px-5 py-5 sm:px-8"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--line) / calc(var(--line-alpha) * 1.3)) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="mx-auto max-w-[440px]">
          <ProjectFigure kind={p.figure} />
        </div>
      </figure>

      <div className="p-6 sm:p-7">
        <p className="text-xs text-subtle">{p.context}</p>
        <h3 id={`${p.id}-title`} className="mt-2 text-lg font-semibold tracking-tight">
          {p.title}
        </h3>
        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted">{p.summary}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        <Details
          className="mt-5"
          actions={p.links.map((l) => (
            <ExtLink key={l.href} link={l} />
          ))}
        >
          <div className="space-y-5 border-t hairline pt-5">
            <div>
              <p className="text-xs font-medium text-subtle">Problem</p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">{p.problem}</p>
            </div>
            <div>
              <p className="text-xs font-medium text-subtle">What I did</p>
              <ul className="mt-2 space-y-2">
                {p.contributions.map((c) => (
                  <li key={c.text} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-[0.65em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
                    <span className="text-pretty">
                      {c.text}
                      {c.ref ? (
                        <>
                          {' '}
                          <a
                            href={c.ref.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Pull request ${c.ref.label}`}
                            className="whitespace-nowrap text-xs text-fg/70 underline decoration-fg/20 underline-offset-4 hover:text-fg"
                          >
                            PR {c.ref.label}
                          </a>
                        </>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Details>
      </div>
    </article>
  );
}

const buildLinks = (b: Build): Link[] => [
  ...(b.repo ? [{ label: 'Code', href: b.repo }] : []),
  ...(b.live ? [{ label: 'Demo', href: b.live }] : []),
  ...(b.writeup ? [{ label: 'Write-up', href: b.writeup }] : []),
];

const categoryIcon: Record<Build['category'], typeof Brain> = {
  'LLM systems': MessagesSquare,
  'Machine learning': Brain,
  'Data engineering': Database,
  Reasoning: Network,
};

function BuildCard({ b }: { b: Build }) {
  const Icon = categoryIcon[b.category];
  return (
    <article className="flex h-full flex-col rounded-xl border hairline bg-surface/40 p-5 transition-colors hover:border-fg/20">
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border hairline bg-fg/[0.05] text-muted"
        >
          <Icon size={18} strokeWidth={1.6} />
        </span>
        <div className="min-w-0">
          <h4 className="font-medium leading-snug">{b.title}</h4>
          <p className="mt-0.5 text-xs text-subtle">
            {b.category} · {b.year}
          </p>
        </div>
      </div>
      <p className="mt-3 line-clamp-3 flex-1 text-pretty text-sm leading-relaxed text-muted">{b.description}</p>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {buildLinks(b).map((l) => (
          <ExtLink key={l.href} link={l} />
        ))}
      </div>
    </article>
  );
}

function BuildRow({ b }: { b: Build }) {
  const links = buildLinks(b);
  return (
    <li className="py-5">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-medium">{b.title}</h4>
        <span className="shrink-0 text-xs tabular-nums text-subtle">{b.year}</span>
      </div>
      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{b.description}</p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {links.map((l) => (
          <ExtLink key={l.href} link={l} />
        ))}
      </div>
    </li>
  );
}

export function Projects() {
  return (
    <Section id="work" label="Projects">
      <div className="space-y-4">
        {featured.map((p) => (
          <Reveal key={p.id}>
            <FeaturedCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="text-sm font-medium text-muted">Other projects</h3>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {builds.map((b) => (
            <li key={b.title}>
              <BuildCard b={b} />
            </li>
          ))}
        </ul>
        <Details label={`Earlier analytics work (${archive.length})`} className="mt-6">
          <ul className="divide-y divide-hairline border-y hairline">
            {archive.map((b) => (
              <BuildRow key={b.title} b={b} />
            ))}
          </ul>
        </Details>
      </Reveal>
    </Section>
  );
}
