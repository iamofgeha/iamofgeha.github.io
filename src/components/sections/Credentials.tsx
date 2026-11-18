import { ArrowUpRight } from 'lucide-react';
import { certifications, education } from '../../content/site';
import { Section } from '../ui/Section';

function Verify({ href, label }: { href?: string; label: string }) {
  if (!href) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Verify: ${label}`}
      className="inline-flex shrink-0 items-center gap-1 text-xs text-muted transition-colors hover:text-fg"
    >
      Verify <ArrowUpRight size={12} aria-hidden />
    </a>
  );
}

export function Credentials() {
  return (
    <Section id="education" index="05" label="Education" title="Education & certifications">
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h3 className="text-sm font-medium text-muted">Education</h3>
          <ul className="mt-4 divide-y divide-hairline border-y hairline">
            {education.map((e) => (
              <li key={e.school} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{e.school}</p>
                  <p className="mt-0.5 text-sm text-muted">
                    {e.credential}
                    {e.note ? ` · ${e.note}` : ''}
                    {e.period ? ` · ${e.period}` : ''}
                  </p>
                </div>
                <Verify href={e.href} label={e.credential} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-medium text-muted">Certifications</h3>
          <ul className="mt-4 divide-y divide-hairline border-y hairline">
            {certifications.map((c) => (
              <li key={c.name} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium">{c.name}</p>
                  <p className="mt-0.5 text-sm text-muted">{c.issuer}</p>
                </div>
                <Verify href={c.href} label={c.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
