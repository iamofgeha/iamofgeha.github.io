import { interests, stack } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Skills() {
  const rows = [...stack, { group: 'Interests', items: interests.map((i) => i.area) }];
  return (
    <Section id="skills" label="Skills">
      <Reveal>
        <dl className="divide-y divide-hairline border-y hairline">
          {rows.map((g) => (
            <div key={g.group} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="text-sm text-subtle">{g.group}</dt>
              <dd className="text-pretty text-sm leading-relaxed">{g.items.join(' · ')}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
