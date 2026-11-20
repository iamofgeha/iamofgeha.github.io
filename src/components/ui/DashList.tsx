import type { ReactNode } from 'react';

/** Bulleted list with a short dash marker, used for highlights and contributions. */
export function DashList({ items, className = '' }: { items: { key: string; content: ReactNode }[]; className?: string }) {
  return (
    <ul className={`space-y-2 ${className}`}>
      {items.map(({ key, content }) => (
        <li key={key} className="flex gap-3 text-sm leading-relaxed text-muted">
          <span className="mt-[0.65em] h-px w-3 shrink-0 bg-fg/30" aria-hidden />
          <span className="text-pretty">{content}</span>
        </li>
      ))}
    </ul>
  );
}
