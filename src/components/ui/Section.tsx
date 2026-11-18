import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Editorial section shell: numbered rail on the left, heading and content on the right. */
export function Section({ id, index, label, title, intro, children, className = '' }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`relative py-24 sm:py-32 ${className}`}>
      <div className="container-page">
        <div className="grid gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <Reveal className="min-w-0 lg:col-span-3">
            <div className="flex items-center gap-3 lg:sticky lg:top-28">
              <span className="eyebrow text-accent">{index}</span>
              <span className="h-px w-8 bg-current text-subtle/40" aria-hidden />
              <span className="eyebrow">{label}</span>
            </div>
          </Reveal>
          <div className="min-w-0 lg:col-span-9">
            <Reveal>
              <h2
                id={headingId}
                className="text-balance text-[2rem] font-medium leading-[1.08] tracking-tightest sm:text-[2.75rem] lg:text-[3.25rem]"
              >
                {title}
              </h2>
              {intro ? (
                <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
              ) : null}
            </Reveal>
            <div className="mt-12 sm:mt-16">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Italic serif accent used inside display headings. */
export function Em({ children }: { children: ReactNode }) {
  return <em className="font-serif font-normal italic tracking-normal text-fg/90">{children}</em>;
}
