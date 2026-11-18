import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react';
import { profile } from '../../content/site';
import { GitHubIcon, LinkedInIcon, MediumIcon } from '../ui/icons';
import { Reveal } from '../ui/Reveal';

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
    { label: 'LinkedIn', handle: 'in/ofgeha-gelana', href: profile.social.linkedin, Icon: LinkedInIcon },
    { label: 'GitHub', handle: 'Ofgeha-Gelana', href: profile.social.github, Icon: GitHubIcon },
    { label: 'Medium', handle: '@ofgehagelana2019', href: profile.social.medium, Icon: MediumIcon },
  ];

  return (
    <section id="contact" aria-labelledby="contact-heading" className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-30%] left-1/2 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[120px]"
      />
      <div className="container-page">
        <Reveal className="flex items-center gap-3">
          <span className="eyebrow text-accent">06</span>
          <span className="h-px w-8 bg-current text-subtle/40" aria-hidden />
          <span className="eyebrow">Contact</span>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id="contact-heading"
            className="mt-8 max-w-4xl text-balance text-[2.5rem] font-medium leading-[1.02] tracking-tightest sm:text-6xl lg:text-7xl"
          >
            Working on something at the edge of AI and science? <span className="font-serif font-normal italic text-muted">Let’s talk.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            I’m glad to hear about research collaborations, ML engineering roles, and problems where careful data engineering
            and machine learning meet.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex h-14 items-center justify-between gap-4 rounded-full bg-fg pl-6 pr-2 text-bg transition-colors hover:bg-fg/90 sm:justify-start"
          >
            <span className="flex items-center gap-3 text-[0.95rem] font-medium">
              <Mail size={17} aria-hidden />
              <span className="break-all">{profile.email}</span>
            </span>
            <span className="grid h-10 w-10 place-items-center rounded-full bg-bg/10 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowUpRight size={17} aria-hidden />
            </span>
          </a>
          <button
            type="button"
            onClick={copy}
            className="inline-flex h-14 items-center justify-center gap-2 rounded-full border hairline-strong px-6 text-sm text-muted transition-colors hover:text-fg"
          >
            {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
            <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
          </button>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-16 grid gap-px overflow-hidden rounded-2xl border hairline bg-fg/[0.06] sm:grid-cols-3">
            {links.map(({ label, handle, href, Icon }) => (
              <li key={label} className="bg-bg">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 p-6 transition-colors hover:bg-surface"
                >
                  <span className="flex items-center gap-4">
                    <Icon size={20} className="text-muted transition-colors group-hover:text-fg" />
                    <span>
                      <span className="block text-sm font-medium">{label}</span>
                      <span className="block font-mono text-xs text-subtle">{handle}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
