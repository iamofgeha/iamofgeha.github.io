import { useId, useState, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';
import { Disclosure } from './Disclosure';

type Props = {
  children: ReactNode;
  label?: string;
  className?: string;
  /** Rendered on the same line, before the toggle (e.g. project links). */
  actions?: ReactNode;
};

/** "Details" disclosure: keeps the page brief and the depth one click away. */
export function Details({ children, label = 'Details', className = '', actions }: Props) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
        {actions}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
          className="link text-sm"
        >
          {open ? 'Hide' : label}
          <ChevronDown
            size={15}
            aria-hidden
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      <Disclosure id={id} open={open}>
        <div className="pt-4">{children}</div>
      </Disclosure>
    </div>
  );
}
