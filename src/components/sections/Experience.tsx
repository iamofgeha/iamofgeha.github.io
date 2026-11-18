import { ArrowUpRight, Award, GraduationCap } from 'lucide-react';
import { certifications, education, experience } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Em, Section } from '../ui/Section';

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title={
        <>
          From backend systems to <Em>AI research infrastructure.</Em>
        </>
      }
      intro="Roles in reverse order. The most recent work is the most specific: these are changes I shipped, linked to the code where it is public."
    >
      <ol className="relative">
        {experience.map((job, i) => (
          <li key={job.org} className="group relative grid gap-4 border-t hairline py-10 first:border-t-0 first:pt-0 md:grid-cols-12 md:gap-8">
            <Reveal className="md:col-span-4">
              <p className="font-mono text-xs text-subtle">{job.period}</p>
              <h3 className="mt-3 text-xl font-medium tracking-tight">{job.org}</h3>
              {job.orgNote ? <p className="mt-1 text-sm text-subtle">{job.orgNote}</p> : null}
              <p className="mt-3 text-sm text-accent">{job.role}</p>
            </Reveal>

            <Reveal delay={0.05} className="md:col-span-8">
              <p className={`text-pretty leading-relaxed ${i === 0 ? 'text-fg' : 'text-muted'}`}>{job.summary}</p>
              <ul className="mt-5 space-y-3">
                {job.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[0.95rem] leading-relaxed text-muted">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
                    <span className="text-pretty">{h}</span>
                  </li>
                ))}
              </ul>
              {(job.stack || job.link) && (
                <div className="mt-6 flex flex-wrap items-center gap-2">
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
                      className="ml-1 inline-flex items-center gap-1 font-mono text-xs text-muted transition-colors hover:text-fg"
                    >
                      {job.link.label}
                      <ArrowUpRight size={13} aria-hidden />
                    </a>
                  ) : null}
                </div>
              )}
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal>
        <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/[0.06] md:grid-cols-2">
          <div className="bg-bg p-6 sm:p-7">
            <p className="eyebrow flex items-center gap-2">
              <GraduationCap size={14} strokeWidth={1.5} aria-hidden /> Education
            </p>
            <ul className="mt-5 space-y-5">
              {education.map((e) => (
                <li key={e.school} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-medium tracking-tight">{e.school}</p>
                    <p className="mt-1 text-sm text-muted">
                      {e.credential}
                      {e.note ? ` · ${e.note}` : ''}
                    </p>
                  </div>
                  {e.period ? <p className="shrink-0 pt-1 font-mono text-xs text-subtle">{e.period}</p> : null}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-bg p-6 sm:p-7">
            <p className="eyebrow flex items-center gap-2">
              <Award size={14} strokeWidth={1.5} aria-hidden /> Certifications
            </p>
            <p className="mt-5 text-sm text-subtle">{certifications.issuer}</p>
            <ul className="mt-3 space-y-2.5">
              {certifications.items.map((c) => (
                <li key={c} className="flex gap-3 text-[0.95rem] text-fg/85">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
