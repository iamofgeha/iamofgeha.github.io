import { ArrowUpRight } from 'lucide-react';
import { profile, writing } from '../../content/site';
import { Reveal } from '../ui/Reveal';
import { Section } from '../ui/Section';

const fmt = new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' });

export function Writing() {
  const posts = [...writing].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section id="writing" label="Writing">
      <ul className="divide-y divide-hairline border-y hairline">
        {posts.map((post) => (
          <Reveal as="li" key={post.href}>
            <a
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between gap-6 py-4"
            >
              <span>
                <span className="font-medium transition-colors group-hover:text-accent">{post.title}</span>
                <span className="mt-0.5 block text-xs text-subtle">{post.kind}</span>
              </span>
              <time dateTime={post.date} className="shrink-0 text-sm tabular-nums text-subtle">
                {fmt.format(new Date(post.date))}
              </time>
            </a>
          </Reveal>
        ))}
      </ul>
      <a
        href={profile.social.medium}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-fg"
      >
        All writing on Medium <ArrowUpRight size={13} aria-hidden />
      </a>
    </Section>
  );
}
