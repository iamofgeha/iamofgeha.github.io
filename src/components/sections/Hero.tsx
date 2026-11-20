import type { CSSProperties } from 'react';
import { ArrowDown, ArrowRight, Mail } from 'lucide-react';
import avatar from '../../assets/images/avatar.webp';
import { experience, profile } from '../../content/site';
import { ButtonLink } from '../ui/Button';
import { GitHubIcon, LinkedInIcon, MediumIcon } from '../ui/icons';
import { MaybePlaceholder } from '../ui/Placeholder';

/** Staggered entrance. Transform only, so text paints at once (good for LCP). */
const rise = (delay: number) => ({
  className: 'animate-rise',
  style: { animationDelay: `${delay}s` } as CSSProperties,
});

const socials = [
  { label: 'GitHub', href: profile.social.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedInIcon },
  { label: 'Medium', href: profile.social.medium, Icon: MediumIcon },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-16 pt-28 sm:pb-20 sm:pt-36">
      <div className="container-page">
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end lg:gap-16">
          <div>
            <div {...rise(0)}>
              <div className="flex items-center gap-4">
                <img
                  src={avatar}
                  alt={`Portrait of ${profile.name}`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full border hairline object-cover"
                />
                <div>
                  <p className="font-semibold tracking-tight">{profile.name}</p>
                  <p className="text-sm text-muted">{profile.role}</p>
                </div>
              </div>
            </div>

            <div {...rise(0.06)}>
              <h1 id="hero-heading" className="mt-10 max-w-3xl text-balance text-display font-semibold">
                {profile.headline[0]}
              </h1>
              <p className="mt-4 max-w-2xl text-balance text-xl font-medium tracking-tight text-muted sm:text-2xl">
                {profile.headline[1]}
              </p>
            </div>

            <p {...rise(0.12)} className="mt-6 max-w-2xl animate-rise text-pretty leading-relaxed text-muted">
              {profile.intro}
            </p>

            <div {...rise(0.18)}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href="#work" icon={<ArrowRight size={16} />}>
                  View projects
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary" icon={<Mail size={15} />}>
                  Get in touch
                </ButtonLink>
                <a href={profile.cv} download className="link ml-1 text-sm font-medium">
                  Download CV <ArrowDown size={14} aria-hidden />
                </a>
              </div>
              <ul className="-ml-3 mt-4 flex items-center gap-1">
                {socials.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="icon-btn">
                      <Icon size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside {...rise(0.24)} aria-label="At a glance" className="card mt-10 animate-rise p-5 lg:mt-0">
            <p className="eyebrow">At a glance</p>
            <dl className="mt-3 divide-y divide-hairline">
              {profile.glance.map((g) => (
                <div key={g.label} className="py-2.5 first:pt-0 last:pb-0">
                  <dt className="text-xs text-subtle">{g.label}</dt>
                  <dd className="mt-0.5 text-sm">
                    <MaybePlaceholder text={g.value} />
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <div {...rise(0.3)}>
          <div className="mt-14 border-t hairline pt-6">
            <p className="text-xs text-subtle">Worked with</p>
            <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
              {experience.map((job) => (
                <li key={job.org} className="flex items-center gap-2 text-sm font-medium text-muted">
                  {job.logo ? (
                    <img src={job.logo} alt="" width={20} height={20} className="h-5 w-5 rounded object-cover" />
                  ) : null}
                  {job.short ?? job.org}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
