import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { experience, type Experience as Job } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

function Badge({ job }: { job: Job }) {
  if (job.logo) {
    return (
      <img
        src={job.logo}
        alt=""
        width={44}
        height={44}
        className="h-11 w-11 shrink-0 rounded-lg border hairline object-contain"
      />
    );
  }
  return (
    <span
      aria-hidden
      className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border hairline bg-fg/[0.05] font-mono text-[0.68rem] font-medium tracking-tight text-fg/80"
    >
      {job.mark}
    </span>
  );
}

function Meta({ label, value, className = '' }: { label: string; value?: string; className?: string }) {
  if (!value) return null;
  return (
    <div className={`flex gap-2 text-sm ${className}`}>
      <dt className="text-subtle">{label}:</dt>
      <dd>{value}</dd>
    </div>
  );
}

function RoleCard({ job, defaultOpen }: { job: Job; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <div className="rounded-xl border hairline bg-surface/40 transition-colors hover:bg-surface/70">
      <h3>
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 rounded-xl p-4 text-left sm:p-5"
        >
          <Badge job={job} />
          <span className="min-w-0 flex-1">
            <span className="block font-medium">{job.org}</span>
            <span className="block text-sm text-muted">{job.role}</span>
          </span>
          <span className="hidden shrink-0 text-sm tabular-nums text-subtle sm:block">{job.period}</span>
          <span className="grid h-8 w-8 shrink-0 place-items-center text-muted" aria-hidden>
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            role="region"
            aria-label={`${job.org} details`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-4 border-t hairline pb-5 pt-4 sm:mx-5">
              <dl className="space-y-1.5">
                {/* The header already shows the period from sm up. */}
                <Meta label="Period" value={job.period} className="sm:hidden" />
                <Meta label="Job type" value={job.type} />
                <Meta label="Location" value={job.location} />
              </dl>

              <p className="mt-4 text-pretty text-sm leading-relaxed text-muted sm:mt-0">{job.summary}</p>

              <ul className="mt-3 space-y-2">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="space-y-3">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.org}>
            <RoleCard job={job} defaultOpen={i === 0} />
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
