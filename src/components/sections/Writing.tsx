import { ArrowUpRight } from 'lucide-react';
import { profile, writing } from '../../content/site';
import { MediumIcon } from '../ui/icons';
import { Reveal } from '../ui/Reveal';
import { Em, Section } from '../ui/Section';

const fmt = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

export function Writing() {
  const posts = [...writing].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section
      id="writing"
      index="05"
      label="Writing"
      title={
        <>
          Notes on what <Em>I’m learning.</Em>
        </>
      }
      intro="Explanations, paper notes and project write-ups. Writing is how I check that I actually understand something."
    >
      <ul className="border-t hairline">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.href} delay={Math.min(i, 6) * 0.03} className="border-b hairline">
              <a
                href={post.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid grid-cols-1 gap-2 py-6 transition-colors sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <time dateTime={post.date} className="font-mono text-xs text-subtle sm:col-span-2">
                  {fmt.format(new Date(post.date))}
                </time>
                <span className="text-pretty text-lg font-medium tracking-tight transition-colors group-hover:text-accent sm:col-span-7">
                  {post.title}
                </span>
                <span className="flex items-center justify-between gap-3 sm:col-span-3 sm:justify-end">
                  <span className="text-xs text-muted">
                    {post.kind} · {post.topic}
                  </span>
                  <ArrowUpRight
                    size={16}
                    aria-hidden
                    className="text-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                  />
                </span>
              </a>
          </Reveal>
        ))}
      </ul>
      <Reveal>
        <a
          href={profile.social.medium}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg"
        >
          <MediumIcon size={16} />
          All writing on Medium
          <ArrowUpRight size={14} aria-hidden />
        </a>
      </Reveal>
    </Section>
  );
}
