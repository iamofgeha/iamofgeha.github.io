import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: 'LinkedIn', href: profile.social.linkedin },
    { label: 'GitHub', href: profile.social.github },
    { label: 'Medium', href: profile.social.medium },
  ];

  return (
    <Section id="contact" label="Contact" className="pb-24 sm:pb-28">
      <Reveal>
        <p className="max-w-xl text-pretty leading-relaxed text-muted">
          I’m open to ML engineering roles, research collaborations, and hard problems where data, models and
          production systems meet. The quickest way to reach me is email.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-11 items-center gap-2 rounded-full bg-fg px-5 text-sm font-medium text-bg transition-colors hover:bg-fg/90"
          >
            <Mail size={16} aria-hidden />
            <span className="break-all">{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-11 items-center gap-2 rounded-full border hairline-strong px-4 text-sm text-muted transition-colors hover:text-fg"
          >
            {copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label} <ArrowUpRight size={13} aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
