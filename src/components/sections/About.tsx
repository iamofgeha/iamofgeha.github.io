import { about } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" label="About">
      <Reveal className="max-w-2xl space-y-5 text-pretty leading-relaxed text-muted">
        {about.paragraphs.map((p, i) => (
          <p key={i} className={i === 0 ? 'text-fg' : undefined}>
            {p}
          </p>
        ))}
      </Reveal>

      <Reveal className="mt-10">
        <h3 className="eyebrow">How I work</h3>
        <ul className="mt-3 grid gap-3 sm:grid-cols-3">
          {about.principles.map((pr) => (
            <li key={pr.title} className="card p-4">
              <p className="text-sm font-medium">{pr.title}</p>
              <p className="mt-1.5 text-pretty text-sm leading-relaxed text-muted">{pr.body}</p>
            </li>
          ))}
        </ul>
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
