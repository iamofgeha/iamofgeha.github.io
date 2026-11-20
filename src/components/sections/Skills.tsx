import { interests, stack } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { TextLink } from '../ui/TextLink';

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="Skills & research interests">
      <Reveal>
        <dl className="divide-y divide-hairline border-y hairline">
          {stack.map((g) => (
            <div key={g.group} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm text-subtle">{g.group}</dt>
              <dd className="text-pretty text-sm leading-relaxed">{g.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Reveal className="mt-12">
        <h3 className="eyebrow">Questions I’m working on</h3>
        <ul className="mt-4 grid gap-x-8 gap-y-6 sm:grid-cols-2">
          {interests.map((i) => (
            <li key={i.area}>
              <p className="text-sm font-medium">{i.area}</p>
              <p className="mt-1 text-pretty text-sm leading-relaxed text-muted">{i.question}</p>
              {i.evidence ? (
                <TextLink href={i.evidence.href} size="xs" className="mt-1.5">
                  {i.evidence.label}
                </TextLink>
              ) : null}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
