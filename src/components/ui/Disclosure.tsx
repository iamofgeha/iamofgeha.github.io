import type { HTMLAttributes, ReactNode } from 'react';

type Props = HTMLAttributes<HTMLDivElement> & { open: boolean; children: ReactNode };

/**
 * Animated show/hide panel. Closed content is visibility:hidden, so it is skipped
 * by keyboard focus and screen readers. Pair with a button using aria-expanded/aria-controls.
 */
export function Disclosure({ open, children, className = '', ...rest }: Props) {
  return (
    <div className={`disclosure ${className}`} data-open={open} {...rest}>
      <div>{children}</div>
    </div>
  );
}
