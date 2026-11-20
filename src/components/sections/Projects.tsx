import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { Brain, Database, MessagesSquare, Network } from 'lucide-react';
import { archive, builds, featured, profile, type Build, type FeaturedProject, type Link } from '../../content/site';
import { ProjectFigure } from '../figures/ProjectFigure';
import { DashList } from '../ui/DashList';
import { Details } from '../ui/Details';
import { MaybePlaceholder } from '../ui/Placeholder';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { TextLink } from '../ui/TextLink';

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <h4 className="eyebrow">{label}</h4>
      <div className="mt-2">{children}</div>
    </div>
  );
}

/** Case study: context → problem → approach → result, all visible without a click. */
function FeaturedCard({ p }: { p: FeaturedProject }) {
  return (
    <article id={p.id} aria-labelledby={`${p.id}-title`} className="card card-interactive overflow-hidden">
      <figure
        className="border-b hairline bg-bg/50 px-5 py-6 sm:px-8"
        style={{
          backgroundImage: 'radial-gradient(rgb(var(--line) / calc(var(--line-alpha) * 1.3)) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
        }}
      >
        <div className="mx-auto max-w-[560px]">
          <ProjectFigure kind={p.figure} />
        </div>
      </figure>

      <div className="p-6 sm:p-8">
        <p className="flex items-center gap-2 text-xs text-subtle">
          <span className="font-mono">{p.index}</span>
          <span aria-hidden>·</span>
          {p.context}
        </p>
        <h3 id={`${p.id}-title`} className="mt-2 text-heading font-semibold">
          {p.title}
        </h3>
        <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted">{p.summary}</p>
        <p className="mt-3 text-sm">
          <span className="text-subtle">Role: </span>
          {p.role}
        </p>

        <div className="mt-6 grid gap-6 border-t hairline pt-6 md:grid-cols-2 md:gap-8">
          <div className="space-y-6">
            <Block label="Problem">
              <p className="text-pretty text-sm leading-relaxed text-muted">{p.problem}</p>
            </Block>
            <Block label="Result">
              <DashList items={p.results.map((r) => ({ key: r, content: <MaybePlaceholder text={r} /> }))} />
            </Block>
          </div>
          <Block label="What I did">
            <DashList
              items={p.contributions.map((c) => ({
                key: c.text,
                content: (
                  <>
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
                  </>
                ),
              }))}
            />
          </Block>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t hairline pt-5">
          <div className="flex flex-wrap gap-1.5">
            {p.stack.map((s) => (
              <span key={s} className="chip">
                {s}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 sm:ml-auto">
            {p.links.map((l) => (
              <TextLink key={l.href} href={l.href}>
                {l.label}
              </TextLink>
            ))}
          </div>
        </div>
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

/** Three-line description that can be expanded when (and only when) it is cut off. */
function ClampedText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [open, setOpen] = useState(false);
  const [clamped, setClamped] = useState(false);
  const id = useId();

  useEffect(() => {
    const el = ref.current;
    if (!el || open) return;
    const check = () => setClamped(el.scrollHeight > el.clientHeight + 1);
    check();
    const ro = new ResizeObserver(check);
    ro.observe(el);
    return () => ro.disconnect();
  }, [open]);

  return (
    <div>
      <p id={id} ref={ref} className={`text-sm leading-relaxed text-muted ${open ? '' : 'line-clamp-3'}`}>
        {text}
      </p>
      {clamped || open ? (
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="link mt-1 text-xs"
        >
          {open ? 'Less' : 'More'}
        </button>
      ) : null}
    </div>
  );
}

function BuildCard({ b }: { b: Build }) {
  const Icon = categoryIcon[b.category];
  return (
    <article className="card card-interactive flex h-full flex-col p-5">
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
      <div className="mt-3 flex-1">
        <ClampedText text={b.description} />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
        {buildLinks(b).map((l) => (
          <TextLink key={l.href} href={l.href}>
            {l.label}
          </TextLink>
        ))}
      </div>
    </article>
  );
}

function BuildRow({ b }: { b: Build }) {
  return (
    <li className="py-5">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="font-medium">{b.title}</h4>
        <span className="shrink-0 text-xs tabular-nums text-subtle">{b.year}</span>
      </div>
      <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{b.description}</p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
        {buildLinks(b).map((l) => (
          <TextLink key={l.href} href={l.href}>
            {l.label}
          </TextLink>
        ))}
      </div>
    </li>
  );
}

const ALL = 'All';
const categories = [ALL, ...new Set(builds.map((b) => b.category))];

export function Projects() {
  const [filter, setFilter] = useState<string>(ALL);
  const visible = filter === ALL ? builds : builds.filter((b) => b.category === filter);

  return (
    <Section id="work" label="Projects" intro="Three case studies, then smaller builds.">
      <div className="space-y-6">
        {featured.map((p) => (
          <Reveal key={p.id}>
            <FeaturedCard p={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-sm font-medium text-muted">Other projects</h3>
          {/* Fades at the right edge hint that the chips scroll on narrow screens. */}
          <div
            role="group"
            aria-label="Filter projects by category"
            className="-mx-1 flex gap-1 overflow-x-auto px-1 [mask-image:linear-gradient(to_right,black_85%,transparent)] sm:[mask-image:none]"
          >
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setFilter(c)}
                aria-pressed={filter === c}
                className={`shrink-0 rounded-full border px-3 py-1 text-xs transition-colors ${
                  filter === c ? 'border-fg bg-fg text-bg' : 'hairline-strong text-muted hover:text-fg'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {visible.map((b) => (
            <li key={b.title}>
              <BuildCard b={b} />
            </li>
          ))}
        </ul>
        <Details
          label={`Earlier analytics work (${archive.length})`}
          className="mt-6"
          actions={<TextLink href={profile.social.github}>More on GitHub</TextLink>}
        >
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
