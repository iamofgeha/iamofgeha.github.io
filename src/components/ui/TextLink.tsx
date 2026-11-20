import type { AnchorHTMLAttributes } from 'react';
import { ArrowUpRight } from 'lucide-react';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  size?: 'sm' | 'xs';
};

/** Quiet text link. External links open in a new tab and get an ↗ arrow. */
export function TextLink({ href, size = 'sm', className = '', children, ...rest }: Props) {
  const external = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={`link ${size === 'xs' ? 'text-xs' : 'text-sm'} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {children}
      {external ? <ArrowUpRight size={size === 'xs' ? 12 : 13} aria-hidden /> : null}
    </a>
  );
}
