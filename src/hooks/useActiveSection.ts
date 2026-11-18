import { useEffect, useState } from 'react';

/**
 * Returns the id of the section crossing the upper third of the viewport.
 * At the very bottom of the page the last section wins, because a short final
 * section can never reach the upper third.
 */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const visible = new Map<string, boolean>();
    let fromObserver: string | null = null;

    const atBottom = () =>
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    const update = () => setActive(atBottom() ? ids[ids.length - 1] : fromObserver);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        fromObserver = ids.find((id) => visible.get(id)) ?? null;
        update();
      },
      { rootMargin: '-35% 0px -60% 0px' },
    );

    els.forEach((el) => observer.observe(el));
    window.addEventListener('scroll', update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', update);
    };
  }, [ids]);

  return active;
}
