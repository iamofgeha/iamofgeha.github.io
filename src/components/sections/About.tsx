import { about } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" label="About">
      <Reveal className="space-y-5 text-pretty leading-relaxed text-muted">
        {about.paragraphs.slice(0, 2).map((p, i) => (
          <p key={i} className={i === 0 ? 'text-fg' : undefined}>
            {p}
          </p>
        ))}
      </Reveal>
      <Reveal>
        <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt className="text-xs text-subtle">{f.label}</dt>
              <dd className="mt-1 text-sm">{f.value}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
