import { useState } from 'react';
import { Check, Copy, Mail } from 'lucide-react';
import { profile } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';
import { TextLink } from '../ui/TextLink';

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
          I’m open to AI engineering, ML engineering and ML research roles, and to research collaborations where
          data, models and production systems meet. The quickest way to reach me is email.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={16} aria-hidden />
            <span className="break-all">{profile.email}</span>
          </a>
          <button
            type="button"
            onClick={copy}
            className="btn btn-secondary px-4 font-normal text-muted hover:text-fg"
          >
            {copied ? <Check size={15} aria-hidden /> : <Copy size={15} aria-hidden />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((l) => (
            <li key={l.label}>
              <TextLink href={l.href}>{l.label}</TextLink>
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
