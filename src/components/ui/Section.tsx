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

/**
 * Section shell. Below lg: heading above content. From lg up: heading in a sticky
 * left rail, content in a ~850px column, so wide screens are used without long lines.
 */
export function Section({ id, label, title, intro, children, className = '' }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className={`pb-16 sm:pb-20 ${className}`}>
      <div className="container-page">
        <div className="border-t hairline pt-16 sm:pt-20 lg:grid lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-12">
          <Reveal className="lg:sticky lg:top-24 lg:self-start">
            <h2 id={headingId} className="text-title font-semibold">
              {title ?? label}
            </h2>
            {intro ? <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted">{intro}</p> : null}
          </Reveal>
          <div className="mt-8 min-w-0 sm:mt-10 lg:mt-0">{children}</div>
        </div>
      </div>
    </section>
  );
}
