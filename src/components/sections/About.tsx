import portraitSmall from '../../assets/images/portrait-640.webp';
import portrait from '../../assets/images/portrait.webp';
import { about, profile } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Em, Section } from '../ui/Section';

export function About() {
  return (
    <Section
      id="about"
      index="01"
      label="About"
      title={
        <>
          An engineer’s mindset, <Em>a researcher’s curiosity.</Em>
        </>
      }
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <div className="space-y-6 text-pretty text-[1.05rem] leading-[1.75] text-muted sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i} className={i === 0 ? 'text-fg' : undefined}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <figure className="overflow-hidden rounded-2xl border hairline bg-surface">
            <img
              src={portrait}
              srcSet={`${portraitSmall} 640w, ${portrait} 1000w`}
              sizes="(min-width: 768px) 34vw, 100vw"
              alt={`Portrait of ${profile.name}`}
              width={1000}
              height={1250}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
          <dl className="mt-6 divide-y divide-hairline border-y hairline text-sm">
            {about.facts.map((f) => (
              <div key={f.label} className="flex items-baseline justify-between gap-6 py-3">
                <dt className="eyebrow shrink-0">{f.label}</dt>
                <dd className="text-right text-fg/90">{f.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/[0.06] sm:grid-cols-3">
        {about.principles.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06} className="bg-bg p-6 sm:p-7">
            <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-4 text-base font-medium tracking-tight">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
