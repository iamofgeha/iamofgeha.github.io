import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import avatar from '../../assets/images/avatar.webp';
import { experience, profile } from '../../content/site';
import { ButtonLink } from '../ui/Button';
import { GitHubIcon, LinkedInIcon, MediumIcon } from '../ui/icons';

export function Hero() {
  const reduce = useReducedMotion();
  // Transform only: fading from opacity 0 would hold back Largest Contentful Paint.
  const enter = (delay: number) => ({
    initial: { y: reduce ? 0 : 10 },
    animate: { y: 0 },
    transition: { duration: 0.6, delay: reduce ? 0 : delay, ease: [0.22, 1, 0.36, 1] as const },
  });

  const socials = [
    { label: 'GitHub', href: profile.social.github, Icon: GitHubIcon },
    { label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedInIcon },
    { label: 'Medium', href: profile.social.medium, Icon: MediumIcon },
  ];

  return (
    <section id="top" aria-labelledby="hero-heading" className="pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="container-page">
        <motion.div {...enter(0)} className="flex items-center gap-4">
          <img
            src={avatar}
            alt={`Portrait of ${profile.name}`}
            width={64}
            height={64}
            className="h-16 w-16 shrink-0 rounded-full border hairline object-cover"
          />
          <div>
            <h1 id="hero-heading" className="text-lg font-semibold tracking-tight">
              {profile.name}
            </h1>
            <p className="text-sm text-muted">
              {profile.role}
              <span className="block sm:inline">
                <span className="hidden sm:inline"> · </span>
                {profile.location.split(',')[0]}
              </span>
            </p>
          </div>
        </motion.div>

        <motion.p
          {...enter(0.08)}
          className="mt-10 text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-[2.6rem]"
        >
          {profile.headline[0]} <span className="text-muted">{profile.headline[1]}</span>
        </motion.p>

        <motion.p {...enter(0.16)} className="mt-6 max-w-2xl text-pretty text-[1.05rem] leading-relaxed text-muted">
          {profile.intro}
        </motion.p>

        <motion.p {...enter(0.2)} className="mt-4 flex items-center gap-2 text-sm text-muted">
          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          <span>
            <span className="text-fg">{profile.current.label}:</span> {profile.current.text}
          </span>
        </motion.p>

        <motion.div {...enter(0.26)} className="mt-9 flex flex-wrap items-center gap-3">
          <ButtonLink href="#work" icon={<ArrowRight size={16} />}>
            View projects
          </ButtonLink>
          <ButtonLink href={profile.cv} download variant="secondary" icon={<ArrowDown size={16} />}>
            Download CV
          </ButtonLink>
          <ul className="ml-1 flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition-colors hover:bg-fg/[0.06] hover:text-fg"
                >
                  <Icon size={18} />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...enter(0.34)} className="mt-14 border-t hairline pt-6">
          <p className="text-xs text-subtle">Worked with</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {experience.map((job) => (
              <li key={job.org} className="text-sm font-medium text-muted">
                {job.short ?? job.org}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
