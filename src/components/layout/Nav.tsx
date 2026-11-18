import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { nav, profile } from '../../content/site';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useScrolled } from '../../hooks/useScrolled';
import { useTheme } from '../../hooks/useTheme';
import { GitHubIcon, LinkedInIcon } from '../ui/icons';

const ids = nav.map((n) => n.id);

export function Nav() {
  const active = useActiveSection(ids);
  const scrolled = useScrolled();
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const sheet = useRef<HTMLDivElement>(null);

  // Lock scroll, handle Escape and keep focus inside the mobile sheet while it is open.
  useEffect(() => {
    if (!open) return;
    const trigger = menuButton.current;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    sheet.current?.querySelector<HTMLElement>('a,button')?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
      if (e.key !== 'Tab' || !sheet.current) return;
      const f = sheet.current.querySelectorAll<HTMLElement>('a,button');
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
      trigger?.focus();
    };
  }, [open]);

  const ThemeIcon = theme === 'dark' ? Sun : Moon;

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-bg"
      >
        Skip to content
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open ? 'border-b hairline bg-bg/75 backdrop-blur-xl backdrop-saturate-150' : 'border-b border-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-6">
          <a href="#top" className="group flex items-center gap-2.5" aria-label={`${profile.name}, back to top`}>
            <span className="grid h-7 w-7 place-items-center rounded-lg border hairline-strong font-mono text-[0.68rem] font-medium tracking-tight transition-colors group-hover:border-accent/60">
              OG
            </span>
            <span className="text-sm font-medium tracking-tight">{profile.name}</span>
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 rounded-full border hairline bg-surface/40 p-1">
              {nav.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id} className="relative">
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full bg-fg/[0.07]"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <a
                      href={`#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={`relative block rounded-full px-3.5 py-1.5 text-[0.82rem] transition-colors ${
                        isActive ? 'text-fg' : 'text-muted hover:text-fg'
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggle}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              className="grid h-9 w-9 place-items-center rounded-full text-muted transition-colors hover:bg-fg/[0.06] hover:text-fg"
            >
              <ThemeIcon size={16} strokeWidth={1.75} />
            </button>
            <a
              href={profile.cv}
              download
              className="hidden h-9 items-center rounded-full border hairline-strong px-4 text-[0.82rem] font-medium transition-colors hover:bg-fg/[0.05] sm:inline-flex"
            >
              CV
            </a>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="grid h-9 w-9 place-items-center rounded-full text-fg transition-colors hover:bg-fg/[0.06] md:hidden"
            >
              {open ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={sheet}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-bg/95 backdrop-blur-xl md:hidden"
          >
            <nav aria-label="Mobile" className="container-page flex min-h-full flex-col pb-10 pt-6">
              <ul className="divide-y divide-hairline border-y hairline">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.03 * i, duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        // Close first so the scroll lock is released, then scroll to the section.
                        e.preventDefault();
                        setOpen(false);
                        requestAnimationFrame(() => {
                          document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                          history.replaceState(null, '', `#${item.id}`);
                        });
                      }}
                      className="flex items-baseline justify-between py-4 text-[1.75rem] font-medium tracking-tight"
                    >
                      {item.label}
                      <span className="font-mono text-xs text-subtle">{String(i + 1).padStart(2, '0')}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center gap-3 pt-10">
                <a
                  href={profile.cv}
                  download
                  className="inline-flex h-11 items-center rounded-full bg-fg px-5 text-sm font-medium text-bg"
                >
                  Download CV
                </a>
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="grid h-11 w-11 place-items-center rounded-full border hairline-strong"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="grid h-11 w-11 place-items-center rounded-full border hairline-strong"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
