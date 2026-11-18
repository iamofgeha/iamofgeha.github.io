import { ArrowUpRight } from 'lucide-react';
import { interests, stack } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Em, Section } from '../ui/Section';

export function Research() {
  return (
    <Section
      id="research"
      index="04"
      label="Research & stack"
      title={
        <>
          Questions I keep <Em>returning to.</Em>
        </>
      }
      intro="These are interests I'm actively studying, not claims of expertise. Where I've built or written something about one, it's linked."
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/[0.06] sm:grid-cols-2">
        {interests.map((it, i) => {
          const external = it.evidence?.href.startsWith('http');
          return (
            <Reveal
              as="li"
              key={it.area}
              delay={(i % 2) * 0.05}
              className="group flex h-full flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:p-7"
            >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="text-base font-medium tracking-tight">{it.area}</h3>
                </div>
                <p className="mt-3 flex-1 text-pretty pl-8 font-serif text-[1.2rem] italic leading-snug text-muted">
                  {it.question}
                </p>
                {it.evidence ? (
                  <a
                    href={it.evidence.href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="mt-5 inline-flex items-center gap-1 self-start pl-8 font-mono text-xs text-subtle transition-colors hover:text-accent"
                  >
                    {it.evidence.label}
                    <ArrowUpRight size={12} aria-hidden />
                  </a>
                ) : null}
            </Reveal>
          );
        })}
      </ul>

      <div className="mt-24">
        <Reveal>
          <h3 className="text-2xl font-medium tracking-tight">Technical stack</h3>
          <p className="mt-2 max-w-md text-sm text-muted">The tools I've used in shipped work and public repositories.</p>
        </Reveal>
        <dl className="mt-8 divide-y divide-hairline border-y hairline">
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.03}>
              <div className="grid gap-3 py-5 sm:grid-cols-12 sm:gap-6">
                <dt className="eyebrow pt-1.5 sm:col-span-3">{g.group}</dt>
                <dd className="flex flex-wrap gap-x-5 gap-y-2 sm:col-span-9">
                  {g.items.map((item) => (
                    <span key={item} className="text-[0.95rem] text-fg/85">
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
