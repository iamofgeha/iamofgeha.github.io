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
    <section id={id} aria-labelledby={headingId} className={`border-t hairline py-16 sm:py-20 ${className}`}>
      <div className="container-page">
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

