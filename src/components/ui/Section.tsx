import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type SectionProps = {
  id: string;
  label: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
};

/** Simple section shell: one heading, an optional one-line intro, then content. */
export function Section({ id, label, title, intro, children, className = '' }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`pb-16 sm:pb-20 ${className}`}>
      <div className="container-page">
        <div className="mb-16 border-t hairline sm:mb-20" aria-hidden />
        <Reveal>
          <h2 id={headingId} className="text-xl font-semibold tracking-tight sm:text-2xl">
            {title ?? label}
          </h2>
          {intro ? <p className="mt-2 max-w-2xl text-pretty text-muted">{intro}</p> : null}
        </Reveal>
        <div className="mt-8 sm:mt-10">{children}</div>
      </div>
    </section>
  );
}

