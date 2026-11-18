import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { profile } from '../../content/site';
import { SystemGraph } from '../figures/SystemGraph';
import { ButtonLink } from '../ui/Button';
import { GitHubIcon, LinkedInIcon, MediumIcon } from '../ui/icons';

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay: reduce ? 0 : delay, ease },
  });

  const socials = [
    { label: 'GitHub', href: profile.social.github, Icon: GitHubIcon },
    { label: 'LinkedIn', href: profile.social.linkedin, Icon: LinkedInIcon },
    { label: 'Medium', href: profile.social.medium, Icon: MediumIcon },
  ];

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40">
      {/* Quiet backdrop: a fading grid and one soft accent wash. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_60%_55%_at_70%_25%,rgb(0_0_0/0.55)_10%,transparent_70%)]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(var(--line) / var(--line-alpha)) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--line) / var(--line-alpha)) 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] -z-10 h-[520px] w-[720px] rounded-full bg-accent/[0.07] blur-[120px]"
      />

      <div className="container-page">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p {...enter(0)} className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
              <span className="font-medium text-fg">{profile.name}</span>
              <span className="h-px w-6 bg-fg/25" aria-hidden />
              <span>{profile.role}</span>
            </motion.p>

            <h1
              id="hero-heading"
              className="mt-7 text-balance text-[2.6rem] font-medium leading-[1.02] tracking-tightest sm:text-6xl lg:text-[4.6rem]"
            >
              <motion.span {...enter(0.08)} className="block">
                {profile.headline[0]}
              </motion.span>
              <motion.span {...enter(0.16)} className="mt-1 block font-serif font-normal italic tracking-[-0.015em] text-muted">
                {profile.headline[1]}
              </motion.span>
            </h1>

            <motion.p
              {...enter(0.26)}
              className="mt-8 max-w-xl text-pretty text-[1.05rem] leading-relaxed text-muted sm:text-lg"
            >
              {profile.intro}
            </motion.p>

            <motion.div {...enter(0.34)} className="mt-10 flex flex-wrap items-center gap-3">
              <ButtonLink href="#work" icon={<ArrowRight size={16} />}>
                Explore my work
              </ButtonLink>
              <ButtonLink href={profile.cv} download variant="ghost" icon={<ArrowDown size={16} />}>
                Download CV
              </ButtonLink>
              <span className="mx-1 hidden h-6 w-px bg-fg/15 sm:block" aria-hidden />
              <ul className="flex items-center gap-1">
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
          </div>

          <motion.figure
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: reduce ? 0 : 0.2 }}
            className="relative mx-auto w-full max-w-[420px] lg:col-span-5 lg:max-w-none"
          >
            <div className="relative rounded-[1.75rem] border hairline bg-surface/60 p-6 shadow-[0_40px_80px_-40px_rgb(0_0_0/0.5)] backdrop-blur-sm sm:p-8">
              <div className="mb-2 flex items-center justify-between">
                <span className="eyebrow">fig. 0</span>
                <span className="eyebrow">data → production</span>
              </div>
              <SystemGraph />
            </div>
            <figcaption className="mt-4 px-2 text-xs leading-relaxed text-subtle">
              How I approach ML work: the model is one part of a system that has to be fed, evaluated, served and
              watched. The <span className="text-accent">accent</span> marks the main path; dashed is the retraining loop.
            </figcaption>
          </motion.figure>
        </div>

        <motion.div
          {...enter(0.5)}
          className="mt-20 flex flex-col gap-4 border-t hairline py-6 text-sm sm:mt-28 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="flex items-center gap-3 text-muted">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-50 [animation-iteration-count:3]" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span className="eyebrow text-fg">{profile.current.label}</span>
            <span className="text-pretty">{profile.current.text}</span>
          </p>
          <p className="eyebrow">{profile.location}</p>
        </motion.div>
      </div>
    </section>
  );
}
