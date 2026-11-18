import { ArrowUpRight } from 'lucide-react';
import { experience } from '../../content/site';
import { Details } from '../ui/Details';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="divide-y divide-hairline border-y hairline">
        {experience.map((job) => (
          <Reveal as="li" key={job.org} className="py-6">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <div>
                <h3 className="font-medium">{job.org}</h3>
                <p className="text-sm text-muted">{job.role}</p>
              </div>
              <p className="shrink-0 text-sm tabular-nums text-subtle">{job.period}</p>
            </div>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">{job.summary}</p>

            <Details className="mt-3">
              <ul className="space-y-2">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-[0.65em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
                    <span className="text-pretty">{h}</span>
                  </li>
                ))}
              </ul>
              {(job.stack || job.link) && (
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {job.stack?.map((s) => (
                    <span key={s} className="chip">
                      {s}
                    </span>
                  ))}
                  {job.link ? (
                    <a
                      href={job.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-fg"
                    >
                      {job.link.label}
                      <ArrowUpRight size={12} aria-hidden />
                    </a>
                  ) : null}
                </div>
              )}
            </Details>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
