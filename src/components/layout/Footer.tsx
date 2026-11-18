import { ArrowUp } from 'lucide-react';
import { profile } from '../../content/site';

export function Footer() {
  return (
    <footer>
      <div className="container-page">
        <div className="flex flex-col gap-4 border-t hairline py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <a href="#top" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
        </div>
      </div>
    </footer>
  );
}
